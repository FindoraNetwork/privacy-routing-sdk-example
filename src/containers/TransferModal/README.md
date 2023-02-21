



- **Create new findora wallets for this transfer**

```js
import { findora } from 'privacy-routing-sdk';

// ...
const findoraWallets = await findora.keypair.getWallet();
/// const { walletStart, walletEnd, anonWallet } = findoraWallets;
```

- **FRC20 to Findora Native Chain**

```js
import { evm } from 'privacy-routing-sdk';

// ...
if (DEFAULT_SEND_INFO.tokenAddress) {
  // FRC20 (Customized token)
  await evm.services.approveToken(DEFAULT_SEND_INFO.tokenAddress, CONTRACTS_ADDRESS.simBridge, DEFAULT_SEND_INFO.amount);
  depositTxnReceipt = await evm.transfer.frc20ToBar({
    bridgeAddress: CONTRACTS_ADDRESS.simBridge,
    recipientAddress: walletStart.address,
    tokenAddress: DEFAULT_SEND_INFO.tokenAddress,
    tokenAmount: DEFAULT_SEND_INFO.amount,
  });
} else {
  // FRC20 (FRA token)
  depositTxnReceipt = await evm.transfer.fraToBar({
    bridgeAddress: CONTRACTS_ADDRESS.simBridge,
    recipientAddress: walletStart.address,
    amount: DEFAULT_SEND_INFO.amount,
  });
}
```

- **BAR To ABAR**

```js
import { findora } from 'privacy-routing-sdk';

// ...
const { response: sids } = await findora.apis.getOwnedSids(walletStart.publickey);
const barToAbarResult = await findora.transfer.barToAbar(findoraWallets, sids);
// const { txnLog, txnHash, commitments } = barToAbarResult;
```

- **ABAR To BAR**

```js
import { findora } from 'privacy-routing-sdk';

// ...
const abarToBarResult = await findora.transfer.abarToBar(anonWallet, walletEnd, barToAbarResult.commitments);
// const { txnLog, txnHash } = abarToBarResult;
```

- **BAR To FRC20**

```js
import { evm, findora } from 'privacy-routing-sdk';

// ...
let assetCode = '';
if (DEFAULT_SEND_INFO.tokenAddress) {
  // FRC20 (Customized token)
  assetCode = await evm.services.getAssetCode(
    CONTRACTS_ADDRESS.prismBridge,
    DEFAULT_SEND_INFO.tokenAddress,
    findoraNetwork.Provider
  );
} else {
  // FRC20 (FRA token)
  assetCode = '';
}
const barToEvmResult = await findora.transfer.barToEVM(
  walletEnd,
  DEFAULT_SEND_INFO.amount,
  DEFAULT_SEND_INFO.destinationAddress,
  assetCode,
  '',
  false
);
```
