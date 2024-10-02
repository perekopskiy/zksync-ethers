import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface IAssetRouterBaseInterface extends Interface {
    getFunction(nameOrSignature: "BRIDGE_HUB" | "assetHandlerAddress" | "finalizeDeposit" | "setAssetHandlerAddressThisChain"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "AssetHandlerRegistered" | "AssetHandlerRegisteredInitial" | "BridgehubDepositBaseTokenInitiated" | "BridgehubDepositInitiated" | "BridgehubWithdrawalInitiated" | "DepositFinalizedAssetRouter"): EventFragment;
    encodeFunctionData(functionFragment: "BRIDGE_HUB", values?: undefined): string;
    encodeFunctionData(functionFragment: "assetHandlerAddress", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "finalizeDeposit", values: [BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "setAssetHandlerAddressThisChain", values: [BytesLike, AddressLike]): string;
    decodeFunctionResult(functionFragment: "BRIDGE_HUB", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assetHandlerAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAssetHandlerAddressThisChain", data: BytesLike): Result;
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
export interface IAssetRouterBase extends BaseContract {
    connect(runner?: ContractRunner | null): IAssetRouterBase;
    waitForDeployment(): Promise<this>;
    interface: IAssetRouterBaseInterface;
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
    assetHandlerAddress: TypedContractMethod<[
        _assetId: BytesLike
    ], [
        string
    ], "view">;
    finalizeDeposit: TypedContractMethod<[
        _chainId: BigNumberish,
        _assetId: BytesLike,
        _transferData: BytesLike
    ], [
        void
    ], "nonpayable">;
    setAssetHandlerAddressThisChain: TypedContractMethod<[
        _assetRegistrationData: BytesLike,
        _assetHandlerAddress: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "BRIDGE_HUB"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "assetHandlerAddress"): TypedContractMethod<[_assetId: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "finalizeDeposit"): TypedContractMethod<[
        _chainId: BigNumberish,
        _assetId: BytesLike,
        _transferData: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setAssetHandlerAddressThisChain"): TypedContractMethod<[
        _assetRegistrationData: BytesLike,
        _assetHandlerAddress: AddressLike
    ], [
        void
    ], "nonpayable">;
    getEvent(key: "AssetHandlerRegistered"): TypedContractEvent<AssetHandlerRegisteredEvent.InputTuple, AssetHandlerRegisteredEvent.OutputTuple, AssetHandlerRegisteredEvent.OutputObject>;
    getEvent(key: "AssetHandlerRegisteredInitial"): TypedContractEvent<AssetHandlerRegisteredInitialEvent.InputTuple, AssetHandlerRegisteredInitialEvent.OutputTuple, AssetHandlerRegisteredInitialEvent.OutputObject>;
    getEvent(key: "BridgehubDepositBaseTokenInitiated"): TypedContractEvent<BridgehubDepositBaseTokenInitiatedEvent.InputTuple, BridgehubDepositBaseTokenInitiatedEvent.OutputTuple, BridgehubDepositBaseTokenInitiatedEvent.OutputObject>;
    getEvent(key: "BridgehubDepositInitiated"): TypedContractEvent<BridgehubDepositInitiatedEvent.InputTuple, BridgehubDepositInitiatedEvent.OutputTuple, BridgehubDepositInitiatedEvent.OutputObject>;
    getEvent(key: "BridgehubWithdrawalInitiated"): TypedContractEvent<BridgehubWithdrawalInitiatedEvent.InputTuple, BridgehubWithdrawalInitiatedEvent.OutputTuple, BridgehubWithdrawalInitiatedEvent.OutputObject>;
    getEvent(key: "DepositFinalizedAssetRouter"): TypedContractEvent<DepositFinalizedAssetRouterEvent.InputTuple, DepositFinalizedAssetRouterEvent.OutputTuple, DepositFinalizedAssetRouterEvent.OutputObject>;
    filters: {
        "AssetHandlerRegistered(bytes32,address)": TypedContractEvent<AssetHandlerRegisteredEvent.InputTuple, AssetHandlerRegisteredEvent.OutputTuple, AssetHandlerRegisteredEvent.OutputObject>;
        AssetHandlerRegistered: TypedContractEvent<AssetHandlerRegisteredEvent.InputTuple, AssetHandlerRegisteredEvent.OutputTuple, AssetHandlerRegisteredEvent.OutputObject>;
        "AssetHandlerRegisteredInitial(bytes32,address,bytes32,address)": TypedContractEvent<AssetHandlerRegisteredInitialEvent.InputTuple, AssetHandlerRegisteredInitialEvent.OutputTuple, AssetHandlerRegisteredInitialEvent.OutputObject>;
        AssetHandlerRegisteredInitial: TypedContractEvent<AssetHandlerRegisteredInitialEvent.InputTuple, AssetHandlerRegisteredInitialEvent.OutputTuple, AssetHandlerRegisteredInitialEvent.OutputObject>;
        "BridgehubDepositBaseTokenInitiated(uint256,address,bytes32,uint256)": TypedContractEvent<BridgehubDepositBaseTokenInitiatedEvent.InputTuple, BridgehubDepositBaseTokenInitiatedEvent.OutputTuple, BridgehubDepositBaseTokenInitiatedEvent.OutputObject>;
        BridgehubDepositBaseTokenInitiated: TypedContractEvent<BridgehubDepositBaseTokenInitiatedEvent.InputTuple, BridgehubDepositBaseTokenInitiatedEvent.OutputTuple, BridgehubDepositBaseTokenInitiatedEvent.OutputObject>;
        "BridgehubDepositInitiated(uint256,bytes32,address,bytes32,bytes)": TypedContractEvent<BridgehubDepositInitiatedEvent.InputTuple, BridgehubDepositInitiatedEvent.OutputTuple, BridgehubDepositInitiatedEvent.OutputObject>;
        BridgehubDepositInitiated: TypedContractEvent<BridgehubDepositInitiatedEvent.InputTuple, BridgehubDepositInitiatedEvent.OutputTuple, BridgehubDepositInitiatedEvent.OutputObject>;
        "BridgehubWithdrawalInitiated(uint256,address,bytes32,bytes32)": TypedContractEvent<BridgehubWithdrawalInitiatedEvent.InputTuple, BridgehubWithdrawalInitiatedEvent.OutputTuple, BridgehubWithdrawalInitiatedEvent.OutputObject>;
        BridgehubWithdrawalInitiated: TypedContractEvent<BridgehubWithdrawalInitiatedEvent.InputTuple, BridgehubWithdrawalInitiatedEvent.OutputTuple, BridgehubWithdrawalInitiatedEvent.OutputObject>;
        "DepositFinalizedAssetRouter(uint256,bytes32,bytes)": TypedContractEvent<DepositFinalizedAssetRouterEvent.InputTuple, DepositFinalizedAssetRouterEvent.OutputTuple, DepositFinalizedAssetRouterEvent.OutputObject>;
        DepositFinalizedAssetRouter: TypedContractEvent<DepositFinalizedAssetRouterEvent.InputTuple, DepositFinalizedAssetRouterEvent.OutputTuple, DepositFinalizedAssetRouterEvent.OutputObject>;
    };
}
