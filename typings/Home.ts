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

export interface HomeInterface extends utils.Interface {
  functions: {
    "MAX_MESSAGE_BODY_BYTES()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "committedRoot()": FunctionFragment;
    "count()": FunctionFragment;
    "dispatch(uint32,bytes32,bytes)": FunctionFragment;
    "doubleUpdate(bytes32,bytes32[2],bytes,bytes)": FunctionFragment;
    "homeDomainHash()": FunctionFragment;
    "improperUpdate(bytes32,bytes32,bytes)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "localDomain()": FunctionFragment;
    "nonces(uint32)": FunctionFragment;
    "owner()": FunctionFragment;
    "queueContains(bytes32)": FunctionFragment;
    "queueEnd()": FunctionFragment;
    "queueLength()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "root()": FunctionFragment;
    "setUpdater(address)": FunctionFragment;
    "setUpdaterManager(address)": FunctionFragment;
    "state()": FunctionFragment;
    "suggestUpdate()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "tree()": FunctionFragment;
    "update(bytes32,bytes32,bytes)": FunctionFragment;
    "updater()": FunctionFragment;
    "updaterManager()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MAX_MESSAGE_BODY_BYTES",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "committedRoot",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "count", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "dispatch",
    values: [BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "doubleUpdate",
    values: [BytesLike, [BytesLike, BytesLike], BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "homeDomainHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "improperUpdate",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "localDomain",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nonces",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "queueContains",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "queueEnd", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "queueLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "root", values?: undefined): string;
  encodeFunctionData(functionFragment: "setUpdater", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setUpdaterManager",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "state", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "suggestUpdate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "tree", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "update",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "updater", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updaterManager",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "MAX_MESSAGE_BODY_BYTES",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "committedRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "count", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dispatch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "doubleUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "homeDomainHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "improperUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "localDomain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queueContains",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "queueEnd", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queueLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "root", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setUpdater", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setUpdaterManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "suggestUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tree", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updater", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updaterManager",
    data: BytesLike
  ): Result;

  events: {
    "Dispatch(bytes32,uint256,uint64,bytes32,bytes)": EventFragment;
    "DoubleUpdate(bytes32,bytes32[2],bytes,bytes)": EventFragment;
    "ImproperUpdate(bytes32,bytes32,bytes)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "NewUpdater(address,address)": EventFragment;
    "NewUpdaterManager(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Update(uint32,bytes32,bytes32,bytes)": EventFragment;
    "UpdaterSlashed(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Dispatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DoubleUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ImproperUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewUpdater"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewUpdaterManager"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Update"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdaterSlashed"): EventFragment;
}

export type DispatchEvent = TypedEvent<
  [string, BigNumber, BigNumber, string, string],
  {
    messageHash: string;
    leafIndex: BigNumber;
    destinationAndNonce: BigNumber;
    committedRoot: string;
    message: string;
  }
>;

export type DispatchEventFilter = TypedEventFilter<DispatchEvent>;

export type DoubleUpdateEvent = TypedEvent<
  [string, [string, string], string, string],
  {
    oldRoot: string;
    newRoot: [string, string];
    signature: string;
    signature2: string;
  }
>;

export type DoubleUpdateEventFilter = TypedEventFilter<DoubleUpdateEvent>;

export type ImproperUpdateEvent = TypedEvent<
  [string, string, string],
  { oldRoot: string; newRoot: string; signature: string }
>;

export type ImproperUpdateEventFilter = TypedEventFilter<ImproperUpdateEvent>;

export type InitializedEvent = TypedEvent<[number], { version: number }>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export type NewUpdaterEvent = TypedEvent<
  [string, string],
  { oldUpdater: string; newUpdater: string }
>;

export type NewUpdaterEventFilter = TypedEventFilter<NewUpdaterEvent>;

export type NewUpdaterManagerEvent = TypedEvent<
  [string],
  { updaterManager: string }
>;

export type NewUpdaterManagerEventFilter =
  TypedEventFilter<NewUpdaterManagerEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type UpdateEvent = TypedEvent<
  [number, string, string, string],
  { homeDomain: number; oldRoot: string; newRoot: string; signature: string }
>;

export type UpdateEventFilter = TypedEventFilter<UpdateEvent>;

export type UpdaterSlashedEvent = TypedEvent<
  [string, string],
  { updater: string; reporter: string }
>;

export type UpdaterSlashedEventFilter = TypedEventFilter<UpdaterSlashedEvent>;

export interface Home extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HomeInterface;

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
    MAX_MESSAGE_BODY_BYTES(overrides?: CallOverrides): Promise<[BigNumber]>;

    VERSION(overrides?: CallOverrides): Promise<[number]>;

    committedRoot(overrides?: CallOverrides): Promise<[string]>;

    count(overrides?: CallOverrides): Promise<[BigNumber]>;

    dispatch(
      _destinationDomain: BigNumberish,
      _recipientAddress: BytesLike,
      _messageBody: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    doubleUpdate(
      _oldRoot: BytesLike,
      _newRoot: [BytesLike, BytesLike],
      _signature: BytesLike,
      _signature2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    homeDomainHash(overrides?: CallOverrides): Promise<[string]>;

    improperUpdate(
      _oldRoot: BytesLike,
      _newRoot: BytesLike,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _updaterManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    localDomain(overrides?: CallOverrides): Promise<[number]>;

    nonces(arg0: BigNumberish, overrides?: CallOverrides): Promise<[number]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    queueContains(
      _item: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    queueEnd(overrides?: CallOverrides): Promise<[string]>;

    queueLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    root(overrides?: CallOverrides): Promise<[string]>;

    setUpdater(
      _updater: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUpdaterManager(
      _updaterManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    state(overrides?: CallOverrides): Promise<[number]>;

    suggestUpdate(
      overrides?: CallOverrides
    ): Promise<[string, string] & { _committedRoot: string; _new: string }>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tree(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { count: BigNumber }>;

    update(
      _committedRoot: BytesLike,
      _newRoot: BytesLike,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updater(overrides?: CallOverrides): Promise<[string]>;

    updaterManager(overrides?: CallOverrides): Promise<[string]>;
  };

  MAX_MESSAGE_BODY_BYTES(overrides?: CallOverrides): Promise<BigNumber>;

  VERSION(overrides?: CallOverrides): Promise<number>;

  committedRoot(overrides?: CallOverrides): Promise<string>;

  count(overrides?: CallOverrides): Promise<BigNumber>;

  dispatch(
    _destinationDomain: BigNumberish,
    _recipientAddress: BytesLike,
    _messageBody: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  doubleUpdate(
    _oldRoot: BytesLike,
    _newRoot: [BytesLike, BytesLike],
    _signature: BytesLike,
    _signature2: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  homeDomainHash(overrides?: CallOverrides): Promise<string>;

  improperUpdate(
    _oldRoot: BytesLike,
    _newRoot: BytesLike,
    _signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _updaterManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  localDomain(overrides?: CallOverrides): Promise<number>;

  nonces(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;

  owner(overrides?: CallOverrides): Promise<string>;

  queueContains(_item: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  queueEnd(overrides?: CallOverrides): Promise<string>;

  queueLength(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  root(overrides?: CallOverrides): Promise<string>;

  setUpdater(
    _updater: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUpdaterManager(
    _updaterManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  state(overrides?: CallOverrides): Promise<number>;

  suggestUpdate(
    overrides?: CallOverrides
  ): Promise<[string, string] & { _committedRoot: string; _new: string }>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tree(overrides?: CallOverrides): Promise<BigNumber>;

  update(
    _committedRoot: BytesLike,
    _newRoot: BytesLike,
    _signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updater(overrides?: CallOverrides): Promise<string>;

  updaterManager(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    MAX_MESSAGE_BODY_BYTES(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<number>;

    committedRoot(overrides?: CallOverrides): Promise<string>;

    count(overrides?: CallOverrides): Promise<BigNumber>;

    dispatch(
      _destinationDomain: BigNumberish,
      _recipientAddress: BytesLike,
      _messageBody: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    doubleUpdate(
      _oldRoot: BytesLike,
      _newRoot: [BytesLike, BytesLike],
      _signature: BytesLike,
      _signature2: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    homeDomainHash(overrides?: CallOverrides): Promise<string>;

    improperUpdate(
      _oldRoot: BytesLike,
      _newRoot: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      _updaterManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    localDomain(overrides?: CallOverrides): Promise<number>;

    nonces(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;

    owner(overrides?: CallOverrides): Promise<string>;

    queueContains(
      _item: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    queueEnd(overrides?: CallOverrides): Promise<string>;

    queueLength(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    root(overrides?: CallOverrides): Promise<string>;

    setUpdater(_updater: string, overrides?: CallOverrides): Promise<void>;

    setUpdaterManager(
      _updaterManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    state(overrides?: CallOverrides): Promise<number>;

    suggestUpdate(
      overrides?: CallOverrides
    ): Promise<[string, string] & { _committedRoot: string; _new: string }>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    tree(overrides?: CallOverrides): Promise<BigNumber>;

    update(
      _committedRoot: BytesLike,
      _newRoot: BytesLike,
      _signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    updater(overrides?: CallOverrides): Promise<string>;

    updaterManager(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Dispatch(bytes32,uint256,uint64,bytes32,bytes)"(
      messageHash?: BytesLike | null,
      leafIndex?: BigNumberish | null,
      destinationAndNonce?: BigNumberish | null,
      committedRoot?: null,
      message?: null
    ): DispatchEventFilter;
    Dispatch(
      messageHash?: BytesLike | null,
      leafIndex?: BigNumberish | null,
      destinationAndNonce?: BigNumberish | null,
      committedRoot?: null,
      message?: null
    ): DispatchEventFilter;

    "DoubleUpdate(bytes32,bytes32[2],bytes,bytes)"(
      oldRoot?: null,
      newRoot?: null,
      signature?: null,
      signature2?: null
    ): DoubleUpdateEventFilter;
    DoubleUpdate(
      oldRoot?: null,
      newRoot?: null,
      signature?: null,
      signature2?: null
    ): DoubleUpdateEventFilter;

    "ImproperUpdate(bytes32,bytes32,bytes)"(
      oldRoot?: null,
      newRoot?: null,
      signature?: null
    ): ImproperUpdateEventFilter;
    ImproperUpdate(
      oldRoot?: null,
      newRoot?: null,
      signature?: null
    ): ImproperUpdateEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "NewUpdater(address,address)"(
      oldUpdater?: null,
      newUpdater?: null
    ): NewUpdaterEventFilter;
    NewUpdater(oldUpdater?: null, newUpdater?: null): NewUpdaterEventFilter;

    "NewUpdaterManager(address)"(
      updaterManager?: null
    ): NewUpdaterManagerEventFilter;
    NewUpdaterManager(updaterManager?: null): NewUpdaterManagerEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Update(uint32,bytes32,bytes32,bytes)"(
      homeDomain?: BigNumberish | null,
      oldRoot?: BytesLike | null,
      newRoot?: BytesLike | null,
      signature?: null
    ): UpdateEventFilter;
    Update(
      homeDomain?: BigNumberish | null,
      oldRoot?: BytesLike | null,
      newRoot?: BytesLike | null,
      signature?: null
    ): UpdateEventFilter;

    "UpdaterSlashed(address,address)"(
      updater?: string | null,
      reporter?: string | null
    ): UpdaterSlashedEventFilter;
    UpdaterSlashed(
      updater?: string | null,
      reporter?: string | null
    ): UpdaterSlashedEventFilter;
  };

  estimateGas: {
    MAX_MESSAGE_BODY_BYTES(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    committedRoot(overrides?: CallOverrides): Promise<BigNumber>;

    count(overrides?: CallOverrides): Promise<BigNumber>;

    dispatch(
      _destinationDomain: BigNumberish,
      _recipientAddress: BytesLike,
      _messageBody: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    doubleUpdate(
      _oldRoot: BytesLike,
      _newRoot: [BytesLike, BytesLike],
      _signature: BytesLike,
      _signature2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    homeDomainHash(overrides?: CallOverrides): Promise<BigNumber>;

    improperUpdate(
      _oldRoot: BytesLike,
      _newRoot: BytesLike,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _updaterManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    localDomain(overrides?: CallOverrides): Promise<BigNumber>;

    nonces(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    queueContains(
      _item: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queueEnd(overrides?: CallOverrides): Promise<BigNumber>;

    queueLength(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    root(overrides?: CallOverrides): Promise<BigNumber>;

    setUpdater(
      _updater: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUpdaterManager(
      _updaterManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    state(overrides?: CallOverrides): Promise<BigNumber>;

    suggestUpdate(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tree(overrides?: CallOverrides): Promise<BigNumber>;

    update(
      _committedRoot: BytesLike,
      _newRoot: BytesLike,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updater(overrides?: CallOverrides): Promise<BigNumber>;

    updaterManager(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_MESSAGE_BODY_BYTES(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    committedRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    count(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dispatch(
      _destinationDomain: BigNumberish,
      _recipientAddress: BytesLike,
      _messageBody: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    doubleUpdate(
      _oldRoot: BytesLike,
      _newRoot: [BytesLike, BytesLike],
      _signature: BytesLike,
      _signature2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    homeDomainHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    improperUpdate(
      _oldRoot: BytesLike,
      _newRoot: BytesLike,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _updaterManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    localDomain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonces(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queueContains(
      _item: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    queueEnd(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queueLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    root(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setUpdater(
      _updater: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUpdaterManager(
      _updaterManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    state(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    suggestUpdate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tree(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    update(
      _committedRoot: BytesLike,
      _newRoot: BytesLike,
      _signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updater(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updaterManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
