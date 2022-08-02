// package: api_pb
// file: data.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as resources_pb from "./resources_pb";

export class SendData extends jspb.Message { 

    hasCoin(): boolean;
    clearCoin(): void;
    getCoin(): resources_pb.Coin | undefined;
    setCoin(value?: resources_pb.Coin): SendData;
    getTo(): string;
    setTo(value: string): SendData;
    getValue(): string;
    setValue(value: string): SendData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendData.AsObject;
    static toObject(includeInstance: boolean, msg: SendData): SendData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendData;
    static deserializeBinaryFromReader(message: SendData, reader: jspb.BinaryReader): SendData;
}

export namespace SendData {
    export type AsObject = {
        coin?: resources_pb.Coin.AsObject,
        to: string,
        value: string,
    }
}

export class SellCoinData extends jspb.Message { 

    hasCoinToSell(): boolean;
    clearCoinToSell(): void;
    getCoinToSell(): resources_pb.Coin | undefined;
    setCoinToSell(value?: resources_pb.Coin): SellCoinData;
    getValueToSell(): string;
    setValueToSell(value: string): SellCoinData;

    hasCoinToBuy(): boolean;
    clearCoinToBuy(): void;
    getCoinToBuy(): resources_pb.Coin | undefined;
    setCoinToBuy(value?: resources_pb.Coin): SellCoinData;
    getMinimumValueToBuy(): string;
    setMinimumValueToBuy(value: string): SellCoinData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SellCoinData.AsObject;
    static toObject(includeInstance: boolean, msg: SellCoinData): SellCoinData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SellCoinData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SellCoinData;
    static deserializeBinaryFromReader(message: SellCoinData, reader: jspb.BinaryReader): SellCoinData;
}

export namespace SellCoinData {
    export type AsObject = {
        coinToSell?: resources_pb.Coin.AsObject,
        valueToSell: string,
        coinToBuy?: resources_pb.Coin.AsObject,
        minimumValueToBuy: string,
    }
}

export class SellAllCoinData extends jspb.Message { 

    hasCoinToSell(): boolean;
    clearCoinToSell(): void;
    getCoinToSell(): resources_pb.Coin | undefined;
    setCoinToSell(value?: resources_pb.Coin): SellAllCoinData;

    hasCoinToBuy(): boolean;
    clearCoinToBuy(): void;
    getCoinToBuy(): resources_pb.Coin | undefined;
    setCoinToBuy(value?: resources_pb.Coin): SellAllCoinData;
    getMinimumValueToBuy(): string;
    setMinimumValueToBuy(value: string): SellAllCoinData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SellAllCoinData.AsObject;
    static toObject(includeInstance: boolean, msg: SellAllCoinData): SellAllCoinData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SellAllCoinData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SellAllCoinData;
    static deserializeBinaryFromReader(message: SellAllCoinData, reader: jspb.BinaryReader): SellAllCoinData;
}

export namespace SellAllCoinData {
    export type AsObject = {
        coinToSell?: resources_pb.Coin.AsObject,
        coinToBuy?: resources_pb.Coin.AsObject,
        minimumValueToBuy: string,
    }
}

export class BuyCoinData extends jspb.Message { 

    hasCoinToBuy(): boolean;
    clearCoinToBuy(): void;
    getCoinToBuy(): resources_pb.Coin | undefined;
    setCoinToBuy(value?: resources_pb.Coin): BuyCoinData;
    getValueToBuy(): string;
    setValueToBuy(value: string): BuyCoinData;

    hasCoinToSell(): boolean;
    clearCoinToSell(): void;
    getCoinToSell(): resources_pb.Coin | undefined;
    setCoinToSell(value?: resources_pb.Coin): BuyCoinData;
    getMaximumValueToSell(): string;
    setMaximumValueToSell(value: string): BuyCoinData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BuyCoinData.AsObject;
    static toObject(includeInstance: boolean, msg: BuyCoinData): BuyCoinData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BuyCoinData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BuyCoinData;
    static deserializeBinaryFromReader(message: BuyCoinData, reader: jspb.BinaryReader): BuyCoinData;
}

export namespace BuyCoinData {
    export type AsObject = {
        coinToBuy?: resources_pb.Coin.AsObject,
        valueToBuy: string,
        coinToSell?: resources_pb.Coin.AsObject,
        maximumValueToSell: string,
    }
}

export class CreateCoinData extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateCoinData;
    getSymbol(): string;
    setSymbol(value: string): CreateCoinData;
    getInitialAmount(): string;
    setInitialAmount(value: string): CreateCoinData;
    getInitialReserve(): string;
    setInitialReserve(value: string): CreateCoinData;
    getConstantReserveRatio(): number;
    setConstantReserveRatio(value: number): CreateCoinData;
    getMaxSupply(): string;
    setMaxSupply(value: string): CreateCoinData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateCoinData.AsObject;
    static toObject(includeInstance: boolean, msg: CreateCoinData): CreateCoinData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateCoinData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateCoinData;
    static deserializeBinaryFromReader(message: CreateCoinData, reader: jspb.BinaryReader): CreateCoinData;
}

