/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { BaseContract, BigNumber, Signer, utils } from "ethers";
import { EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SwapUtilsInterface extends utils.Interface {
  functions: {};

  events: {
    "AddLiquidity(address,uint256[],uint256[],uint256,uint256)": EventFragment;
    "NewAdminFee(uint256)": EventFragment;
    "NewSwapFee(uint256)": EventFragment;
    "RemoveLiquidity(address,uint256[],uint256)": EventFragment;
    "RemoveLiquidityImbalance(address,uint256[],uint256[],uint256,uint256)": EventFragment;
    "RemoveLiquidityOne(address,uint256,uint256,uint256,uint256)": EventFragment;
    "TokenSwap(address,uint256,uint256,uint128,uint128)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddLiquidity"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewAdminFee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewSwapFee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveLiquidity"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveLiquidityImbalance"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveLiquidityOne"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenSwap"): EventFragment;
}

export type AddLiquidityEvent = TypedEvent<
  [string, BigNumber[], BigNumber[], BigNumber, BigNumber],
  {
    provider: string;
    tokenAmounts: BigNumber[];
    fees: BigNumber[];
    invariant: BigNumber;
    lpTokenSupply: BigNumber;
  }
>;

export type AddLiquidityEventFilter = TypedEventFilter<AddLiquidityEvent>;

export type NewAdminFeeEvent = TypedEvent<
  [BigNumber],
  { newAdminFee: BigNumber }
>;

export type NewAdminFeeEventFilter = TypedEventFilter<NewAdminFeeEvent>;

export type NewSwapFeeEvent = TypedEvent<
  [BigNumber],
  { newSwapFee: BigNumber }
>;

export type NewSwapFeeEventFilter = TypedEventFilter<NewSwapFeeEvent>;

export type RemoveLiquidityEvent = TypedEvent<
  [string, BigNumber[], BigNumber],
  { provider: string; tokenAmounts: BigNumber[]; lpTokenSupply: BigNumber }
>;

export type RemoveLiquidityEventFilter = TypedEventFilter<RemoveLiquidityEvent>;

export type RemoveLiquidityImbalanceEvent = TypedEvent<
  [string, BigNumber[], BigNumber[], BigNumber, BigNumber],
  {
    provider: string;
    tokenAmounts: BigNumber[];
    fees: BigNumber[];
    invariant: BigNumber;
    lpTokenSupply: BigNumber;
  }
>;

export type RemoveLiquidityImbalanceEventFilter =
  TypedEventFilter<RemoveLiquidityImbalanceEvent>;

export type RemoveLiquidityOneEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    provider: string;
    lpTokenAmount: BigNumber;
    lpTokenSupply: BigNumber;
    boughtId: BigNumber;
    tokensBought: BigNumber;
  }
>;

export type RemoveLiquidityOneEventFilter =
  TypedEventFilter<RemoveLiquidityOneEvent>;

export type TokenSwapEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    buyer: string;
    tokensSold: BigNumber;
    tokensBought: BigNumber;
    soldId: BigNumber;
    boughtId: BigNumber;
  }
>;

export type TokenSwapEventFilter = TypedEventFilter<TokenSwapEvent>;

export interface SwapUtils extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SwapUtilsInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "AddLiquidity(address,uint256[],uint256[],uint256,uint256)"(
      provider?: string | null,
      tokenAmounts?: null,
      fees?: null,
      invariant?: null,
      lpTokenSupply?: null
    ): AddLiquidityEventFilter;
    AddLiquidity(
      provider?: string | null,
      tokenAmounts?: null,
      fees?: null,
      invariant?: null,
      lpTokenSupply?: null
    ): AddLiquidityEventFilter;

    "NewAdminFee(uint256)"(newAdminFee?: null): NewAdminFeeEventFilter;
    NewAdminFee(newAdminFee?: null): NewAdminFeeEventFilter;

    "NewSwapFee(uint256)"(newSwapFee?: null): NewSwapFeeEventFilter;
    NewSwapFee(newSwapFee?: null): NewSwapFeeEventFilter;

    "RemoveLiquidity(address,uint256[],uint256)"(
      provider?: string | null,
      tokenAmounts?: null,
      lpTokenSupply?: null
    ): RemoveLiquidityEventFilter;
    RemoveLiquidity(
      provider?: string | null,
      tokenAmounts?: null,
      lpTokenSupply?: null
    ): RemoveLiquidityEventFilter;

    "RemoveLiquidityImbalance(address,uint256[],uint256[],uint256,uint256)"(
      provider?: string | null,
      tokenAmounts?: null,
      fees?: null,
      invariant?: null,
      lpTokenSupply?: null
    ): RemoveLiquidityImbalanceEventFilter;
    RemoveLiquidityImbalance(
      provider?: string | null,
      tokenAmounts?: null,
      fees?: null,
      invariant?: null,
      lpTokenSupply?: null
    ): RemoveLiquidityImbalanceEventFilter;

    "RemoveLiquidityOne(address,uint256,uint256,uint256,uint256)"(
      provider?: string | null,
      lpTokenAmount?: null,
      lpTokenSupply?: null,
      boughtId?: null,
      tokensBought?: null
    ): RemoveLiquidityOneEventFilter;
    RemoveLiquidityOne(
      provider?: string | null,
      lpTokenAmount?: null,
      lpTokenSupply?: null,
      boughtId?: null,
      tokensBought?: null
    ): RemoveLiquidityOneEventFilter;

    "TokenSwap(address,uint256,uint256,uint128,uint128)"(
      buyer?: string | null,
      tokensSold?: null,
      tokensBought?: null,
      soldId?: null,
      boughtId?: null
    ): TokenSwapEventFilter;
    TokenSwap(
      buyer?: string | null,
      tokensSold?: null,
      tokensBought?: null,
      soldId?: null,
      boughtId?: null
    ): TokenSwapEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
