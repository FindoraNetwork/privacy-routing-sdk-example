export declare const approveToken: (tokenAddress: string, bridgeAddress: string, amount: string) => Promise<unknown>;
export declare const getAssetCode: (prismBridgeAddress: string, tokenAddress: string, provider?: string) => Promise<string>;
