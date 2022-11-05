export declare type TokenConfig = {
    address: string;
    name?: string;
    symbol?: string;
    imageUri?: string;
    resourceId: string;
    isNativeWrappedToken?: boolean;
    decimals?: number;
};
export declare type ChainType = 'Ethereum' | 'Substrate';
export declare type BridgeConfig = {
    networkId?: number;
    chainId: number;
    name: string;
    rpcUrl: string;
    explorerUrl: string;
    type: ChainType;
    tokens: TokenConfig[];
    nativeTokenSymbol: string;
    decimals: number;
    wsUrl?: string;
};
export declare type EvmBridgeConfig = BridgeConfig & {
    type: 'Ethereum';
    bridgeAddress: string;
    deckAddress?: string;
    blockExplorer?: string;
    defaultGasPrice?: number;
    deployedBlockNumber?: number;
};
export declare type BridgeConfigSimple = EvmBridgeConfig;
export declare type ChainBridgeConfig = {
    relayer: {
        bridgeAddress: string;
    };
    chains: Array<BridgeConfigSimple>;
};
export declare type AddEthereumChainParameter = {
    chainId: string;
    blockExplorerUrls?: string[];
    chainName?: string;
    iconUrls?: string[];
    nativeCurrency?: {
        name: string;
        symbol: string;
        decimals: number;
    };
    rpcUrls?: string[];
};
