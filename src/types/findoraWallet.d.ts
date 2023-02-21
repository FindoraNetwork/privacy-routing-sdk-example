declare namespace FindoraWallet {
  export interface IWallet {
    keyStore?: Uint8Array | string;
    publickey?: string;
    address?: string;
    name?: string;
    keypair?: any;
    privateKey?: string;
  }

  export interface IAnonWallet {
    axfrPublicKey?: string;
    axfrViewKey?: string;
    axfrSpendKey?: string;
    name?: string;
  }

  export interface IWalletWrap {
    walletStart: FindoraWallet.IWallet;
    anonWallet: FindoraWallet.IAnonWallet;
    walletEnd: FindoraWallet.IWallet;
    seeds: string[];
  }
}