export namespace CreateCoinData {
    export type AsObject = {
        name: string,
        symbol: string,
        initialAmount: string,
        initialReserve: string,
        constantReserveRatio: number,
        maxSupply: string,
    }
}

export class DeclareCandidacyData extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): DeclareCandidacyData;
    getPubKey(): string;
    setPubKey(value: string): DeclareCandidacyData;
    getCommission(): number;
    setCommission(value: number): DeclareCandidacyData;

    hasCoin(): boolean;
    clearCoin(): void;
    getCoin(): resources_pb.Coin | undefined;
    setCoin(value?: resources_pb.Coin): DeclareCandidacyData;
    getStake(): string;
    setStake(value: string): DeclareCandidacyData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeclareCandidacyData.AsObject;
    static toObject(includeInstance: boolean, msg: DeclareCandidacyData): DeclareCandidacyData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeclareCandidacyData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeclareCandidacyData;
    static deserializeBinaryFromReader(message: DeclareCandidacyData, reader: jspb.BinaryReader): DeclareCandidacyData;
}

export namespace DeclareCandidacyData {
    export type AsObject = {
        address: string,
        pubKey: string,
        commission: number,
        coin?: resources_pb.Coin.AsObject,
        stake: string,
    }
}

export class DelegateData extends jspb.Message { 
    getPubKey(): string;
    setPubKey(value: string): DelegateData;

    hasCoin(): boolean;
    clearCoin(): void;
    getCoin(): resources_pb.Coin | undefined;
    setCoin(value?: resources_pb.Coin): DelegateData;
    getValue(): string;
    setValue(value: string): DelegateData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DelegateData.AsObject;
    static toObject(includeInstance: boolean, msg: DelegateData): DelegateData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DelegateData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DelegateData;
    static deserializeBinaryFromReader(message: DelegateData, reader: jspb.BinaryReader): DelegateData;
}

export namespace DelegateData {
    export type AsObject = {
        pubKey: string,
        coin?: resources_pb.Coin.AsObject,
        value: string,
    }
}

export class UnbondData extends jspb.Message { 
    getPubKey(): string;
    setPubKey(value: string): UnbondData;

    hasCoin(): boolean;
    clearCoin(): void;
    getCoin(): resources_pb.Coin | undefined;
    setCoin(value?: resources_pb.Coin): UnbondData;
    getValue(): string;
    setValue(value: string): UnbondData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnbondData.AsObject;
    static toObject(includeInstance: boolean, msg: UnbondData): UnbondData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnbondData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnbondData;
    static deserializeBinaryFromReader(message: UnbondData, reader: jspb.BinaryReader): UnbondData;
}

export namespace UnbondData {
    export type AsObject = {
        pubKey: string,
        coin?: resources_pb.Coin.AsObject,
        value: string,
    }
}

export class RedeemCheckData extends jspb.Message { 
    getRawCheck(): string;
    setRawCheck(value: string): RedeemCheckData;
    getProof(): string;
    setProof(value: string): RedeemCheckData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedeemCheckData.AsObject;
    static toObject(includeInstance: boolean, msg: RedeemCheckData): RedeemCheckData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedeemCheckData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedeemCheckData;
    static deserializeBinaryFromReader(message: RedeemCheckData, reader: jspb.BinaryReader): RedeemCheckData;
}

export namespace RedeemCheckData {
    export type AsObject = {
        rawCheck: string,
        proof: string,
    }
}

export class SetCandidateOnData extends jspb.Message { 
    getPubKey(): string;
    setPubKey(value: string): SetCandidateOnData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetCandidateOnData.AsObject;
    static toObject(includeInstance: boolean, msg: SetCandidateOnData): SetCandidateOnData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetCandidateOnData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetCandidateOnData;
    static deserializeBinaryFromReader(message: SetCandidateOnData, reader: jspb.BinaryReader): SetCandidateOnData;
}

export namespace SetCandidateOnData {
    export type AsObject = {
        pubKey: string,
    }
}

export class SetCandidateOffData extends jspb.Message { 
    getPubKey(): string;
    setPubKey(value: string): SetCandidateOffData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetCandidateOffData.AsObject;
    static toObject(includeInstance: boolean, msg: SetCandidateOffData): SetCandidateOffData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetCandidateOffData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetCandidateOffData;
    static deserializeBinaryFromReader(message: SetCandidateOffData, reader: jspb.BinaryReader): SetCandidateOffData;
}

