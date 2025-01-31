import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IHopBridgeInterface extends utils.Interface {
    functions: {
        "sendToL2(uint256,address,uint256,uint256,uint256,address,uint256)": FunctionFragment;
        "swapAndSend(uint256,address,uint256,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "sendToL2", values: [
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "swapAndSend", values: [
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    decodeFunctionResult(functionFragment: "sendToL2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapAndSend", data: BytesLike): Result;
    events: {};
}
export interface IHopBridge extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IHopBridgeInterface;
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
        sendToL2(chainId: BigNumberish, recipient: string, amount: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, relayer: string, relayerFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapAndSend(chainId: BigNumberish, recipient: string, amount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    sendToL2(chainId: BigNumberish, recipient: string, amount: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, relayer: string, relayerFee: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapAndSend(chainId: BigNumberish, recipient: string, amount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        sendToL2(chainId: BigNumberish, recipient: string, amount: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, relayer: string, relayerFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        swapAndSend(chainId: BigNumberish, recipient: string, amount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        sendToL2(chainId: BigNumberish, recipient: string, amount: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, relayer: string, relayerFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapAndSend(chainId: BigNumberish, recipient: string, amount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        sendToL2(chainId: BigNumberish, recipient: string, amount: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, relayer: string, relayerFee: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapAndSend(chainId: BigNumberish, recipient: string, amount: BigNumberish, bonderFee: BigNumberish, amountOutMin: BigNumberish, deadline: BigNumberish, destinationAmountOutMin: BigNumberish, destinationDeadline: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
