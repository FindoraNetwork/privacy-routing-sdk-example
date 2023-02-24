export interface ISendInfo {
  sourceChainId: string;
  destinationChainId: string;
  tokenAddress: string;
  amount: string;
  sourceAddress: string;
  destinationAddress: string;
}

export const FINDORA_EVM_CHAIN_ID = '2154'; // Findora EVM

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
  prismBridge: '0x899d4d8f441E5B59EB21ceb58fce723bb5A85C55',
  prismBridgeLedger: '0xBeeBd2B2E9C29E416bF5d774526644f7C854cE01',
};

export const DEFAULT_SEND_INFO: ISendInfo = {
  sourceChainId: FINDORA_EVM_CHAIN_ID,
  destinationChainId: FINDORA_EVM_CHAIN_ID,
  tokenAddress: '', // FRC20 Token Address, if FRA = ''
  amount: '5',
  sourceAddress: '',
  destinationAddress: '',
};

export const TOKENS = [
  { value: '', label: 'FRA' },
  { value: '0x5b15Cdff7Fe65161C377eDeDc34A4E4E31ffb00B', label: 'zkUSDT' },
]