export namespace SetCandidateOffData {
    export type AsObject = {
        pubKey: string,
    }
}

export class CreateMultisigData extends jspb.Message { 
    getThreshold(): number;
    setThreshold(value: number): CreateMultisigData;
    clearWeightsList(): void;
    getWeightsList(): Array<number>;
    setWeightsList(value: Array<number>): CreateMultisigData;
    addWeights(value: number, index?: number): number;
    clearAddressesList(): void;
    getAddressesList(): Array<string>;
    setAddressesList(value: Array<string>): CreateMultisigData;
    addAddresses(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateMultisigData.AsObject;
    static toObject(includeInstance: boolean, msg: CreateMultisigData): CreateMultisigData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateMultisigData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateMultisigData;
    static deserializeBinaryFromReader(message: CreateMultisigData, reader: jspb.BinaryReader): CreateMultisigData;
}

export namespace CreateMultisigData {
    export type AsObject = {
        threshold: number,
        weightsList: Array<number>,
        addressesList: Array<string>,
    }
}

export class MultiSendData extends jspb.Message { 
    clearListList(): void;
    getListList(): Array<SendData>;
    setListList(value: Array<SendData>): MultiSendData;
    addList(value?: SendData, index?: number): SendData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultiSendData.AsObject;
    static toObject(includeInstance: boolean, msg: MultiSendData): MultiSendData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultiSendData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultiSendData;
    static deserializeBinaryFromReader(message: MultiSendData, reader: jspb.BinaryReader): MultiSendData;
}

export namespace MultiSendData {
    export type AsObject = {
        listList: Array<SendData.AsObject>,
    }
}

export class EditCandidateData extends jspb.Message { 
    getPubKey(): string;
    setPubKey(value: string): EditCandidateData;
    getRewardAddress(): string;
    setRewardAddress(value: string): EditCandidateData;
    getOwnerAddress(): string;
    setOwnerAddress(value: string): EditCandidateData;
    getControlAddress(): string;
    setControlAddress(value: string): EditCandidateData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EditCandidateData.AsObject;
    static toObject(includeInstance: boolean, msg: EditCandidateData): EditCandidateData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EditCandidateData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EditCandidateData;
    static deserializeBinaryFromReader(message: EditCandidateData, reader: jspb.BinaryReader): EditCandidateData;
}

export namespace EditCandidateData {
    export type AsObject = {
        pubKey: string,
        rewardAddress: string,
        ownerAddress: string,
        controlAddress: string,
    }
}

export class SetHaltBlockData extends jspb.Message { 
    getPubKey(): string;
    setPubKey(value: string): SetHaltBlockData;
    getHeight(): number;
    setHeight(value: number): SetHaltBlockData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetHaltBlockData.AsObject;
    static toObject(includeInstance: boolean, msg: SetHaltBlockData): SetHaltBlockData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetHaltBlockData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetHaltBlockData;
    static deserializeBinaryFromReader(message: SetHaltBlockData, reader: jspb.BinaryReader): SetHaltBlockData;
}

export namespace SetHaltBlockData {
    export type AsObject = {
        pubKey: string,
        height: number,
    }
}

export class RecreateCoinData extends jspb.Message { 
    getName(): string;
    setName(value: string): RecreateCoinData;
    getSymbol(): string;
    setSymbol(value: string): RecreateCoinData;
    getInitialAmount(): string;
    setInitialAmount(value: string): RecreateCoinData;
    getInitialReserve(): string;
    setInitialReserve(value: string): RecreateCoinData;
    getConstantReserveRatio(): number;
    setConstantReserveRatio(value: number): RecreateCoinData;
    getMaxSupply(): string;
    setMaxSupply(value: string): RecreateCoinData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecreateCoinData.AsObject;
    static toObject(includeInstance: boolean, msg: RecreateCoinData): RecreateCoinData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecreateCoinData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecreateCoinData;
    static deserializeBinaryFromReader(message: RecreateCoinData, reader: jspb.BinaryReader): RecreateCoinData;
}

export namespace RecreateCoinData {
    export type AsObject = {
        name: string,
        symbol: string,
        initialAmount: string,
        initialReserve: string,
        constantReserveRatio: number,
        maxSupply: string,
    }
}

export class EditCoinOwnerData extends jspb.Message { 
    getSymbol(): string;
    setSymbol(value: string): EditCoinOwnerData;
    getNewOwner(): string;
    setNewOwner(value: string): EditCoinOwnerData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EditCoinOwnerData.AsObject;
    static toObject(includeInstance: boolean, msg: EditCoinOwnerData): EditCoinOwnerData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EditCoinOwnerData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EditCoinOwnerData;
    static deserializeBinaryFromReader(message: EditCoinOwnerData, reader: jspb.BinaryReader): EditCoinOwnerData;
}

export namespace EditCoinOwnerData {
    export type AsObject = {
        symbol: string,
        newOwner: string,
    }
}

export class EditMultisigData extends jspb.Message { 
    getThreshold(): number;
    setThreshold(value: number): EditMultisigData;
    clearWeightsList(): void;
    getWeightsList(): Array<number>;
    setWeightsList(value: Array<number>): EditMultisigData;
    addWeights(value: number, index?: number): number;
    clearAddressesList(): void;
    getAddressesList(): Array<string>;
    setAddressesList(value: Array<string>): EditMultisigData;
    addAddresses(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EditMultisigData.AsObject;
    static toObject(includeInstance: boolean, msg: EditMultisigData): EditMultisigData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EditMultisigData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EditMultisigData;
    static deserializeBinaryFromReader(message: EditMultisigData, reader: jspb.BinaryReader): EditMultisigData;
}

export namespace EditMultisigData {
    export type AsObject = {
        threshold: number,
        weightsList: Array<number>,
        addressesList: Array<string>,
    }
}

export class EditCandidatePublicKeyData extends jspb.Message { 
    getPubKey(): string;
    setPubKey(value: string): EditCandidatePublicKeyData;
    getNewPubKey(): string;
    setNewPubKey(value: string): EditCandidatePublicKeyData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EditCandidatePublicKeyData.AsObject;
    static toObject(includeInstance: boolean, msg: EditCandidatePublicKeyData): EditCandidatePublicKeyData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EditCandidatePublicKeyData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EditCandidatePublicKeyData;
    static deserializeBinaryFromReader(message: EditCandidatePublicKeyData, reader: jspb.BinaryReader): EditCandidatePublicKeyData;
}

export namespace EditCandidatePublicKeyData {
    export type AsObject = {
        pubKey: string,
        newPubKey: string,
    }
}

export class CreateSwapPoolData extends jspb.Message { 

