/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type DelegatedBatchStruct = {
  account: string;
  nonce: BigNumberish;
  to: string[];
  data: BytesLike[];
};

export type DelegatedBatchStructOutput = [
  string,
  BigNumber,
  string[],
  string[]
] & { account: string; nonce: BigNumber; to: string[]; data: string[] };

export type DelegatedBatchWithGasPriceStruct = {
  account: string;
  nonce: BigNumberish;
  to: string[];
  data: BytesLike[];
  gasPrice: BigNumberish;
};

export type DelegatedBatchWithGasPriceStructOutput = [
  string,
  BigNumber,
  string[],
  string[],
  BigNumber
] & {
  account: string;
  nonce: BigNumber;
  to: string[];
  data: string[];
  gasPrice: BigNumber;
};

export interface GatewayInterface extends utils.Interface {
  functions: {
    "chainId()": FunctionFragment;
    "delegateBatch(address,uint256,address[],bytes[],bytes)": FunctionFragment;
    "delegateBatchWithGasPrice(address,uint256,address[],bytes[],bytes)": FunctionFragment;
    "delegateBatches(bytes[],bool)": FunctionFragment;
    "externalAccountRegistry()": FunctionFragment;
    "getAccountNextNonce(address)": FunctionFragment;
    "hashDelegatedBatch((address,uint256,address[],bytes[]))": FunctionFragment;
    "hashDelegatedBatchWithGasPrice((address,uint256,address[],bytes[],uint256))": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "isInitialized()": FunctionFragment;
    "personalAccountRegistry()": FunctionFragment;
    "sendBatch(address[],bytes[])": FunctionFragment;
    "sendBatchFromAccount(address,address[],bytes[])": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "delegateBatch",
    values: [string, BigNumberish, string[], BytesLike[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "delegateBatchWithGasPrice",
    values: [string, BigNumberish, string[], BytesLike[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "delegateBatches",
    values: [BytesLike[], boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "externalAccountRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountNextNonce",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "hashDelegatedBatch",
    values: [DelegatedBatchStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "hashDelegatedBatchWithGasPrice",
    values: [DelegatedBatchWithGasPriceStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "personalAccountRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sendBatch",
    values: [string[], BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "sendBatchFromAccount",
    values: [string, string[], BytesLike[]]
  ): string;

  decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "delegateBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegateBatchWithGasPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegateBatches",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "externalAccountRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountNextNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashDelegatedBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashDelegatedBatchWithGasPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "personalAccountRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sendBatch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendBatchFromAccount",
    data: BytesLike
  ): Result;

  events: {
    "BatchDelegated(address,bytes,bool)": EventFragment;
    "Initialized(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BatchDelegated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export type BatchDelegatedEvent = TypedEvent<
  [string, string, boolean],
  { sender: string; batch: string; succeeded: boolean }
>;

export type BatchDelegatedEventFilter = TypedEventFilter<BatchDelegatedEvent>;

export type InitializedEvent = TypedEvent<[string], { initializer: string }>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface Gateway extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GatewayInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    chainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    delegateBatch(
      account: string,
      nonce: BigNumberish,
      to: string[],
      data: BytesLike[],
      senderSignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    delegateBatchWithGasPrice(
      account: string,
      nonce: BigNumberish,
      to: string[],
      data: BytesLike[],
      senderSignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    delegateBatches(
      batches: BytesLike[],
      revertOnFailure: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    externalAccountRegistry(overrides?: CallOverrides): Promise<[string]>;

    getAccountNextNonce(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hashDelegatedBatch(
      delegatedBatch: DelegatedBatchStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;

    hashDelegatedBatchWithGasPrice(
      delegatedBatch: DelegatedBatchWithGasPriceStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;

    initialize(
      externalAccountRegistry_: string,
      personalAccountRegistry_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    personalAccountRegistry(overrides?: CallOverrides): Promise<[string]>;

    sendBatch(
      to: string[],
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sendBatchFromAccount(
      account: string,
      to: string[],
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  chainId(overrides?: CallOverrides): Promise<BigNumber>;

  delegateBatch(
    account: string,
    nonce: BigNumberish,
    to: string[],
    data: BytesLike[],
    senderSignature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  delegateBatchWithGasPrice(
    account: string,
    nonce: BigNumberish,
    to: string[],
    data: BytesLike[],
    senderSignature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  delegateBatches(
    batches: BytesLike[],
    revertOnFailure: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  externalAccountRegistry(overrides?: CallOverrides): Promise<string>;

  getAccountNextNonce(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hashDelegatedBatch(
    delegatedBatch: DelegatedBatchStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  hashDelegatedBatchWithGasPrice(
    delegatedBatch: DelegatedBatchWithGasPriceStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  initialize(
    externalAccountRegistry_: string,
    personalAccountRegistry_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isInitialized(overrides?: CallOverrides): Promise<boolean>;

  personalAccountRegistry(overrides?: CallOverrides): Promise<string>;

  sendBatch(
    to: string[],
    data: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sendBatchFromAccount(
    account: string,
    to: string[],
    data: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    chainId(overrides?: CallOverrides): Promise<BigNumber>;

    delegateBatch(
      account: string,
      nonce: BigNumberish,
      to: string[],
      data: BytesLike[],
      senderSignature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    delegateBatchWithGasPrice(
      account: string,
      nonce: BigNumberish,
      to: string[],
      data: BytesLike[],
      senderSignature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    delegateBatches(
      batches: BytesLike[],
      revertOnFailure: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    externalAccountRegistry(overrides?: CallOverrides): Promise<string>;

    getAccountNextNonce(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashDelegatedBatch(
      delegatedBatch: DelegatedBatchStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    hashDelegatedBatchWithGasPrice(
      delegatedBatch: DelegatedBatchWithGasPriceStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(
      externalAccountRegistry_: string,
      personalAccountRegistry_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isInitialized(overrides?: CallOverrides): Promise<boolean>;

    personalAccountRegistry(overrides?: CallOverrides): Promise<string>;

    sendBatch(
      to: string[],
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    sendBatchFromAccount(
      account: string,
      to: string[],
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BatchDelegated(address,bytes,bool)"(
      sender?: null,
      batch?: null,
      succeeded?: null
    ): BatchDelegatedEventFilter;
    BatchDelegated(
      sender?: null,
      batch?: null,
      succeeded?: null
    ): BatchDelegatedEventFilter;

    "Initialized(address)"(initializer?: null): InitializedEventFilter;
    Initialized(initializer?: null): InitializedEventFilter;
  };

  estimateGas: {
    chainId(overrides?: CallOverrides): Promise<BigNumber>;

    delegateBatch(
      account: string,
      nonce: BigNumberish,
      to: string[],
      data: BytesLike[],
      senderSignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    delegateBatchWithGasPrice(
      account: string,
      nonce: BigNumberish,
      to: string[],
      data: BytesLike[],
      senderSignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    delegateBatches(
      batches: BytesLike[],
      revertOnFailure: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    externalAccountRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    getAccountNextNonce(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashDelegatedBatch(
      delegatedBatch: DelegatedBatchStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashDelegatedBatchWithGasPrice(
      delegatedBatch: DelegatedBatchWithGasPriceStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      externalAccountRegistry_: string,
      personalAccountRegistry_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    personalAccountRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    sendBatch(
      to: string[],
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sendBatchFromAccount(
      account: string,
      to: string[],
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    delegateBatch(
      account: string,
      nonce: BigNumberish,
      to: string[],
      data: BytesLike[],
      senderSignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    delegateBatchWithGasPrice(
      account: string,
      nonce: BigNumberish,
      to: string[],
      data: BytesLike[],
      senderSignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    delegateBatches(
      batches: BytesLike[],
      revertOnFailure: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    externalAccountRegistry(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountNextNonce(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashDelegatedBatch(
      delegatedBatch: DelegatedBatchStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashDelegatedBatchWithGasPrice(
      delegatedBatch: DelegatedBatchWithGasPriceStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      externalAccountRegistry_: string,
      personalAccountRegistry_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    personalAccountRegistry(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sendBatch(
      to: string[],
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sendBatchFromAccount(
      account: string,
      to: string[],
      data: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
