/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { AccountRegistryMock } from "../AccountRegistryMock";

export class AccountRegistryMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<AccountRegistryMock> {
    return super.deploy(overrides || {}) as Promise<AccountRegistryMock>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AccountRegistryMock {
    return super.attach(address) as AccountRegistryMock;
  }
  connect(signer: Signer): AccountRegistryMock__factory {
    return super.connect(signer) as AccountRegistryMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccountRegistryMock {
    return new Contract(address, _abi, signerOrProvider) as AccountRegistryMock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "isValidAccountSignature",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "messageHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "isValidAccountSignature",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "owners",
        type: "address[]",
      },
    ],
    name: "mockAccountOwners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506109a9806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063124e9eb314610046578063cbc438bf1461014a578063e1e382ce14610222575b600080fd5b6101326004803603606081101561005c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561009957600080fd5b8201836020820111156100ab57600080fd5b803590602001918460018302840111640100000000831117156100cd57600080fd5b9091929391929390803590602001906401000000008111156100ee57600080fd5b82018360208201111561010057600080fd5b8035906020019184600183028401116401000000008311171561012257600080fd5b90919293919293905050506102db565b60405180821515815260200191505060405180910390f35b6102206004803603604081101561016057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561019d57600080fd5b8201836020820111156101af57600080fd5b803590602001918460208302840111640100000000831117156101d157600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050610418565b005b6102c36004803603606081101561023857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561027f57600080fd5b82018360208201111561029157600080fd5b803590602001918460018302840111640100000000831117156102b357600080fd5b90919293919293905050506104e3565b60405180821515815260200191505060405180910390f35b60008061038184848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061037388888080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506105d3565b61073c90919063ffffffff16565b90506000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1691505095945050505050565b60008151905060005b818110156104dd5760016000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600085848151811061047757fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508080600101915050610421565b50505050565b60008061053d84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508661073c90919063ffffffff16565b90506000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16915050949350505050565b60006105df825161080c565b826040516020018082805190602001908083835b6020831061061657805182526020820191506020810190506020830392506105f3565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405260405160200180807f19457468657265756d205369676e6564204d6573736167653a0a000000000000815250601a0183805190602001908083835b602083106106a85780518252602082019150602081019050602083039250610685565b6001836020036101000a03801982511681845116808217855250505050505090500182805190602001908083835b602083106106f957805182526020820191506020810190506020830392506106d6565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052805190602001209050919050565b600080600090506041835114156108025760008060006020860151925060408601519150606086015160001a9050601b8160ff16101561077d57601b810190505b601b8160ff1614806107925750601c8160ff16145b156107fe5760018782858560405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa1580156107f1573d6000803e3d6000fd5b5050506020604051035193505b5050505b8091505092915050565b60606000821415610854576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050610997565b602082141561089a576040518060400160405280600281526020017f33320000000000000000000000000000000000000000000000000000000000008152509050610997565b6000829050600083905060005b600082146108c9578080600101915050600a82816108c157fe5b0491506108a7565b60608167ffffffffffffffff811180156108e257600080fd5b506040519080825280601f01601f1916602001820160405280156109155781602001600182028036833780820191505090505b50905060006001830390505b6000851461098e57600a858161093357fe5b0660300160f81b8282806001900393508151811061094d57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a858161098657fe5b049450610921565b81955050505050505b91905056fea164736f6c634300060c000a";