    hasCoin0(): boolean;
    clearCoin0(): void;
    getCoin0(): resources_pb.Coin | undefined;
    setCoin0(value?: resources_pb.Coin): CreateSwapPoolData;

    hasCoin1(): boolean;
    clearCoin1(): void;
    getCoin1(): resources_pb.Coin | undefined;
    setCoin1(value?: resources_pb.Coin): CreateSwapPoolData;
    getVolume0(): string;
    setVolume0(value: string): CreateSwapPoolData;
    getVolume1(): string;
    setVolume1(value: string): CreateSwapPoolData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateSwapPoolData.AsObject;
    static toObject(includeInstance: boolean, msg: CreateSwapPoolData): CreateSwapPoolData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateSwapPoolData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateSwapPoolData;
    static deserializeBinaryFromReader(message: CreateSwapPoolData, reader: jspb.BinaryReader): CreateSwapPoolData;
}

export namespace CreateSwapPoolData {
    export type AsObject = {
        coin0?: resources_pb.Coin.AsObject,
        coin1?: resources_pb.Coin.AsObject,
        volume0: string,
        volume1: string,
    }
}

export class AddLiquidityData extends jspb.Message { 

    hasCoin0(): boolean;
    clearCoin0(): void;
    getCoin0(): resources_pb.Coin | undefined;
    setCoin0(value?: resources_pb.Coin): AddLiquidityData;

    hasCoin1(): boolean;
    clearCoin1(): void;
    getCoin1(): resources_pb.Coin | undefined;
    setCoin1(value?: resources_pb.Coin): AddLiquidityData;
    getVolume0(): string;
    setVolume0(value: string): AddLiquidityData;
    getMaximumVolume1(): string;
    setMaximumVolume1(value: string): AddLiquidityData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddLiquidityData.AsObject;
    static toObject(includeInstance: boolean, msg: AddLiquidityData): AddLiquidityData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddLiquidityData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddLiquidityData;
    static deserializeBinaryFromReader(message: AddLiquidityData, reader: jspb.BinaryReader): AddLiquidityData;
}

export namespace AddLiquidityData {
    export type AsObject = {
        coin0?: resources_pb.Coin.AsObject,
        coin1?: resources_pb.Coin.AsObject,
        volume0: string,
        maximumVolume1: string,
    }
}

export class RemoveLiquidityData extends jspb.Message { 

    hasCoin0(): boolean;
    clearCoin0(): void;
    getCoin0(): resources_pb.Coin | undefined;
    setCoin0(value?: resources_pb.Coin): RemoveLiquidityData;

