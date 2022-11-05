import { SdkError } from '_src/auth';
export declare const waitUtxoEnough: (publickey: string, length?: number, counter?: number) => Promise<{
    error?: SdkError;
    sids?: number[];
}>;
