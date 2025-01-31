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

export type SubNodeRegistrationStruct = {
  account: string;
  node: BytesLike;
  label: BytesLike;
};

export type SubNodeRegistrationStructOutput = [string, string, string] & {
  account: string;
  node: string;
  label: string;
};

export interface ENSControllerInterface extends utils.Interface {
  functions: {
    "addGuardian(address)": FunctionFragment;
    "addr(bytes32)": FunctionFragment;
    "chainId()": FunctionFragment;
    "gateway()": FunctionFragment;
    "hashSubNodeRegistration((address,bytes32,bytes32))": FunctionFragment;
    "initialize(address,address[],address)": FunctionFragment;
    "isGuardian(address)": FunctionFragment;
    "isInitialized()": FunctionFragment;
    "name(bytes32)": FunctionFragment;
    "nodeOwners(bytes32)": FunctionFragment;
    "pubkey(bytes32)": FunctionFragment;
    "registerSubNode(bytes32,bytes32,bytes)": FunctionFragment;
    "registry()": FunctionFragment;
    "releaseNode(bytes32)": FunctionFragment;
    "removeGuardian(address)": FunctionFragment;
    "setAddr(bytes32,uint256,bytes)": FunctionFragment;
    "setName(bytes32,string)": FunctionFragment;
    "setPubkey(bytes32,bytes32,bytes32)": FunctionFragment;
    "setRegistry(address)": FunctionFragment;
    "setText(bytes32,string,string)": FunctionFragment;
    "submitNode(bytes32)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "syncAddr(bytes32)": FunctionFragment;
    "text(bytes32,string)": FunctionFragment;
    "verifyGuardianSignature(bytes32,bytes)": FunctionFragment;
    "verifyNode(bytes32)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addGuardian", values: [string]): string;
  encodeFunctionData(functionFragment: "addr", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
  encodeFunctionData(functionFragment: "gateway", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "hashSubNodeRegistration",
    values: [SubNodeRegistrationStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string[], string]
  ): string;
  encodeFunctionData(functionFragment: "isGuardian", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "nodeOwners",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "pubkey", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "registerSubNode",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "releaseNode",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeGuardian",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setAddr",
    values: [BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setName",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPubkey",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "setRegistry", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setText",
    values: [BytesLike, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "submitNode",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "syncAddr", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "text",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyGuardianSignature",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyNode",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "addGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gateway", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hashSubNodeRegistration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isGuardian", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nodeOwners", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pubkey", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerSubNode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "releaseNode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAddr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPubkey", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setText", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "submitNode", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "syncAddr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "text", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifyGuardianSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verifyNode", data: BytesLike): Result;

  events: {
    "AddrChanged(bytes32,address)": EventFragment;
    "AddressChanged(bytes32,uint256,bytes)": EventFragment;
    "GuardianAdded(address,address)": EventFragment;
    "GuardianRemoved(address,address)": EventFragment;
    "Initialized(address)": EventFragment;
    "NameChanged(bytes32,string)": EventFragment;
    "NodeReleased(bytes32,address)": EventFragment;
    "NodeSubmitted(bytes32,address)": EventFragment;
    "NodeVerified(bytes32)": EventFragment;
    "PubkeyChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RegistryChanged(address)": EventFragment;
    "TextChanged(bytes32,string,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddrChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AddressChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GuardianAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GuardianRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NameChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NodeReleased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NodeSubmitted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NodeVerified"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PubkeyChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RegistryChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TextChanged"): EventFragment;
}

export type AddrChangedEvent = TypedEvent<
  [string, string],
  { node: string; addr: string }
>;

export type AddrChangedEventFilter = TypedEventFilter<AddrChangedEvent>;

export type AddressChangedEvent = TypedEvent<
  [string, BigNumber, string],
  { node: string; coinType: BigNumber; newAddress: string }
>;

export type AddressChangedEventFilter = TypedEventFilter<AddressChangedEvent>;

export type GuardianAddedEvent = TypedEvent<
  [string, string],
  { sender: string; guardian: string }
>;

export type GuardianAddedEventFilter = TypedEventFilter<GuardianAddedEvent>;

export type GuardianRemovedEvent = TypedEvent<
  [string, string],
  { sender: string; guardian: string }
>;

export type GuardianRemovedEventFilter = TypedEventFilter<GuardianRemovedEvent>;

export type InitializedEvent = TypedEvent<[string], { initializer: string }>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export type NameChangedEvent = TypedEvent<
  [string, string],
  { node: string; name: string }
>;

export type NameChangedEventFilter = TypedEventFilter<NameChangedEvent>;

export type NodeReleasedEvent = TypedEvent<
  [string, string],
  { node: string; owner: string }
>;

export type NodeReleasedEventFilter = TypedEventFilter<NodeReleasedEvent>;

export type NodeSubmittedEvent = TypedEvent<
  [string, string],
  { node: string; owner: string }
>;

export type NodeSubmittedEventFilter = TypedEventFilter<NodeSubmittedEvent>;

export type NodeVerifiedEvent = TypedEvent<[string], { node: string }>;

export type NodeVerifiedEventFilter = TypedEventFilter<NodeVerifiedEvent>;

export type PubkeyChangedEvent = TypedEvent<
  [string, string, string],
  { node: string; x: string; y: string }
>;

export type PubkeyChangedEventFilter = TypedEventFilter<PubkeyChangedEvent>;

export type RegistryChangedEvent = TypedEvent<[string], { registry: string }>;

export type RegistryChangedEventFilter = TypedEventFilter<RegistryChangedEvent>;

export type TextChangedEvent = TypedEvent<
  [string, string, string],
  { node: string; indexedKey: string; key: string }
>;

export type TextChangedEventFilter = TypedEventFilter<TextChangedEvent>;

export interface ENSController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ENSControllerInterface;

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
    addGuardian(
      guardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addr(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "addr(bytes32,uint256)"(
      node: BytesLike,
      coinType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    chainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    gateway(overrides?: CallOverrides): Promise<[string]>;

    hashSubNodeRegistration(
      subNodeRegistration: SubNodeRegistrationStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;

    initialize(
      registry_: string,
      guardians_: string[],
      gateway_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isGuardian(guardian: string, overrides?: CallOverrides): Promise<[boolean]>;

    isInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    name(node: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    nodeOwners(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    pubkey(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string] & { x: string; y: string }>;

    registerSubNode(
      node: BytesLike,
      label: BytesLike,
      guardianSignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    releaseNode(
      node: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeGuardian(
      guardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setAddr(bytes32,uint256,bytes)"(
      node: BytesLike,
      coinType: BigNumberish,
      addr_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setAddr(bytes32,address)"(
      node: BytesLike,
      addr_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setName(
      node: BytesLike,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPubkey(
      node: BytesLike,
      x: BytesLike,
      y: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRegistry(
      registry_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setText(
      node: BytesLike,
      key: string,
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    submitNode(
      node: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    syncAddr(
      node: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    text(
      node: BytesLike,
      key: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    verifyGuardianSignature(
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    verifyNode(
      node: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addGuardian(
    guardian: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addr(bytes32)"(node: BytesLike, overrides?: CallOverrides): Promise<string>;

  "addr(bytes32,uint256)"(
    node: BytesLike,
    coinType: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  chainId(overrides?: CallOverrides): Promise<BigNumber>;

  gateway(overrides?: CallOverrides): Promise<string>;

  hashSubNodeRegistration(
    subNodeRegistration: SubNodeRegistrationStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  initialize(
    registry_: string,
    guardians_: string[],
    gateway_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isGuardian(guardian: string, overrides?: CallOverrides): Promise<boolean>;

  isInitialized(overrides?: CallOverrides): Promise<boolean>;

  name(node: BytesLike, overrides?: CallOverrides): Promise<string>;

  nodeOwners(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  pubkey(
    node: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, string] & { x: string; y: string }>;

  registerSubNode(
    node: BytesLike,
    label: BytesLike,
    guardianSignature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registry(overrides?: CallOverrides): Promise<string>;

  releaseNode(
    node: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeGuardian(
    guardian: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setAddr(bytes32,uint256,bytes)"(
    node: BytesLike,
    coinType: BigNumberish,
    addr_: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setAddr(bytes32,address)"(
    node: BytesLike,
    addr_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setName(
    node: BytesLike,
    name: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPubkey(
    node: BytesLike,
    x: BytesLike,
    y: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRegistry(
    registry_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setText(
    node: BytesLike,
    key: string,
    value: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  submitNode(
    node: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceID: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  syncAddr(
    node: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  text(
    node: BytesLike,
    key: string,
    overrides?: CallOverrides
  ): Promise<string>;

  verifyGuardianSignature(
    messageHash: BytesLike,
    signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  verifyNode(
    node: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addGuardian(guardian: string, overrides?: CallOverrides): Promise<void>;

    "addr(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "addr(bytes32,uint256)"(
      node: BytesLike,
      coinType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    chainId(overrides?: CallOverrides): Promise<BigNumber>;

    gateway(overrides?: CallOverrides): Promise<string>;

    hashSubNodeRegistration(
      subNodeRegistration: SubNodeRegistrationStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(
      registry_: string,
      guardians_: string[],
      gateway_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isGuardian(guardian: string, overrides?: CallOverrides): Promise<boolean>;

    isInitialized(overrides?: CallOverrides): Promise<boolean>;

    name(node: BytesLike, overrides?: CallOverrides): Promise<string>;

    nodeOwners(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    pubkey(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, string] & { x: string; y: string }>;

    registerSubNode(
      node: BytesLike,
      label: BytesLike,
      guardianSignature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    registry(overrides?: CallOverrides): Promise<string>;

    releaseNode(node: BytesLike, overrides?: CallOverrides): Promise<void>;

    removeGuardian(guardian: string, overrides?: CallOverrides): Promise<void>;

    "setAddr(bytes32,uint256,bytes)"(
      node: BytesLike,
      coinType: BigNumberish,
      addr_: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAddr(bytes32,address)"(
      node: BytesLike,
      addr_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setName(
      node: BytesLike,
      name: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPubkey(
      node: BytesLike,
      x: BytesLike,
      y: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setRegistry(registry_: string, overrides?: CallOverrides): Promise<void>;

    setText(
      node: BytesLike,
      key: string,
      value: string,
      overrides?: CallOverrides
    ): Promise<void>;

    submitNode(node: BytesLike, overrides?: CallOverrides): Promise<void>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    syncAddr(node: BytesLike, overrides?: CallOverrides): Promise<void>;

    text(
      node: BytesLike,
      key: string,
      overrides?: CallOverrides
    ): Promise<string>;

    verifyGuardianSignature(
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyNode(node: BytesLike, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "AddrChanged(bytes32,address)"(
      node?: BytesLike | null,
      addr?: null
    ): AddrChangedEventFilter;
    AddrChanged(node?: BytesLike | null, addr?: null): AddrChangedEventFilter;

    "AddressChanged(bytes32,uint256,bytes)"(
      node?: BytesLike | null,
      coinType?: null,
      newAddress?: null
    ): AddressChangedEventFilter;
    AddressChanged(
      node?: BytesLike | null,
      coinType?: null,
      newAddress?: null
    ): AddressChangedEventFilter;

    "GuardianAdded(address,address)"(
      sender?: null,
      guardian?: null
    ): GuardianAddedEventFilter;
    GuardianAdded(sender?: null, guardian?: null): GuardianAddedEventFilter;

    "GuardianRemoved(address,address)"(
      sender?: null,
      guardian?: null
    ): GuardianRemovedEventFilter;
    GuardianRemoved(sender?: null, guardian?: null): GuardianRemovedEventFilter;

    "Initialized(address)"(initializer?: null): InitializedEventFilter;
    Initialized(initializer?: null): InitializedEventFilter;

    "NameChanged(bytes32,string)"(
      node?: BytesLike | null,
      name?: null
    ): NameChangedEventFilter;
    NameChanged(node?: BytesLike | null, name?: null): NameChangedEventFilter;

    "NodeReleased(bytes32,address)"(
      node?: null,
      owner?: null
    ): NodeReleasedEventFilter;
    NodeReleased(node?: null, owner?: null): NodeReleasedEventFilter;

    "NodeSubmitted(bytes32,address)"(
      node?: null,
      owner?: null
    ): NodeSubmittedEventFilter;
    NodeSubmitted(node?: null, owner?: null): NodeSubmittedEventFilter;

    "NodeVerified(bytes32)"(node?: null): NodeVerifiedEventFilter;
    NodeVerified(node?: null): NodeVerifiedEventFilter;

    "PubkeyChanged(bytes32,bytes32,bytes32)"(
      node?: BytesLike | null,
      x?: null,
      y?: null
    ): PubkeyChangedEventFilter;
    PubkeyChanged(
      node?: BytesLike | null,
      x?: null,
      y?: null
    ): PubkeyChangedEventFilter;

    "RegistryChanged(address)"(registry?: null): RegistryChangedEventFilter;
    RegistryChanged(registry?: null): RegistryChangedEventFilter;

    "TextChanged(bytes32,string,string)"(
      node?: BytesLike | null,
      indexedKey?: string | null,
      key?: null
    ): TextChangedEventFilter;
    TextChanged(
      node?: BytesLike | null,
      indexedKey?: string | null,
      key?: null
    ): TextChangedEventFilter;
  };

  estimateGas: {
    addGuardian(
      guardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addr(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "addr(bytes32,uint256)"(
      node: BytesLike,
      coinType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    chainId(overrides?: CallOverrides): Promise<BigNumber>;

    gateway(overrides?: CallOverrides): Promise<BigNumber>;

    hashSubNodeRegistration(
      subNodeRegistration: SubNodeRegistrationStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      registry_: string,
      guardians_: string[],
      gateway_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isGuardian(guardian: string, overrides?: CallOverrides): Promise<BigNumber>;

    isInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    name(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    nodeOwners(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    pubkey(node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    registerSubNode(
      node: BytesLike,
      label: BytesLike,
      guardianSignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    releaseNode(
      node: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeGuardian(
      guardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setAddr(bytes32,uint256,bytes)"(
      node: BytesLike,
      coinType: BigNumberish,
      addr_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setAddr(bytes32,address)"(
      node: BytesLike,
      addr_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setName(
      node: BytesLike,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPubkey(
      node: BytesLike,
      x: BytesLike,
      y: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRegistry(
      registry_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setText(
      node: BytesLike,
      key: string,
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    submitNode(
      node: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    syncAddr(
      node: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    text(
      node: BytesLike,
      key: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyGuardianSignature(
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyNode(
      node: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addGuardian(
      guardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addr(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "addr(bytes32,uint256)"(
      node: BytesLike,
      coinType: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gateway(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hashSubNodeRegistration(
      subNodeRegistration: SubNodeRegistrationStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      registry_: string,
      guardians_: string[],
      gateway_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isGuardian(
      guardian: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nodeOwners(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pubkey(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerSubNode(
      node: BytesLike,
      label: BytesLike,
      guardianSignature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    releaseNode(
      node: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeGuardian(
      guardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setAddr(bytes32,uint256,bytes)"(
      node: BytesLike,
      coinType: BigNumberish,
      addr_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setAddr(bytes32,address)"(
      node: BytesLike,
      addr_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setName(
      node: BytesLike,
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPubkey(
      node: BytesLike,
      x: BytesLike,
      y: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRegistry(
      registry_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setText(
      node: BytesLike,
      key: string,
      value: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    submitNode(
      node: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceID: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    syncAddr(
      node: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    text(
      node: BytesLike,
      key: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyGuardianSignature(
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyNode(
      node: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