    hasCoin1(): boolean;
    clearCoin1(): void;
    getCoin1(): resources_pb.Coin | undefined;
    setCoin1(value?: resources_pb.Coin): RemoveLiquidityData;
    getLiquidity(): string;
    setLiquidity(value: string): RemoveLiquidityData;
    getMinimumVolume0(): string;
    setMinimumVolume0(value: string): RemoveLiquidityData;
    getMinimumVolume1(): string;
    setMinimumVolume1(value: string): RemoveLiquidityData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveLiquidityData.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveLiquidityData): RemoveLiquidityData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveLiquidityData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveLiquidityData;
    static deserializeBinaryFromReader(message: RemoveLiquidityData, reader: jspb.BinaryReader): RemoveLiquidityData;
}

export namespace RemoveLiquidityData {
    export type AsObject = {
        coin0?: resources_pb.Coin.AsObject,
        coin1?: resources_pb.Coin.AsObject,
        liquidity: string,
        minimumVolume0: string,
        minimumVolume1: string,
    }
}

export class SellSwapPoolData extends jspb.Message { 
    clearCoinsList(): void;
    getCoinsList(): Array<resources_pb.Coin>;
    setCoinsList(value: Array<resources_pb.Coin>): SellSwapPoolData;
    addCoins(value?: resources_pb.Coin, index?: number): resources_pb.Coin;
    getValueToSell(): string;
    setValueToSell(value: string): SellSwapPoolData;
    getMinimumValueToBuy(): string;
    setMinimumValueToBuy(value: string): SellSwapPoolData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SellSwapPoolData.AsObject;
    static toObject(includeInstance: boolean, msg: SellSwapPoolData): SellSwapPoolData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SellSwapPoolData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SellSwapPoolData;
    static deserializeBinaryFromReader(message: SellSwapPoolData, reader: jspb.BinaryReader): SellSwapPoolData;
}

export namespace SellSwapPoolData {
    export type AsObject = {
        coinsList: Array<resources_pb.Coin.AsObject>,
        valueToSell: string,
        minimumValueToBuy: string,
    }
}

export class SellAllSwapPoolData extends jspb.Message { 
    clearCoinsList(): void;
    getCoinsList(): Array<resources_pb.Coin>;
    setCoinsList(value: Array<resources_pb.Coin>): SellAllSwapPoolData;
    addCoins(value?: resources_pb.Coin, index?: number): resources_pb.Coin;
    getMinimumValueToBuy(): string;
    setMinimumValueToBuy(value: string): SellAllSwapPoolData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SellAllSwapPoolData.AsObject;
    static toObject(includeInstance: boolean, msg: SellAllSwapPoolData): SellAllSwapPoolData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SellAllSwapPoolData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SellAllSwapPoolData;
    static deserializeBinaryFromReader(message: SellAllSwapPoolData, reader: jspb.BinaryReader): SellAllSwapPoolData;
}

export namespace SellAllSwapPoolData {
    export type AsObject = {
        coinsList: Array<resources_pb.Coin.AsObject>,
        minimumValueToBuy: string,
    }
}

export class BuySwapPoolData extends jspb.Message { 
    clearCoinsList(): void;
    getCoinsList(): Array<resources_pb.Coin>;
    setCoinsList(value: Array<resources_pb.Coin>): BuySwapPoolData;
    addCoins(value?: resources_pb.Coin, index?: number): resources_pb.Coin;
    getValueToBuy(): string;
    setValueToBuy(value: string): BuySwapPoolData;
    getMaximumValueToSell(): string;
    setMaximumValueToSell(value: string): BuySwapPoolData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BuySwapPoolData.AsObject;
    static toObject(includeInstance: boolean, msg: BuySwapPoolData): BuySwapPoolData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BuySwapPoolData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BuySwapPoolData;
    static deserializeBinaryFromReader(message: BuySwapPoolData, reader: jspb.BinaryReader): BuySwapPoolData;
}

export namespace BuySwapPoolData {
    export type AsObject = {
        coinsList: Array<resources_pb.Coin.AsObject>,
        valueToBuy: string,
        maximumValueToSell: string,
    }
}

export class EditCandidateCommission extends jspb.Message { 
    getPubKey(): string;
    setPubKey(value: string): EditCandidateCommission;
    getCommission(): number;
    setCommission(value: number): EditCandidateCommission;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EditCandidateCommission.AsObject;
    static toObject(includeInstance: boolean, msg: EditCandidateCommission): EditCandidateCommission.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EditCandidateCommission, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EditCandidateCommission;
    static deserializeBinaryFromReader(message: EditCandidateCommission, reader: jspb.BinaryReader): EditCandidateCommission;
}

export namespace EditCandidateCommission {
    export type AsObject = {
        pubKey: string,
        commission: number,
    }
}

export class MintTokenData extends jspb.Message { 

