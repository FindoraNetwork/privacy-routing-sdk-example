import Web3 from 'web3';
export interface SdkEnvironmentConfig {
    hostUrl: string;
    queryPort?: string;
    ledgerPort?: string;
    submissionPort?: string;
    explorerApiPort?: string;
    web3?: Web3;
    blockTime?: number;
    apiRetryDelay?: number;
}
export declare class Sdk {
    static environment: SdkEnvironmentConfig;
    static init(sdkEnv: SdkEnvironmentConfig): Promise<boolean>;
}
