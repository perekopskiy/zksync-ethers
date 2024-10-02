import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export type L2TransactionRequestTwoBridgesInnerStruct = {
    magicValue: BytesLike;
    l2Contract: AddressLike;
    l2Calldata: BytesLike;
    factoryDeps: BytesLike[];
    txDataHash: BytesLike;
};
export type L2TransactionRequestTwoBridgesInnerStructOutput = [
    magicValue: string,
    l2Contract: string,
    l2Calldata: string,
    factoryDeps: string[],
    txDataHash: string
] & {
    magicValue: string;
    l2Contract: string;
    l2Calldata: string;
    factoryDeps: string[];
    txDataHash: string;
};
export interface IL1AssetRouterInterface extends Interface {
    getFunction(nameOrSignature: "BRIDGE_HUB" | "ERA_CHAIN_ID" | "L1_CHAIN_ID" | "L1_NULLIFIER" | "L1_WETH_TOKEN" | "acceptOwnership" | "assetDeploymentTracker" | "assetHandlerAddress" | "bridgeRecoverFailedTransfer(uint256,address,bytes32,bytes)" | "bridgeRecoverFailedTransfer(uint256,address,bytes32,bytes,bytes32,uint256,uint256,uint16,bytes32[])" | "bridgehubConfirmL2Transaction" | "bridgehubDeposit" | "bridgehubDepositBaseToken" | "claimFailedDeposit" | "depositLegacyErc20Bridge" | "finalizeDeposit" | "finalizeWithdrawal" | "getDepositCalldata" | "initialize" | "isWithdrawalFinalized" | "legacyBridge" | "nativeTokenVault" | "owner" | "pause" | "paused" | "pendingOwner" | "renounceOwnership" | "setAssetDeploymentTracker" | "setAssetHandlerAddressThisChain" | "setL1Erc20Bridge" | "setNativeTokenVault" | "transferFundsToNTV" | "transferOwnership" | "unpause"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "AssetDeploymentTrackerSet" | "AssetHandlerRegistered" | "AssetHandlerRegisteredInitial" | "BridgehubDepositBaseTokenInitiated" | "BridgehubDepositFinalized" | "BridgehubDepositInitiated" | "BridgehubMintData" | "BridgehubWithdrawalInitiated" | "ClaimedFailedDepositAssetRouter" | "DepositFinalizedAssetRouter" | "Initialized" | "LegacyDepositInitiated" | "OwnershipTransferStarted" | "OwnershipTransferred" | "Paused" | "Unpaused"): EventFragment;
    encodeFunctionData(functionFragment: "BRIDGE_HUB", values?: undefined): string;
    encodeFunctionData(functionFragment: "ERA_CHAIN_ID", values?: undefined): string;
    encodeFunctionData(functionFragment: "L1_CHAIN_ID", values?: undefined): string;
    encodeFunctionData(functionFragment: "L1_NULLIFIER", values?: undefined): string;
    encodeFunctionData(functionFragment: "L1_WETH_TOKEN", values?: undefined): string;
    encodeFunctionData(functionFragment: "acceptOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "assetDeploymentTracker", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "assetHandlerAddress", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "bridgeRecoverFailedTransfer(uint256,address,bytes32,bytes)", values: [BigNumberish, AddressLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "bridgeRecoverFailedTransfer(uint256,address,bytes32,bytes,bytes32,uint256,uint256,uint16,bytes32[])", values: [
        BigNumberish,
        AddressLike,
        BytesLike,
        BytesLike,
        BytesLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike[]
    ]): string;
    encodeFunctionData(functionFragment: "bridgehubConfirmL2Transaction", values: [BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "bridgehubDeposit", values: [BigNumberish, AddressLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "bridgehubDepositBaseToken", values: [BigNumberish, BytesLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimFailedDeposit", values: [
        BigNumberish,
        AddressLike,
        AddressLike,
        BigNumberish,
        BytesLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike[]
    ]): string;
    encodeFunctionData(functionFragment: "depositLegacyErc20Bridge", values: [
        AddressLike,
        AddressLike,
        AddressLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        AddressLike
    ]): string;
    encodeFunctionData(functionFragment: "finalizeDeposit", values: [BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "finalizeWithdrawal", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike[]
    ]): string;
    encodeFunctionData(functionFragment: "getDepositCalldata", values: [AddressLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "isWithdrawalFinalized", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "legacyBridge", values?: undefined): string;
    encodeFunctionData(functionFragment: "nativeTokenVault", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAssetDeploymentTracker", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "setAssetHandlerAddressThisChain", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "setL1Erc20Bridge", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setNativeTokenVault", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "transferFundsToNTV", values: [BytesLike, BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    decodeFunctionResult(functionFragment: "BRIDGE_HUB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ERA_CHAIN_ID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L1_CHAIN_ID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L1_NULLIFIER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L1_WETH_TOKEN", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assetDeploymentTracker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assetHandlerAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgeRecoverFailedTransfer(uint256,address,bytes32,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgeRecoverFailedTransfer(uint256,address,bytes32,bytes,bytes32,uint256,uint256,uint16,bytes32[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgehubConfirmL2Transaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgehubDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgehubDepositBaseToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimFailedDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositLegacyErc20Bridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeWithdrawal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDepositCalldata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isWithdrawalFinalized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "legacyBridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nativeTokenVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAssetDeploymentTracker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAssetHandlerAddressThisChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setL1Erc20Bridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNativeTokenVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFundsToNTV", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
}
export declare namespace AssetDeploymentTrackerSetEvent {
    type InputTuple = [
        assetId: BytesLike,
        assetDeploymentTracker: AddressLike,
        additionalData: BytesLike
    ];
    type OutputTuple = [
        assetId: string,
        assetDeploymentTracker: string,
        additionalData: string
    ];
    interface OutputObject {
        assetId: string;
        assetDeploymentTracker: string;
        additionalData: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace AssetHandlerRegisteredEvent {
    type InputTuple = [assetId: BytesLike, _assetAddress: AddressLike];
    type OutputTuple = [assetId: string, _assetAddress: string];
    interface OutputObject {
        assetId: string;
        _assetAddress: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace AssetHandlerRegisteredInitialEvent {
    type InputTuple = [
        assetId: BytesLike,
        assetHandlerAddress: AddressLike,
        additionalData: BytesLike,
        assetDeploymentTracker: AddressLike
    ];
    type OutputTuple = [
        assetId: string,
        assetHandlerAddress: string,
        additionalData: string,
        assetDeploymentTracker: string
    ];
    interface OutputObject {
        assetId: string;
        assetHandlerAddress: string;
        additionalData: string;
        assetDeploymentTracker: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BridgehubDepositBaseTokenInitiatedEvent {
    type InputTuple = [
        chainId: BigNumberish,
        from: AddressLike,
        assetId: BytesLike,
        amount: BigNumberish
    ];
    type OutputTuple = [
        chainId: bigint,
        from: string,
        assetId: string,
        amount: bigint
    ];
    interface OutputObject {
        chainId: bigint;
        from: string;
        assetId: string;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BridgehubDepositFinalizedEvent {
    type InputTuple = [
        chainId: BigNumberish,
        txDataHash: BytesLike,
        l2DepositTxHash: BytesLike
    ];
    type OutputTuple = [
        chainId: bigint,
        txDataHash: string,
        l2DepositTxHash: string
    ];
    interface OutputObject {
        chainId: bigint;
        txDataHash: string;
        l2DepositTxHash: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BridgehubDepositInitiatedEvent {
    type InputTuple = [
        chainId: BigNumberish,
        txDataHash: BytesLike,
        from: AddressLike,
        assetId: BytesLike,
        bridgeMintCalldata: BytesLike
    ];
    type OutputTuple = [
        chainId: bigint,
        txDataHash: string,
        from: string,
        assetId: string,
        bridgeMintCalldata: string
    ];
    interface OutputObject {
        chainId: bigint;
        txDataHash: string;
        from: string;
        assetId: string;
        bridgeMintCalldata: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BridgehubMintDataEvent {
    type InputTuple = [bridgeMintData: BytesLike];
    type OutputTuple = [bridgeMintData: string];
    interface OutputObject {
        bridgeMintData: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BridgehubWithdrawalInitiatedEvent {
    type InputTuple = [
        chainId: BigNumberish,
        sender: AddressLike,
        assetId: BytesLike,
        assetDataHash: BytesLike
    ];
    type OutputTuple = [
        chainId: bigint,
        sender: string,
        assetId: string,
        assetDataHash: string
    ];
    interface OutputObject {
        chainId: bigint;
        sender: string;
        assetId: string;
        assetDataHash: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ClaimedFailedDepositAssetRouterEvent {
    type InputTuple = [
        chainId: BigNumberish,
        assetId: BytesLike,
        assetData: BytesLike
    ];
    type OutputTuple = [
        chainId: bigint,
        assetId: string,
        assetData: string
    ];
    interface OutputObject {
        chainId: bigint;
        assetId: string;
        assetData: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace DepositFinalizedAssetRouterEvent {
    type InputTuple = [
        chainId: BigNumberish,
        assetId: BytesLike,
        assetData: BytesLike
    ];
    type OutputTuple = [
        chainId: bigint,
        assetId: string,
        assetData: string
    ];
    interface OutputObject {
        chainId: bigint;
        assetId: string;
        assetData: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace InitializedEvent {
    type InputTuple = [version: BigNumberish];
    type OutputTuple = [version: bigint];
    interface OutputObject {
        version: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace LegacyDepositInitiatedEvent {
    type InputTuple = [
        chainId: BigNumberish,
        l2DepositTxHash: BytesLike,
        from: AddressLike,
        to: AddressLike,
        l1Asset: AddressLike,
        amount: BigNumberish
    ];
    type OutputTuple = [
        chainId: bigint,
        l2DepositTxHash: string,
        from: string,
        to: string,
        l1Asset: string,
        amount: bigint
    ];
    interface OutputObject {
        chainId: bigint;
        l2DepositTxHash: string;
        from: string;
        to: string;
        l1Asset: string;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OwnershipTransferStartedEvent {
    type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
    type OutputTuple = [previousOwner: string, newOwner: string];
    interface OutputObject {
        previousOwner: string;
        newOwner: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace OwnershipTransferredEvent {
    type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
    type OutputTuple = [previousOwner: string, newOwner: string];
    interface OutputObject {
        previousOwner: string;
        newOwner: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PausedEvent {
    type InputTuple = [account: AddressLike];
    type OutputTuple = [account: string];
    interface OutputObject {
        account: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UnpausedEvent {
    type InputTuple = [account: AddressLike];
    type OutputTuple = [account: string];
    interface OutputObject {
        account: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface IL1AssetRouter extends BaseContract {
    connect(runner?: ContractRunner | null): IL1AssetRouter;
    waitForDeployment(): Promise<this>;
    interface: IL1AssetRouterInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    BRIDGE_HUB: TypedContractMethod<[], [string], "view">;
    ERA_CHAIN_ID: TypedContractMethod<[], [bigint], "view">;
    L1_CHAIN_ID: TypedContractMethod<[], [bigint], "view">;
    L1_NULLIFIER: TypedContractMethod<[], [string], "view">;
    L1_WETH_TOKEN: TypedContractMethod<[], [string], "view">;
    acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;
    assetDeploymentTracker: TypedContractMethod<[
        assetId: BytesLike
    ], [
        string
    ], "view">;
    assetHandlerAddress: TypedContractMethod<[
        assetId: BytesLike
    ], [
        string
    ], "view">;
    "bridgeRecoverFailedTransfer(uint256,address,bytes32,bytes)": TypedContractMethod<[
        _chainId: BigNumberish,
        _depositSender: AddressLike,
        _assetId: BytesLike,
        _assetData: BytesLike
    ], [
        void
    ], "nonpayable">;
    "bridgeRecoverFailedTransfer(uint256,address,bytes32,bytes,bytes32,uint256,uint256,uint16,bytes32[])": TypedContractMethod<[
        _chainId: BigNumberish,
        _depositSender: AddressLike,
        _assetId: BytesLike,
        _assetData: BytesLike,
        _l2TxHash: BytesLike,
        _l2BatchNumber: BigNumberish,
        _l2MessageIndex: BigNumberish,
        _l2TxNumberInBatch: BigNumberish,
        _merkleProof: BytesLike[]
    ], [
        void
    ], "nonpayable">;
    bridgehubConfirmL2Transaction: TypedContractMethod<[
        _chainId: BigNumberish,
        _txDataHash: BytesLike,
        _txHash: BytesLike
    ], [
        void
    ], "nonpayable">;
    bridgehubDeposit: TypedContractMethod<[
        _chainId: BigNumberish,
        _originalCaller: AddressLike,
        _value: BigNumberish,
        _data: BytesLike
    ], [
        L2TransactionRequestTwoBridgesInnerStructOutput
    ], "payable">;
    bridgehubDepositBaseToken: TypedContractMethod<[
        _chainId: BigNumberish,
        _assetId: BytesLike,
        _originalCaller: AddressLike,
        _amount: BigNumberish
    ], [
        void
    ], "payable">;
    claimFailedDeposit: TypedContractMethod<[
        _chainId: BigNumberish,
        _depositSender: AddressLike,
        _l1Token: AddressLike,
        _amount: BigNumberish,
        _l2TxHash: BytesLike,
        _l2BatchNumber: BigNumberish,
        _l2MessageIndex: BigNumberish,
        _l2TxNumberInBatch: BigNumberish,
        _merkleProof: BytesLike[]
    ], [
        void
    ], "nonpayable">;
    depositLegacyErc20Bridge: TypedContractMethod<[
        _originalCaller: AddressLike,
        _l2Receiver: AddressLike,
        _l1Token: AddressLike,
        _amount: BigNumberish,
        _l2TxGasLimit: BigNumberish,
        _l2TxGasPerPubdataByte: BigNumberish,
        _refundRecipient: AddressLike
    ], [
        string
    ], "payable">;
    finalizeDeposit: TypedContractMethod<[
        _chainId: BigNumberish,
        _assetId: BytesLike,
        _transferData: BytesLike
    ], [
        void
    ], "nonpayable">;
    finalizeWithdrawal: TypedContractMethod<[
        _chainId: BigNumberish,
        _l2BatchNumber: BigNumberish,
        _l2MessageIndex: BigNumberish,
        _l2TxNumberInBatch: BigNumberish,
        _message: BytesLike,
        _merkleProof: BytesLike[]
    ], [
        void
    ], "nonpayable">;
    getDepositCalldata: TypedContractMethod<[
        _sender: AddressLike,
        _assetId: BytesLike,
        _assetData: BytesLike
    ], [
        string
    ], "view">;
    initialize: TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;
    isWithdrawalFinalized: TypedContractMethod<[
        _chainId: BigNumberish,
        _l2BatchNumber: BigNumberish,
        _l2MessageIndex: BigNumberish
    ], [
        boolean
    ], "view">;
    legacyBridge: TypedContractMethod<[], [string], "view">;
    nativeTokenVault: TypedContractMethod<[], [string], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    pause: TypedContractMethod<[], [void], "nonpayable">;
    paused: TypedContractMethod<[], [boolean], "view">;
    pendingOwner: TypedContractMethod<[], [string], "view">;
    renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;
    setAssetDeploymentTracker: TypedContractMethod<[
        _assetRegistrationData: BytesLike,
        _assetDeploymentTracker: AddressLike
    ], [
        void
    ], "nonpayable">;
    setAssetHandlerAddressThisChain: TypedContractMethod<[
        _assetRegistrationData: BytesLike,
        _assetHandlerAddress: AddressLike
    ], [
        void
    ], "nonpayable">;
    setL1Erc20Bridge: TypedContractMethod<[
        _legacyBridge: AddressLike
    ], [
        void
    ], "nonpayable">;
    setNativeTokenVault: TypedContractMethod<[
        _nativeTokenVault: AddressLike
    ], [
        void
    ], "nonpayable">;
    transferFundsToNTV: TypedContractMethod<[
        _assetId: BytesLike,
        _amount: BigNumberish,
        _originalCaller: AddressLike
    ], [
        boolean
    ], "nonpayable">;
    transferOwnership: TypedContractMethod<[
        newOwner: AddressLike
    ], [
        void
    ], "nonpayable">;
    unpause: TypedContractMethod<[], [void], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "BRIDGE_HUB"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "ERA_CHAIN_ID"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "L1_CHAIN_ID"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "L1_NULLIFIER"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "L1_WETH_TOKEN"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "acceptOwnership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "assetDeploymentTracker"): TypedContractMethod<[assetId: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "assetHandlerAddress"): TypedContractMethod<[assetId: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "bridgeRecoverFailedTransfer(uint256,address,bytes32,bytes)"): TypedContractMethod<[
        _chainId: BigNumberish,
        _depositSender: AddressLike,
        _assetId: BytesLike,
        _assetData: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "bridgeRecoverFailedTransfer(uint256,address,bytes32,bytes,bytes32,uint256,uint256,uint16,bytes32[])"): TypedContractMethod<[
        _chainId: BigNumberish,
        _depositSender: AddressLike,
        _assetId: BytesLike,
        _assetData: BytesLike,
        _l2TxHash: BytesLike,
        _l2BatchNumber: BigNumberish,
        _l2MessageIndex: BigNumberish,
        _l2TxNumberInBatch: BigNumberish,
        _merkleProof: BytesLike[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "bridgehubConfirmL2Transaction"): TypedContractMethod<[
        _chainId: BigNumberish,
        _txDataHash: BytesLike,
        _txHash: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "bridgehubDeposit"): TypedContractMethod<[
        _chainId: BigNumberish,
        _originalCaller: AddressLike,
        _value: BigNumberish,
        _data: BytesLike
    ], [
        L2TransactionRequestTwoBridgesInnerStructOutput
    ], "payable">;
    getFunction(nameOrSignature: "bridgehubDepositBaseToken"): TypedContractMethod<[
        _chainId: BigNumberish,
        _assetId: BytesLike,
        _originalCaller: AddressLike,
        _amount: BigNumberish
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "claimFailedDeposit"): TypedContractMethod<[
        _chainId: BigNumberish,
        _depositSender: AddressLike,
        _l1Token: AddressLike,
        _amount: BigNumberish,
        _l2TxHash: BytesLike,
        _l2BatchNumber: BigNumberish,
        _l2MessageIndex: BigNumberish,
        _l2TxNumberInBatch: BigNumberish,
        _merkleProof: BytesLike[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "depositLegacyErc20Bridge"): TypedContractMethod<[
        _originalCaller: AddressLike,
        _l2Receiver: AddressLike,
        _l1Token: AddressLike,
        _amount: BigNumberish,
        _l2TxGasLimit: BigNumberish,
        _l2TxGasPerPubdataByte: BigNumberish,
        _refundRecipient: AddressLike
    ], [
        string
    ], "payable">;
    getFunction(nameOrSignature: "finalizeDeposit"): TypedContractMethod<[
        _chainId: BigNumberish,
        _assetId: BytesLike,
        _transferData: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "finalizeWithdrawal"): TypedContractMethod<[
        _chainId: BigNumberish,
        _l2BatchNumber: BigNumberish,
        _l2MessageIndex: BigNumberish,
        _l2TxNumberInBatch: BigNumberish,
        _message: BytesLike,
        _merkleProof: BytesLike[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "getDepositCalldata"): TypedContractMethod<[
        _sender: AddressLike,
        _assetId: BytesLike,
        _assetData: BytesLike
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[_owner: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "isWithdrawalFinalized"): TypedContractMethod<[
        _chainId: BigNumberish,
        _l2BatchNumber: BigNumberish,
        _l2MessageIndex: BigNumberish
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "legacyBridge"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "nativeTokenVault"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "pause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "paused"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "pendingOwner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "setAssetDeploymentTracker"): TypedContractMethod<[
        _assetRegistrationData: BytesLike,
        _assetDeploymentTracker: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setAssetHandlerAddressThisChain"): TypedContractMethod<[
        _assetRegistrationData: BytesLike,
        _assetHandlerAddress: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setL1Erc20Bridge"): TypedContractMethod<[_legacyBridge: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "setNativeTokenVault"): TypedContractMethod<[
        _nativeTokenVault: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferFundsToNTV"): TypedContractMethod<[
        _assetId: BytesLike,
        _amount: BigNumberish,
        _originalCaller: AddressLike
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "unpause"): TypedContractMethod<[], [void], "nonpayable">;
    getEvent(key: "AssetDeploymentTrackerSet"): TypedContractEvent<AssetDeploymentTrackerSetEvent.InputTuple, AssetDeploymentTrackerSetEvent.OutputTuple, AssetDeploymentTrackerSetEvent.OutputObject>;
    getEvent(key: "AssetHandlerRegistered"): TypedContractEvent<AssetHandlerRegisteredEvent.InputTuple, AssetHandlerRegisteredEvent.OutputTuple, AssetHandlerRegisteredEvent.OutputObject>;
    getEvent(key: "AssetHandlerRegisteredInitial"): TypedContractEvent<AssetHandlerRegisteredInitialEvent.InputTuple, AssetHandlerRegisteredInitialEvent.OutputTuple, AssetHandlerRegisteredInitialEvent.OutputObject>;
    getEvent(key: "BridgehubDepositBaseTokenInitiated"): TypedContractEvent<BridgehubDepositBaseTokenInitiatedEvent.InputTuple, BridgehubDepositBaseTokenInitiatedEvent.OutputTuple, BridgehubDepositBaseTokenInitiatedEvent.OutputObject>;
    getEvent(key: "BridgehubDepositFinalized"): TypedContractEvent<BridgehubDepositFinalizedEvent.InputTuple, BridgehubDepositFinalizedEvent.OutputTuple, BridgehubDepositFinalizedEvent.OutputObject>;
    getEvent(key: "BridgehubDepositInitiated"): TypedContractEvent<BridgehubDepositInitiatedEvent.InputTuple, BridgehubDepositInitiatedEvent.OutputTuple, BridgehubDepositInitiatedEvent.OutputObject>;
    getEvent(key: "BridgehubMintData"): TypedContractEvent<BridgehubMintDataEvent.InputTuple, BridgehubMintDataEvent.OutputTuple, BridgehubMintDataEvent.OutputObject>;
    getEvent(key: "BridgehubWithdrawalInitiated"): TypedContractEvent<BridgehubWithdrawalInitiatedEvent.InputTuple, BridgehubWithdrawalInitiatedEvent.OutputTuple, BridgehubWithdrawalInitiatedEvent.OutputObject>;
    getEvent(key: "ClaimedFailedDepositAssetRouter"): TypedContractEvent<ClaimedFailedDepositAssetRouterEvent.InputTuple, ClaimedFailedDepositAssetRouterEvent.OutputTuple, ClaimedFailedDepositAssetRouterEvent.OutputObject>;
    getEvent(key: "DepositFinalizedAssetRouter"): TypedContractEvent<DepositFinalizedAssetRouterEvent.InputTuple, DepositFinalizedAssetRouterEvent.OutputTuple, DepositFinalizedAssetRouterEvent.OutputObject>;
    getEvent(key: "Initialized"): TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
    getEvent(key: "LegacyDepositInitiated"): TypedContractEvent<LegacyDepositInitiatedEvent.InputTuple, LegacyDepositInitiatedEvent.OutputTuple, LegacyDepositInitiatedEvent.OutputObject>;
    getEvent(key: "OwnershipTransferStarted"): TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
    getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
    getEvent(key: "Paused"): TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
    getEvent(key: "Unpaused"): TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    filters: {
        "AssetDeploymentTrackerSet(bytes32,address,bytes32)": TypedContractEvent<AssetDeploymentTrackerSetEvent.InputTuple, AssetDeploymentTrackerSetEvent.OutputTuple, AssetDeploymentTrackerSetEvent.OutputObject>;
        AssetDeploymentTrackerSet: TypedContractEvent<AssetDeploymentTrackerSetEvent.InputTuple, AssetDeploymentTrackerSetEvent.OutputTuple, AssetDeploymentTrackerSetEvent.OutputObject>;
        "AssetHandlerRegistered(bytes32,address)": TypedContractEvent<AssetHandlerRegisteredEvent.InputTuple, AssetHandlerRegisteredEvent.OutputTuple, AssetHandlerRegisteredEvent.OutputObject>;
        AssetHandlerRegistered: TypedContractEvent<AssetHandlerRegisteredEvent.InputTuple, AssetHandlerRegisteredEvent.OutputTuple, AssetHandlerRegisteredEvent.OutputObject>;
        "AssetHandlerRegisteredInitial(bytes32,address,bytes32,address)": TypedContractEvent<AssetHandlerRegisteredInitialEvent.InputTuple, AssetHandlerRegisteredInitialEvent.OutputTuple, AssetHandlerRegisteredInitialEvent.OutputObject>;
        AssetHandlerRegisteredInitial: TypedContractEvent<AssetHandlerRegisteredInitialEvent.InputTuple, AssetHandlerRegisteredInitialEvent.OutputTuple, AssetHandlerRegisteredInitialEvent.OutputObject>;
        "BridgehubDepositBaseTokenInitiated(uint256,address,bytes32,uint256)": TypedContractEvent<BridgehubDepositBaseTokenInitiatedEvent.InputTuple, BridgehubDepositBaseTokenInitiatedEvent.OutputTuple, BridgehubDepositBaseTokenInitiatedEvent.OutputObject>;
        BridgehubDepositBaseTokenInitiated: TypedContractEvent<BridgehubDepositBaseTokenInitiatedEvent.InputTuple, BridgehubDepositBaseTokenInitiatedEvent.OutputTuple, BridgehubDepositBaseTokenInitiatedEvent.OutputObject>;
        "BridgehubDepositFinalized(uint256,bytes32,bytes32)": TypedContractEvent<BridgehubDepositFinalizedEvent.InputTuple, BridgehubDepositFinalizedEvent.OutputTuple, BridgehubDepositFinalizedEvent.OutputObject>;
        BridgehubDepositFinalized: TypedContractEvent<BridgehubDepositFinalizedEvent.InputTuple, BridgehubDepositFinalizedEvent.OutputTuple, BridgehubDepositFinalizedEvent.OutputObject>;
        "BridgehubDepositInitiated(uint256,bytes32,address,bytes32,bytes)": TypedContractEvent<BridgehubDepositInitiatedEvent.InputTuple, BridgehubDepositInitiatedEvent.OutputTuple, BridgehubDepositInitiatedEvent.OutputObject>;
        BridgehubDepositInitiated: TypedContractEvent<BridgehubDepositInitiatedEvent.InputTuple, BridgehubDepositInitiatedEvent.OutputTuple, BridgehubDepositInitiatedEvent.OutputObject>;
        "BridgehubMintData(bytes)": TypedContractEvent<BridgehubMintDataEvent.InputTuple, BridgehubMintDataEvent.OutputTuple, BridgehubMintDataEvent.OutputObject>;
        BridgehubMintData: TypedContractEvent<BridgehubMintDataEvent.InputTuple, BridgehubMintDataEvent.OutputTuple, BridgehubMintDataEvent.OutputObject>;
        "BridgehubWithdrawalInitiated(uint256,address,bytes32,bytes32)": TypedContractEvent<BridgehubWithdrawalInitiatedEvent.InputTuple, BridgehubWithdrawalInitiatedEvent.OutputTuple, BridgehubWithdrawalInitiatedEvent.OutputObject>;
        BridgehubWithdrawalInitiated: TypedContractEvent<BridgehubWithdrawalInitiatedEvent.InputTuple, BridgehubWithdrawalInitiatedEvent.OutputTuple, BridgehubWithdrawalInitiatedEvent.OutputObject>;
        "ClaimedFailedDepositAssetRouter(uint256,bytes32,bytes)": TypedContractEvent<ClaimedFailedDepositAssetRouterEvent.InputTuple, ClaimedFailedDepositAssetRouterEvent.OutputTuple, ClaimedFailedDepositAssetRouterEvent.OutputObject>;
        ClaimedFailedDepositAssetRouter: TypedContractEvent<ClaimedFailedDepositAssetRouterEvent.InputTuple, ClaimedFailedDepositAssetRouterEvent.OutputTuple, ClaimedFailedDepositAssetRouterEvent.OutputObject>;
        "DepositFinalizedAssetRouter(uint256,bytes32,bytes)": TypedContractEvent<DepositFinalizedAssetRouterEvent.InputTuple, DepositFinalizedAssetRouterEvent.OutputTuple, DepositFinalizedAssetRouterEvent.OutputObject>;
        DepositFinalizedAssetRouter: TypedContractEvent<DepositFinalizedAssetRouterEvent.InputTuple, DepositFinalizedAssetRouterEvent.OutputTuple, DepositFinalizedAssetRouterEvent.OutputObject>;
        "Initialized(uint8)": TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        Initialized: TypedContractEvent<InitializedEvent.InputTuple, InitializedEvent.OutputTuple, InitializedEvent.OutputObject>;
        "LegacyDepositInitiated(uint256,bytes32,address,address,address,uint256)": TypedContractEvent<LegacyDepositInitiatedEvent.InputTuple, LegacyDepositInitiatedEvent.OutputTuple, LegacyDepositInitiatedEvent.OutputObject>;
        LegacyDepositInitiated: TypedContractEvent<LegacyDepositInitiatedEvent.InputTuple, LegacyDepositInitiatedEvent.OutputTuple, LegacyDepositInitiatedEvent.OutputObject>;
        "OwnershipTransferStarted(address,address)": TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
        OwnershipTransferStarted: TypedContractEvent<OwnershipTransferStartedEvent.InputTuple, OwnershipTransferStartedEvent.OutputTuple, OwnershipTransferStartedEvent.OutputObject>;
        "OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
        OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
        "Paused(address)": TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        Paused: TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        "Unpaused(address)": TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        Unpaused: TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    };
}