    hasCoin(): boolean;
    clearCoin(): void;
    getCoin(): resources_pb.Coin | undefined;
    setCoin(value?: resources_pb.Coin): MintTokenData;
    getValue(): string;
    setValue(value: string): MintTokenData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MintTokenData.AsObject;
    static toObject(includeInstance: boolean, msg: MintTokenData): MintTokenData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MintTokenData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MintTokenData;
    static deserializeBinaryFromReader(message: MintTokenData, reader: jspb.BinaryReader): MintTokenData;
}

export namespace MintTokenData {
    export type AsObject = {
        coin?: resources_pb.Coin.AsObject,
        value: string,
    }
}

export class BurnTokenData extends jspb.Message { 

    hasCoin(): boolean;
    clearCoin(): void;
    getCoin(): resources_pb.Coin | undefined;
    setCoin(value?: resources_pb.Coin): BurnTokenData;
    getValue(): string;
    setValue(value: string): BurnTokenData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BurnTokenData.AsObject;
    static toObject(includeInstance: boolean, msg: BurnTokenData): BurnTokenData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BurnTokenData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BurnTokenData;
    static deserializeBinaryFromReader(message: BurnTokenData, reader: jspb.BinaryReader): BurnTokenData;
}

export namespace BurnTokenData {
    export type AsObject = {
        coin?: resources_pb.Coin.AsObject,
        value: string,
    }
}

export class CreateTokenData extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateTokenData;
    getSymbol(): string;
    setSymbol(value: string): CreateTokenData;
    getInitialAmount(): string;
    setInitialAmount(value: string): CreateTokenData;
    getMaxSupply(): string;
    setMaxSupply(value: string): CreateTokenData;
    getMintable(): boolean;
    setMintable(value: boolean): CreateTokenData;
    getBurnable(): boolean;
    setBurnable(value: boolean): CreateTokenData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTokenData.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTokenData): CreateTokenData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTokenData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTokenData;
    static deserializeBinaryFromReader(message: CreateTokenData, reader: jspb.BinaryReader): CreateTokenData;
}

export namespace CreateTokenData {
    export type AsObject = {
        name: string,
        symbol: string,
        initialAmount: string,
        maxSupply: string,
        mintable: boolean,
        burnable: boolean,
    }
}

export class RecreateTokenData extends jspb.Message { 
    getName(): string;
    setName(value: string): RecreateTokenData;
    getSymbol(): string;
    setSymbol(value: string): RecreateTokenData;
    getInitialAmount(): string;
    setInitialAmount(value: string): RecreateTokenData;
    getMaxSupply(): string;
    setMaxSupply(value: string): RecreateTokenData;
    getMintable(): boolean;
    setMintable(value: boolean): RecreateTokenData;
    getBurnable(): boolean;
    setBurnable(value: boolean): RecreateTokenData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RecreateTokenData.AsObject;
    static toObject(includeInstance: boolean, msg: RecreateTokenData): RecreateTokenData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RecreateTokenData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RecreateTokenData;
    static deserializeBinaryFromReader(message: RecreateTokenData, reader: jspb.BinaryReader): RecreateTokenData;
}

export namespace RecreateTokenData {
    export type AsObject = {
        name: string,
        symbol: string,
        initialAmount: string,
        maxSupply: string,
        mintable: boolean,
        burnable: boolean,
    }
}

export class VoteCommissionData extends jspb.Message { 
    getPubKey(): string;
    setPubKey(value: string): VoteCommissionData;
    getHeight(): number;
    setHeight(value: number): VoteCommissionData;

