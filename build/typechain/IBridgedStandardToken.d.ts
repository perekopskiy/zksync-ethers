import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export interface IBridgedStandardTokenInterface extends Interface {
    getFunction(nameOrSignature: "assetId" | "bridgeBurn" | "bridgeMint" | "l1Address" | "l2Bridge" | "nativeTokenVault" | "originToken"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "BridgeBurn" | "BridgeInitialize" | "BridgeMint"): EventFragment;
    encodeFunctionData(functionFragment: "assetId", values?: undefined): string;
    encodeFunctionData(functionFragment: "bridgeBurn", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "bridgeMint", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "l1Address", values?: undefined): string;
    encodeFunctionData(functionFragment: "l2Bridge", values?: undefined): string;
    encodeFunctionData(functionFragment: "nativeTokenVault", values?: undefined): string;
    encodeFunctionData(functionFragment: "originToken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "assetId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgeBurn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bridgeMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l1Address", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2Bridge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nativeTokenVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "originToken", data: BytesLike): Result;
}
export declare namespace BridgeBurnEvent {
    type InputTuple = [account: AddressLike, amount: BigNumberish];
    type OutputTuple = [account: string, amount: bigint];
    interface OutputObject {
        account: string;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BridgeInitializeEvent {
    type InputTuple = [
        l1Token: AddressLike,
        name: string,
        symbol: string,
        decimals: BigNumberish
    ];
    type OutputTuple = [
        l1Token: string,
        name: string,
        symbol: string,
        decimals: bigint
    ];
    interface OutputObject {
        l1Token: string;
        name: string;
        symbol: string;
        decimals: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BridgeMintEvent {
    type InputTuple = [account: AddressLike, amount: BigNumberish];
    type OutputTuple = [account: string, amount: bigint];
    interface OutputObject {
        account: string;
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface IBridgedStandardToken extends BaseContract {
    connect(runner?: ContractRunner | null): IBridgedStandardToken;
    waitForDeployment(): Promise<this>;
    interface: IBridgedStandardTokenInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    assetId: TypedContractMethod<[], [string], "view">;
    bridgeBurn: TypedContractMethod<[
        _account: AddressLike,
        _amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    bridgeMint: TypedContractMethod<[
        _account: AddressLike,
        _amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    l1Address: TypedContractMethod<[], [string], "view">;
    l2Bridge: TypedContractMethod<[], [string], "view">;
    nativeTokenVault: TypedContractMethod<[], [string], "view">;
    originToken: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "assetId"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "bridgeBurn"): TypedContractMethod<[
        _account: AddressLike,
        _amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "bridgeMint"): TypedContractMethod<[
        _account: AddressLike,
        _amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "l1Address"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "l2Bridge"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "nativeTokenVault"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "originToken"): TypedContractMethod<[], [string], "view">;
    getEvent(key: "BridgeBurn"): TypedContractEvent<BridgeBurnEvent.InputTuple, BridgeBurnEvent.OutputTuple, BridgeBurnEvent.OutputObject>;
    getEvent(key: "BridgeInitialize"): TypedContractEvent<BridgeInitializeEvent.InputTuple, BridgeInitializeEvent.OutputTuple, BridgeInitializeEvent.OutputObject>;
    getEvent(key: "BridgeMint"): TypedContractEvent<BridgeMintEvent.InputTuple, BridgeMintEvent.OutputTuple, BridgeMintEvent.OutputObject>;
    filters: {
        "BridgeBurn(address,uint256)": TypedContractEvent<BridgeBurnEvent.InputTuple, BridgeBurnEvent.OutputTuple, BridgeBurnEvent.OutputObject>;
        BridgeBurn: TypedContractEvent<BridgeBurnEvent.InputTuple, BridgeBurnEvent.OutputTuple, BridgeBurnEvent.OutputObject>;
        "BridgeInitialize(address,string,string,uint8)": TypedContractEvent<BridgeInitializeEvent.InputTuple, BridgeInitializeEvent.OutputTuple, BridgeInitializeEvent.OutputObject>;
        BridgeInitialize: TypedContractEvent<BridgeInitializeEvent.InputTuple, BridgeInitializeEvent.OutputTuple, BridgeInitializeEvent.OutputObject>;
        "BridgeMint(address,uint256)": TypedContractEvent<BridgeMintEvent.InputTuple, BridgeMintEvent.OutputTuple, BridgeMintEvent.OutputObject>;
        BridgeMint: TypedContractEvent<BridgeMintEvent.InputTuple, BridgeMintEvent.OutputTuple, BridgeMintEvent.OutputObject>;
    };
}