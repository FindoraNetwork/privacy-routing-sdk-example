## Findora EVM → Findora EVM


#### Supported Chains

- Findora-forge:

  - chain id: `2154`
  - https://prod-forge.prod.findora.org:8545

<!-- - BSC-testnet:

  - chain id: `97`
  - https://data-seed-prebsc-1-s2.binance.org:8545

- Avalanche-testnet:

  - chain id: `43113`
  - https://api.avax-test.network/ext/bc/C/rpc

- Polygon-testnet:

  - chain id: `80001`
  - https://morning-cool-thunder.matic-testnet.quiknode.pro/5c6850724d8800e961585cbed802871151ed5a74 -->

#### Supported Tokens

- ##### FRC20(FRA token)
- ##### FRC20(Customized token)
  - any FRC20 token on Findora EVM

---

#### Runs the app

```bash
yarn
yarn dev
```

#### Initialize `privacy-routing-sdk`



```js
import { Sdk } from 'privacy-routing-sdk';

export const ENV_CONFIG = {
  hostUrl: 'https://prod-forge.prod.findora.org',
};

Sdk.init(ENV_CONFIG);
```

#### Default Setting for Findora EVM to Findora EVM


```js

// ...
export const FINDORA_EVM_CHAIN_ID = '2154';

export const FINDORA_NETWORK = {
  chainId: FINDORA_EVM_CHAIN_ID,
  chainName: 'Findora',
  nativeCurrency: {
    name: 'FRA',
    symbol: 'FRA',
    decimals: 18,
  },
  rpcUrls: ['https://prod-forge.prod.findora.org:8545'],
  blockExplorerUrls: ['https://prod-forge-blockscout.prod.findora.org/'],
};

export const CONTRACTS_ADDRESS = {
  simBridge: '0x893c29D3e6520466005C18683466136D73641201',
  prismBridge: '0x899d4d8f441E5B59EB21ceb58fce723bb5A85C55',
};

export const DEFAULT_SEND_INFO = {
  sourceChainId: '2154',
  destinationChainId: '2154',
  tokenAddress: '0x......', // FRC20 Token Address
  amount: '5',
  sourceAddress: '',
  destinationAddress: '',
};
```

- **sourceChainId**: Findora EVM for this example

- **destinationChainId**: Findora EVM for this example

- **tokenAddress**: [supported tokens](#supported-tokens)

- **amount**

- **sourceAddress**: sync with your metamask account

- **destinationAddress**: receiver address


---

