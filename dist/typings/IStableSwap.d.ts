import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IStableSwapInterface extends utils.Interface {
    functions: {
        "addLiquidity(uint256[],uint256,uint256)": FunctionFragment;
        "calculateRemoveLiquidity(uint256)": FunctionFragment;
        "calculateRemoveLiquidityOneToken(uint256,uint8)": FunctionFragment;
        "calculateSwap(uint8,uint8,uint256)": FunctionFragment;
        "calculateSwapFromAddress(address,address,uint256)": FunctionFragment;
        "calculateSwapOut(uint8,uint8,uint256)": FunctionFragment;
        "calculateSwapOutFromAddress(address,address,uint256)": FunctionFragment;
        "calculateTokenAmount(uint256[],bool)": FunctionFragment;
        "getA()": FunctionFragment;
        "getToken(uint8)": FunctionFragment;
        "getTokenBalance(uint8)": FunctionFragment;
        "getTokenIndex(address)": FunctionFragment;
        "getVirtualPrice()": FunctionFragment;
        "initialize(address[],uint8[],string,string,uint256,uint256,uint256,address)": FunctionFragment;
        "removeLiquidity(uint256,uint256[],uint256)": FunctionFragment;
        "removeLiquidityImbalance(uint256[],uint256,uint256)": FunctionFragment;
        "removeLiquidityOneToken(uint256,uint8,uint256,uint256)": FunctionFragment;
        "swap(uint8,uint8,uint256,uint256,uint256)": FunctionFragment;
        "swapExact(uint256,address,address,uint256)": FunctionFragment;
        "swapExactOut(uint256,address,address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addLiquidity", values: [BigNumberish[], BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculateRemoveLiquidity", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculateRemoveLiquidityOneToken", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculateSwap", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculateSwapFromAddress", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculateSwapOut", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculateSwapOutFromAddress", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculateTokenAmount", values: [BigNumberish[], boolean]): string;
    encodeFunctionData(functionFragment: "getA", values?: undefined): string;
    encodeFunctionData(functionFragment: "getToken", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTokenBalance", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTokenIndex", values: [string]): string;
    encodeFunctionData(functionFragment: "getVirtualPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        string[],
        BigNumberish[],
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string
    ]): string;
    encodeFunctionData(functionFragment: "removeLiquidity", values: [BigNumberish, BigNumberish[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "removeLiquidityImbalance", values: [BigNumberish[], BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "removeLiquidityOneToken", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swap", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "swapExact", values: [BigNumberish, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swapExactOut", values: [BigNumberish, string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "addLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateRemoveLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateRemoveLiquidityOneToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateSwapFromAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateSwapOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateSwapOutFromAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateTokenAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getA", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVirtualPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityImbalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidityOneToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExact", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactOut", data: BytesLike): Result;
    events: {
        "AddLiquidity(address,uint256[],uint256[],uint256,uint256)": EventFragment;
        "NewAdminFee(uint256)": EventFragment;
        "NewSwapFee(uint256)": EventFragment;
        "NewWithdrawFee(uint256)": EventFragment;
        "RampA(uint256,uint256,uint256,uint256)": EventFragment;
        "RemoveLiquidity(address,uint256[],uint256)": EventFragment;
        "RemoveLiquidityImbalance(address,uint256[],uint256[],uint256,uint256)": EventFragment;
        "RemoveLiquidityOne(address,uint256,uint256,uint256,uint256)": EventFragment;
        "StopRampA(uint256,uint256)": EventFragment;
        "TokenSwap(address,uint256,uint256,uint128,uint128)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddLiquidity"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewAdminFee"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewSwapFee"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewWithdrawFee"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RampA"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveLiquidity"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveLiquidityImbalance"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveLiquidityOne"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StopRampA"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenSwap"): EventFragment;
}
export declare type AddLiquidityEvent = TypedEvent<[
    string,
    BigNumber[],
    BigNumber[],
    BigNumber,
    BigNumber
], {
    provider: string;
    tokenAmounts: BigNumber[];
    fees: BigNumber[];
    invariant: BigNumber;
    lpTokenSupply: BigNumber;
}>;
export declare type AddLiquidityEventFilter = TypedEventFilter<AddLiquidityEvent>;
export declare type NewAdminFeeEvent = TypedEvent<[
    BigNumber
], {
    newAdminFee: BigNumber;
}>;
export declare type NewAdminFeeEventFilter = TypedEventFilter<NewAdminFeeEvent>;
export declare type NewSwapFeeEvent = TypedEvent<[
    BigNumber
], {
    newSwapFee: BigNumber;
}>;
export declare type NewSwapFeeEventFilter = TypedEventFilter<NewSwapFeeEvent>;
export declare type NewWithdrawFeeEvent = TypedEvent<[
    BigNumber
], {
    newWithdrawFee: BigNumber;
}>;
export declare type NewWithdrawFeeEventFilter = TypedEventFilter<NewWithdrawFeeEvent>;
export declare type RampAEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    oldA: BigNumber;
    newA: BigNumber;
    initialTime: BigNumber;
    futureTime: BigNumber;
}>;
export declare type RampAEventFilter = TypedEventFilter<RampAEvent>;
export declare type RemoveLiquidityEvent = TypedEvent<[
    string,
    BigNumber[],
    BigNumber
], {
    provider: string;
    tokenAmounts: BigNumber[];
    lpTokenSupply: BigNumber;
}>;
export declare type RemoveLiquidityEventFilter = TypedEventFilter<RemoveLiquidityEvent>;
export declare type RemoveLiquidityImbalanceEvent = TypedEvent<[
    string,
    BigNumber[],
    BigNumber[],
    BigNumber,
    BigNumber
], {
    provider: string;
    tokenAmounts: BigNumber[];
    fees: BigNumber[];
    invariant: BigNumber;
    lpTokenSupply: BigNumber;
}>;
export declare type RemoveLiquidityImbalanceEventFilter = TypedEventFilter<RemoveLiquidityImbalanceEvent>;
export declare type RemoveLiquidityOneEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    provider: string;
    lpTokenAmount: BigNumber;
    lpTokenSupply: BigNumber;
    boughtId: BigNumber;
    tokensBought: BigNumber;
}>;
export declare type RemoveLiquidityOneEventFilter = TypedEventFilter<RemoveLiquidityOneEvent>;
export declare type StopRampAEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    currentA: BigNumber;
    time: BigNumber;
}>;
export declare type StopRampAEventFilter = TypedEventFilter<StopRampAEvent>;
export declare type TokenSwapEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    buyer: string;
    tokensSold: BigNumber;
    tokensBought: BigNumber;
    soldId: BigNumber;
    boughtId: BigNumber;
}>;
export declare type TokenSwapEventFilter = TypedEventFilter<TokenSwapEvent>;
export interface IStableSwap extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IStableSwapInterface;
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
        addLiquidity(amounts: BigNumberish[], minToMint: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        calculateRemoveLiquidity(amount: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        calculateRemoveLiquidityOneToken(tokenAmount: BigNumberish, tokenIndex: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            availableTokenAmount: BigNumber;
        }>;
        calculateSwap(tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        calculateSwapFromAddress(assetIn: string, assetOut: string, amountIn: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        calculateSwapOut(tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dy: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        calculateSwapOutFromAddress(assetIn: string, assetOut: string, amountOut: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        calculateTokenAmount(amounts: BigNumberish[], deposit: boolean, overrides?: CallOverrides): Promise<[BigNumber]>;
        getA(overrides?: CallOverrides): Promise<[BigNumber]>;
        getToken(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getTokenBalance(index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTokenIndex(tokenAddress: string, overrides?: CallOverrides): Promise<[number]>;
        getVirtualPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(pooledTokens: string[], decimals: BigNumberish[], lpTokenName: string, lpTokenSymbol: string, a: BigNumberish, fee: BigNumberish, adminFee: BigNumberish, lpTokenTargetAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeLiquidity(amount: BigNumberish, minAmounts: BigNumberish[], deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeLiquidityImbalance(amounts: BigNumberish[], maxBurnAmount: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeLiquidityOneToken(tokenAmount: BigNumberish, tokenIndex: BigNumberish, minAmount: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swap(tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapExact(amountIn: BigNumberish, assetIn: string, assetOut: string, minAmountOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapExactOut(amountOut: BigNumberish, assetIn: string, assetOut: string, maxAmountIn: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addLiquidity(amounts: BigNumberish[], minToMint: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    calculateRemoveLiquidity(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
    calculateRemoveLiquidityOneToken(tokenAmount: BigNumberish, tokenIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    calculateSwap(tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    calculateSwapFromAddress(assetIn: string, assetOut: string, amountIn: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    calculateSwapOut(tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dy: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    calculateSwapOutFromAddress(assetIn: string, assetOut: string, amountOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    calculateTokenAmount(amounts: BigNumberish[], deposit: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    getA(overrides?: CallOverrides): Promise<BigNumber>;
    getToken(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getTokenBalance(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getTokenIndex(tokenAddress: string, overrides?: CallOverrides): Promise<number>;
    getVirtualPrice(overrides?: CallOverrides): Promise<BigNumber>;
    initialize(pooledTokens: string[], decimals: BigNumberish[], lpTokenName: string, lpTokenSymbol: string, a: BigNumberish, fee: BigNumberish, adminFee: BigNumberish, lpTokenTargetAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeLiquidity(amount: BigNumberish, minAmounts: BigNumberish[], deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeLiquidityImbalance(amounts: BigNumberish[], maxBurnAmount: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeLiquidityOneToken(tokenAmount: BigNumberish, tokenIndex: BigNumberish, minAmount: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swap(tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapExact(amountIn: BigNumberish, assetIn: string, assetOut: string, minAmountOut: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapExactOut(amountOut: BigNumberish, assetIn: string, assetOut: string, maxAmountIn: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addLiquidity(amounts: BigNumberish[], minToMint: BigNumberish, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateRemoveLiquidity(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        calculateRemoveLiquidityOneToken(tokenAmount: BigNumberish, tokenIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateSwap(tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateSwapFromAddress(assetIn: string, assetOut: string, amountIn: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateSwapOut(tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dy: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateSwapOutFromAddress(assetIn: string, assetOut: string, amountOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateTokenAmount(amounts: BigNumberish[], deposit: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        getA(overrides?: CallOverrides): Promise<BigNumber>;
        getToken(index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getTokenBalance(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenIndex(tokenAddress: string, overrides?: CallOverrides): Promise<number>;
        getVirtualPrice(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(pooledTokens: string[], decimals: BigNumberish[], lpTokenName: string, lpTokenSymbol: string, a: BigNumberish, fee: BigNumberish, adminFee: BigNumberish, lpTokenTargetAddress: string, overrides?: CallOverrides): Promise<void>;
        removeLiquidity(amount: BigNumberish, minAmounts: BigNumberish[], deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        removeLiquidityImbalance(amounts: BigNumberish[], maxBurnAmount: BigNumberish, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        removeLiquidityOneToken(tokenAmount: BigNumberish, tokenIndex: BigNumberish, minAmount: BigNumberish, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        swap(tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        swapExact(amountIn: BigNumberish, assetIn: string, assetOut: string, minAmountOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        swapExactOut(amountOut: BigNumberish, assetIn: string, assetOut: string, maxAmountIn: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "AddLiquidity(address,uint256[],uint256[],uint256,uint256)"(provider?: string | null, tokenAmounts?: null, fees?: null, invariant?: null, lpTokenSupply?: null): AddLiquidityEventFilter;
        AddLiquidity(provider?: string | null, tokenAmounts?: null, fees?: null, invariant?: null, lpTokenSupply?: null): AddLiquidityEventFilter;
        "NewAdminFee(uint256)"(newAdminFee?: null): NewAdminFeeEventFilter;
        NewAdminFee(newAdminFee?: null): NewAdminFeeEventFilter;
        "NewSwapFee(uint256)"(newSwapFee?: null): NewSwapFeeEventFilter;
        NewSwapFee(newSwapFee?: null): NewSwapFeeEventFilter;
        "NewWithdrawFee(uint256)"(newWithdrawFee?: null): NewWithdrawFeeEventFilter;
        NewWithdrawFee(newWithdrawFee?: null): NewWithdrawFeeEventFilter;
        "RampA(uint256,uint256,uint256,uint256)"(oldA?: null, newA?: null, initialTime?: null, futureTime?: null): RampAEventFilter;
        RampA(oldA?: null, newA?: null, initialTime?: null, futureTime?: null): RampAEventFilter;
        "RemoveLiquidity(address,uint256[],uint256)"(provider?: string | null, tokenAmounts?: null, lpTokenSupply?: null): RemoveLiquidityEventFilter;
        RemoveLiquidity(provider?: string | null, tokenAmounts?: null, lpTokenSupply?: null): RemoveLiquidityEventFilter;
        "RemoveLiquidityImbalance(address,uint256[],uint256[],uint256,uint256)"(provider?: string | null, tokenAmounts?: null, fees?: null, invariant?: null, lpTokenSupply?: null): RemoveLiquidityImbalanceEventFilter;
        RemoveLiquidityImbalance(provider?: string | null, tokenAmounts?: null, fees?: null, invariant?: null, lpTokenSupply?: null): RemoveLiquidityImbalanceEventFilter;
        "RemoveLiquidityOne(address,uint256,uint256,uint256,uint256)"(provider?: string | null, lpTokenAmount?: null, lpTokenSupply?: null, boughtId?: null, tokensBought?: null): RemoveLiquidityOneEventFilter;
        RemoveLiquidityOne(provider?: string | null, lpTokenAmount?: null, lpTokenSupply?: null, boughtId?: null, tokensBought?: null): RemoveLiquidityOneEventFilter;
        "StopRampA(uint256,uint256)"(currentA?: null, time?: null): StopRampAEventFilter;
        StopRampA(currentA?: null, time?: null): StopRampAEventFilter;
        "TokenSwap(address,uint256,uint256,uint128,uint128)"(buyer?: string | null, tokensSold?: null, tokensBought?: null, soldId?: null, boughtId?: null): TokenSwapEventFilter;
        TokenSwap(buyer?: string | null, tokensSold?: null, tokensBought?: null, soldId?: null, boughtId?: null): TokenSwapEventFilter;
    };
    estimateGas: {
        addLiquidity(amounts: BigNumberish[], minToMint: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        calculateRemoveLiquidity(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateRemoveLiquidityOneToken(tokenAmount: BigNumberish, tokenIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateSwap(tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateSwapFromAddress(assetIn: string, assetOut: string, amountIn: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateSwapOut(tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dy: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateSwapOutFromAddress(assetIn: string, assetOut: string, amountOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateTokenAmount(amounts: BigNumberish[], deposit: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        getA(overrides?: CallOverrides): Promise<BigNumber>;
        getToken(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenBalance(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenIndex(tokenAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        getVirtualPrice(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(pooledTokens: string[], decimals: BigNumberish[], lpTokenName: string, lpTokenSymbol: string, a: BigNumberish, fee: BigNumberish, adminFee: BigNumberish, lpTokenTargetAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeLiquidity(amount: BigNumberish, minAmounts: BigNumberish[], deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeLiquidityImbalance(amounts: BigNumberish[], maxBurnAmount: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeLiquidityOneToken(tokenAmount: BigNumberish, tokenIndex: BigNumberish, minAmount: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swap(tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapExact(amountIn: BigNumberish, assetIn: string, assetOut: string, minAmountOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapExactOut(amountOut: BigNumberish, assetIn: string, assetOut: string, maxAmountIn: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addLiquidity(amounts: BigNumberish[], minToMint: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        calculateRemoveLiquidity(amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateRemoveLiquidityOneToken(tokenAmount: BigNumberish, tokenIndex: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateSwap(tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateSwapFromAddress(assetIn: string, assetOut: string, amountIn: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateSwapOut(tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dy: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateSwapOutFromAddress(assetIn: string, assetOut: string, amountOut: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateTokenAmount(amounts: BigNumberish[], deposit: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getA(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getToken(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenBalance(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenIndex(tokenAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVirtualPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(pooledTokens: string[], decimals: BigNumberish[], lpTokenName: string, lpTokenSymbol: string, a: BigNumberish, fee: BigNumberish, adminFee: BigNumberish, lpTokenTargetAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidity(amount: BigNumberish, minAmounts: BigNumberish[], deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidityImbalance(amounts: BigNumberish[], maxBurnAmount: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidityOneToken(tokenAmount: BigNumberish, tokenIndex: BigNumberish, minAmount: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swap(tokenIndexFrom: BigNumberish, tokenIndexTo: BigNumberish, dx: BigNumberish, minDy: BigNumberish, deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapExact(amountIn: BigNumberish, assetIn: string, assetOut: string, minAmountOut: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapExactOut(amountOut: BigNumberish, assetIn: string, assetOut: string, maxAmountIn: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