    hasCoin(): boolean;
    clearCoin(): void;
    getCoin(): resources_pb.Coin | undefined;
    setCoin(value?: resources_pb.Coin): VoteCommissionData;
    getPayloadByte(): string;
    setPayloadByte(value: string): VoteCommissionData;
    getSend(): string;
    setSend(value: string): VoteCommissionData;
    getBuyBancor(): string;
    setBuyBancor(value: string): VoteCommissionData;
    getSellBancor(): string;
    setSellBancor(value: string): VoteCommissionData;
    getSellAllBancor(): string;
    setSellAllBancor(value: string): VoteCommissionData;
    getBuyPoolBase(): string;
    setBuyPoolBase(value: string): VoteCommissionData;
    getBuyPoolDelta(): string;
    setBuyPoolDelta(value: string): VoteCommissionData;
    getSellPoolBase(): string;
    setSellPoolBase(value: string): VoteCommissionData;
    getSellPoolDelta(): string;
    setSellPoolDelta(value: string): VoteCommissionData;
    getSellAllPoolBase(): string;
    setSellAllPoolBase(value: string): VoteCommissionData;
    getSellAllPoolDelta(): string;
    setSellAllPoolDelta(value: string): VoteCommissionData;
    getCreateTicker3(): string;
    setCreateTicker3(value: string): VoteCommissionData;
    getCreateTicker4(): string;
    setCreateTicker4(value: string): VoteCommissionData;
    getCreateTicker5(): string;
    setCreateTicker5(value: string): VoteCommissionData;
    getCreateTicker6(): string;
    setCreateTicker6(value: string): VoteCommissionData;
    getCreateTicker710(): string;
    setCreateTicker710(value: string): VoteCommissionData;
    getCreateCoin(): string;
    setCreateCoin(value: string): VoteCommissionData;
    getCreateToken(): string;
    setCreateToken(value: string): VoteCommissionData;
    getRecreateCoin(): string;
    setRecreateCoin(value: string): VoteCommissionData;
    getRecreateToken(): string;
    setRecreateToken(value: string): VoteCommissionData;
    getDeclareCandidacy(): string;
    setDeclareCandidacy(value: string): VoteCommissionData;
    getDelegate(): string;
    setDelegate(value: string): VoteCommissionData;
    getUnbond(): string;
    setUnbond(value: string): VoteCommissionData;
    getRedeemCheck(): string;
    setRedeemCheck(value: string): VoteCommissionData;
    getSetCandidateOn(): string;
    setSetCandidateOn(value: string): VoteCommissionData;
    getSetCandidateOff(): string;
    setSetCandidateOff(value: string): VoteCommissionData;
    getCreateMultisig(): string;
    setCreateMultisig(value: string): VoteCommissionData;
    getMultisendBase(): string;
    setMultisendBase(value: string): VoteCommissionData;
    getMultisendDelta(): string;
    setMultisendDelta(value: string): VoteCommissionData;
    getEditCandidate(): string;
    setEditCandidate(value: string): VoteCommissionData;
    getSetHaltBlock(): string;
    setSetHaltBlock(value: string): VoteCommissionData;
    getEditTickerOwner(): string;
    setEditTickerOwner(value: string): VoteCommissionData;
    getEditMultisig(): string;
    setEditMultisig(value: string): VoteCommissionData;
    getEditCandidatePublicKey(): string;
    setEditCandidatePublicKey(value: string): VoteCommissionData;
    getCreateSwapPool(): string;
    setCreateSwapPool(value: string): VoteCommissionData;
    getAddLiquidity(): string;
    setAddLiquidity(value: string): VoteCommissionData;
    getRemoveLiquidity(): string;
    setRemoveLiquidity(value: string): VoteCommissionData;
    getEditCandidateCommission(): string;
    setEditCandidateCommission(value: string): VoteCommissionData;
    getMintToken(): string;
    setMintToken(value: string): VoteCommissionData;
    getBurnToken(): string;
    setBurnToken(value: string): VoteCommissionData;
    getVoteCommission(): string;
    setVoteCommission(value: string): VoteCommissionData;
    getVoteUpdate(): string;
    setVoteUpdate(value: string): VoteCommissionData;
    getFailedTx(): string;
    setFailedTx(value: string): VoteCommissionData;
    getAddLimitOrder(): string;
    setAddLimitOrder(value: string): VoteCommissionData;
    getRemoveLimitOrder(): string;
    setRemoveLimitOrder(value: string): VoteCommissionData;
    getMoveStake(): string;
    setMoveStake(value: string): VoteCommissionData;
    getLockStake(): string;
    setLockStake(value: string): VoteCommissionData;
    getLock(): string;
    setLock(value: string): VoteCommissionData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VoteCommissionData.AsObject;
    static toObject(includeInstance: boolean, msg: VoteCommissionData): VoteCommissionData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VoteCommissionData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VoteCommissionData;
    static deserializeBinaryFromReader(message: VoteCommissionData, reader: jspb.BinaryReader): VoteCommissionData;
}

export namespace VoteCommissionData {
    export type AsObject = {
        pubKey: string,
        height: number,
        coin?: resources_pb.Coin.AsObject,
        payloadByte: string,
        send: string,
        buyBancor: string,
        sellBancor: string,
        sellAllBancor: string,
        buyPoolBase: string,
        buyPoolDelta: string,
        sellPoolBase: string,
        sellPoolDelta: string,
        sellAllPoolBase: string,
        sellAllPoolDelta: string,
        createTicker3: string,
        createTicker4: string,
        createTicker5: string,
        createTicker6: string,
        createTicker710: string,
        createCoin: string,
        createToken: string,
        recreateCoin: string,
        recreateToken: string,
        declareCandidacy: string,
        delegate: string,
        unbond: string,
        redeemCheck: string,
        setCandidateOn: string,
        setCandidateOff: string,
        createMultisig: string,
        multisendBase: string,
        multisendDelta: string,
        editCandidate: string,
        setHaltBlock: string,
        editTickerOwner: string,
        editMultisig: string,
        editCandidatePublicKey: string,
        createSwapPool: string,
        addLiquidity: string,
        removeLiquidity: string,
        editCandidateCommission: string,
        mintToken: string,
        burnToken: string,
        voteCommission: string,
        voteUpdate: string,
        failedTx: string,
        addLimitOrder: string,
        removeLimitOrder: string,
        moveStake: string,
        lockStake: string,
        lock: string,
    }
}

