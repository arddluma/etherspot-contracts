/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  AccountController,
  AccountControllerInterface,
} from "../AccountController";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "accountImplementation",
        type: "address",
      },
    ],
    name: "AccountDeployed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "accountImplementation",
        type: "address",
      },
    ],
    name: "AccountImplementationUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "accountRegistry",
        type: "address",
      },
    ],
    name: "AccountRegistryUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
    ],
    name: "AccountTransactionExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "accountImplementation",
        type: "address",
      },
    ],
    name: "AccountUpgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "accountImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "accountRegistry",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__19d98a43",
        type: "bytes8",
      },
    ],
    name: "c_19d98a43",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes8",
        name: "c__19d98a43",
        type: "bytes8",
      },
    ],
    name: "c_false19d98a43",
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
        name: "c__19d98a43",
        type: "bytes8",
      },
    ],
    name: "c_true19d98a43",
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

export class AccountController__factory {
  static readonly abi = _abi;
  static createInterface(): AccountControllerInterface {
    return new utils.Interface(_abi) as AccountControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccountController {
    return new Contract(address, _abi, signerOrProvider) as AccountController;
  }
}
