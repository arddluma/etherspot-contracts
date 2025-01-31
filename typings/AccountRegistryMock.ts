/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface AccountRegistryMockInterface extends utils.Interface {
  functions: {
    "isValidAccountSignature(address,bytes,bytes)": FunctionFragment;
    "mockAccountOwners(address,address[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "isValidAccountSignature",
    values: [string, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "mockAccountOwners",
    values: [string, string[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "isValidAccountSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mockAccountOwners",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AccountRegistryMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AccountRegistryMockInterface;

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
    "isValidAccountSignature(address,bytes,bytes)"(
      account: string,
      message: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isValidAccountSignature(address,bytes32,bytes)"(
      account: string,
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mockAccountOwners(
      account: string,
      owners: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  "isValidAccountSignature(address,bytes,bytes)"(
    account: string,
    message: BytesLike,
    signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isValidAccountSignature(address,bytes32,bytes)"(
    account: string,
    messageHash: BytesLike,
    signature: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  mockAccountOwners(
    account: string,
    owners: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    "isValidAccountSignature(address,bytes,bytes)"(
      account: string,
      message: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isValidAccountSignature(address,bytes32,bytes)"(
      account: string,
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mockAccountOwners(
      account: string,
      owners: string[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    "isValidAccountSignature(address,bytes,bytes)"(
      account: string,
      message: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isValidAccountSignature(address,bytes32,bytes)"(
      account: string,
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mockAccountOwners(
      account: string,
      owners: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "isValidAccountSignature(address,bytes,bytes)"(
      account: string,
      message: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isValidAccountSignature(address,bytes32,bytes)"(
      account: string,
      messageHash: BytesLike,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mockAccountOwners(
      account: string,
      owners: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
