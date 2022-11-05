export declare const barToAbar: (data: FindoraWallet.IWalletWrap, sids?: any[]) => Promise<{
    sids: any[];
    commitments: string[];
    txnHash: string;
    txnLog: string;
}>;
export declare const abarToBar: (sender: FindoraWallet.IAnonWallet, receiver: FindoraWallet.IWallet, commitments: string[]) => Promise<{
    txnHash: string;
    txnLog: string;
}>;
