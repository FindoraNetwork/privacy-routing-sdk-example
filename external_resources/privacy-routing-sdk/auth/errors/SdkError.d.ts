export declare const ErrorCodes: {
    readonly FAILED_TO_CONVERT_KEYPAIR_FROM_STRING: "W001";
    readonly FAILED_TO_GET_MINIMAL_FEE: "W002";
    readonly FAILED_TO_CONVERT_OWNER_MEMO_FROM_JSON: "W003";
    readonly FAILED_TO_CONVERT_CLIENT_ASSET_RECORD_FROM_JSON: "W004";
    readonly FAILED_TO_CONVERT_AXFR_PUBKEY_FROM_STRING: "W005";
    readonly FAILED_TO_CONVERT_AXFR_KEYPAIR_FROM_STRING: "W007";
    readonly FAILED_TO_CONVERT_AXFR_VIEWKEY_FROM_STRING: "W008";
    readonly FAILED_TO_CONVERT_PUBLIC_KEY_FROM_BASE64: "W009";
    readonly FAILED_TO_CONVERT_ABAR_FROM_JSON: "W010";
    readonly FAILED_TO_CONVERT_MERKLE_PROOF_FROM_JSON: "W011";
    readonly FAILED_TO_GENERATE_WALLETS: "W012";
    readonly FAILED_TO_CONVERT_FRA_ADDRESS: "W013";
    readonly FAILED_TO_ADD_OPERATION_BAR2ABAR: "W101";
    readonly FAILED_TO_ADD_OPERATION_ABAR2BAR: "W102";
    readonly FAILED_TO_GENERATE_TRANSFER_OPERATION: "W103";
    readonly FAILED_TO_ADD_TRANSFER_OPERATION: "W104";
    readonly FAILED_TO_ADD_OPERATION_CONVERT_ACCOUNT: "W105";
    readonly FAILED_TO_SIGN_TRANSACTION: "W106";
    readonly FAILED_TO_BUILD_TRANSACTION: "W107";
    readonly FAILED_TO_ADD_FEE_BAR2ABAR: "W108";
    readonly FAILED_TO_GET_COMMITMENTS: "W111";
    readonly FAILED_TO_CALL_CONTRACT_FUNCTION: "W201";
    readonly FAILED_TO_ESTIMATE_GAS_FEE: "W202";
    readonly NO_MATCHING_DATA_FOUND: "YS001";
    readonly API_GET_UTXO_ERROR: "A001";
    readonly API_GET_STATE_COMMITMENT_ERROR: "A002";
    readonly API_SUBMIT_TRANSACTION_ERROR: "A003";
    readonly API_SEARCH_TRANSACTION_ERROR: "A004";
    readonly API_GET_OWNED_ABAR_ERROR: "A005";
    readonly API_GET_ABAR_MEMO_ERROR: "A006";
    readonly API_GET_ABAR_PROOF_ERROR: "A007";
    readonly API_GET_SIDS_ERROR: "A008";
    readonly API_GET_ASSET_TOKEN: "A009";
    readonly TRANSACTION_IN_STUCK_ERROR: "M001";
};
export declare const ErrorCodeMessages: {
    [key in ErrorCodeValues]: string;
};
export declare type ErrorCodeKeys = keyof typeof ErrorCodes;
export declare type ErrorCodeValues = typeof ErrorCodes[ErrorCodeKeys];
export interface SdkErrorConstructor {
    errorCode?: ErrorCodeValues;
    message?: string;
    data?: {
        [key in string]: any;
    };
}
export declare class SdkError extends Error {
    errorCode: ErrorCodeValues;
    description: string;
    args: string;
    data: {
        [key in string]: any;
    };
    constructor({ errorCode, message, data }: SdkErrorConstructor);
}
