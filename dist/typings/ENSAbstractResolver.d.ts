import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ENSAbstractResolverInterface extends utils.Interface {
    functions: {
        "c_ac93193e(bytes8)": FunctionFragment;
        "c_falseac93193e(bytes8)": FunctionFragment;
        "c_trueac93193e(bytes8)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "c_ac93193e", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_falseac93193e", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_trueac93193e", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "c_ac93193e", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_falseac93193e", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_trueac93193e", data: BytesLike): Result;
    events: {};
}
export interface ENSAbstractResolver extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ENSAbstractResolverInterface;
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
        c_ac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_falseac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_trueac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    c_ac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_falseac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_trueac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        c_ac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_falseac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_trueac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        c_ac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_falseac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_trueac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        c_ac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_falseac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_trueac93193e(c__ac93193e: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
