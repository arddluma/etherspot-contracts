import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AccountRegistryInterface extends utils.Interface {
    functions: {
        "isValidAccountSignature(address,bytes,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "isValidAccountSignature", values: [string, BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "isValidAccountSignature", data: BytesLike): Result;
    events: {};
}
export interface AccountRegistry extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AccountRegistryInterface;
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
        "isValidAccountSignature(address,bytes,bytes)"(account: string, message: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        "isValidAccountSignature(address,bytes32,bytes)"(account: string, messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    "isValidAccountSignature(address,bytes,bytes)"(account: string, message: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    "isValidAccountSignature(address,bytes32,bytes)"(account: string, messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        "isValidAccountSignature(address,bytes,bytes)"(account: string, message: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        "isValidAccountSignature(address,bytes32,bytes)"(account: string, messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        "isValidAccountSignature(address,bytes,bytes)"(account: string, message: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "isValidAccountSignature(address,bytes32,bytes)"(account: string, messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        "isValidAccountSignature(address,bytes,bytes)"(account: string, message: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "isValidAccountSignature(address,bytes32,bytes)"(account: string, messageHash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
