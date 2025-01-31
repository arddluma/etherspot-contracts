import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ENSRegistryInterface extends utils.Interface {
    functions: {
        "isApprovedForAll(address,address)": FunctionFragment;
        "owner(bytes32)": FunctionFragment;
        "recordExists(bytes32)": FunctionFragment;
        "resolver(bytes32)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setOwner(bytes32,address)": FunctionFragment;
        "setRecord(bytes32,address,address,uint64)": FunctionFragment;
        "setResolver(bytes32,address)": FunctionFragment;
        "setSubnodeOwner(bytes32,bytes32,address)": FunctionFragment;
        "setSubnodeRecord(bytes32,bytes32,address,address,uint64)": FunctionFragment;
        "setTTL(bytes32,uint64)": FunctionFragment;
        "ttl(bytes32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [string, string]): string;
    encodeFunctionData(functionFragment: "owner", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "recordExists", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "resolver", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setOwner", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setRecord", values: [BytesLike, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setResolver", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setSubnodeOwner", values: [BytesLike, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setSubnodeRecord", values: [BytesLike, BytesLike, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setTTL", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "ttl", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recordExists", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRecord", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setResolver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSubnodeOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSubnodeRecord", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTTL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ttl", data: BytesLike): Result;
    events: {
        "ApprovalForAll(address,address,bool)": EventFragment;
        "NewOwner(bytes32,bytes32,address)": EventFragment;
        "NewResolver(bytes32,address)": EventFragment;
        "NewTTL(bytes32,uint64)": EventFragment;
        "Transfer(bytes32,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewOwner"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewResolver"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewTTL"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export declare type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], {
    owner: string;
    operator: string;
    approved: boolean;
}>;
export declare type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export declare type NewOwnerEvent = TypedEvent<[
    string,
    string,
    string
], {
    node: string;
    label: string;
    owner: string;
}>;
export declare type NewOwnerEventFilter = TypedEventFilter<NewOwnerEvent>;
export declare type NewResolverEvent = TypedEvent<[
    string,
    string
], {
    node: string;
    resolver: string;
}>;
export declare type NewResolverEventFilter = TypedEventFilter<NewResolverEvent>;
export declare type NewTTLEvent = TypedEvent<[
    string,
    BigNumber
], {
    node: string;
    ttl: BigNumber;
}>;
export declare type NewTTLEventFilter = TypedEventFilter<NewTTLEvent>;
export declare type TransferEvent = TypedEvent<[
    string,
    string
], {
    node: string;
    owner: string;
}>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface ENSRegistry extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ENSRegistryInterface;
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
        isApprovedForAll(owner_: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        owner(node: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        recordExists(node: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        resolver(node: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOwner(node: BytesLike, owner_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRecord(node: BytesLike, owner_: string, resolver_: string, ttl_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setResolver(node: BytesLike, resolver_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSubnodeOwner(node: BytesLike, label: BytesLike, owner_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSubnodeRecord(node: BytesLike, label: BytesLike, owner_: string, resolver_: string, ttl_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setTTL(node: BytesLike, ttl_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        ttl(node: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    isApprovedForAll(owner_: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    owner(node: BytesLike, overrides?: CallOverrides): Promise<string>;
    recordExists(node: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    resolver(node: BytesLike, overrides?: CallOverrides): Promise<string>;
    setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOwner(node: BytesLike, owner_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRecord(node: BytesLike, owner_: string, resolver_: string, ttl_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setResolver(node: BytesLike, resolver_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSubnodeOwner(node: BytesLike, label: BytesLike, owner_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSubnodeRecord(node: BytesLike, label: BytesLike, owner_: string, resolver_: string, ttl_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setTTL(node: BytesLike, ttl_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    ttl(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        isApprovedForAll(owner_: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
        owner(node: BytesLike, overrides?: CallOverrides): Promise<string>;
        recordExists(node: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        resolver(node: BytesLike, overrides?: CallOverrides): Promise<string>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: CallOverrides): Promise<void>;
        setOwner(node: BytesLike, owner_: string, overrides?: CallOverrides): Promise<void>;
        setRecord(node: BytesLike, owner_: string, resolver_: string, ttl_: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setResolver(node: BytesLike, resolver_: string, overrides?: CallOverrides): Promise<void>;
        setSubnodeOwner(node: BytesLike, label: BytesLike, owner_: string, overrides?: CallOverrides): Promise<string>;
        setSubnodeRecord(node: BytesLike, label: BytesLike, owner_: string, resolver_: string, ttl_: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setTTL(node: BytesLike, ttl_: BigNumberish, overrides?: CallOverrides): Promise<void>;
        ttl(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "ApprovalForAll(address,address,bool)"(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        "NewOwner(bytes32,bytes32,address)"(node?: BytesLike | null, label?: BytesLike | null, owner?: null): NewOwnerEventFilter;
        NewOwner(node?: BytesLike | null, label?: BytesLike | null, owner?: null): NewOwnerEventFilter;
        "NewResolver(bytes32,address)"(node?: BytesLike | null, resolver?: null): NewResolverEventFilter;
        NewResolver(node?: BytesLike | null, resolver?: null): NewResolverEventFilter;
        "NewTTL(bytes32,uint64)"(node?: BytesLike | null, ttl?: null): NewTTLEventFilter;
        NewTTL(node?: BytesLike | null, ttl?: null): NewTTLEventFilter;
        "Transfer(bytes32,address)"(node?: BytesLike | null, owner?: null): TransferEventFilter;
        Transfer(node?: BytesLike | null, owner?: null): TransferEventFilter;
    };
    estimateGas: {
        isApprovedForAll(owner_: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        recordExists(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        resolver(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOwner(node: BytesLike, owner_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRecord(node: BytesLike, owner_: string, resolver_: string, ttl_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setResolver(node: BytesLike, resolver_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSubnodeOwner(node: BytesLike, label: BytesLike, owner_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSubnodeRecord(node: BytesLike, label: BytesLike, owner_: string, resolver_: string, ttl_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setTTL(node: BytesLike, ttl_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        ttl(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        isApprovedForAll(owner_: string, operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(node: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        recordExists(node: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resolver(node: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOwner(node: BytesLike, owner_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRecord(node: BytesLike, owner_: string, resolver_: string, ttl_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setResolver(node: BytesLike, resolver_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSubnodeOwner(node: BytesLike, label: BytesLike, owner_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSubnodeRecord(node: BytesLike, label: BytesLike, owner_: string, resolver_: string, ttl_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setTTL(node: BytesLike, ttl_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        ttl(node: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
