export declare const barToEVM: (wallet: FindoraWallet.IWallet, amount: string, ethAddress: string, assetCode: string, lowLevelData: string, isSourceCross: boolean) => Promise<{
    txnHash: string;
    txnLog: string;
}>;
