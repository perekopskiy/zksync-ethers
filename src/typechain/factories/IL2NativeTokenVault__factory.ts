/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IL2NativeTokenVault,
  IL2NativeTokenVaultInterface,
} from "../IL2NativeTokenVault";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "bridgedTokenBeacon",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "bridgedTokenProxyBytecodeHash",
        type: "bytes32",
      },
    ],
    name: "BridgedTokenBeaconUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "l1Sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "l2Receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "l2Token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FinalizeDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "l2TokenBeacon",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "l2TokenProxyBytecodeHash",
        type: "bytes32",
      },
    ],
    name: "L2TokenBeaconUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "l2Sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "l1Receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "l2Token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawalInitiated",
    type: "event",
  },
  {
    inputs: [],
    name: "ASSET_ROUTER",
    outputs: [
      {
        internalType: "contract IAssetRouterBase",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WETH_TOKEN",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "assetId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "calculateAssetId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_originChainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_originToken",
        type: "address",
      },
    ],
    name: "calculateCreate2TokenAddress",
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
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_originChainId",
        type: "uint256",
      },
    ],
    name: "getERC20Getters",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_l1Token",
        type: "address",
      },
    ],
    name: "l2TokenAddress",
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
        internalType: "bytes32",
        name: "assetId",
        type: "bytes32",
      },
    ],
    name: "originChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_l1Token",
        type: "address",
      },
    ],
    name: "registerToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "assetId",
        type: "bytes32",
      },
    ],
    name: "tokenAddress",
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
] as const;

export class IL2NativeTokenVault__factory {
  static readonly abi = _abi;
  static createInterface(): IL2NativeTokenVaultInterface {
    return new Interface(_abi) as IL2NativeTokenVaultInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IL2NativeTokenVault {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IL2NativeTokenVault;
  }
}