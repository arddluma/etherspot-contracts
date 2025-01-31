import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface StringsLibInterface extends utils.Interface {
    functions: {
        "c_b490eebc(bytes8)": FunctionFragment;
        "c_falseb490eebc(bytes8)": FunctionFragment;
        "c_trueb490eebc(bytes8)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "c_b490eebc", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_falseb490eebc", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_trueb490eebc", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "c_b490eebc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_falseb490eebc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_trueb490eebc", data: BytesLike): Result;
    events: {};
}
export interface StringsLib extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StringsLibInterface;
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
        c_b490eebc(c__b490eebc: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_falseb490eebc(c__b490eebc: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_trueb490eebc(c__b490eebc: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    c_b490eebc(c__b490eebc: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_falseb490eebc(c__b490eebc: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_trueb490eebc(c__b490eebc: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        c_b490eebc(c__b490eebc: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_falseb490eebc(c__b490eebc: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_trueb490eebc(c__b490eebc: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        c_b490eebc(c__b490eebc: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_falseb490eebc(c__b490eebc: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_trueb490eebc(c__b490eebc: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        c_b490eebc(c__b490eebc: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_falseb490eebc(c__b490eebc: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_trueb490eebc(c__b490eebc: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
