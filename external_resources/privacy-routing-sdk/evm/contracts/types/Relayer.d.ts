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
export declare type ContractContext = Web3ContractContext<RelayerAbi, RelayerAbiMethodNames, RelayerAbiEventsContext, RelayerAbiEvents>;
export declare type RelayerAbiEvents = 'DepositFromOtherChain' | 'FeeUpdated' | 'Initialized' | 'LiquidityAdded' | 'LiquidityRemoved' | 'MinAddUpdated' | 'OwnershipTransferred' | 'Paused' | 'PoolFeeAdd' | 'Unpaused' | 'WithdrawFRA' | 'WithdrawFRC20';
export interface RelayerAbiEventsContext {
    DepositFromOtherChain(parameters: {
        filter?: {
            tokenId?: string | string[];
            to?: string | number[] | string | number[][];
            amount?: string | string[];
        };
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
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
    WithdrawFRA(parameters: {
        filter?: {
            to?: string | number[] | string | number[][];
        };
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
    WithdrawFRC20(parameters: {
        filter?: {
            token?: string | string[];
            to?: string | number[] | string | number[][];
        };
        fromBlock?: number;
        toBlock?: 'latest' | number;
        topics?: string[];
    }, callback?: (error: Error, event: EventData) => void): EventResponse;
}
export declare type RelayerAbiMethodNames = 'MaxFee' | 'MaxFeePercent' | 'MaxFeeShare' | 'accountAssets' | 'addLiquidity' | 'addMarket' | 'addNativeLiquidity' | 'adminSetBridgeAddress' | 'adminSetColumbusAssetAddress' | 'adminSetGenericHandler' | 'adminSetGenericHandlerResourceId' | 'adminSetPrismAddress' | 'adminSetPrismLedgerAddress' | 'allMarkets' | 'baseToken' | 'bridgeAddress' | 'cTokenForToken' | 'columbusAssetAddress' | 'depositFromOtherChain' | 'feeAdmin' | 'feeCounter' | 'feeShare' | 'fixedFee' | 'genericHandlerAddress' | 'genericHandlerResourceId' | 'getAssets' | 'initialize' | 'marketLen' | 'markets' | 'maxRedeem' | 'minAdd' | 'minFee' | 'nativeWrap' | 'owner' | 'paused' | 'prismxxBridgeAddress' | 'prismxxLedgerAddress' | 'removeLiquidity' | 'renounceOwnership' | 'setFee' | 'setFeeAdmin' | 'setFeeShare' | 'setFixedFee' | 'setMarket' | 'setMinAdd' | 'setWrap' | 'tokenForCToken' | 'transferOwnership' | 'withdrawERC20' | 'withdrawFRA' | 'withdrawFee' | 'withdrawToOtherChainCallback';
export interface DepositFromOtherChainEventEmittedResponse {
    tokenId: string;
    to: string | number[];
    amount: string;
}
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
export interface WithdrawFRAEventEmittedResponse {
    to: string | number[];
    amount: string;
}
export interface WithdrawFRC20EventEmittedResponse {
    token: string;
    to: string | number[];
    amount: string;
}
export interface MarketsResponse {
    isListed: boolean;
    token: string;
    cToken: string;
    liquidity: string;
    fees: string;
}
export interface RelayerAbi {
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
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param addr Type: address, Indexed: false
     */
    adminSetBridgeAddress(addr: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param addr Type: address, Indexed: false
     */
    adminSetColumbusAssetAddress(addr: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param handler Type: address, Indexed: false
     */
    adminSetGenericHandler(handler: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param resourceId Type: bytes32, Indexed: false
     */
    adminSetGenericHandlerResourceId(resourceId: string | number[]): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param addr Type: address, Indexed: false
     */
    adminSetPrismAddress(addr: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _addr Type: address, Indexed: false
     */
    adminSetPrismLedgerAddress(_addr: string): MethodReturnContext;
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
     */
    bridgeAddress(): MethodConstantReturnContext<string>;
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
     */
    columbusAssetAddress(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param data Type: bytes, Indexed: false
     */
    depositFromOtherChain(data: string | number[]): MethodReturnContext;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    feeAdmin(): MethodConstantReturnContext<string>;
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
     */
    genericHandlerAddress(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    genericHandlerResourceId(): MethodConstantReturnContext<string>;
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
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _genericHandlerAddress Type: address, Indexed: false
     * @param _prismxxBridgeAddress Type: address, Indexed: false
     * @param _prismLedgerAddress Type: address, Indexed: false
     * @param _columbusAssetAddress Type: address, Indexed: false
     * @param _genericHandlerResourceId Type: bytes32, Indexed: false
     * @param _bridgeAddress Type: address, Indexed: false
     */
    initialize(_genericHandlerAddress: string, _prismxxBridgeAddress: string, _prismLedgerAddress: string, _columbusAssetAddress: string, _genericHandlerResourceId: string | number[], _bridgeAddress: string): MethodReturnContext;
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
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    prismxxBridgeAddress(): MethodConstantReturnContext<string>;
    /**
     * Payable: false
     * Constant: true
     * StateMutability: view
     * Type: function
     */
    prismxxLedgerAddress(): MethodConstantReturnContext<string>;
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
     * @param _token Type: address, Indexed: false
     * @param _fee Type: uint256, Indexed: false
     */
    setFee(_token: string, _fee: string): MethodReturnContext;
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param _addr Type: address, Indexed: false
     */
    setFeeAdmin(_addr: string): MethodReturnContext;
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
     * @param _fee Type: uint256, Indexed: false
     */
    setFixedFee(_token: string, _fee: string): MethodReturnContext;
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
     * @param chainId Type: uint8, Indexed: false
     * @param data Type: bytes, Indexed: false
     */
    withdrawERC20(chainId: string | number, data: string | number[]): MethodReturnContext;
    /**
     * Payable: true
     * Constant: false
     * StateMutability: payable
     * Type: function
     * @param chainId Type: uint8, Indexed: false
     * @param data Type: bytes, Indexed: false
     */
    withdrawFRA(chainId: string | number, data: string | number[]): MethodPayableReturnContext;
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
    /**
     * Payable: false
     * Constant: false
     * StateMutability: nonpayable
     * Type: function
     * @param data Type: bytes, Indexed: false
     */
    withdrawToOtherChainCallback(data: string | number[]): MethodReturnContext;
}
