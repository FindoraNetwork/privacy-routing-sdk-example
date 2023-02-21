import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useImmer } from 'use-immer';
import { Modal, notification } from 'antd';
import cx from 'classnames';
import Web3 from 'web3';

import AppImage from '_containers/AppImage';
import TransferModal from '_containers/TransferModal';
import { DEFAULT_SEND_INFO, FINDORA_EVM_CHAIN_ID, FINDORA_NETWORK, ISendInfo } from '_src/config';

import './index.less';

function Transfer() {
  const { account, chainId, connector } = useWeb3React();
  const [isTransferring, setIsTransferring] = useState<boolean>(false);
  const [sendInfo, setSendInfo] = useImmer<ISendInfo>({ ...DEFAULT_SEND_INFO });

  const selectedToken = useMemo(() => {
    if (sendInfo.tokenAddress === '') {
      return {
        symbol: 'FRA',
        imageUri: 'https://columbus-config.s3.us-west-2.amazonaws.com/icon/fra.svg'
      };
    }
    return {
      symbol: 'Customized token',
      imageUri: 'https://columbus-config.s3.us-west-2.amazonaws.com/icon/fra.svg'
    };
  },
    [sendInfo.tokenAddress]
  );

  const handleCloseModal = useCallback(() => setIsTransferring(false), []);

  const handleStartTransfer = async () => {
    try {
      if (`${chainId}` !== sendInfo.sourceChainId) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: Web3.utils.toHex(FINDORA_EVM_CHAIN_ID) }],
          });
        } catch (error) {
          if (error.code !== 4001) {
            window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [FINDORA_NETWORK],
            });
          } else {
            throw error;
          }
        }
      }
      setIsTransferring(true);
    } catch (error) {
      notification.error({ message: error.message, description: 'You must switch to Findora EVM to begin the transfer.' })
    }
  };

  useEffect(() => {
    if (chainId && !account) { connector?.activate(); }
  }, [chainId]);

  useEffect(() => {
    setSendInfo(sendInfo => {
      sendInfo.sourceAddress = account || '';
      sendInfo.destinationAddress = account || '';
    });
  }, [account]);

  return (
    <div className="transfer">
      <div className="main-title">
        Privacy Routing SDK Demo App
      </div>
      <div className="form-box">
        {/* <div className="form-box__field">
          Source Network:
          <div className="form-network">
            <AppImage imageUri="https://columbus-config.s3.us-west-2.amazonaws.com/icon/fra.svg" />
            <div className="title">{FINDORA_NETWORK.chainName}</div>
          </div>
        </div> */}
        {/* <div className="form-box__field">
          Destionation Network:
          <div className="form-network">
            <AppImage imageUri="https://columbus-config.s3.us-west-2.amazonaws.com/icon/fra.svg" />
            <div className="title">{FINDORA_NETWORK.chainName}</div>
          </div>
        </div> */}
        <div className="form-box__field">
          Amount:
          <div>
            <AppImage imageUri={selectedToken?.imageUri} />
            {[sendInfo.amount, selectedToken?.symbol].join(' ')}
          </div>
        </div>
        <div className="form-box__field" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <div>Destionation Address:</div>
          <input
            className="form-input"
            autoComplete="off"
            value={sendInfo.destinationAddress}
            onChange={event => setSendInfo(sendInfo => { sendInfo.destinationAddress = event.target.value; })}
          />
        </div>
      </div>
      <div className="form-submit">
        <button
          className={cx('submit-btn', {
            'submit-btn--disabled': !Web3.utils.isAddress(sendInfo.destinationAddress)
          })}
          onClick={handleStartTransfer}
        >
          Start Transfer
        </button>
      </div>
      {isTransferring && (
        <Modal
          centered
          open
          destroyOnClose
          footer={<></>}
          maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          modalRender={() => (
            <TransferModal sendInfo={sendInfo} onClose={handleCloseModal} />
          )}
        />
      )}
    </div>
  );
}
export default Transfer;
