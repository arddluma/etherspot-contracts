import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AddressLibInterface extends utils.Interface {
    functions: {
        "c_3858ce6a(bytes8)": FunctionFragment;
        "c_false3858ce6a(bytes8)": FunctionFragment;
        "c_true3858ce6a(bytes8)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "c_3858ce6a", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_false3858ce6a", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "c_true3858ce6a", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "c_3858ce6a", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_false3858ce6a", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "c_true3858ce6a", data: BytesLike): Result;
    events: {};
}
export interface AddressLib extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AddressLibInterface;
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
        c_3858ce6a(c__3858ce6a: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        c_false3858ce6a(c__3858ce6a: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        c_true3858ce6a(c__3858ce6a: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    c_3858ce6a(c__3858ce6a: BytesLike, overrides?: CallOverrides): Promise<void>;
    c_false3858ce6a(c__3858ce6a: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    c_true3858ce6a(c__3858ce6a: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        c_3858ce6a(c__3858ce6a: BytesLike, overrides?: CallOverrides): Promise<void>;
        c_false3858ce6a(c__3858ce6a: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        c_true3858ce6a(c__3858ce6a: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        c_3858ce6a(c__3858ce6a: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_false3858ce6a(c__3858ce6a: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        c_true3858ce6a(c__3858ce6a: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        c_3858ce6a(c__3858ce6a: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_false3858ce6a(c__3858ce6a: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        c_true3858ce6a(c__3858ce6a: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
