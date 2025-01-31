import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare type StargateDataStruct = {
    qty: BigNumberish;
    fromToken: string;
    toToken: string;
    dstChainId: BigNumberish;
    to: string;
    destStargateComposed: string;
};
export declare type StargateDataStructOutput = [
    BigNumber,
    string,
    string,
    number,
    string,
    string
] & {
    qty: BigNumber;
    fromToken: string;
    toToken: string;
    dstChainId: number;
    to: string;
    destStargateComposed: string;
};
export interface StargateFacetInterface extends utils.Interface {
    functions: {
        "sgAddPool(uint16,address,uint16)": FunctionFragment;
        "sgBridgeTokens((uint256,address,address,uint16,address,address))": FunctionFragment;
        "sgCalculateFees(uint16,address,address)": FunctionFragment;
        "sgCheckPoolId(uint16,address,uint16)": FunctionFragment;
        "sgInitialize(address,uint16)": FunctionFragment;
        "sgMinAmountOut(uint256)": FunctionFragment;
        "sgReceive(uint16,bytes,uint256,address,uint256,bytes)": FunctionFragment;
        "sgRetrievePoolId(uint16,address)": FunctionFragment;
        "sgUpdateRouter(address)": FunctionFragment;
        "sgUpdateSlippageTolerance(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "sgAddPool", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sgBridgeTokens", values: [StargateDataStruct]): string;
    encodeFunctionData(functionFragment: "sgCalculateFees", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "sgCheckPoolId", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sgInitialize", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sgMinAmountOut", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "sgReceive", values: [
        BigNumberish,
        BytesLike,
        BigNumberish,
        string,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "sgRetrievePoolId", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "sgUpdateRouter", values: [string]): string;
    encodeFunctionData(functionFragment: "sgUpdateSlippageTolerance", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "sgAddPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sgBridgeTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sgCalculateFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sgCheckPoolId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sgInitialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sgMinAmountOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sgReceive", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sgRetrievePoolId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sgUpdateRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sgUpdateSlippageTolerance", data: BytesLike): Result;
    events: {
        "SGAddedPool(uint16,address,uint16)": EventFragment;
        "SGInitialized(address,uint16)": EventFragment;
        "SGReceivedOnDestination(address,uint256)": EventFragment;
        "SGTransferStarted(string,address,address,address,address,uint256,uint16)": EventFragment;
        "SGUpdatedRouter(address)": EventFragment;
        "SGUpdatedSlippageTolerance(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "SGAddedPool"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SGInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SGReceivedOnDestination"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SGTransferStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SGUpdatedRouter"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SGUpdatedSlippageTolerance"): EventFragment;
}
export declare type SGAddedPoolEvent = TypedEvent<[
    number,
    string,
    number
], {
    chainId: number;
    token: string;
    poolId: number;
}>;
export declare type SGAddedPoolEventFilter = TypedEventFilter<SGAddedPoolEvent>;
export declare type SGInitializedEvent = TypedEvent<[
    string,
    number
], {
    stargate: string;
    chainId: number;
}>;
export declare type SGInitializedEventFilter = TypedEventFilter<SGInitializedEvent>;
export declare type SGReceivedOnDestinationEvent = TypedEvent<[
    string,
    BigNumber
], {
    token: string;
    amount: BigNumber;
}>;
export declare type SGReceivedOnDestinationEventFilter = TypedEventFilter<SGReceivedOnDestinationEvent>;
export declare type SGTransferStartedEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string,
    BigNumber,
    number
], {
    bridgeUsed: string;
    fromToken: string;
    toToken: string;
    from: string;
    to: string;
    amount: BigNumber;
    chainIdTo: number;
}>;
export declare type SGTransferStartedEventFilter = TypedEventFilter<SGTransferStartedEvent>;
export declare type SGUpdatedRouterEvent = TypedEvent<[string], {
    newAddress: string;
}>;
export declare type SGUpdatedRouterEventFilter = TypedEventFilter<SGUpdatedRouterEvent>;
export declare type SGUpdatedSlippageToleranceEvent = TypedEvent<[
    BigNumber
], {
    newSlippage: BigNumber;
}>;
export declare type SGUpdatedSlippageToleranceEventFilter = TypedEventFilter<SGUpdatedSlippageToleranceEvent>;
export interface StargateFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StargateFacetInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        sgAddPool(_chainId: BigNumberish, _token: string, _poolId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sgBridgeTokens(_sgData: StargateDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sgCalculateFees(_destChain: BigNumberish, _receiver: string, _router: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        sgCheckPoolId(_chainId: BigNumberish, _token: string, _poolId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        sgInitialize(_stargateRouter: string, _chainId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sgMinAmountOut(_amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        sgReceive(_chainId: BigNumberish, _srcAddress: BytesLike, _nonce: BigNumberish, _token: string, amountLD: BigNumberish, _payload: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sgRetrievePoolId(_chainId: BigNumberish, _token: string, overrides?: CallOverrides): Promise<[number]>;
        sgUpdateRouter(_newAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        sgUpdateSlippageTolerance(_newSlippage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    sgAddPool(_chainId: BigNumberish, _token: string, _poolId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sgBridgeTokens(_sgData: StargateDataStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sgCalculateFees(_destChain: BigNumberish, _receiver: string, _router: string, overrides?: CallOverrides): Promise<BigNumber>;
    sgCheckPoolId(_chainId: BigNumberish, _token: string, _poolId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    sgInitialize(_stargateRouter: string, _chainId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sgMinAmountOut(_amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    sgReceive(_chainId: BigNumberish, _srcAddress: BytesLike, _nonce: BigNumberish, _token: string, amountLD: BigNumberish, _payload: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sgRetrievePoolId(_chainId: BigNumberish, _token: string, overrides?: CallOverrides): Promise<number>;
    sgUpdateRouter(_newAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sgUpdateSlippageTolerance(_newSlippage: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        sgAddPool(_chainId: BigNumberish, _token: string, _poolId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        sgBridgeTokens(_sgData: StargateDataStruct, overrides?: CallOverrides): Promise<void>;
        sgCalculateFees(_destChain: BigNumberish, _receiver: string, _router: string, overrides?: CallOverrides): Promise<BigNumber>;
        sgCheckPoolId(_chainId: BigNumberish, _token: string, _poolId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        sgInitialize(_stargateRouter: string, _chainId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        sgMinAmountOut(_amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        sgReceive(_chainId: BigNumberish, _srcAddress: BytesLike, _nonce: BigNumberish, _token: string, amountLD: BigNumberish, _payload: BytesLike, overrides?: CallOverrides): Promise<void>;
        sgRetrievePoolId(_chainId: BigNumberish, _token: string, overrides?: CallOverrides): Promise<number>;
        sgUpdateRouter(_newAddress: string, overrides?: CallOverrides): Promise<void>;
        sgUpdateSlippageTolerance(_newSlippage: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "SGAddedPool(uint16,address,uint16)"(chainId?: null, token?: null, poolId?: null): SGAddedPoolEventFilter;
        SGAddedPool(chainId?: null, token?: null, poolId?: null): SGAddedPoolEventFilter;
        "SGInitialized(address,uint16)"(stargate?: null, chainId?: null): SGInitializedEventFilter;
        SGInitialized(stargate?: null, chainId?: null): SGInitializedEventFilter;
        "SGReceivedOnDestination(address,uint256)"(token?: null, amount?: null): SGReceivedOnDestinationEventFilter;
        SGReceivedOnDestination(token?: null, amount?: null): SGReceivedOnDestinationEventFilter;
        "SGTransferStarted(string,address,address,address,address,uint256,uint16)"(bridgeUsed?: null, fromToken?: null, toToken?: null, from?: null, to?: null, amount?: null, chainIdTo?: null): SGTransferStartedEventFilter;
        SGTransferStarted(bridgeUsed?: null, fromToken?: null, toToken?: null, from?: null, to?: null, amount?: null, chainIdTo?: null): SGTransferStartedEventFilter;
        "SGUpdatedRouter(address)"(newAddress?: null): SGUpdatedRouterEventFilter;
        SGUpdatedRouter(newAddress?: null): SGUpdatedRouterEventFilter;
        "SGUpdatedSlippageTolerance(uint256)"(newSlippage?: null): SGUpdatedSlippageToleranceEventFilter;
        SGUpdatedSlippageTolerance(newSlippage?: null): SGUpdatedSlippageToleranceEventFilter;
    };
    estimateGas: {
        sgAddPool(_chainId: BigNumberish, _token: string, _poolId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sgBridgeTokens(_sgData: StargateDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sgCalculateFees(_destChain: BigNumberish, _receiver: string, _router: string, overrides?: CallOverrides): Promise<BigNumber>;
        sgCheckPoolId(_chainId: BigNumberish, _token: string, _poolId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        sgInitialize(_stargateRouter: string, _chainId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sgMinAmountOut(_amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        sgReceive(_chainId: BigNumberish, _srcAddress: BytesLike, _nonce: BigNumberish, _token: string, amountLD: BigNumberish, _payload: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sgRetrievePoolId(_chainId: BigNumberish, _token: string, overrides?: CallOverrides): Promise<BigNumber>;
        sgUpdateRouter(_newAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sgUpdateSlippageTolerance(_newSlippage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        sgAddPool(_chainId: BigNumberish, _token: string, _poolId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sgBridgeTokens(_sgData: StargateDataStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sgCalculateFees(_destChain: BigNumberish, _receiver: string, _router: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sgCheckPoolId(_chainId: BigNumberish, _token: string, _poolId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sgInitialize(_stargateRouter: string, _chainId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sgMinAmountOut(_amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sgReceive(_chainId: BigNumberish, _srcAddress: BytesLike, _nonce: BigNumberish, _token: string, amountLD: BigNumberish, _payload: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sgRetrievePoolId(_chainId: BigNumberish, _token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sgUpdateRouter(_newAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sgUpdateSlippageTolerance(_newSlippage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
