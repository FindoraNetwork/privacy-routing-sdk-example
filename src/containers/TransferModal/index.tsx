import React, { memo, useEffect, useState } from 'react';
import cx from 'classnames';
import { findora, evm } from 'privacy-routing-sdk';
import {
  LoadingOutlined,
  CloseCircleFilled,
  CheckCircleFilled,
} from '@ant-design/icons';
import { useImmer } from 'use-immer';
import { ISendInfo, CONTRACTS_ADDRESS, FINDORA_NETWORK } from '_src/config';

import './index.less';

interface ITransferModalProps {
  sendInfo: ISendInfo;
  onClose?: () => void;
}

const TransferModal: React.FC<ITransferModalProps> = ({ sendInfo, onClose }) => {
  const [status, setStatus] = useState<'inprogress' | 'completed' | 'failed'>('inprogress');
  const [finalTxn, setFinalTxn] = useImmer({ txnHash: '', txnLink: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const startTransfer = async () => {
    try {
      const findoraWallets = await findora.keypair.getWallet();
      const { walletStart, walletEnd, anonWallet } = findoraWallets;

   
      let depositTxnReceipt = null;
      if (sendInfo.tokenAddress) {
        // FRC20(Customized token) To Findora Native Chain
        await evm.services.approveToken(sendInfo.tokenAddress, CONTRACTS_ADDRESS.prismBridgeLedger, sendInfo.amount);
        depositTxnReceipt = await evm.transfer.frc20ToBar({
          bridgeAddress: CONTRACTS_ADDRESS.prismBridge,
          recipientAddress: walletStart.address,
          tokenAddress: sendInfo.tokenAddress,
          tokenAmount: sendInfo.amount,
        });
      } else {
        // FRC20(FRA token) To Findora Native Chain
        depositTxnReceipt = await evm.transfer.fraToBar({
          bridgeAddress: CONTRACTS_ADDRESS.prismBridge,
          recipientAddress: walletStart.address,
          amount: sendInfo.amount,
        });
      }
      console.log('Deposit txn: ', depositTxnReceipt);

      // the first findora wallet should receive 3 utxo [asset, bar2abar_fee, bar2evm_fee]
      const { error: waitEvmToNativeUtxoError } = await findora.services.waitUtxoEnough(walletStart.publickey, 3);
      if (waitEvmToNativeUtxoError) throw waitEvmToNativeUtxoError;

   
      const { response: sids } = await findora.apis.getOwnedSids(walletStart.publickey);
      const barToAbarResult =  await findora.transfer.barToAbar(findoraWallets, sids);
      if (barToAbarResult.txnLog) throw new Error(`barToAbar Error: ${barToAbarResult.txnLog}`);
      console.log('barToAbar txnHash: ', barToAbarResult.txnHash);

   
      const abarToBarResult = await findora.transfer.abarToBar(anonWallet, walletEnd, barToAbarResult.commitments);
      if (abarToBarResult.txnLog) throw new Error(`abarToBar Error: ${abarToBarResult.txnLog}`);
      console.log('abarToBar txnHash: ', abarToBarResult.txnHash);

   

      let assetCode = '';
      if (sendInfo.tokenAddress) {
        // FRC20(Customized token)
        assetCode = await evm.services.getAssetCode(
          CONTRACTS_ADDRESS.prismBridge,
          sendInfo.tokenAddress,
          FINDORA_NETWORK.rpcUrls[0]
        );
      } else {
        // FRC20(FRA token)
        assetCode = '';
      }
      const barToEvmResult = await findora.transfer.barToEVM(
        walletEnd,
        sendInfo.amount,
        sendInfo.destinationAddress,
        assetCode,
        '',
        false
      );
      console.log('barToEvm txnHash: ', barToEvmResult.txnHash);
      if (barToEvmResult.txnLog) throw new Error(`barToEvm Error: ${barToEvmResult.txnLog}`);

      console.log(`token arrived check: ${FINDORA_NETWORK.blockExplorerUrls[0]}tx/0x${barToEvmResult.txnHash}`);
      setStatus('completed');
      setFinalTxn(txn => {
        txn.txnHash = barToEvmResult.txnHash;
        txn.txnLink = `${FINDORA_NETWORK.blockExplorerUrls[0]}tx/0x${barToEvmResult.txnHash}`;
      })

    } catch (error) {
      console.log('Transfer Error: ', error);
      setStatus('failed');
      setErrorMessage(error.message);
    }
  }

  useEffect(() => {
    startTransfer();
  }, []);

  return (
    <div className="transfer-modal">
      <div className="transfer-modal__title">
        Transferring
      </div>
      {status === 'inprogress' ? <LoadingOutlined className="transfer-modal__icon" /> : null}
      {status === 'completed' ? <CheckCircleFilled className="transfer-modal__icon completed" /> : null}
      {status === 'failed' ? <CloseCircleFilled className="transfer-modal__icon failed" /> : null}
      {finalTxn.txnHash && (
        <a className="transfer-modal__txn" href={finalTxn.txnLink} target="_blank">{finalTxn.txnHash}</a>
      )}
      {errorMessage && <div className="transfer-modal__error-message">{errorMessage}</div> }
      <div
        className={cx('transfer-modal__actions', {
          'transfer-modal__actions--disabled': status === 'inprogress'
        })}
      >
        <button className="transfer-modal__close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default memo(TransferModal);
