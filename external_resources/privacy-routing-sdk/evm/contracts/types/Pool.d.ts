import BN from 'bn.js';
import BigNumber from 'bignumber.js';
import { PromiEvent, TransactionReceipt, EventResponse, EventData, Web3ContractContext } from 'ethereum-abi-types-generator';
export interface CallOptions {
    from?: string;
    gasPrice?: string;
    gas?: number;
}
export interface SendOptions {
    from: string;
    value?: number | string | BN | BigNumber;
    gasPrice?: string;
    gas?: number;
}
export interface EstimateGasOptions {
    from?: string;
    value?: number | string | BN | BigNumber;
    gas?: number;
}
export interface MethodPayableReturnContext {
    send(options: SendOptions): PromiEvent<TransactionReceipt>;
    send(options: SendOptions, callback: (error: Error, result: any) => void): PromiEvent<TransactionReceipt>;
    estimateGas(options: EstimateGasOptions): Promise<number>;
    estimateGas(options: EstimateGasOptions, callback: (error: Error, result: any) => void): Promise<number>;
    encodeABI(): string;
}
export interface MethodConstantReturnContext<TCallReturn> {
    call(): Promise<TCallReturn>;
    call(options: CallOptions): Promise<TCallReturn>;
    call(options: CallOptions, callback: (error: Error, result: TCallReturn) => void): Promise<TCallReturn>;
    encodeABI(): string;
}
export interface MethodReturnContext extends MethodPayableReturnContext {
}
export declare type ContractContext = Web3ContractContext<PoolAbi, PoolAbiMethodNames, PoolAbiEventsContext, PoolAbiEvents>;
export declare type PoolAbiEvents = 'FeeUpdated' | 'Initialized' | 'LiquidityAdded' | 'LiquidityRemoved' | 'MinAddUpdated' | 'OwnershipTransferred' | 'Paused' | 'PoolFeeAdd' | 'Unpaused';
export interface PoolAbiEventsContext {
    FeeUpdated(parameters: {
        filter?: {
            token?: string | string[];
        };
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    Initialized(parameters: {
        filter?: {};
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    LiquidityAdded(parameters: {
        filter?: {
            provider?: string | string[];
            token?: string | string[];
        };
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    LiquidityRemoved(parameters: {
        filter?: {
            receiver?: string | string[];
            token?: string | string[];
        };
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    MinAddUpdated(parameters: {
        filter?: {
            token?: string | string[];
        };
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    OwnershipTransferred(parameters: {
        filter?: {
            previousOwner?: string | string[];
            newOwner?: string | string[];
        };
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    Paused(parameters: {
        filter?: {};
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    PoolFeeAdd(parameters: {
        filter?: {
            token?: string | string[];
        };
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    Unpaused(parameters: {
        filter?: {};
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
}
export declare type PoolAbiMethodNames = 'MaxFee' | 'MaxFeePercent' | 'MaxFeeShare' | 'accountAssets' | 'addLiquidity' | 'addMarket' | 'addNativeLiquidity' | 'allMarkets' | 'baseToken' | 'cTokenForToken' | 'feeCounter' | 'feeShare' | 'fixedFee' | 'getAssets' | 'marketLen' | 'markets' | 'maxRedeem' | 'minAdd' | 'minFee' | 'nativeWrap' | 'owner' | 'paused' | 'removeLiquidity' | 'renounceOwnership' | 'setFeeShare' | 'setMarket' | 'setMinAdd' | 'setWrap' | 'tokenForCToken' | 'transferOwnership' | 'withdrawFee';
export interface FeeUpdatedEventEmittedResponse {
    token: string;
    kind: string | number;
    amount: string;
}
export interface InitializedEventEmittedResponse {
    version: string | number;
}
export interface LiquidityAddedEventEmittedResponse {
    provider: string;
    token: string;
    amount: string;
}
export interface LiquidityRemovedEventEmittedResponse {
    receiver: string;
    token: string;
    amount: string;
}
export interface MinAddUpdatedEventEmittedResponse {
    token: string;
    amount: string;
}
export interface OwnershipTransferredEventEmittedResponse {
    previousOwner: string;
    newOwner: string;
}
export interface PausedEventEmittedResponse {
    account: string;
}
export interface PoolFeeAddEventEmittedResponse {
    token: string;
    amount: string;
}
export interface UnpausedEventEmittedResponse {
    account: string;
}
export interface MarketsResponse {
    isListed: boolean;
    token: string;
    cToken: string;
    liquidity: string;
    fees: string;
}
export interface PoolAbi {
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    MaxFee(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    MaxFeePercent(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    MaxFeeShare(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: address, Indexed: false
     * @param parameter1 Type: uint256, Indexed: false
     */
    accountAssets(parameter0: string, parameter1: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _token Type: address, Indexed: false
     * @param _amount Type: uint256, Indexed: false
     */
    addLiquidity(_token: string, _amount: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _token Type: address, Indexed: false
     * @param _cToken Type: address, Indexed: false
     * @param _minAdd Type: uint256, Indexed: false
     * @param _fee Type: uint256, Indexed: false
     * @param _fixedFee Type: uint256, Indexed: false
     */
    addMarket(_token: string, _cToken: string, _minAdd: string, _fee: string, _fixedFee: string): MethodReturnContext;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     * @param _amount Type: uint256, Indexed: false
     */
    addNativeLiquidity(_amount: string): MethodPayableReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: uint256, Indexed: false
     */
    allMarkets(parameter0: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: address, Indexed: false
     */
    baseToken(parameter0: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param _token Type: address, Indexed: false
     * @param _amount Type: uint256, Indexed: false
     */
    cTokenForToken(_token: string, _amount: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: uint8, Indexed: false
     * @param parameter1 Type: address, Indexed: false
     */
    feeCounter(parameter0: string | number, parameter1: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: uint8, Indexed: false
     */
    feeShare(parameter0: string | number): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: address, Indexed: false
     */
    fixedFee(parameter0: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param account Type: address, Indexed: false
     */
    getAssets(account: string): MethodConstantReturnContext<string[]>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    marketLen(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: address, Indexed: false
     */
    markets(parameter0: string): MethodConstantReturnContext<MarketsResponse>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param _token Type: address, Indexed: false
     */
    maxRedeem(_token: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: address, Indexed: false
     */
    minAdd(parameter0: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param parameter0 Type: address, Indexed: false
     */
    minFee(parameter0: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    nativeWrap(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    owner(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    paused(): MethodConstantReturnContext<boolean>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _token Type: address, Indexed: false
     * @param _share Type: uint256, Indexed: false
     */
    removeLiquidity(_token: string, _share: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     */
    renounceOwnership(): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _kind Type: uint8, Indexed: false
     * @param _point Type: uint256, Indexed: false
     */
    setFeeShare(_kind: string | number, _point: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _token Type: address, Indexed: false
     * @param _isListed Type: bool, Indexed: false
     */
    setMarket(_token: string, _isListed: boolean): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _token Type: address, Indexed: false
     * @param _amount Type: uint256, Indexed: false
     */
    setMinAdd(_token: string, _amount: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _addr Type: address, Indexed: false
     */
    setWrap(_addr: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     * @param _token Type: address, Indexed: false
     * @param _amount Type: uint256, Indexed: false
     */
    tokenForCToken(_token: string, _amount: string): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param newOwner Type: address, Indexed: false
     */
    transferOwnership(newOwner: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _token Type: address, Indexed: false
     * @param _kind Type: uint8, Indexed: false
     * @param _to Type: address, Indexed: false
     * @param _amount Type: uint256, Indexed: false
     */
    withdrawFee(_token: string, _kind: string | number, _to: string, _amount: string): MethodReturnContext;
}
