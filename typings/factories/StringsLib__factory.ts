/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StringsLib, StringsLibInterface } from "../StringsLib";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__bf28adcf",
        type: "bytes8",
      },
    ],
    name: "c_bf28adcf",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__bf28adcf",
        type: "bytes8",
      },
    ],
    name: "c_falsebf28adcf",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__bf28adcf",
        type: "bytes8",
      },
    ],
    name: "c_truebf28adcf",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x610179610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c8063aa72bfee14610050578063b958fcd0146100af578063de2f5a761461010e575b600080fd5b6100976004803603602081101561006657600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610157565b60405180821515815260200191505060405180910390f35b6100f6600480360360208110156100c557600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610162565b60405180821515815260200191505060405180910390f35b6101556004803603602081101561012457600080fd5b81019080803577ffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610169565b005b600060019050919050565b6000919050565b5056fea164736f6c634300060c000a";

type StringsLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StringsLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StringsLib__factory extends ContractFactory {
  constructor(...args: StringsLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StringsLib> {
    return super.deploy(overrides || {}) as Promise<StringsLib>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): StringsLib {
    return super.attach(address) as StringsLib;
  }
  connect(signer: Signer): StringsLib__factory {
    return super.connect(signer) as StringsLib__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StringsLibInterface {
    return new utils.Interface(_abi) as StringsLibInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StringsLib {
    return new Contract(address, _abi, signerOrProvider) as StringsLib;
  }
}
