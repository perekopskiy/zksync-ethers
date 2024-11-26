/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  Contract2Factory,
  Contract2FactoryInterface,
} from "../Contract2Factory";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "create2",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "enum IContractDeployer.AccountAbstractionVersion",
        name: "",
        type: "uint8",
      },
    ],
    name: "create2Account",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class Contract2Factory__factory {
  static readonly abi = _abi;
  static createInterface(): Contract2FactoryInterface {
    return new Interface(_abi) as Contract2FactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): Contract2Factory {
    return new Contract(address, _abi, runner) as unknown as Contract2Factory;
  }
}