/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface GatewayInterface extends ethers.utils.Interface {
  functions: {
    "delegateBatch(address,uint256,address[],bytes[],bytes)": FunctionFragment;
    "delegateBatchWithGasPrice(address,uint256,address[],bytes[],bytes)": FunctionFragment;
    "delegateBatches(bytes[],bool)": FunctionFragment;
    "externalAccountRegistry()": FunctionFragment;
    "getAccountNextNonce(address)": FunctionFragment;
    "hashDelegatedBatch(tuple)": FunctionFragment;
    "hashDelegatedBatchWithGasPrice(tuple)": FunctionFragment;
    "initialize(address,address,bytes32,bytes32,bytes32)": FunctionFragment;
    "isInitialized()": FunctionFragment;
    "personalAccountRegistry()": FunctionFragment;
    "sendBatch(address[],bytes[])": FunctionFragment;
    "sendBatchFromAccount(address,address[],bytes[])": FunctionFragment;
    "typedDataDomainSeparator()": FunctionFragment;
  };

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
    values: [
      { account: string; nonce: BigNumberish; to: string[]; data: BytesLike[] }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "hashDelegatedBatchWithGasPrice",
    values: [
      {
        account: string;
        nonce: BigNumberish;
        to: string[];
        data: BytesLike[];
        gasPrice: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, BytesLike, BytesLike, BytesLike]
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
  encodeFunctionData(
    functionFragment: "typedDataDomainSeparator",
    values?: undefined
  ): string;

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
  decodeFunctionResult(
    functionFragment: "typedDataDomainSeparator",
    data: BytesLike
  ): Result;

  events: {
    "BatchDelegated(address,bytes,bool)": EventFragment;
    "Initialized(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BatchDelegated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export class Gateway extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: GatewayInterface;

  functions: {
    delegateBatch(
      account: string,
      nonce: BigNumberish,
      to: string[],
      data: BytesLike[],
      senderSignature: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "delegateBatch(address,uint256,address[],bytes[],bytes)"(
      account: string,
      nonce: BigNumberish,
      to: string[],
      data: BytesLike[],
      senderSignature: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    delegateBatchWithGasPrice(
      account: string,
      nonce: BigNumberish,
      to: string[],
      data: BytesLike[],
      senderSignature: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "delegateBatchWithGasPrice(address,uint256,address[],bytes[],bytes)"(
      account: string,
      nonce: BigNumberish,
      to: string[],
      data: BytesLike[],
      senderSignature: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    delegateBatches(
      batches: BytesLike[],
      revertOnFailure: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "delegateBatches(bytes[],bool)"(
      batches: BytesLike[],
      revertOnFailure: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    externalAccountRegistry(overrides?: CallOverrides): Promise<[string]>;

    "externalAccountRegistry()"(overrides?: CallOverrides): Promise<[string]>;

    getAccountNextNonce(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getAccountNextNonce(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hashDelegatedBatch(
      delegatedBatch: {
        account: string;
        nonce: BigNumberish;
        to: string[];
        data: BytesLike[];
      },
      overrides?: CallOverrides
    ): Promise<[string]>;

    "hashDelegatedBatch(tuple)"(
      delegatedBatch: {
        account: string;
        nonce: BigNumberish;
        to: string[];
        data: BytesLike[];
      },
      overrides?: CallOverrides
    ): Promise<[string]>;

    hashDelegatedBatchWithGasPrice(
      delegatedBatch: {
        account: string;
        nonce: BigNumberish;
        to: string[];
        data: BytesLike[];
        gasPrice: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<[string]>;

    "hashDelegatedBatchWithGasPrice(tuple)"(
      delegatedBatch: {
        account: string;
        nonce: BigNumberish;
        to: string[];
        data: BytesLike[];
        gasPrice: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<[string]>;

    initialize(
      externalAccountRegistry_: string,
      personalAccountRegistry_: string,
      typedDataDomainNameHash: BytesLike,
      typedDataDomainVersionHash: BytesLike,
      typedDataDomainSalt: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address,address,bytes32,bytes32,bytes32)"(
      externalAccountRegistry_: string,
      personalAccountRegistry_: string,
      typedDataDomainNameHash: BytesLike,
      typedDataDomainVersionHash: BytesLike,
      typedDataDomainSalt: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    "isInitialized()"(overrides?: CallOverrides): Promise<[boolean]>;

    personalAccountRegistry(overrides?: CallOverrides): Promise<[string]>;

    "personalAccountRegistry()"(overrides?: CallOverrides): Promise<[string]>;

    sendBatch(
      to: string[],
      data: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "sendBatch(address[],bytes[])"(
      to: string[],
      data: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    sendBatchFromAccount(
      account: string,
      to: string[],
      data: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "sendBatchFromAccount(address,address[],bytes[])"(
      account: string,
      to: string[],
      data: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    typedDataDomainSeparator(overrides?: CallOverrides): Promise<[string]>;

    "typedDataDomainSeparator()"(overrides?: CallOverrides): Promise<[string]>;
  };

  delegateBatch(
    account: string,
    nonce: BigNumberish,
    to: string[],
    data: BytesLike[],
    senderSignature: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "delegateBatch(address,uint256,address[],bytes[],bytes)"(
    account: string,
    nonce: BigNumberish,
    to: string[],
    data: BytesLike[],
    senderSignature: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  delegateBatchWithGasPrice(
    account: string,
    nonce: BigNumberish,
    to: string[],
    data: BytesLike[],
    senderSignature: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "delegateBatchWithGasPrice(address,uint256,address[],bytes[],bytes)"(
    account: string,
    nonce: BigNumberish,
    to: string[],
    data: BytesLike[],
    senderSignature: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  delegateBatches(
    batches: BytesLike[],
    revertOnFailure: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "delegateBatches(bytes[],bool)"(
    batches: BytesLike[],
    revertOnFailure: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  externalAccountRegistry(overrides?: CallOverrides): Promise<string>;

  "externalAccountRegistry()"(overrides?: CallOverrides): Promise<string>;

  getAccountNextNonce(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getAccountNextNonce(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hashDelegatedBatch(
    delegatedBatch: {
      account: string;
      nonce: BigNumberish;
      to: string[];
      data: BytesLike[];
    },
    overrides?: CallOverrides
  ): Promise<string>;

  "hashDelegatedBatch(tuple)"(
    delegatedBatch: {
      account: string;
      nonce: BigNumberish;
      to: string[];
      data: BytesLike[];
    },
    overrides?: CallOverrides
  ): Promise<string>;

  hashDelegatedBatchWithGasPrice(
    delegatedBatch: {
      account: string;
      nonce: BigNumberish;
      to: string[];
      data: BytesLike[];
      gasPrice: BigNumberish;
    },
    overrides?: CallOverrides
  ): Promise<string>;

  "hashDelegatedBatchWithGasPrice(tuple)"(
    delegatedBatch: {
      account: string;
      nonce: BigNumberish;
      to: string[];
      data: BytesLike[];
      gasPrice: BigNumberish;
    },
    overrides?: CallOverrides
  ): Promise<string>;

  initialize(
    externalAccountRegistry_: string,
    personalAccountRegistry_: string,
    typedDataDomainNameHash: BytesLike,
    typedDataDomainVersionHash: BytesLike,
    typedDataDomainSalt: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address,address,bytes32,bytes32,bytes32)"(
    externalAccountRegistry_: string,
    personalAccountRegistry_: string,
    typedDataDomainNameHash: BytesLike,
    typedDataDomainVersionHash: BytesLike,
    typedDataDomainSalt: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isInitialized(overrides?: CallOverrides): Promise<boolean>;

  "isInitialized()"(overrides?: CallOverrides): Promise<boolean>;

  personalAccountRegistry(overrides?: CallOverrides): Promise<string>;

  "personalAccountRegistry()"(overrides?: CallOverrides): Promise<string>;

  sendBatch(
    to: string[],
    data: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "sendBatch(address[],bytes[])"(
    to: string[],
    data: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  sendBatchFromAccount(
    account: string,
    to: string[],
    data: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "sendBatchFromAccount(address,address[],bytes[])"(
    account: string,
    to: string[],
    data: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  typedDataDomainSeparator(overrides?: CallOverrides): Promise<string>;

  "typedDataDomainSeparator()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    delegateBatch(
      account: string,
      nonce: BigNumberish,
      to: string[],
      data: BytesLike[],
      senderSignature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "delegateBatch(address,uint256,address[],bytes[],bytes)"(
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

    "delegateBatchWithGasPrice(address,uint256,address[],bytes[],bytes)"(
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

    "delegateBatches(bytes[],bool)"(
      batches: BytesLike[],
      revertOnFailure: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    externalAccountRegistry(overrides?: CallOverrides): Promise<string>;

    "externalAccountRegistry()"(overrides?: CallOverrides): Promise<string>;

    getAccountNextNonce(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAccountNextNonce(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashDelegatedBatch(
      delegatedBatch: {
        account: string;
        nonce: BigNumberish;
        to: string[];
        data: BytesLike[];
      },
      overrides?: CallOverrides
    ): Promise<string>;

    "hashDelegatedBatch(tuple)"(
      delegatedBatch: {
        account: string;
        nonce: BigNumberish;
        to: string[];
        data: BytesLike[];
      },
      overrides?: CallOverrides
    ): Promise<string>;

    hashDelegatedBatchWithGasPrice(
      delegatedBatch: {
        account: string;
        nonce: BigNumberish;
        to: string[];
        data: BytesLike[];
        gasPrice: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    "hashDelegatedBatchWithGasPrice(tuple)"(
      delegatedBatch: {
        account: string;
        nonce: BigNumberish;
        to: string[];
        data: BytesLike[];
        gasPrice: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(
      externalAccountRegistry_: string,
      personalAccountRegistry_: string,
      typedDataDomainNameHash: BytesLike,
      typedDataDomainVersionHash: BytesLike,
      typedDataDomainSalt: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,address,bytes32,bytes32,bytes32)"(
      externalAccountRegistry_: string,
      personalAccountRegistry_: string,
      typedDataDomainNameHash: BytesLike,
      typedDataDomainVersionHash: BytesLike,
      typedDataDomainSalt: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    isInitialized(overrides?: CallOverrides): Promise<boolean>;

    "isInitialized()"(overrides?: CallOverrides): Promise<boolean>;

    personalAccountRegistry(overrides?: CallOverrides): Promise<string>;

    "personalAccountRegistry()"(overrides?: CallOverrides): Promise<string>;

    sendBatch(
      to: string[],
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    "sendBatch(address[],bytes[])"(
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

    "sendBatchFromAccount(address,address[],bytes[])"(
      account: string,
      to: string[],
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    typedDataDomainSeparator(overrides?: CallOverrides): Promise<string>;

    "typedDataDomainSeparator()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    BatchDelegated(sender: null, batch: null, succeeded: null): EventFilter;

    Initialized(initializer: null): EventFilter;
  };

  estimateGas: {
    delegateBatch(
      account: string,
      nonce: BigNumberish,
      to: string[],
      data: BytesLike[],
      senderSignature: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "delegateBatch(address,uint256,address[],bytes[],bytes)"(
      account: string,
      nonce: BigNumberish,
      to: string[],
      data: BytesLike[],
      senderSignature: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    delegateBatchWithGasPrice(
      account: string,
      nonce: BigNumberish,
      to: string[],
      data: BytesLike[],
      senderSignature: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "delegateBatchWithGasPrice(address,uint256,address[],bytes[],bytes)"(
      account: string,
      nonce: BigNumberish,
      to: string[],
      data: BytesLike[],
      senderSignature: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    delegateBatches(
      batches: BytesLike[],
      revertOnFailure: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "delegateBatches(bytes[],bool)"(
      batches: BytesLike[],
      revertOnFailure: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    externalAccountRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    "externalAccountRegistry()"(overrides?: CallOverrides): Promise<BigNumber>;

    getAccountNextNonce(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAccountNextNonce(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashDelegatedBatch(
      delegatedBatch: {
        account: string;
        nonce: BigNumberish;
        to: string[];
        data: BytesLike[];
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hashDelegatedBatch(tuple)"(
      delegatedBatch: {
        account: string;
        nonce: BigNumberish;
        to: string[];
        data: BytesLike[];
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashDelegatedBatchWithGasPrice(
      delegatedBatch: {
        account: string;
        nonce: BigNumberish;
        to: string[];
        data: BytesLike[];
        gasPrice: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hashDelegatedBatchWithGasPrice(tuple)"(
      delegatedBatch: {
        account: string;
        nonce: BigNumberish;
        to: string[];
        data: BytesLike[];
        gasPrice: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      externalAccountRegistry_: string,
      personalAccountRegistry_: string,
      typedDataDomainNameHash: BytesLike,
      typedDataDomainVersionHash: BytesLike,
      typedDataDomainSalt: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address,address,bytes32,bytes32,bytes32)"(
      externalAccountRegistry_: string,
      personalAccountRegistry_: string,
      typedDataDomainNameHash: BytesLike,
      typedDataDomainVersionHash: BytesLike,
      typedDataDomainSalt: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    isInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    "isInitialized()"(overrides?: CallOverrides): Promise<BigNumber>;

    personalAccountRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    "personalAccountRegistry()"(overrides?: CallOverrides): Promise<BigNumber>;

    sendBatch(
      to: string[],
      data: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "sendBatch(address[],bytes[])"(
      to: string[],
      data: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    sendBatchFromAccount(
      account: string,
      to: string[],
      data: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "sendBatchFromAccount(address,address[],bytes[])"(
      account: string,
      to: string[],
      data: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    typedDataDomainSeparator(overrides?: CallOverrides): Promise<BigNumber>;

    "typedDataDomainSeparator()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    delegateBatch(
      account: string,
      nonce: BigNumberish,
      to: string[],
      data: BytesLike[],
      senderSignature: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "delegateBatch(address,uint256,address[],bytes[],bytes)"(
      account: string,
      nonce: BigNumberish,
      to: string[],
      data: BytesLike[],
      senderSignature: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    delegateBatchWithGasPrice(
      account: string,
      nonce: BigNumberish,
      to: string[],
      data: BytesLike[],
      senderSignature: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "delegateBatchWithGasPrice(address,uint256,address[],bytes[],bytes)"(
      account: string,
      nonce: BigNumberish,
      to: string[],
      data: BytesLike[],
      senderSignature: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    delegateBatches(
      batches: BytesLike[],
      revertOnFailure: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "delegateBatches(bytes[],bool)"(
      batches: BytesLike[],
      revertOnFailure: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    externalAccountRegistry(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "externalAccountRegistry()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountNextNonce(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAccountNextNonce(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashDelegatedBatch(
      delegatedBatch: {
        account: string;
        nonce: BigNumberish;
        to: string[];
        data: BytesLike[];
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hashDelegatedBatch(tuple)"(
      delegatedBatch: {
        account: string;
        nonce: BigNumberish;
        to: string[];
        data: BytesLike[];
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashDelegatedBatchWithGasPrice(
      delegatedBatch: {
        account: string;
        nonce: BigNumberish;
        to: string[];
        data: BytesLike[];
        gasPrice: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hashDelegatedBatchWithGasPrice(tuple)"(
      delegatedBatch: {
        account: string;
        nonce: BigNumberish;
        to: string[];
        data: BytesLike[];
        gasPrice: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      externalAccountRegistry_: string,
      personalAccountRegistry_: string,
      typedDataDomainNameHash: BytesLike,
      typedDataDomainVersionHash: BytesLike,
      typedDataDomainSalt: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address,address,bytes32,bytes32,bytes32)"(
      externalAccountRegistry_: string,
      personalAccountRegistry_: string,
      typedDataDomainNameHash: BytesLike,
      typedDataDomainVersionHash: BytesLike,
      typedDataDomainSalt: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isInitialized()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    personalAccountRegistry(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "personalAccountRegistry()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sendBatch(
      to: string[],
      data: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "sendBatch(address[],bytes[])"(
      to: string[],
      data: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    sendBatchFromAccount(
      account: string,
      to: string[],
      data: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "sendBatchFromAccount(address,address[],bytes[])"(
      account: string,
      to: string[],
      data: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    typedDataDomainSeparator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "typedDataDomainSeparator()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