export class VoteUpdateData extends jspb.Message { 
    getPubKey(): string;
    setPubKey(value: string): VoteUpdateData;
    getHeight(): number;
    setHeight(value: number): VoteUpdateData;
    getVersion(): string;
    setVersion(value: string): VoteUpdateData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VoteUpdateData.AsObject;
    static toObject(includeInstance: boolean, msg: VoteUpdateData): VoteUpdateData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VoteUpdateData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VoteUpdateData;
    static deserializeBinaryFromReader(message: VoteUpdateData, reader: jspb.BinaryReader): VoteUpdateData;
}

export namespace VoteUpdateData {
    export type AsObject = {
        pubKey: string,
        height: number,
        version: string,
    }
}

export class AddLimitOrderData extends jspb.Message { 

    hasCoinToSell(): boolean;
    clearCoinToSell(): void;
    getCoinToSell(): resources_pb.Coin | undefined;
    setCoinToSell(value?: resources_pb.Coin): AddLimitOrderData;
    getValueToSell(): string;
    setValueToSell(value: string): AddLimitOrderData;

    hasCoinToBuy(): boolean;
    clearCoinToBuy(): void;
    getCoinToBuy(): resources_pb.Coin | undefined;
    setCoinToBuy(value?: resources_pb.Coin): AddLimitOrderData;
    getValueToBuy(): string;
    setValueToBuy(value: string): AddLimitOrderData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddLimitOrderData.AsObject;
    static toObject(includeInstance: boolean, msg: AddLimitOrderData): AddLimitOrderData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddLimitOrderData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddLimitOrderData;
    static deserializeBinaryFromReader(message: AddLimitOrderData, reader: jspb.BinaryReader): AddLimitOrderData;
}

export namespace AddLimitOrderData {
    export type AsObject = {
        coinToSell?: resources_pb.Coin.AsObject,
        valueToSell: string,
        coinToBuy?: resources_pb.Coin.AsObject,
        valueToBuy: string,
    }
}

export class RemoveLimitOrderData extends jspb.Message { 
    getId(): number;
    setId(value: number): RemoveLimitOrderData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveLimitOrderData.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveLimitOrderData): RemoveLimitOrderData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveLimitOrderData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveLimitOrderData;
    static deserializeBinaryFromReader(message: RemoveLimitOrderData, reader: jspb.BinaryReader): RemoveLimitOrderData;
}

export namespace RemoveLimitOrderData {
    export type AsObject = {
        id: number,
    }
}

export class MoveStakeData extends jspb.Message { 
    getFromPubKey(): string;
    setFromPubKey(value: string): MoveStakeData;
    getToPubKey(): string;
    setToPubKey(value: string): MoveStakeData;

    hasCoin(): boolean;
    clearCoin(): void;
    getCoin(): resources_pb.Coin | undefined;
    setCoin(value?: resources_pb.Coin): MoveStakeData;
    getValue(): string;
    setValue(value: string): MoveStakeData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoveStakeData.AsObject;
    static toObject(includeInstance: boolean, msg: MoveStakeData): MoveStakeData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoveStakeData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoveStakeData;
    static deserializeBinaryFromReader(message: MoveStakeData, reader: jspb.BinaryReader): MoveStakeData;
}

export namespace MoveStakeData {
    export type AsObject = {
        fromPubKey: string,
        toPubKey: string,
        coin?: resources_pb.Coin.AsObject,
        value: string,
    }
}

export class LockStakeData extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LockStakeData.AsObject;
    static toObject(includeInstance: boolean, msg: LockStakeData): LockStakeData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LockStakeData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LockStakeData;
    static deserializeBinaryFromReader(message: LockStakeData, reader: jspb.BinaryReader): LockStakeData;
}

export namespace LockStakeData {
    export type AsObject = {
    }
}

export class LockData extends jspb.Message { 
    getDueBlock(): number;
    setDueBlock(value: number): LockData;

    hasCoin(): boolean;
    clearCoin(): void;
    getCoin(): resources_pb.Coin | undefined;
    setCoin(value?: resources_pb.Coin): LockData;
    getValue(): string;
    setValue(value: string): LockData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LockData.AsObject;
    static toObject(includeInstance: boolean, msg: LockData): LockData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LockData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LockData;
    static deserializeBinaryFromReader(message: LockData, reader: jspb.BinaryReader): LockData;
}

export namespace LockData {
    export type AsObject = {
        dueBlock: number,
        coin?: resources_pb.Coin.AsObject,
        value: string,
    }
}
