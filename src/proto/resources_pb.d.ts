// package: api_pb
// file: resources.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class Coin extends jspb.Message { 
    getId(): number;
    setId(value: number): Coin;
    getSymbol(): string;
    setSymbol(value: string): Coin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Coin.AsObject;
    static toObject(includeInstance: boolean, msg: Coin): Coin.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Coin, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Coin;
    static deserializeBinaryFromReader(message: Coin, reader: jspb.BinaryReader): Coin;
}

export namespace Coin {
    export type AsObject = {
        id: number,
        symbol: string,
    }
}

export class BestTradeRequest extends jspb.Message { 
    getSellCoin(): number;
    setSellCoin(value: number): BestTradeRequest;
    getBuyCoin(): number;
    setBuyCoin(value: number): BestTradeRequest;
    getAmount(): string;
    setAmount(value: string): BestTradeRequest;
    getType(): BestTradeRequest.Type;
    setType(value: BestTradeRequest.Type): BestTradeRequest;
    getHeight(): number;
    setHeight(value: number): BestTradeRequest;
    getMaxDepth(): number;
    setMaxDepth(value: number): BestTradeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BestTradeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BestTradeRequest): BestTradeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BestTradeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BestTradeRequest;
    static deserializeBinaryFromReader(message: BestTradeRequest, reader: jspb.BinaryReader): BestTradeRequest;
}

export namespace BestTradeRequest {
    export type AsObject = {
        sellCoin: number,
        buyCoin: number,
        amount: string,
        type: BestTradeRequest.Type,
        height: number,
        maxDepth: number,
    }

    export enum Type {
    INPUT = 0,
    OUTPUT = 1,
    }

}

export class BestTradeResponse extends jspb.Message { 
    clearPathList(): void;
    getPathList(): Array<number>;
    setPathList(value: Array<number>): BestTradeResponse;
    addPath(value: number, index?: number): number;
    getResult(): string;
    setResult(value: string): BestTradeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BestTradeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BestTradeResponse): BestTradeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BestTradeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BestTradeResponse;
    static deserializeBinaryFromReader(message: BestTradeResponse, reader: jspb.BinaryReader): BestTradeResponse;
}

export namespace BestTradeResponse {
    export type AsObject = {
        pathList: Array<number>,
        result: string,
    }
}

export class BlocksRequest extends jspb.Message { 
    getFromHeight(): number;
    setFromHeight(value: number): BlocksRequest;
    getToHeight(): number;
    setToHeight(value: number): BlocksRequest;
    clearFieldsList(): void;
    getFieldsList(): Array<BlockField>;
    setFieldsList(value: Array<BlockField>): BlocksRequest;
    addFields(value: BlockField, index?: number): BlockField;
    getFailedTxs(): boolean;
    setFailedTxs(value: boolean): BlocksRequest;
    getEvents(): boolean;
    setEvents(value: boolean): BlocksRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlocksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BlocksRequest): BlocksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlocksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlocksRequest;
    static deserializeBinaryFromReader(message: BlocksRequest, reader: jspb.BinaryReader): BlocksRequest;
}

export namespace BlocksRequest {
    export type AsObject = {
        fromHeight: number,
        toHeight: number,
        fieldsList: Array<BlockField>,
        failedTxs: boolean,
        events: boolean,
    }
}

export class BlocksResponse extends jspb.Message { 
    clearBlocksList(): void;
    getBlocksList(): Array<BlockResponse>;
    setBlocksList(value: Array<BlockResponse>): BlocksResponse;
    addBlocks(value?: BlockResponse, index?: number): BlockResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlocksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BlocksResponse): BlocksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlocksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlocksResponse;
    static deserializeBinaryFromReader(message: BlocksResponse, reader: jspb.BinaryReader): BlocksResponse;
}

export namespace BlocksResponse {
    export type AsObject = {
        blocksList: Array<BlockResponse.AsObject>,
    }
}

export class CommissionVotesRequest extends jspb.Message { 
    getTargetVersion(): number;
    setTargetVersion(value: number): CommissionVotesRequest;
    getHeight(): number;
    setHeight(value: number): CommissionVotesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommissionVotesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CommissionVotesRequest): CommissionVotesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommissionVotesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommissionVotesRequest;
    static deserializeBinaryFromReader(message: CommissionVotesRequest, reader: jspb.BinaryReader): CommissionVotesRequest;
}

export namespace CommissionVotesRequest {
    export type AsObject = {
        targetVersion: number,
        height: number,
    }
}

export class CommissionVotesResponse extends jspb.Message { 
    clearVotesList(): void;
    getVotesList(): Array<CommissionVotesResponse.Vote>;
    setVotesList(value: Array<CommissionVotesResponse.Vote>): CommissionVotesResponse;
    addVotes(value?: CommissionVotesResponse.Vote, index?: number): CommissionVotesResponse.Vote;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CommissionVotesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CommissionVotesResponse): CommissionVotesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CommissionVotesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CommissionVotesResponse;
    static deserializeBinaryFromReader(message: CommissionVotesResponse, reader: jspb.BinaryReader): CommissionVotesResponse;
}

export namespace CommissionVotesResponse {
    export type AsObject = {
        votesList: Array<CommissionVotesResponse.Vote.AsObject>,
    }


    export class Vote extends jspb.Message { 

        hasPrice(): boolean;
        clearPrice(): void;
        getPrice(): PriceCommissionResponse | undefined;
        setPrice(value?: PriceCommissionResponse): Vote;
        clearPublicKeysList(): void;
        getPublicKeysList(): Array<string>;
        setPublicKeysList(value: Array<string>): Vote;
        addPublicKeys(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Vote.AsObject;
        static toObject(includeInstance: boolean, msg: Vote): Vote.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Vote, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Vote;
        static deserializeBinaryFromReader(message: Vote, reader: jspb.BinaryReader): Vote;
    }

    export namespace Vote {
        export type AsObject = {
            price?: PriceCommissionResponse.AsObject,
            publicKeysList: Array<string>,
        }
    }

}

export class LimitOrderRequest extends jspb.Message { 
    getOrderId(): number;
    setOrderId(value: number): LimitOrderRequest;
    getHeight(): number;
    setHeight(value: number): LimitOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LimitOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LimitOrderRequest): LimitOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LimitOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LimitOrderRequest;
    static deserializeBinaryFromReader(message: LimitOrderRequest, reader: jspb.BinaryReader): LimitOrderRequest;
}

export namespace LimitOrderRequest {
    export type AsObject = {
        orderId: number,
        height: number,
    }
}

export class LimitOrderResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): LimitOrderResponse;

    hasCoinSell(): boolean;
    clearCoinSell(): void;
    getCoinSell(): Coin | undefined;
    setCoinSell(value?: Coin): LimitOrderResponse;

    hasCoinBuy(): boolean;
    clearCoinBuy(): void;
    getCoinBuy(): Coin | undefined;
    setCoinBuy(value?: Coin): LimitOrderResponse;
    getWantSell(): string;
    setWantSell(value: string): LimitOrderResponse;
    getWantBuy(): string;
    setWantBuy(value: string): LimitOrderResponse;
    getPrice(): string;
    setPrice(value: string): LimitOrderResponse;
    getOwner(): string;
    setOwner(value: string): LimitOrderResponse;
    getHeight(): number;
    setHeight(value: number): LimitOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LimitOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LimitOrderResponse): LimitOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LimitOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LimitOrderResponse;
    static deserializeBinaryFromReader(message: LimitOrderResponse, reader: jspb.BinaryReader): LimitOrderResponse;
}

export namespace LimitOrderResponse {
    export type AsObject = {
        id: number,
        coinSell?: Coin.AsObject,
        coinBuy?: Coin.AsObject,
        wantSell: string,
        wantBuy: string,
        price: string,
        owner: string,
        height: number,
    }
}

export class LimitOrdersOfPoolRequest extends jspb.Message { 
    getSellCoin(): number;
    setSellCoin(value: number): LimitOrdersOfPoolRequest;
    getBuyCoin(): number;
    setBuyCoin(value: number): LimitOrdersOfPoolRequest;
    getLimit(): number;
    setLimit(value: number): LimitOrdersOfPoolRequest;
    getHeight(): number;
    setHeight(value: number): LimitOrdersOfPoolRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LimitOrdersOfPoolRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LimitOrdersOfPoolRequest): LimitOrdersOfPoolRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LimitOrdersOfPoolRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LimitOrdersOfPoolRequest;
    static deserializeBinaryFromReader(message: LimitOrdersOfPoolRequest, reader: jspb.BinaryReader): LimitOrdersOfPoolRequest;
}

export namespace LimitOrdersOfPoolRequest {
    export type AsObject = {
        sellCoin: number,
        buyCoin: number,
        limit: number,
        height: number,
    }
}

export class LimitOrdersOfPoolResponse extends jspb.Message { 
    getPoolPrice(): string;
    setPoolPrice(value: string): LimitOrdersOfPoolResponse;
    clearOrdersList(): void;
    getOrdersList(): Array<LimitOrderResponse>;
    setOrdersList(value: Array<LimitOrderResponse>): LimitOrdersOfPoolResponse;
    addOrders(value?: LimitOrderResponse, index?: number): LimitOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LimitOrdersOfPoolResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LimitOrdersOfPoolResponse): LimitOrdersOfPoolResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LimitOrdersOfPoolResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LimitOrdersOfPoolResponse;
    static deserializeBinaryFromReader(message: LimitOrdersOfPoolResponse, reader: jspb.BinaryReader): LimitOrdersOfPoolResponse;
}

export namespace LimitOrdersOfPoolResponse {
    export type AsObject = {
        poolPrice: string,
        ordersList: Array<LimitOrderResponse.AsObject>,
    }
}

export class LimitOrdersRequest extends jspb.Message { 
    clearIdsList(): void;
    getIdsList(): Array<number>;
    setIdsList(value: Array<number>): LimitOrdersRequest;
    addIds(value: number, index?: number): number;
    getHeight(): number;
    setHeight(value: number): LimitOrdersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LimitOrdersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LimitOrdersRequest): LimitOrdersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LimitOrdersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LimitOrdersRequest;
    static deserializeBinaryFromReader(message: LimitOrdersRequest, reader: jspb.BinaryReader): LimitOrdersRequest;
}

export namespace LimitOrdersRequest {
    export type AsObject = {
        idsList: Array<number>,
        height: number,
    }
}

export class LimitOrdersResponse extends jspb.Message { 
    clearOrdersList(): void;
    getOrdersList(): Array<LimitOrderResponse>;
    setOrdersList(value: Array<LimitOrderResponse>): LimitOrdersResponse;
    addOrders(value?: LimitOrderResponse, index?: number): LimitOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LimitOrdersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LimitOrdersResponse): LimitOrdersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LimitOrdersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LimitOrdersResponse;
    static deserializeBinaryFromReader(message: LimitOrdersResponse, reader: jspb.BinaryReader): LimitOrdersResponse;
}

export namespace LimitOrdersResponse {
    export type AsObject = {
        ordersList: Array<LimitOrderResponse.AsObject>,
    }
}

export class UpdateVotesRequest extends jspb.Message { 
    getTargetVersion(): number;
    setTargetVersion(value: number): UpdateVotesRequest;
    getHeight(): number;
    setHeight(value: number): UpdateVotesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateVotesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateVotesRequest): UpdateVotesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateVotesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateVotesRequest;
    static deserializeBinaryFromReader(message: UpdateVotesRequest, reader: jspb.BinaryReader): UpdateVotesRequest;
}

export namespace UpdateVotesRequest {
    export type AsObject = {
        targetVersion: number,
        height: number,
    }
}

export class UpdateVotesResponse extends jspb.Message { 
    clearVotesList(): void;
    getVotesList(): Array<UpdateVotesResponse.Vote>;
    setVotesList(value: Array<UpdateVotesResponse.Vote>): UpdateVotesResponse;
    addVotes(value?: UpdateVotesResponse.Vote, index?: number): UpdateVotesResponse.Vote;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateVotesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateVotesResponse): UpdateVotesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateVotesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateVotesResponse;
    static deserializeBinaryFromReader(message: UpdateVotesResponse, reader: jspb.BinaryReader): UpdateVotesResponse;
}

export namespace UpdateVotesResponse {
    export type AsObject = {
        votesList: Array<UpdateVotesResponse.Vote.AsObject>,
    }


    export class Vote extends jspb.Message { 
        getVersion(): string;
        setVersion(value: string): Vote;
        clearPublicKeysList(): void;
        getPublicKeysList(): Array<string>;
        setPublicKeysList(value: Array<string>): Vote;
        addPublicKeys(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Vote.AsObject;
        static toObject(includeInstance: boolean, msg: Vote): Vote.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Vote, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Vote;
        static deserializeBinaryFromReader(message: Vote, reader: jspb.BinaryReader): Vote;
    }

    export namespace Vote {
        export type AsObject = {
            version: string,
            publicKeysList: Array<string>,
        }
    }

}

export class VersionNetworkRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VersionNetworkRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VersionNetworkRequest): VersionNetworkRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VersionNetworkRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VersionNetworkRequest;
    static deserializeBinaryFromReader(message: VersionNetworkRequest, reader: jspb.BinaryReader): VersionNetworkRequest;
}

export namespace VersionNetworkRequest {
    export type AsObject = {
    }
}

export class VersionNetworkResponse extends jspb.Message { 
    getCurrent(): string;
    setCurrent(value: string): VersionNetworkResponse;
    clearVersionsList(): void;
    getVersionsList(): Array<VersionNetworkResponse.Version>;
    setVersionsList(value: Array<VersionNetworkResponse.Version>): VersionNetworkResponse;
    addVersions(value?: VersionNetworkResponse.Version, index?: number): VersionNetworkResponse.Version;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VersionNetworkResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VersionNetworkResponse): VersionNetworkResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VersionNetworkResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VersionNetworkResponse;
    static deserializeBinaryFromReader(message: VersionNetworkResponse, reader: jspb.BinaryReader): VersionNetworkResponse;
}

export namespace VersionNetworkResponse {
    export type AsObject = {
        current: string,
        versionsList: Array<VersionNetworkResponse.Version.AsObject>,
    }


    export class Version extends jspb.Message { 
        getName(): string;
        setName(value: string): Version;
        getHeight(): number;
        setHeight(value: number): Version;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Version.AsObject;
        static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Version;
        static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
    }

    export namespace Version {
        export type AsObject = {
            name: string,
            height: number,
        }
    }

}

export class PriceCommissionRequest extends jspb.Message { 
    getHeight(): number;
    setHeight(value: number): PriceCommissionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriceCommissionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PriceCommissionRequest): PriceCommissionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriceCommissionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriceCommissionRequest;
    static deserializeBinaryFromReader(message: PriceCommissionRequest, reader: jspb.BinaryReader): PriceCommissionRequest;
}

export namespace PriceCommissionRequest {
    export type AsObject = {
        height: number,
    }
}

export class PriceCommissionResponse extends jspb.Message { 

    hasCoin(): boolean;
    clearCoin(): void;
    getCoin(): Coin | undefined;
    setCoin(value?: Coin): PriceCommissionResponse;
    getPayloadByte(): string;
    setPayloadByte(value: string): PriceCommissionResponse;
    getSend(): string;
    setSend(value: string): PriceCommissionResponse;
    getBuyBancor(): string;
    setBuyBancor(value: string): PriceCommissionResponse;
    getSellBancor(): string;
    setSellBancor(value: string): PriceCommissionResponse;
    getSellAllBancor(): string;
    setSellAllBancor(value: string): PriceCommissionResponse;
    getBuyPoolBase(): string;
    setBuyPoolBase(value: string): PriceCommissionResponse;
    getBuyPoolDelta(): string;
    setBuyPoolDelta(value: string): PriceCommissionResponse;
    getSellPoolBase(): string;
    setSellPoolBase(value: string): PriceCommissionResponse;
    getSellPoolDelta(): string;
    setSellPoolDelta(value: string): PriceCommissionResponse;
    getSellAllPoolBase(): string;
    setSellAllPoolBase(value: string): PriceCommissionResponse;
    getSellAllPoolDelta(): string;
    setSellAllPoolDelta(value: string): PriceCommissionResponse;
    getCreateTicker3(): string;
    setCreateTicker3(value: string): PriceCommissionResponse;
    getCreateTicker4(): string;
    setCreateTicker4(value: string): PriceCommissionResponse;
    getCreateTicker5(): string;
    setCreateTicker5(value: string): PriceCommissionResponse;
    getCreateTicker6(): string;
    setCreateTicker6(value: string): PriceCommissionResponse;
    getCreateTicker710(): string;
    setCreateTicker710(value: string): PriceCommissionResponse;
    getCreateCoin(): string;
    setCreateCoin(value: string): PriceCommissionResponse;
    getCreateToken(): string;
    setCreateToken(value: string): PriceCommissionResponse;
    getRecreateCoin(): string;
    setRecreateCoin(value: string): PriceCommissionResponse;
    getRecreateToken(): string;
    setRecreateToken(value: string): PriceCommissionResponse;
    getDeclareCandidacy(): string;
    setDeclareCandidacy(value: string): PriceCommissionResponse;
    getDelegate(): string;
    setDelegate(value: string): PriceCommissionResponse;
    getUnbond(): string;
    setUnbond(value: string): PriceCommissionResponse;
    getRedeemCheck(): string;
    setRedeemCheck(value: string): PriceCommissionResponse;
    getSetCandidateOn(): string;
    setSetCandidateOn(value: string): PriceCommissionResponse;
    getSetCandidateOff(): string;
    setSetCandidateOff(value: string): PriceCommissionResponse;
    getCreateMultisig(): string;
    setCreateMultisig(value: string): PriceCommissionResponse;
    getMultisendBase(): string;
    setMultisendBase(value: string): PriceCommissionResponse;
    getMultisendDelta(): string;
    setMultisendDelta(value: string): PriceCommissionResponse;
    getEditCandidate(): string;
    setEditCandidate(value: string): PriceCommissionResponse;
    getSetHaltBlock(): string;
    setSetHaltBlock(value: string): PriceCommissionResponse;
    getEditTickerOwner(): string;
    setEditTickerOwner(value: string): PriceCommissionResponse;
    getEditMultisig(): string;
    setEditMultisig(value: string): PriceCommissionResponse;
    getEditCandidatePublicKey(): string;
    setEditCandidatePublicKey(value: string): PriceCommissionResponse;
    getCreateSwapPool(): string;
    setCreateSwapPool(value: string): PriceCommissionResponse;
    getAddLiquidity(): string;
    setAddLiquidity(value: string): PriceCommissionResponse;
    getRemoveLiquidity(): string;
    setRemoveLiquidity(value: string): PriceCommissionResponse;
    getEditCandidateCommission(): string;
    setEditCandidateCommission(value: string): PriceCommissionResponse;
    getMintToken(): string;
    setMintToken(value: string): PriceCommissionResponse;
    getBurnToken(): string;
    setBurnToken(value: string): PriceCommissionResponse;
    getVoteCommission(): string;
    setVoteCommission(value: string): PriceCommissionResponse;
    getVoteUpdate(): string;
    setVoteUpdate(value: string): PriceCommissionResponse;
    getFailedTx(): string;
    setFailedTx(value: string): PriceCommissionResponse;
    getAddLimitOrder(): string;
    setAddLimitOrder(value: string): PriceCommissionResponse;
    getRemoveLimitOrder(): string;
    setRemoveLimitOrder(value: string): PriceCommissionResponse;
    getMoveStake(): string;
    setMoveStake(value: string): PriceCommissionResponse;
    getLockStake(): string;
    setLockStake(value: string): PriceCommissionResponse;
    getLock(): string;
    setLock(value: string): PriceCommissionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriceCommissionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PriceCommissionResponse): PriceCommissionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriceCommissionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriceCommissionResponse;
    static deserializeBinaryFromReader(message: PriceCommissionResponse, reader: jspb.BinaryReader): PriceCommissionResponse;
}

export namespace PriceCommissionResponse {
    export type AsObject = {
        coin?: Coin.AsObject,
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

export class SwapPoolsRequest extends jspb.Message { 
    getHeight(): number;
    setHeight(value: number): SwapPoolsRequest;
    getOrders(): boolean;
    setOrders(value: boolean): SwapPoolsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapPoolsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SwapPoolsRequest): SwapPoolsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapPoolsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapPoolsRequest;
    static deserializeBinaryFromReader(message: SwapPoolsRequest, reader: jspb.BinaryReader): SwapPoolsRequest;
}

export namespace SwapPoolsRequest {
    export type AsObject = {
        height: number,
        orders: boolean,
    }
}

export class SwapPoolsResponse extends jspb.Message { 
    clearPoolsList(): void;
    getPoolsList(): Array<SwapPoolsResponse.SwapPool>;
    setPoolsList(value: Array<SwapPoolsResponse.SwapPool>): SwapPoolsResponse;
    addPools(value?: SwapPoolsResponse.SwapPool, index?: number): SwapPoolsResponse.SwapPool;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapPoolsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SwapPoolsResponse): SwapPoolsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapPoolsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapPoolsResponse;
    static deserializeBinaryFromReader(message: SwapPoolsResponse, reader: jspb.BinaryReader): SwapPoolsResponse;
}

export namespace SwapPoolsResponse {
    export type AsObject = {
        poolsList: Array<SwapPoolsResponse.SwapPool.AsObject>,
    }


    export class SwapPool extends jspb.Message { 
        getId(): number;
        setId(value: number): SwapPool;
        getPrice(): string;
        setPrice(value: string): SwapPool;
        getCoin0(): number;
        setCoin0(value: number): SwapPool;
        getCoin1(): number;
        setCoin1(value: number): SwapPool;
        getAmount0(): string;
        setAmount0(value: string): SwapPool;
        getAmount1(): string;
        setAmount1(value: string): SwapPool;
        getLiquidity(): string;
        setLiquidity(value: string): SwapPool;
        clearOrdersSellList(): void;
        getOrdersSellList(): Array<SwapPoolsResponse.SwapPool.LimitOrder>;
        setOrdersSellList(value: Array<SwapPoolsResponse.SwapPool.LimitOrder>): SwapPool;
        addOrdersSell(value?: SwapPoolsResponse.SwapPool.LimitOrder, index?: number): SwapPoolsResponse.SwapPool.LimitOrder;
        clearOrdersBuyList(): void;
        getOrdersBuyList(): Array<SwapPoolsResponse.SwapPool.LimitOrder>;
        setOrdersBuyList(value: Array<SwapPoolsResponse.SwapPool.LimitOrder>): SwapPool;
        addOrdersBuy(value?: SwapPoolsResponse.SwapPool.LimitOrder, index?: number): SwapPoolsResponse.SwapPool.LimitOrder;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SwapPool.AsObject;
        static toObject(includeInstance: boolean, msg: SwapPool): SwapPool.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SwapPool, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SwapPool;
        static deserializeBinaryFromReader(message: SwapPool, reader: jspb.BinaryReader): SwapPool;
    }

    export namespace SwapPool {
        export type AsObject = {
            id: number,
            price: string,
            coin0: number,
            coin1: number,
            amount0: string,
            amount1: string,
            liquidity: string,
            ordersSellList: Array<SwapPoolsResponse.SwapPool.LimitOrder.AsObject>,
            ordersBuyList: Array<SwapPoolsResponse.SwapPool.LimitOrder.AsObject>,
        }


        export class LimitOrder extends jspb.Message { 
            getId(): number;
            setId(value: number): LimitOrder;
            getWantSell(): string;
            setWantSell(value: string): LimitOrder;
            getWantBuy(): string;
            setWantBuy(value: string): LimitOrder;
            getPrice(): string;
            setPrice(value: string): LimitOrder;
            getOwner(): string;
            setOwner(value: string): LimitOrder;
            getHeight(): number;
            setHeight(value: number): LimitOrder;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): LimitOrder.AsObject;
            static toObject(includeInstance: boolean, msg: LimitOrder): LimitOrder.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: LimitOrder, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): LimitOrder;
            static deserializeBinaryFromReader(message: LimitOrder, reader: jspb.BinaryReader): LimitOrder;
        }

        export namespace LimitOrder {
            export type AsObject = {
                id: number,
                wantSell: string,
                wantBuy: string,
                price: string,
                owner: string,
                height: number,
            }
        }

    }

}

export class SwapPoolRequest extends jspb.Message { 
    getCoin0(): number;
    setCoin0(value: number): SwapPoolRequest;
    getCoin1(): number;
    setCoin1(value: number): SwapPoolRequest;
    getHeight(): number;
    setHeight(value: number): SwapPoolRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapPoolRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SwapPoolRequest): SwapPoolRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapPoolRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapPoolRequest;
    static deserializeBinaryFromReader(message: SwapPoolRequest, reader: jspb.BinaryReader): SwapPoolRequest;
}

export namespace SwapPoolRequest {
    export type AsObject = {
        coin0: number,
        coin1: number,
        height: number,
    }
}

export class SwapPoolResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): SwapPoolResponse;
    getPrice(): string;
    setPrice(value: string): SwapPoolResponse;
    getAmount0(): string;
    setAmount0(value: string): SwapPoolResponse;
    getAmount1(): string;
    setAmount1(value: string): SwapPoolResponse;
    getLiquidity(): string;
    setLiquidity(value: string): SwapPoolResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapPoolResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SwapPoolResponse): SwapPoolResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapPoolResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapPoolResponse;
    static deserializeBinaryFromReader(message: SwapPoolResponse, reader: jspb.BinaryReader): SwapPoolResponse;
}

export namespace SwapPoolResponse {
    export type AsObject = {
        id: number,
        price: string,
        amount0: string,
        amount1: string,
        liquidity: string,
    }
}

export class SwapPoolProviderRequest extends jspb.Message { 
    getCoin0(): number;
    setCoin0(value: number): SwapPoolProviderRequest;
    getCoin1(): number;
    setCoin1(value: number): SwapPoolProviderRequest;
    getProvider(): string;
    setProvider(value: string): SwapPoolProviderRequest;
    getHeight(): number;
    setHeight(value: number): SwapPoolProviderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SwapPoolProviderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SwapPoolProviderRequest): SwapPoolProviderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SwapPoolProviderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SwapPoolProviderRequest;
    static deserializeBinaryFromReader(message: SwapPoolProviderRequest, reader: jspb.BinaryReader): SwapPoolProviderRequest;
}

export namespace SwapPoolProviderRequest {
    export type AsObject = {
        coin0: number,
        coin1: number,
        provider: string,
        height: number,
    }
}

export class NodeInfo extends jspb.Message { 

    hasProtocolVersion(): boolean;
    clearProtocolVersion(): void;
    getProtocolVersion(): NodeInfo.ProtocolVersion | undefined;
    setProtocolVersion(value?: NodeInfo.ProtocolVersion): NodeInfo;
    getId(): string;
    setId(value: string): NodeInfo;
    getListenAddr(): string;
    setListenAddr(value: string): NodeInfo;
    getNetwork(): string;
    setNetwork(value: string): NodeInfo;
    getVersion(): string;
    setVersion(value: string): NodeInfo;
    getChannels(): string;
    setChannels(value: string): NodeInfo;
    getMoniker(): string;
    setMoniker(value: string): NodeInfo;

    hasOther(): boolean;
    clearOther(): void;
    getOther(): NodeInfo.Other | undefined;
    setOther(value?: NodeInfo.Other): NodeInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NodeInfo.AsObject;
    static toObject(includeInstance: boolean, msg: NodeInfo): NodeInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NodeInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NodeInfo;
    static deserializeBinaryFromReader(message: NodeInfo, reader: jspb.BinaryReader): NodeInfo;
}

export namespace NodeInfo {
    export type AsObject = {
        protocolVersion?: NodeInfo.ProtocolVersion.AsObject,
        id: string,
        listenAddr: string,
        network: string,
        version: string,
        channels: string,
        moniker: string,
        other?: NodeInfo.Other.AsObject,
    }


    export class ProtocolVersion extends jspb.Message { 
        getP2p(): number;
        setP2p(value: number): ProtocolVersion;
        getBlock(): number;
        setBlock(value: number): ProtocolVersion;
        getApp(): number;
        setApp(value: number): ProtocolVersion;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ProtocolVersion.AsObject;
        static toObject(includeInstance: boolean, msg: ProtocolVersion): ProtocolVersion.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ProtocolVersion, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ProtocolVersion;
        static deserializeBinaryFromReader(message: ProtocolVersion, reader: jspb.BinaryReader): ProtocolVersion;
    }

    export namespace ProtocolVersion {
        export type AsObject = {
            p2p: number,
            block: number,
            app: number,
        }
    }

    export class Other extends jspb.Message { 
        getTxIndex(): string;
        setTxIndex(value: string): Other;
        getRpcAddress(): string;
        setRpcAddress(value: string): Other;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Other.AsObject;
        static toObject(includeInstance: boolean, msg: Other): Other.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Other, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Other;
        static deserializeBinaryFromReader(message: Other, reader: jspb.BinaryReader): Other;
    }

    export namespace Other {
        export type AsObject = {
            txIndex: string,
            rpcAddress: string,
        }
    }

}

export class NetInfoResponse extends jspb.Message { 
    getListening(): boolean;
    setListening(value: boolean): NetInfoResponse;
    clearListenersList(): void;
    getListenersList(): Array<string>;
    setListenersList(value: Array<string>): NetInfoResponse;
    addListeners(value: string, index?: number): string;
    getCountPeers(): number;
    setCountPeers(value: number): NetInfoResponse;
    clearPeersList(): void;
    getPeersList(): Array<NetInfoResponse.Peer>;
    setPeersList(value: Array<NetInfoResponse.Peer>): NetInfoResponse;
    addPeers(value?: NetInfoResponse.Peer, index?: number): NetInfoResponse.Peer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NetInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NetInfoResponse): NetInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NetInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NetInfoResponse;
    static deserializeBinaryFromReader(message: NetInfoResponse, reader: jspb.BinaryReader): NetInfoResponse;
}

export namespace NetInfoResponse {
    export type AsObject = {
        listening: boolean,
        listenersList: Array<string>,
        countPeers: number,
        peersList: Array<NetInfoResponse.Peer.AsObject>,
    }


    export class Peer extends jspb.Message { 

        hasLatestBlockHeight(): boolean;
        clearLatestBlockHeight(): void;
        getLatestBlockHeight(): google_protobuf_wrappers_pb.UInt64Value | undefined;
        setLatestBlockHeight(value?: google_protobuf_wrappers_pb.UInt64Value): Peer;

        hasNodeInfo(): boolean;
        clearNodeInfo(): void;
        getNodeInfo(): NodeInfo | undefined;
        setNodeInfo(value?: NodeInfo): Peer;
        getIsOutbound(): boolean;
        setIsOutbound(value: boolean): Peer;

        hasConnectionStatus(): boolean;
        clearConnectionStatus(): void;
        getConnectionStatus(): NetInfoResponse.Peer.ConnectionStatus | undefined;
        setConnectionStatus(value?: NetInfoResponse.Peer.ConnectionStatus): Peer;
        getRemoteIp(): string;
        setRemoteIp(value: string): Peer;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Peer.AsObject;
        static toObject(includeInstance: boolean, msg: Peer): Peer.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Peer, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Peer;
        static deserializeBinaryFromReader(message: Peer, reader: jspb.BinaryReader): Peer;
    }

    export namespace Peer {
        export type AsObject = {
            latestBlockHeight?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
            nodeInfo?: NodeInfo.AsObject,
            isOutbound: boolean,
            connectionStatus?: NetInfoResponse.Peer.ConnectionStatus.AsObject,
            remoteIp: string,
        }


        export class ConnectionStatus extends jspb.Message { 
            getDuration(): number;
            setDuration(value: number): ConnectionStatus;

            hasSendmonitor(): boolean;
            clearSendmonitor(): void;
            getSendmonitor(): NetInfoResponse.Peer.ConnectionStatus.Monitor | undefined;
            setSendmonitor(value?: NetInfoResponse.Peer.ConnectionStatus.Monitor): ConnectionStatus;

            hasRecvmonitor(): boolean;
            clearRecvmonitor(): void;
            getRecvmonitor(): NetInfoResponse.Peer.ConnectionStatus.Monitor | undefined;
            setRecvmonitor(value?: NetInfoResponse.Peer.ConnectionStatus.Monitor): ConnectionStatus;
            clearChannelsList(): void;
            getChannelsList(): Array<NetInfoResponse.Peer.ConnectionStatus.Channel>;
            setChannelsList(value: Array<NetInfoResponse.Peer.ConnectionStatus.Channel>): ConnectionStatus;
            addChannels(value?: NetInfoResponse.Peer.ConnectionStatus.Channel, index?: number): NetInfoResponse.Peer.ConnectionStatus.Channel;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): ConnectionStatus.AsObject;
            static toObject(includeInstance: boolean, msg: ConnectionStatus): ConnectionStatus.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: ConnectionStatus, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): ConnectionStatus;
            static deserializeBinaryFromReader(message: ConnectionStatus, reader: jspb.BinaryReader): ConnectionStatus;
        }

        export namespace ConnectionStatus {
            export type AsObject = {
                duration: number,
                sendmonitor?: NetInfoResponse.Peer.ConnectionStatus.Monitor.AsObject,
                recvmonitor?: NetInfoResponse.Peer.ConnectionStatus.Monitor.AsObject,
                channelsList: Array<NetInfoResponse.Peer.ConnectionStatus.Channel.AsObject>,
            }


            export class Monitor extends jspb.Message { 
                getActive(): boolean;
                setActive(value: boolean): Monitor;
                getStart(): string;
                setStart(value: string): Monitor;
                getDuration(): number;
                setDuration(value: number): Monitor;
                getIdle(): number;
                setIdle(value: number): Monitor;
                getBytes(): number;
                setBytes(value: number): Monitor;
                getSamples(): number;
                setSamples(value: number): Monitor;
                getInstRate(): number;
                setInstRate(value: number): Monitor;
                getCurRate(): number;
                setCurRate(value: number): Monitor;
                getAvgRate(): number;
                setAvgRate(value: number): Monitor;
                getPeakRate(): number;
                setPeakRate(value: number): Monitor;
                getBytesRem(): number;
                setBytesRem(value: number): Monitor;
                getTimeRem(): number;
                setTimeRem(value: number): Monitor;
                getProgress(): number;
                setProgress(value: number): Monitor;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Monitor.AsObject;
                static toObject(includeInstance: boolean, msg: Monitor): Monitor.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Monitor, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Monitor;
                static deserializeBinaryFromReader(message: Monitor, reader: jspb.BinaryReader): Monitor;
            }

            export namespace Monitor {
                export type AsObject = {
                    active: boolean,
                    start: string,
                    duration: number,
                    idle: number,
                    bytes: number,
                    samples: number,
                    instRate: number,
                    curRate: number,
                    avgRate: number,
                    peakRate: number,
                    bytesRem: number,
                    timeRem: number,
                    progress: number,
                }
            }

            export class Channel extends jspb.Message { 
                getId(): number;
                setId(value: number): Channel;
                getSendQueueCapacity(): number;
                setSendQueueCapacity(value: number): Channel;
                getSendQueueSize(): number;
                setSendQueueSize(value: number): Channel;
                getPriority(): number;
                setPriority(value: number): Channel;
                getRecentlySent(): number;
                setRecentlySent(value: number): Channel;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Channel.AsObject;
                static toObject(includeInstance: boolean, msg: Channel): Channel.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Channel, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Channel;
                static deserializeBinaryFromReader(message: Channel, reader: jspb.BinaryReader): Channel;
            }

            export namespace Channel {
                export type AsObject = {
                    id: number,
                    sendQueueCapacity: number,
                    sendQueueSize: number,
                    priority: number,
                    recentlySent: number,
                }
            }

        }

    }

}

export class StatusResponse extends jspb.Message { 
    getVersion(): string;
    setVersion(value: string): StatusResponse;
    getNetwork(): string;
    setNetwork(value: string): StatusResponse;
    getInitialHeight(): number;
    setInitialHeight(value: number): StatusResponse;
    getLatestBlockHash(): string;
    setLatestBlockHash(value: string): StatusResponse;
    getLatestAppHash(): string;
    setLatestAppHash(value: string): StatusResponse;
    getLatestBlockHeight(): number;
    setLatestBlockHeight(value: number): StatusResponse;
    getLatestBlockTime(): string;
    setLatestBlockTime(value: string): StatusResponse;
    getKeepLastStates(): number;
    setKeepLastStates(value: number): StatusResponse;
    getTotalSlashed(): string;
    setTotalSlashed(value: string): StatusResponse;
    getCurrentEmission(): string;
    setCurrentEmission(value: string): StatusResponse;
    getCatchingUp(): boolean;
    setCatchingUp(value: boolean): StatusResponse;
    getPublicKey(): string;
    setPublicKey(value: string): StatusResponse;
    getNodeId(): string;
    setNodeId(value: string): StatusResponse;
    getMoniker(): string;
    setMoniker(value: string): StatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StatusResponse): StatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusResponse;
    static deserializeBinaryFromReader(message: StatusResponse, reader: jspb.BinaryReader): StatusResponse;
}

export namespace StatusResponse {
    export type AsObject = {
        version: string,
        network: string,
        initialHeight: number,
        latestBlockHash: string,
        latestAppHash: string,
        latestBlockHeight: number,
        latestBlockTime: string,
        keepLastStates: number,
        totalSlashed: string,
        currentEmission: string,
        catchingUp: boolean,
        publicKey: string,
        nodeId: string,
        moniker: string,
    }
}

export class GenesisResponse extends jspb.Message { 
    getGenesisTime(): string;
    setGenesisTime(value: string): GenesisResponse;
    getChainId(): string;
    setChainId(value: string): GenesisResponse;
    getInitialHeight(): number;
    setInitialHeight(value: number): GenesisResponse;

    hasConsensusParams(): boolean;
    clearConsensusParams(): void;
    getConsensusParams(): GenesisResponse.ConsensusParams | undefined;
    setConsensusParams(value?: GenesisResponse.ConsensusParams): GenesisResponse;
    getAppHash(): string;
    setAppHash(value: string): GenesisResponse;

    hasAppState(): boolean;
    clearAppState(): void;
    getAppState(): GenesisResponse.AppState | undefined;
    setAppState(value?: GenesisResponse.AppState): GenesisResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenesisResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GenesisResponse): GenesisResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenesisResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenesisResponse;
    static deserializeBinaryFromReader(message: GenesisResponse, reader: jspb.BinaryReader): GenesisResponse;
}

export namespace GenesisResponse {
    export type AsObject = {
        genesisTime: string,
        chainId: string,
        initialHeight: number,
        consensusParams?: GenesisResponse.ConsensusParams.AsObject,
        appHash: string,
        appState?: GenesisResponse.AppState.AsObject,
    }


    export class ConsensusParams extends jspb.Message { 

        hasBlock(): boolean;
        clearBlock(): void;
        getBlock(): GenesisResponse.ConsensusParams.Block | undefined;
        setBlock(value?: GenesisResponse.ConsensusParams.Block): ConsensusParams;

        hasEvidence(): boolean;
        clearEvidence(): void;
        getEvidence(): GenesisResponse.ConsensusParams.Evidence | undefined;
        setEvidence(value?: GenesisResponse.ConsensusParams.Evidence): ConsensusParams;

        hasValidator(): boolean;
        clearValidator(): void;
        getValidator(): GenesisResponse.ConsensusParams.Validator | undefined;
        setValidator(value?: GenesisResponse.ConsensusParams.Validator): ConsensusParams;

        hasVersion(): boolean;
        clearVersion(): void;
        getVersion(): GenesisResponse.ConsensusParams.Version | undefined;
        setVersion(value?: GenesisResponse.ConsensusParams.Version): ConsensusParams;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ConsensusParams.AsObject;
        static toObject(includeInstance: boolean, msg: ConsensusParams): ConsensusParams.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ConsensusParams, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ConsensusParams;
        static deserializeBinaryFromReader(message: ConsensusParams, reader: jspb.BinaryReader): ConsensusParams;
    }

    export namespace ConsensusParams {
        export type AsObject = {
            block?: GenesisResponse.ConsensusParams.Block.AsObject,
            evidence?: GenesisResponse.ConsensusParams.Evidence.AsObject,
            validator?: GenesisResponse.ConsensusParams.Validator.AsObject,
            version?: GenesisResponse.ConsensusParams.Version.AsObject,
        }


        export class Block extends jspb.Message { 
            getMaxBytes(): number;
            setMaxBytes(value: number): Block;
            getMaxGas(): number;
            setMaxGas(value: number): Block;
            getTimeIotaMs(): number;
            setTimeIotaMs(value: number): Block;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Block.AsObject;
            static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Block;
            static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
        }

        export namespace Block {
            export type AsObject = {
                maxBytes: number,
                maxGas: number,
                timeIotaMs: number,
            }
        }

        export class Evidence extends jspb.Message { 
            getMaxAgeNumBlocks(): number;
            setMaxAgeNumBlocks(value: number): Evidence;
            getMaxAgeDuration(): number;
            setMaxAgeDuration(value: number): Evidence;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Evidence.AsObject;
            static toObject(includeInstance: boolean, msg: Evidence): Evidence.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Evidence, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Evidence;
            static deserializeBinaryFromReader(message: Evidence, reader: jspb.BinaryReader): Evidence;
        }

        export namespace Evidence {
            export type AsObject = {
                maxAgeNumBlocks: number,
                maxAgeDuration: number,
            }
        }

        export class Validator extends jspb.Message { 
            clearPubKeyTypesList(): void;
            getPubKeyTypesList(): Array<string>;
            setPubKeyTypesList(value: Array<string>): Validator;
            addPubKeyTypes(value: string, index?: number): string;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Validator.AsObject;
            static toObject(includeInstance: boolean, msg: Validator): Validator.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Validator, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Validator;
            static deserializeBinaryFromReader(message: Validator, reader: jspb.BinaryReader): Validator;
        }

        export namespace Validator {
            export type AsObject = {
                pubKeyTypesList: Array<string>,
            }
        }

        export class Version extends jspb.Message { 
            getAppVersion(): number;
            setAppVersion(value: number): Version;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Version.AsObject;
            static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Version;
            static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
        }

        export namespace Version {
            export type AsObject = {
                appVersion: number,
            }
        }

    }

    export class AppState extends jspb.Message { 
        getVersion(): string;
        setVersion(value: string): AppState;
        getNote(): string;
        setNote(value: string): AppState;
        clearValidatorsList(): void;
        getValidatorsList(): Array<GenesisResponse.AppState.Validators>;
        setValidatorsList(value: Array<GenesisResponse.AppState.Validators>): AppState;
        addValidators(value?: GenesisResponse.AppState.Validators, index?: number): GenesisResponse.AppState.Validators;
        clearCandidatesList(): void;
        getCandidatesList(): Array<GenesisResponse.AppState.Candidate>;
        setCandidatesList(value: Array<GenesisResponse.AppState.Candidate>): AppState;
        addCandidates(value?: GenesisResponse.AppState.Candidate, index?: number): GenesisResponse.AppState.Candidate;
        clearDeletedCandidatesList(): void;
        getDeletedCandidatesList(): Array<GenesisResponse.AppState.DeletedCandidate>;
        setDeletedCandidatesList(value: Array<GenesisResponse.AppState.DeletedCandidate>): AppState;
        addDeletedCandidates(value?: GenesisResponse.AppState.DeletedCandidate, index?: number): GenesisResponse.AppState.DeletedCandidate;
        clearCoinsList(): void;
        getCoinsList(): Array<GenesisResponse.AppState.Coin>;
        setCoinsList(value: Array<GenesisResponse.AppState.Coin>): AppState;
        addCoins(value?: GenesisResponse.AppState.Coin, index?: number): GenesisResponse.AppState.Coin;
        clearFrozenFundsList(): void;
        getFrozenFundsList(): Array<GenesisResponse.AppState.FrozenFund>;
        setFrozenFundsList(value: Array<GenesisResponse.AppState.FrozenFund>): AppState;
        addFrozenFunds(value?: GenesisResponse.AppState.FrozenFund, index?: number): GenesisResponse.AppState.FrozenFund;
        clearBlockListCandidatesList(): void;
        getBlockListCandidatesList(): Array<string>;
        setBlockListCandidatesList(value: Array<string>): AppState;
        addBlockListCandidates(value: string, index?: number): string;
        clearWaitlistList(): void;
        getWaitlistList(): Array<GenesisResponse.AppState.Waitlist>;
        setWaitlistList(value: Array<GenesisResponse.AppState.Waitlist>): AppState;
        addWaitlist(value?: GenesisResponse.AppState.Waitlist, index?: number): GenesisResponse.AppState.Waitlist;
        clearAccountsList(): void;
        getAccountsList(): Array<GenesisResponse.AppState.Account>;
        setAccountsList(value: Array<GenesisResponse.AppState.Account>): AppState;
        addAccounts(value?: GenesisResponse.AppState.Account, index?: number): GenesisResponse.AppState.Account;
        clearHaltBlocksList(): void;
        getHaltBlocksList(): Array<GenesisResponse.AppState.HaltBlock>;
        setHaltBlocksList(value: Array<GenesisResponse.AppState.HaltBlock>): AppState;
        addHaltBlocks(value?: GenesisResponse.AppState.HaltBlock, index?: number): GenesisResponse.AppState.HaltBlock;
        clearPoolsList(): void;
        getPoolsList(): Array<GenesisResponse.AppState.Pool>;
        setPoolsList(value: Array<GenesisResponse.AppState.Pool>): AppState;
        addPools(value?: GenesisResponse.AppState.Pool, index?: number): GenesisResponse.AppState.Pool;
        getNextOrderId(): number;
        setNextOrderId(value: number): AppState;

        hasCommission(): boolean;
        clearCommission(): void;
        getCommission(): GenesisResponse.AppState.Commission | undefined;
        setCommission(value?: GenesisResponse.AppState.Commission): AppState;
        clearCommissionVotesList(): void;
        getCommissionVotesList(): Array<GenesisResponse.AppState.CommissionVote>;
        setCommissionVotesList(value: Array<GenesisResponse.AppState.CommissionVote>): AppState;
        addCommissionVotes(value?: GenesisResponse.AppState.CommissionVote, index?: number): GenesisResponse.AppState.CommissionVote;
        clearUpdateVotesList(): void;
        getUpdateVotesList(): Array<GenesisResponse.AppState.UpdateVote>;
        setUpdateVotesList(value: Array<GenesisResponse.AppState.UpdateVote>): AppState;
        addUpdateVotes(value?: GenesisResponse.AppState.UpdateVote, index?: number): GenesisResponse.AppState.UpdateVote;
        clearUsedChecksList(): void;
        getUsedChecksList(): Array<string>;
        setUsedChecksList(value: Array<string>): AppState;
        addUsedChecks(value: string, index?: number): string;
        getMaxGas(): number;
        setMaxGas(value: number): AppState;
        getTotalSlashed(): string;
        setTotalSlashed(value: string): AppState;
        clearVersionsList(): void;
        getVersionsList(): Array<GenesisResponse.AppState.Version>;
        setVersionsList(value: Array<GenesisResponse.AppState.Version>): AppState;
        addVersions(value?: GenesisResponse.AppState.Version, index?: number): GenesisResponse.AppState.Version;
        getEmission(): string;
        setEmission(value: string): AppState;

        hasPrevReward(): boolean;
        clearPrevReward(): void;
        getPrevReward(): GenesisResponse.AppState.RewardPrice | undefined;
        setPrevReward(value?: GenesisResponse.AppState.RewardPrice): AppState;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AppState.AsObject;
        static toObject(includeInstance: boolean, msg: AppState): AppState.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AppState, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AppState;
        static deserializeBinaryFromReader(message: AppState, reader: jspb.BinaryReader): AppState;
    }

    export namespace AppState {
        export type AsObject = {
            version: string,
            note: string,
            validatorsList: Array<GenesisResponse.AppState.Validators.AsObject>,
            candidatesList: Array<GenesisResponse.AppState.Candidate.AsObject>,
            deletedCandidatesList: Array<GenesisResponse.AppState.DeletedCandidate.AsObject>,
            coinsList: Array<GenesisResponse.AppState.Coin.AsObject>,
            frozenFundsList: Array<GenesisResponse.AppState.FrozenFund.AsObject>,
            blockListCandidatesList: Array<string>,
            waitlistList: Array<GenesisResponse.AppState.Waitlist.AsObject>,
            accountsList: Array<GenesisResponse.AppState.Account.AsObject>,
            haltBlocksList: Array<GenesisResponse.AppState.HaltBlock.AsObject>,
            poolsList: Array<GenesisResponse.AppState.Pool.AsObject>,
            nextOrderId: number,
            commission?: GenesisResponse.AppState.Commission.AsObject,
            commissionVotesList: Array<GenesisResponse.AppState.CommissionVote.AsObject>,
            updateVotesList: Array<GenesisResponse.AppState.UpdateVote.AsObject>,
            usedChecksList: Array<string>,
            maxGas: number,
            totalSlashed: string,
            versionsList: Array<GenesisResponse.AppState.Version.AsObject>,
            emission: string,
            prevReward?: GenesisResponse.AppState.RewardPrice.AsObject,
        }


        export class Validators extends jspb.Message { 
            getTotalBipStake(): string;
            setTotalBipStake(value: string): Validators;
            getPublicKey(): string;
            setPublicKey(value: string): Validators;
            getAccumReward(): string;
            setAccumReward(value: string): Validators;
            getAbsentTimes(): string;
            setAbsentTimes(value: string): Validators;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Validators.AsObject;
            static toObject(includeInstance: boolean, msg: Validators): Validators.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Validators, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Validators;
            static deserializeBinaryFromReader(message: Validators, reader: jspb.BinaryReader): Validators;
        }

        export namespace Validators {
            export type AsObject = {
                totalBipStake: string,
                publicKey: string,
                accumReward: string,
                absentTimes: string,
            }
        }

        export class Candidate extends jspb.Message { 
            getId(): number;
            setId(value: number): Candidate;
            getRewardAddress(): string;
            setRewardAddress(value: string): Candidate;
            getOwnerAddress(): string;
            setOwnerAddress(value: string): Candidate;
            getControlAddress(): string;
            setControlAddress(value: string): Candidate;
            getTotalBipStake(): string;
            setTotalBipStake(value: string): Candidate;
            getPublicKey(): string;
            setPublicKey(value: string): Candidate;
            getCommission(): number;
            setCommission(value: number): Candidate;
            clearStakesList(): void;
            getStakesList(): Array<GenesisResponse.AppState.Candidate.Stake>;
            setStakesList(value: Array<GenesisResponse.AppState.Candidate.Stake>): Candidate;
            addStakes(value?: GenesisResponse.AppState.Candidate.Stake, index?: number): GenesisResponse.AppState.Candidate.Stake;
            clearUpdatesList(): void;
            getUpdatesList(): Array<GenesisResponse.AppState.Candidate.Stake>;
            setUpdatesList(value: Array<GenesisResponse.AppState.Candidate.Stake>): Candidate;
            addUpdates(value?: GenesisResponse.AppState.Candidate.Stake, index?: number): GenesisResponse.AppState.Candidate.Stake;
            getStatus(): number;
            setStatus(value: number): Candidate;
            getJailedUntil(): number;
            setJailedUntil(value: number): Candidate;
            getLastEditCommissionHeight(): number;
            setLastEditCommissionHeight(value: number): Candidate;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Candidate.AsObject;
            static toObject(includeInstance: boolean, msg: Candidate): Candidate.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Candidate, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Candidate;
            static deserializeBinaryFromReader(message: Candidate, reader: jspb.BinaryReader): Candidate;
        }

        export namespace Candidate {
            export type AsObject = {
                id: number,
                rewardAddress: string,
                ownerAddress: string,
                controlAddress: string,
                totalBipStake: string,
                publicKey: string,
                commission: number,
                stakesList: Array<GenesisResponse.AppState.Candidate.Stake.AsObject>,
                updatesList: Array<GenesisResponse.AppState.Candidate.Stake.AsObject>,
                status: number,
                jailedUntil: number,
                lastEditCommissionHeight: number,
            }


            export class Stake extends jspb.Message { 
                getOwner(): string;
                setOwner(value: string): Stake;
                getCoin(): number;
                setCoin(value: number): Stake;
                getValue(): string;
                setValue(value: string): Stake;
                getBipValue(): string;
                setBipValue(value: string): Stake;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Stake.AsObject;
                static toObject(includeInstance: boolean, msg: Stake): Stake.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Stake, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Stake;
                static deserializeBinaryFromReader(message: Stake, reader: jspb.BinaryReader): Stake;
            }

            export namespace Stake {
                export type AsObject = {
                    owner: string,
                    coin: number,
                    value: string,
                    bipValue: string,
                }
            }

        }

        export class DeletedCandidate extends jspb.Message { 
            getId(): number;
            setId(value: number): DeletedCandidate;
            getPublicKey(): string;
            setPublicKey(value: string): DeletedCandidate;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): DeletedCandidate.AsObject;
            static toObject(includeInstance: boolean, msg: DeletedCandidate): DeletedCandidate.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: DeletedCandidate, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): DeletedCandidate;
            static deserializeBinaryFromReader(message: DeletedCandidate, reader: jspb.BinaryReader): DeletedCandidate;
        }

        export namespace DeletedCandidate {
            export type AsObject = {
                id: number,
                publicKey: string,
            }
        }

        export class Coin extends jspb.Message { 
            getId(): number;
            setId(value: number): Coin;
            getName(): string;
            setName(value: string): Coin;
            getSymbol(): string;
            setSymbol(value: string): Coin;
            getVolume(): string;
            setVolume(value: string): Coin;
            getCrr(): number;
            setCrr(value: number): Coin;
            getReserve(): string;
            setReserve(value: string): Coin;
            getMaxSupply(): string;
            setMaxSupply(value: string): Coin;
            getVersion(): number;
            setVersion(value: number): Coin;

            hasOwnerAddress(): boolean;
            clearOwnerAddress(): void;
            getOwnerAddress(): google_protobuf_wrappers_pb.StringValue | undefined;
            setOwnerAddress(value?: google_protobuf_wrappers_pb.StringValue): Coin;
            getMintable(): boolean;
            setMintable(value: boolean): Coin;
            getBurnable(): boolean;
            setBurnable(value: boolean): Coin;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Coin.AsObject;
            static toObject(includeInstance: boolean, msg: Coin): Coin.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Coin, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Coin;
            static deserializeBinaryFromReader(message: Coin, reader: jspb.BinaryReader): Coin;
        }

        export namespace Coin {
            export type AsObject = {
                id: number,
                name: string,
                symbol: string,
                volume: string,
                crr: number,
                reserve: string,
                maxSupply: string,
                version: number,
                ownerAddress?: google_protobuf_wrappers_pb.StringValue.AsObject,
                mintable: boolean,
                burnable: boolean,
            }
        }

        export class FrozenFund extends jspb.Message { 
            getHeight(): number;
            setHeight(value: number): FrozenFund;
            getAddress(): string;
            setAddress(value: string): FrozenFund;

            hasCandidateKey(): boolean;
            clearCandidateKey(): void;
            getCandidateKey(): google_protobuf_wrappers_pb.StringValue | undefined;
            setCandidateKey(value?: google_protobuf_wrappers_pb.StringValue): FrozenFund;
            getCandidateId(): number;
            setCandidateId(value: number): FrozenFund;
            getCoin(): number;
            setCoin(value: number): FrozenFund;
            getValue(): string;
            setValue(value: string): FrozenFund;

            hasToCandidateKey(): boolean;
            clearToCandidateKey(): void;
            getToCandidateKey(): google_protobuf_wrappers_pb.StringValue | undefined;
            setToCandidateKey(value?: google_protobuf_wrappers_pb.StringValue): FrozenFund;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): FrozenFund.AsObject;
            static toObject(includeInstance: boolean, msg: FrozenFund): FrozenFund.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: FrozenFund, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): FrozenFund;
            static deserializeBinaryFromReader(message: FrozenFund, reader: jspb.BinaryReader): FrozenFund;
        }

        export namespace FrozenFund {
            export type AsObject = {
                height: number,
                address: string,
                candidateKey?: google_protobuf_wrappers_pb.StringValue.AsObject,
                candidateId: number,
                coin: number,
                value: string,
                toCandidateKey?: google_protobuf_wrappers_pb.StringValue.AsObject,
            }
        }

        export class Waitlist extends jspb.Message { 
            getCandidateId(): number;
            setCandidateId(value: number): Waitlist;
            getOwner(): string;
            setOwner(value: string): Waitlist;
            getCoin(): number;
            setCoin(value: number): Waitlist;
            getValue(): string;
            setValue(value: string): Waitlist;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Waitlist.AsObject;
            static toObject(includeInstance: boolean, msg: Waitlist): Waitlist.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Waitlist, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Waitlist;
            static deserializeBinaryFromReader(message: Waitlist, reader: jspb.BinaryReader): Waitlist;
        }

        export namespace Waitlist {
            export type AsObject = {
                candidateId: number,
                owner: string,
                coin: number,
                value: string,
            }
        }

        export class Account extends jspb.Message { 
            getAddress(): string;
            setAddress(value: string): Account;
            clearBalanceList(): void;
            getBalanceList(): Array<GenesisResponse.AppState.Account.Balance>;
            setBalanceList(value: Array<GenesisResponse.AppState.Account.Balance>): Account;
            addBalance(value?: GenesisResponse.AppState.Account.Balance, index?: number): GenesisResponse.AppState.Account.Balance;
            getNonce(): number;
            setNonce(value: number): Account;

            hasMultisigData(): boolean;
            clearMultisigData(): void;
            getMultisigData(): GenesisResponse.AppState.Account.MultisigData | undefined;
            setMultisigData(value?: GenesisResponse.AppState.Account.MultisigData): Account;
            getLockStakeUntilBlock(): number;
            setLockStakeUntilBlock(value: number): Account;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Account.AsObject;
            static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Account;
            static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
        }

        export namespace Account {
            export type AsObject = {
                address: string,
                balanceList: Array<GenesisResponse.AppState.Account.Balance.AsObject>,
                nonce: number,
                multisigData?: GenesisResponse.AppState.Account.MultisigData.AsObject,
                lockStakeUntilBlock: number,
            }


            export class Balance extends jspb.Message { 
                getCoin(): number;
                setCoin(value: number): Balance;
                getValue(): string;
                setValue(value: string): Balance;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Balance.AsObject;
                static toObject(includeInstance: boolean, msg: Balance): Balance.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Balance, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Balance;
                static deserializeBinaryFromReader(message: Balance, reader: jspb.BinaryReader): Balance;
            }

            export namespace Balance {
                export type AsObject = {
                    coin: number,
                    value: string,
                }
            }

            export class MultisigData extends jspb.Message { 
                getThreshold(): number;
                setThreshold(value: number): MultisigData;
                clearWeightsList(): void;
                getWeightsList(): Array<number>;
                setWeightsList(value: Array<number>): MultisigData;
                addWeights(value: number, index?: number): number;
                clearAddressesList(): void;
                getAddressesList(): Array<string>;
                setAddressesList(value: Array<string>): MultisigData;
                addAddresses(value: string, index?: number): string;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): MultisigData.AsObject;
                static toObject(includeInstance: boolean, msg: MultisigData): MultisigData.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: MultisigData, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): MultisigData;
                static deserializeBinaryFromReader(message: MultisigData, reader: jspb.BinaryReader): MultisigData;
            }

            export namespace MultisigData {
                export type AsObject = {
                    threshold: number,
                    weightsList: Array<number>,
                    addressesList: Array<string>,
                }
            }

        }

        export class HaltBlock extends jspb.Message { 
            getHeight(): number;
            setHeight(value: number): HaltBlock;
            getCandidateKey(): string;
            setCandidateKey(value: string): HaltBlock;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): HaltBlock.AsObject;
            static toObject(includeInstance: boolean, msg: HaltBlock): HaltBlock.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: HaltBlock, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): HaltBlock;
            static deserializeBinaryFromReader(message: HaltBlock, reader: jspb.BinaryReader): HaltBlock;
        }

        export namespace HaltBlock {
            export type AsObject = {
                height: number,
                candidateKey: string,
            }
        }

        export class Pool extends jspb.Message { 
            getCoin0(): number;
            setCoin0(value: number): Pool;
            getCoin1(): number;
            setCoin1(value: number): Pool;
            getReserve0(): string;
            setReserve0(value: string): Pool;
            getReserve1(): string;
            setReserve1(value: string): Pool;
            getId(): number;
            setId(value: number): Pool;
            clearOrdersList(): void;
            getOrdersList(): Array<GenesisResponse.AppState.Pool.Order>;
            setOrdersList(value: Array<GenesisResponse.AppState.Pool.Order>): Pool;
            addOrders(value?: GenesisResponse.AppState.Pool.Order, index?: number): GenesisResponse.AppState.Pool.Order;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Pool.AsObject;
            static toObject(includeInstance: boolean, msg: Pool): Pool.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Pool, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Pool;
            static deserializeBinaryFromReader(message: Pool, reader: jspb.BinaryReader): Pool;
        }

        export namespace Pool {
            export type AsObject = {
                coin0: number,
                coin1: number,
                reserve0: string,
                reserve1: string,
                id: number,
                ordersList: Array<GenesisResponse.AppState.Pool.Order.AsObject>,
            }


            export class Order extends jspb.Message { 
                getIsSale(): boolean;
                setIsSale(value: boolean): Order;
                getVolume0(): string;
                setVolume0(value: string): Order;
                getVolume1(): string;
                setVolume1(value: string): Order;
                getId(): number;
                setId(value: number): Order;
                getOwner(): string;
                setOwner(value: string): Order;
                getHeight(): number;
                setHeight(value: number): Order;

                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): Order.AsObject;
                static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): Order;
                static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
            }

            export namespace Order {
                export type AsObject = {
                    isSale: boolean,
                    volume0: string,
                    volume1: string,
                    id: number,
                    owner: string,
                    height: number,
                }
            }

        }

        export class Commission extends jspb.Message { 
            getCoin(): number;
            setCoin(value: number): Commission;
            getPayloadByte(): string;
            setPayloadByte(value: string): Commission;
            getSend(): string;
            setSend(value: string): Commission;
            getBuyBancor(): string;
            setBuyBancor(value: string): Commission;
            getSellBancor(): string;
            setSellBancor(value: string): Commission;
            getSellAllBancor(): string;
            setSellAllBancor(value: string): Commission;
            getBuyPoolBase(): string;
            setBuyPoolBase(value: string): Commission;
            getBuyPoolDelta(): string;
            setBuyPoolDelta(value: string): Commission;
            getSellPoolBase(): string;
            setSellPoolBase(value: string): Commission;
            getSellPoolDelta(): string;
            setSellPoolDelta(value: string): Commission;
            getSellAllPoolBase(): string;
            setSellAllPoolBase(value: string): Commission;
            getSellAllPoolDelta(): string;
            setSellAllPoolDelta(value: string): Commission;
            getCreateTicker3(): string;
            setCreateTicker3(value: string): Commission;
            getCreateTicker4(): string;
            setCreateTicker4(value: string): Commission;
            getCreateTicker5(): string;
            setCreateTicker5(value: string): Commission;
            getCreateTicker6(): string;
            setCreateTicker6(value: string): Commission;
            getCreateTicker710(): string;
            setCreateTicker710(value: string): Commission;
            getCreateCoin(): string;
            setCreateCoin(value: string): Commission;
            getCreateToken(): string;
            setCreateToken(value: string): Commission;
            getRecreateCoin(): string;
            setRecreateCoin(value: string): Commission;
            getRecreateToken(): string;
            setRecreateToken(value: string): Commission;
            getDeclareCandidacy(): string;
            setDeclareCandidacy(value: string): Commission;
            getDelegate(): string;
            setDelegate(value: string): Commission;
            getUnbond(): string;
            setUnbond(value: string): Commission;
            getRedeemCheck(): string;
            setRedeemCheck(value: string): Commission;
            getSetCandidateOn(): string;
            setSetCandidateOn(value: string): Commission;
            getSetCandidateOff(): string;
            setSetCandidateOff(value: string): Commission;
            getCreateMultisig(): string;
            setCreateMultisig(value: string): Commission;
            getMultisendBase(): string;
            setMultisendBase(value: string): Commission;
            getMultisendDelta(): string;
            setMultisendDelta(value: string): Commission;
            getEditCandidate(): string;
            setEditCandidate(value: string): Commission;
            getSetHaltBlock(): string;
            setSetHaltBlock(value: string): Commission;
            getEditTickerOwner(): string;
            setEditTickerOwner(value: string): Commission;
            getEditMultisig(): string;
            setEditMultisig(value: string): Commission;
            getEditCandidatePublicKey(): string;
            setEditCandidatePublicKey(value: string): Commission;
            getCreateSwapPool(): string;
            setCreateSwapPool(value: string): Commission;
            getAddLiquidity(): string;
            setAddLiquidity(value: string): Commission;
            getRemoveLiquidity(): string;
            setRemoveLiquidity(value: string): Commission;
            getEditCandidateCommission(): string;
            setEditCandidateCommission(value: string): Commission;
            getMintToken(): string;
            setMintToken(value: string): Commission;
            getBurnToken(): string;
            setBurnToken(value: string): Commission;
            getVoteCommission(): string;
            setVoteCommission(value: string): Commission;
            getVoteUpdate(): string;
            setVoteUpdate(value: string): Commission;
            getFailedTx(): string;
            setFailedTx(value: string): Commission;
            getAddLimitOrder(): string;
            setAddLimitOrder(value: string): Commission;
            getRemoveLimitOrder(): string;
            setRemoveLimitOrder(value: string): Commission;
            getMoveStake(): string;
            setMoveStake(value: string): Commission;
            getLockStake(): string;
            setLockStake(value: string): Commission;
            getLock(): string;
            setLock(value: string): Commission;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Commission.AsObject;
            static toObject(includeInstance: boolean, msg: Commission): Commission.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Commission, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Commission;
            static deserializeBinaryFromReader(message: Commission, reader: jspb.BinaryReader): Commission;
        }

        export namespace Commission {
            export type AsObject = {
                coin: number,
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

        export class CommissionVote extends jspb.Message { 
            getHeight(): number;
            setHeight(value: number): CommissionVote;
            clearVotesList(): void;
            getVotesList(): Array<string>;
            setVotesList(value: Array<string>): CommissionVote;
            addVotes(value: string, index?: number): string;

            hasCommission(): boolean;
            clearCommission(): void;
            getCommission(): GenesisResponse.AppState.Commission | undefined;
            setCommission(value?: GenesisResponse.AppState.Commission): CommissionVote;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): CommissionVote.AsObject;
            static toObject(includeInstance: boolean, msg: CommissionVote): CommissionVote.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: CommissionVote, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): CommissionVote;
            static deserializeBinaryFromReader(message: CommissionVote, reader: jspb.BinaryReader): CommissionVote;
        }

        export namespace CommissionVote {
            export type AsObject = {
                height: number,
                votesList: Array<string>,
                commission?: GenesisResponse.AppState.Commission.AsObject,
            }
        }

        export class UpdateVote extends jspb.Message { 
            getHeight(): number;
            setHeight(value: number): UpdateVote;
            clearVotesList(): void;
            getVotesList(): Array<string>;
            setVotesList(value: Array<string>): UpdateVote;
            addVotes(value: string, index?: number): string;
            getVersion(): string;
            setVersion(value: string): UpdateVote;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): UpdateVote.AsObject;
            static toObject(includeInstance: boolean, msg: UpdateVote): UpdateVote.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: UpdateVote, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): UpdateVote;
            static deserializeBinaryFromReader(message: UpdateVote, reader: jspb.BinaryReader): UpdateVote;
        }

        export namespace UpdateVote {
            export type AsObject = {
                height: number,
                votesList: Array<string>,
                version: string,
            }
        }

        export class Version extends jspb.Message { 
            getHeight(): number;
            setHeight(value: number): Version;
            getName(): string;
            setName(value: string): Version;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Version.AsObject;
            static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Version;
            static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
        }

        export namespace Version {
            export type AsObject = {
                height: number,
                name: string,
            }
        }

        export class RewardPrice extends jspb.Message { 
            getTime(): number;
            setTime(value: number): RewardPrice;
            getAmountBip(): string;
            setAmountBip(value: string): RewardPrice;
            getAmountUsdt(): string;
            setAmountUsdt(value: string): RewardPrice;
            getOff(): boolean;
            setOff(value: boolean): RewardPrice;
            getReward(): string;
            setReward(value: string): RewardPrice;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): RewardPrice.AsObject;
            static toObject(includeInstance: boolean, msg: RewardPrice): RewardPrice.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: RewardPrice, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): RewardPrice;
            static deserializeBinaryFromReader(message: RewardPrice, reader: jspb.BinaryReader): RewardPrice;
        }

        export namespace RewardPrice {
            export type AsObject = {
                time: number,
                amountBip: string,
                amountUsdt: string,
                off: boolean,
                reward: string,
            }
        }

    }

}

export class MinGasPriceResponse extends jspb.Message { 
    getMinGasPrice(): number;
    setMinGasPrice(value: number): MinGasPriceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MinGasPriceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MinGasPriceResponse): MinGasPriceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MinGasPriceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MinGasPriceResponse;
    static deserializeBinaryFromReader(message: MinGasPriceResponse, reader: jspb.BinaryReader): MinGasPriceResponse;
}

export namespace MinGasPriceResponse {
    export type AsObject = {
        minGasPrice: number,
    }
}

export class BlockRequest extends jspb.Message { 
    getHeight(): number;
    setHeight(value: number): BlockRequest;
    clearFieldsList(): void;
    getFieldsList(): Array<BlockField>;
    setFieldsList(value: Array<BlockField>): BlockRequest;
    addFields(value: BlockField, index?: number): BlockField;
    getFailedTxs(): boolean;
    setFailedTxs(value: boolean): BlockRequest;
    getEvents(): boolean;
    setEvents(value: boolean): BlockRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlockRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BlockRequest): BlockRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlockRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlockRequest;
    static deserializeBinaryFromReader(message: BlockRequest, reader: jspb.BinaryReader): BlockRequest;
}

export namespace BlockRequest {
    export type AsObject = {
        height: number,
        fieldsList: Array<BlockField>,
        failedTxs: boolean,
        events: boolean,
    }
}

export class BlockResponse extends jspb.Message { 
    getHash(): string;
    setHash(value: string): BlockResponse;
    getHeight(): number;
    setHeight(value: number): BlockResponse;
    getTime(): string;
    setTime(value: string): BlockResponse;
    getTransactionCount(): number;
    setTransactionCount(value: number): BlockResponse;
    clearTransactionsList(): void;
    getTransactionsList(): Array<TransactionResponse>;
    setTransactionsList(value: Array<TransactionResponse>): BlockResponse;
    addTransactions(value?: TransactionResponse, index?: number): TransactionResponse;

    hasBlockReward(): boolean;
    clearBlockReward(): void;
    getBlockReward(): google_protobuf_wrappers_pb.StringValue | undefined;
    setBlockReward(value?: google_protobuf_wrappers_pb.StringValue): BlockResponse;

    hasLockedStakeRewards(): boolean;
    clearLockedStakeRewards(): void;
    getLockedStakeRewards(): google_protobuf_wrappers_pb.StringValue | undefined;
    setLockedStakeRewards(value?: google_protobuf_wrappers_pb.StringValue): BlockResponse;
    getSize(): number;
    setSize(value: number): BlockResponse;
    getProposer(): string;
    setProposer(value: string): BlockResponse;
    clearValidatorsList(): void;
    getValidatorsList(): Array<BlockResponse.Validator>;
    setValidatorsList(value: Array<BlockResponse.Validator>): BlockResponse;
    addValidators(value?: BlockResponse.Validator, index?: number): BlockResponse.Validator;

    hasEvidence(): boolean;
    clearEvidence(): void;
    getEvidence(): BlockResponse.Evidence | undefined;
    setEvidence(value?: BlockResponse.Evidence): BlockResponse;
    clearMissedList(): void;
    getMissedList(): Array<string>;
    setMissedList(value: Array<string>): BlockResponse;
    addMissed(value: string, index?: number): string;
    clearEventsList(): void;
    getEventsList(): Array<google_protobuf_any_pb.Any>;
    setEventsList(value: Array<google_protobuf_any_pb.Any>): BlockResponse;
    addEvents(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BlockResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BlockResponse): BlockResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BlockResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BlockResponse;
    static deserializeBinaryFromReader(message: BlockResponse, reader: jspb.BinaryReader): BlockResponse;
}

export namespace BlockResponse {
    export type AsObject = {
        hash: string,
        height: number,
        time: string,
        transactionCount: number,
        transactionsList: Array<TransactionResponse.AsObject>,
        blockReward?: google_protobuf_wrappers_pb.StringValue.AsObject,
        lockedStakeRewards?: google_protobuf_wrappers_pb.StringValue.AsObject,
        size: number,
        proposer: string,
        validatorsList: Array<BlockResponse.Validator.AsObject>,
        evidence?: BlockResponse.Evidence.AsObject,
        missedList: Array<string>,
        eventsList: Array<google_protobuf_any_pb.Any.AsObject>,
    }


    export class Validator extends jspb.Message { 
        getPublicKey(): string;
        setPublicKey(value: string): Validator;
        getSigned(): boolean;
        setSigned(value: boolean): Validator;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Validator.AsObject;
        static toObject(includeInstance: boolean, msg: Validator): Validator.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Validator, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Validator;
        static deserializeBinaryFromReader(message: Validator, reader: jspb.BinaryReader): Validator;
    }

    export namespace Validator {
        export type AsObject = {
            publicKey: string,
            signed: boolean,
        }
    }

    export class Evidence extends jspb.Message { 
        clearEvidenceList(): void;
        getEvidenceList(): Array<google_protobuf_struct_pb.Struct>;
        setEvidenceList(value: Array<google_protobuf_struct_pb.Struct>): Evidence;
        addEvidence(value?: google_protobuf_struct_pb.Struct, index?: number): google_protobuf_struct_pb.Struct;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Evidence.AsObject;
        static toObject(includeInstance: boolean, msg: Evidence): Evidence.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Evidence, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Evidence;
        static deserializeBinaryFromReader(message: Evidence, reader: jspb.BinaryReader): Evidence;
    }

    export namespace Evidence {
        export type AsObject = {
            evidenceList: Array<google_protobuf_struct_pb.Struct.AsObject>,
        }
    }

}

export class MaxGasPriceRequest extends jspb.Message { 
    getHeight(): number;
    setHeight(value: number): MaxGasPriceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MaxGasPriceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MaxGasPriceRequest): MaxGasPriceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MaxGasPriceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MaxGasPriceRequest;
    static deserializeBinaryFromReader(message: MaxGasPriceRequest, reader: jspb.BinaryReader): MaxGasPriceRequest;
}

export namespace MaxGasPriceRequest {
    export type AsObject = {
        height: number,
    }
}

export class MaxGasPriceResponse extends jspb.Message { 
    getMaxGasPrice(): number;
    setMaxGasPrice(value: number): MaxGasPriceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MaxGasPriceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MaxGasPriceResponse): MaxGasPriceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MaxGasPriceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MaxGasPriceResponse;
    static deserializeBinaryFromReader(message: MaxGasPriceResponse, reader: jspb.BinaryReader): MaxGasPriceResponse;
}

export namespace MaxGasPriceResponse {
    export type AsObject = {
        maxGasPrice: number,
    }
}

export class AddressRequest extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): AddressRequest;
    getHeight(): number;
    setHeight(value: number): AddressRequest;
    getDelegated(): boolean;
    setDelegated(value: boolean): AddressRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddressRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddressRequest): AddressRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddressRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddressRequest;
    static deserializeBinaryFromReader(message: AddressRequest, reader: jspb.BinaryReader): AddressRequest;
}

export namespace AddressRequest {
    export type AsObject = {
        address: string,
        height: number,
        delegated: boolean,
    }
}

export class AddressBalance extends jspb.Message { 

    hasCoin(): boolean;
    clearCoin(): void;
    getCoin(): Coin | undefined;
    setCoin(value?: Coin): AddressBalance;
    getValue(): string;
    setValue(value: string): AddressBalance;
    getBipValue(): string;
    setBipValue(value: string): AddressBalance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddressBalance.AsObject;
    static toObject(includeInstance: boolean, msg: AddressBalance): AddressBalance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddressBalance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddressBalance;
    static deserializeBinaryFromReader(message: AddressBalance, reader: jspb.BinaryReader): AddressBalance;
}

export namespace AddressBalance {
    export type AsObject = {
        coin?: Coin.AsObject,
        value: string,
        bipValue: string,
    }
}

export class AddressDelegatedBalance extends jspb.Message { 

    hasCoin(): boolean;
    clearCoin(): void;
    getCoin(): Coin | undefined;
    setCoin(value?: Coin): AddressDelegatedBalance;
    getValue(): string;
    setValue(value: string): AddressDelegatedBalance;
    getBipValue(): string;
    setBipValue(value: string): AddressDelegatedBalance;
    getDelegateBipValue(): string;
    setDelegateBipValue(value: string): AddressDelegatedBalance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddressDelegatedBalance.AsObject;
    static toObject(includeInstance: boolean, msg: AddressDelegatedBalance): AddressDelegatedBalance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddressDelegatedBalance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddressDelegatedBalance;
    static deserializeBinaryFromReader(message: AddressDelegatedBalance, reader: jspb.BinaryReader): AddressDelegatedBalance;
}

export namespace AddressDelegatedBalance {
    export type AsObject = {
        coin?: Coin.AsObject,
        value: string,
        bipValue: string,
        delegateBipValue: string,
    }
}

export class AddressResponse extends jspb.Message { 
    clearBalanceList(): void;
    getBalanceList(): Array<AddressBalance>;
    setBalanceList(value: Array<AddressBalance>): AddressResponse;
    addBalance(value?: AddressBalance, index?: number): AddressBalance;
    clearDelegatedList(): void;
    getDelegatedList(): Array<AddressDelegatedBalance>;
    setDelegatedList(value: Array<AddressDelegatedBalance>): AddressResponse;
    addDelegated(value?: AddressDelegatedBalance, index?: number): AddressDelegatedBalance;
    clearTotalList(): void;
    getTotalList(): Array<AddressBalance>;
    setTotalList(value: Array<AddressBalance>): AddressResponse;
    addTotal(value?: AddressBalance, index?: number): AddressBalance;
    getTransactionCount(): number;
    setTransactionCount(value: number): AddressResponse;
    getBipValue(): string;
    setBipValue(value: string): AddressResponse;
    getLockedStakeUntilBlock(): number;
    setLockedStakeUntilBlock(value: number): AddressResponse;

    hasMultisig(): boolean;
    clearMultisig(): void;
    getMultisig(): Multisig | undefined;
    setMultisig(value?: Multisig): AddressResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddressResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddressResponse): AddressResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddressResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddressResponse;
    static deserializeBinaryFromReader(message: AddressResponse, reader: jspb.BinaryReader): AddressResponse;
}

export namespace AddressResponse {
    export type AsObject = {
        balanceList: Array<AddressBalance.AsObject>,
        delegatedList: Array<AddressDelegatedBalance.AsObject>,
        totalList: Array<AddressBalance.AsObject>,
        transactionCount: number,
        bipValue: string,
        lockedStakeUntilBlock: number,
        multisig?: Multisig.AsObject,
    }
}

export class Multisig extends jspb.Message { 
    getThreshold(): number;
    setThreshold(value: number): Multisig;
    clearWeightsList(): void;
    getWeightsList(): Array<number>;
    setWeightsList(value: Array<number>): Multisig;
    addWeights(value: number, index?: number): number;
    clearAddressesList(): void;
    getAddressesList(): Array<string>;
    setAddressesList(value: Array<string>): Multisig;
    addAddresses(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Multisig.AsObject;
    static toObject(includeInstance: boolean, msg: Multisig): Multisig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Multisig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Multisig;
    static deserializeBinaryFromReader(message: Multisig, reader: jspb.BinaryReader): Multisig;
}

export namespace Multisig {
    export type AsObject = {
        threshold: number,
        weightsList: Array<number>,
        addressesList: Array<string>,
    }
}

export class AddressesRequest extends jspb.Message { 
    clearAddressesList(): void;
    getAddressesList(): Array<string>;
    setAddressesList(value: Array<string>): AddressesRequest;
    addAddresses(value: string, index?: number): string;
    getHeight(): number;
    setHeight(value: number): AddressesRequest;
    getDelegated(): boolean;
    setDelegated(value: boolean): AddressesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddressesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddressesRequest): AddressesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddressesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddressesRequest;
    static deserializeBinaryFromReader(message: AddressesRequest, reader: jspb.BinaryReader): AddressesRequest;
}

export namespace AddressesRequest {
    export type AsObject = {
        addressesList: Array<string>,
        height: number,
        delegated: boolean,
    }
}

export class AddressesResponse extends jspb.Message { 

    getAddressesMap(): jspb.Map<string, AddressesResponse.Result>;
    clearAddressesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddressesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AddressesResponse): AddressesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddressesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddressesResponse;
    static deserializeBinaryFromReader(message: AddressesResponse, reader: jspb.BinaryReader): AddressesResponse;
}

export namespace AddressesResponse {
    export type AsObject = {

        addressesMap: Array<[string, AddressesResponse.Result.AsObject]>,
    }


    export class Result extends jspb.Message { 
        clearBalanceList(): void;
        getBalanceList(): Array<AddressBalance>;
        setBalanceList(value: Array<AddressBalance>): Result;
        addBalance(value?: AddressBalance, index?: number): AddressBalance;
        clearDelegatedList(): void;
        getDelegatedList(): Array<AddressDelegatedBalance>;
        setDelegatedList(value: Array<AddressDelegatedBalance>): Result;
        addDelegated(value?: AddressDelegatedBalance, index?: number): AddressDelegatedBalance;
        clearTotalList(): void;
        getTotalList(): Array<AddressBalance>;
        setTotalList(value: Array<AddressBalance>): Result;
        addTotal(value?: AddressBalance, index?: number): AddressBalance;
        getTransactionCount(): number;
        setTransactionCount(value: number): Result;
        getBipValue(): string;
        setBipValue(value: string): Result;
        getLockedStakeUntilBlock(): number;
        setLockedStakeUntilBlock(value: number): Result;

        hasMultisig(): boolean;
        clearMultisig(): void;
        getMultisig(): Multisig | undefined;
        setMultisig(value?: Multisig): Result;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Result.AsObject;
        static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Result;
        static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
    }

    export namespace Result {
        export type AsObject = {
            balanceList: Array<AddressBalance.AsObject>,
            delegatedList: Array<AddressDelegatedBalance.AsObject>,
            totalList: Array<AddressBalance.AsObject>,
            transactionCount: number,
            bipValue: string,
            lockedStakeUntilBlock: number,
            multisig?: Multisig.AsObject,
        }
    }

}

export class CandidateRequest extends jspb.Message { 
    getPublicKey(): string;
    setPublicKey(value: string): CandidateRequest;
    getHeight(): number;
    setHeight(value: number): CandidateRequest;
    getNotShowStakes(): boolean;
    setNotShowStakes(value: boolean): CandidateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CandidateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CandidateRequest): CandidateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CandidateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CandidateRequest;
    static deserializeBinaryFromReader(message: CandidateRequest, reader: jspb.BinaryReader): CandidateRequest;
}

export namespace CandidateRequest {
    export type AsObject = {
        publicKey: string,
        height: number,
        notShowStakes: boolean,
    }
}

export class CandidateResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): CandidateResponse;
    getRewardAddress(): string;
    setRewardAddress(value: string): CandidateResponse;
    getOwnerAddress(): string;
    setOwnerAddress(value: string): CandidateResponse;
    getControlAddress(): string;
    setControlAddress(value: string): CandidateResponse;
    getTotalStake(): string;
    setTotalStake(value: string): CandidateResponse;
    getPublicKey(): string;
    setPublicKey(value: string): CandidateResponse;
    getCommission(): number;
    setCommission(value: number): CandidateResponse;

    hasUsedSlots(): boolean;
    clearUsedSlots(): void;
    getUsedSlots(): google_protobuf_wrappers_pb.UInt64Value | undefined;
    setUsedSlots(value?: google_protobuf_wrappers_pb.UInt64Value): CandidateResponse;

    hasUniqUsers(): boolean;
    clearUniqUsers(): void;
    getUniqUsers(): google_protobuf_wrappers_pb.UInt64Value | undefined;
    setUniqUsers(value?: google_protobuf_wrappers_pb.UInt64Value): CandidateResponse;

    hasMinStake(): boolean;
    clearMinStake(): void;
    getMinStake(): google_protobuf_wrappers_pb.StringValue | undefined;
    setMinStake(value?: google_protobuf_wrappers_pb.StringValue): CandidateResponse;
    clearStakesList(): void;
    getStakesList(): Array<CandidateResponse.Stake>;
    setStakesList(value: Array<CandidateResponse.Stake>): CandidateResponse;
    addStakes(value?: CandidateResponse.Stake, index?: number): CandidateResponse.Stake;
    getStatus(): number;
    setStatus(value: number): CandidateResponse;
    getValidator(): boolean;
    setValidator(value: boolean): CandidateResponse;
    getJailedUntil(): number;
    setJailedUntil(value: number): CandidateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CandidateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CandidateResponse): CandidateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CandidateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CandidateResponse;
    static deserializeBinaryFromReader(message: CandidateResponse, reader: jspb.BinaryReader): CandidateResponse;
}

export namespace CandidateResponse {
    export type AsObject = {
        id: number,
        rewardAddress: string,
        ownerAddress: string,
        controlAddress: string,
        totalStake: string,
        publicKey: string,
        commission: number,
        usedSlots?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
        uniqUsers?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
        minStake?: google_protobuf_wrappers_pb.StringValue.AsObject,
        stakesList: Array<CandidateResponse.Stake.AsObject>,
        status: number,
        validator: boolean,
        jailedUntil: number,
    }


    export class Stake extends jspb.Message { 
        getOwner(): string;
        setOwner(value: string): Stake;

        hasCoin(): boolean;
        clearCoin(): void;
        getCoin(): Coin | undefined;
        setCoin(value?: Coin): Stake;
        getValue(): string;
        setValue(value: string): Stake;
        getBipValue(): string;
        setBipValue(value: string): Stake;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Stake.AsObject;
        static toObject(includeInstance: boolean, msg: Stake): Stake.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Stake, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Stake;
        static deserializeBinaryFromReader(message: Stake, reader: jspb.BinaryReader): Stake;
    }

    export namespace Stake {
        export type AsObject = {
            owner: string,
            coin?: Coin.AsObject,
            value: string,
            bipValue: string,
        }
    }

}

export class CandidatesRequest extends jspb.Message { 
    getHeight(): number;
    setHeight(value: number): CandidatesRequest;
    getIncludeStakes(): boolean;
    setIncludeStakes(value: boolean): CandidatesRequest;
    getNotShowStakes(): boolean;
    setNotShowStakes(value: boolean): CandidatesRequest;
    getStatus(): CandidatesRequest.CandidateStatus;
    setStatus(value: CandidatesRequest.CandidateStatus): CandidatesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CandidatesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CandidatesRequest): CandidatesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CandidatesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CandidatesRequest;
    static deserializeBinaryFromReader(message: CandidatesRequest, reader: jspb.BinaryReader): CandidatesRequest;
}

export namespace CandidatesRequest {
    export type AsObject = {
        height: number,
        includeStakes: boolean,
        notShowStakes: boolean,
        status: CandidatesRequest.CandidateStatus,
    }

    export enum CandidateStatus {
    ALL = 0,
    OFF = 1,
    ON = 2,
    VALIDATOR = 3,
    }

}

export class CandidatesResponse extends jspb.Message { 
    clearCandidatesList(): void;
    getCandidatesList(): Array<CandidateResponse>;
    setCandidatesList(value: Array<CandidateResponse>): CandidatesResponse;
    addCandidates(value?: CandidateResponse, index?: number): CandidateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CandidatesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CandidatesResponse): CandidatesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CandidatesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CandidatesResponse;
    static deserializeBinaryFromReader(message: CandidatesResponse, reader: jspb.BinaryReader): CandidatesResponse;
}

export namespace CandidatesResponse {
    export type AsObject = {
        candidatesList: Array<CandidateResponse.AsObject>,
    }
}

export class CoinIdRequest extends jspb.Message { 
    getHeight(): number;
    setHeight(value: number): CoinIdRequest;
    getId(): number;
    setId(value: number): CoinIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CoinIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CoinIdRequest): CoinIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CoinIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CoinIdRequest;
    static deserializeBinaryFromReader(message: CoinIdRequest, reader: jspb.BinaryReader): CoinIdRequest;
}

export namespace CoinIdRequest {
    export type AsObject = {
        height: number,
        id: number,
    }
}

export class CoinInfoRequest extends jspb.Message { 
    getHeight(): number;
    setHeight(value: number): CoinInfoRequest;
    getSymbol(): string;
    setSymbol(value: string): CoinInfoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CoinInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CoinInfoRequest): CoinInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CoinInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CoinInfoRequest;
    static deserializeBinaryFromReader(message: CoinInfoRequest, reader: jspb.BinaryReader): CoinInfoRequest;
}

export namespace CoinInfoRequest {
    export type AsObject = {
        height: number,
        symbol: string,
    }
}

export class CoinInfoResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): CoinInfoResponse;
    getName(): string;
    setName(value: string): CoinInfoResponse;
    getSymbol(): string;
    setSymbol(value: string): CoinInfoResponse;
    getVolume(): string;
    setVolume(value: string): CoinInfoResponse;
    getCrr(): number;
    setCrr(value: number): CoinInfoResponse;
    getReserveBalance(): string;
    setReserveBalance(value: string): CoinInfoResponse;
    getMaxSupply(): string;
    setMaxSupply(value: string): CoinInfoResponse;

    hasOwnerAddress(): boolean;
    clearOwnerAddress(): void;
    getOwnerAddress(): google_protobuf_wrappers_pb.StringValue | undefined;
    setOwnerAddress(value?: google_protobuf_wrappers_pb.StringValue): CoinInfoResponse;
    getMintable(): boolean;
    setMintable(value: boolean): CoinInfoResponse;
    getBurnable(): boolean;
    setBurnable(value: boolean): CoinInfoResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CoinInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CoinInfoResponse): CoinInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CoinInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CoinInfoResponse;
    static deserializeBinaryFromReader(message: CoinInfoResponse, reader: jspb.BinaryReader): CoinInfoResponse;
}

export namespace CoinInfoResponse {
    export type AsObject = {
        id: number,
        name: string,
        symbol: string,
        volume: string,
        crr: number,
        reserveBalance: string,
        maxSupply: string,
        ownerAddress?: google_protobuf_wrappers_pb.StringValue.AsObject,
        mintable: boolean,
        burnable: boolean,
    }
}

export class SendTransactionResponse extends jspb.Message { 
    getCode(): number;
    setCode(value: number): SendTransactionResponse;
    getLog(): string;
    setLog(value: string): SendTransactionResponse;
    getHash(): string;
    setHash(value: string): SendTransactionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendTransactionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SendTransactionResponse): SendTransactionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendTransactionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendTransactionResponse;
    static deserializeBinaryFromReader(message: SendTransactionResponse, reader: jspb.BinaryReader): SendTransactionResponse;
}

export namespace SendTransactionResponse {
    export type AsObject = {
        code: number,
        log: string,
        hash: string,
    }
}

export class SendTransactionRequest extends jspb.Message { 
    getTx(): string;
    setTx(value: string): SendTransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendTransactionRequest): SendTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendTransactionRequest;
    static deserializeBinaryFromReader(message: SendTransactionRequest, reader: jspb.BinaryReader): SendTransactionRequest;
}

export namespace SendTransactionRequest {
    export type AsObject = {
        tx: string,
    }
}

export class TransactionResponse extends jspb.Message { 
    getHash(): string;
    setHash(value: string): TransactionResponse;
    getRawTx(): string;
    setRawTx(value: string): TransactionResponse;
    getHeight(): number;
    setHeight(value: number): TransactionResponse;
    getIndex(): number;
    setIndex(value: number): TransactionResponse;
    getFrom(): string;
    setFrom(value: string): TransactionResponse;
    getNonce(): number;
    setNonce(value: number): TransactionResponse;
    getGas(): number;
    setGas(value: number): TransactionResponse;
    getGasPrice(): number;
    setGasPrice(value: number): TransactionResponse;

    hasGasCoin(): boolean;
    clearGasCoin(): void;
    getGasCoin(): Coin | undefined;
    setGasCoin(value?: Coin): TransactionResponse;
    getTypeHex(): string;
    setTypeHex(value: string): TransactionResponse;
    getType(): number;
    setType(value: number): TransactionResponse;

    hasData(): boolean;
    clearData(): void;
    getData(): google_protobuf_any_pb.Any | undefined;
    setData(value?: google_protobuf_any_pb.Any): TransactionResponse;
    getPayload(): Uint8Array | string;
    getPayload_asU8(): Uint8Array;
    getPayload_asB64(): string;
    setPayload(value: Uint8Array | string): TransactionResponse;
    getServiceData(): Uint8Array | string;
    getServiceData_asU8(): Uint8Array;
    getServiceData_asB64(): string;
    setServiceData(value: Uint8Array | string): TransactionResponse;

    getTagsMap(): jspb.Map<string, string>;
    clearTagsMap(): void;
    getCode(): number;
    setCode(value: number): TransactionResponse;
    getLog(): string;
    setLog(value: string): TransactionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionResponse): TransactionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionResponse;
    static deserializeBinaryFromReader(message: TransactionResponse, reader: jspb.BinaryReader): TransactionResponse;
}

export namespace TransactionResponse {
    export type AsObject = {
        hash: string,
        rawTx: string,
        height: number,
        index: number,
        from: string,
        nonce: number,
        gas: number,
        gasPrice: number,
        gasCoin?: Coin.AsObject,
        typeHex: string,
        type: number,
        data?: google_protobuf_any_pb.Any.AsObject,
        payload: Uint8Array | string,
        serviceData: Uint8Array | string,

        tagsMap: Array<[string, string]>,
        code: number,
        log: string,
    }

    export enum Type {
    _ = 0,
    SEND = 1,
    SELLCOIN = 2,
    SELLALLCOIN = 3,
    BUYCOIN = 4,
    CREATECOIN = 5,
    DECLARECANDIDACY = 6,
    DELEGATE = 7,
    UNBOND = 8,
    REDEEMCHECK = 9,
    SETCANDIDATEONLINE = 10,
    SETCANDIDATEOFFLINE = 11,
    CREATEMULTISIG = 12,
    MULTISEND = 13,
    EDITCANDIDATE = 14,
    SETHALTBLOCK = 15,
    RECREATECOIN = 16,
    EDITCOINOWNER = 17,
    EDITMULTISIG = 18,
    PRICEVOTE = 19,
    EDITCANDIDATEPUBLICKEY = 20,
    ADDLIQUIDITY = 21,
    REMOVELIQUIDITY = 22,
    SELLSWAPPOOL = 23,
    BUYSWAPPOOL = 24,
    SELLALLSWAPPOOL = 25,
    EDITCOMMISSIONCANDIDATE = 26,
    MOVESTAKE = 27,
    MINTTOKEN = 28,
    BURNTOKEN = 29,
    CREATETOKEN = 30,
    RECREATETOKEN = 31,
    VOTECOMMISSION = 32,
    VOTEUPDATE = 33,
    CREATESWAPPOOL = 34,
    ADDLIMITORDER = 35,
    REMOVELIMITORDER = 36,
    TYPELOCKSTAKE = 37,
    TYPELOCK = 38,
    }

}

export class TransactionRequest extends jspb.Message { 
    getHash(): string;
    setHash(value: string): TransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionRequest): TransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionRequest;
    static deserializeBinaryFromReader(message: TransactionRequest, reader: jspb.BinaryReader): TransactionRequest;
}

export namespace TransactionRequest {
    export type AsObject = {
        hash: string,
    }
}

export class TransactionsResponse extends jspb.Message { 
    clearTransactionsList(): void;
    getTransactionsList(): Array<TransactionResponse>;
    setTransactionsList(value: Array<TransactionResponse>): TransactionsResponse;
    addTransactions(value?: TransactionResponse, index?: number): TransactionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionsResponse): TransactionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionsResponse;
    static deserializeBinaryFromReader(message: TransactionsResponse, reader: jspb.BinaryReader): TransactionsResponse;
}

export namespace TransactionsResponse {
    export type AsObject = {
        transactionsList: Array<TransactionResponse.AsObject>,
    }
}

export class TransactionsRequest extends jspb.Message { 
    getQuery(): string;
    setQuery(value: string): TransactionsRequest;
    getPage(): number;
    setPage(value: number): TransactionsRequest;
    getPerPage(): number;
    setPerPage(value: number): TransactionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionsRequest): TransactionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionsRequest;
    static deserializeBinaryFromReader(message: TransactionsRequest, reader: jspb.BinaryReader): TransactionsRequest;
}

export namespace TransactionsRequest {
    export type AsObject = {
        query: string,
        page: number,
        perPage: number,
    }
}

export class EstimateCoinBuyRequest extends jspb.Message { 

    hasCoinIdToBuy(): boolean;
    clearCoinIdToBuy(): void;
    getCoinIdToBuy(): number;
    setCoinIdToBuy(value: number): EstimateCoinBuyRequest;

    hasCoinToBuy(): boolean;
    clearCoinToBuy(): void;
    getCoinToBuy(): string;
    setCoinToBuy(value: string): EstimateCoinBuyRequest;

    hasCoinIdToSell(): boolean;
    clearCoinIdToSell(): void;
    getCoinIdToSell(): number;
    setCoinIdToSell(value: number): EstimateCoinBuyRequest;

    hasCoinToSell(): boolean;
    clearCoinToSell(): void;
    getCoinToSell(): string;
    setCoinToSell(value: string): EstimateCoinBuyRequest;
    getValueToBuy(): string;
    setValueToBuy(value: string): EstimateCoinBuyRequest;
    getHeight(): number;
    setHeight(value: number): EstimateCoinBuyRequest;

    hasCoinIdCommission(): boolean;
    clearCoinIdCommission(): void;
    getCoinIdCommission(): number;
    setCoinIdCommission(value: number): EstimateCoinBuyRequest;

    hasCoinCommission(): boolean;
    clearCoinCommission(): void;
    getCoinCommission(): string;
    setCoinCommission(value: string): EstimateCoinBuyRequest;
    getSwapFrom(): SwapFrom;
    setSwapFrom(value: SwapFrom): EstimateCoinBuyRequest;
    clearRouteList(): void;
    getRouteList(): Array<number>;
    setRouteList(value: Array<number>): EstimateCoinBuyRequest;
    addRoute(value: number, index?: number): number;

    getBuyCase(): EstimateCoinBuyRequest.BuyCase;
    getSellCase(): EstimateCoinBuyRequest.SellCase;
    getCommissionCase(): EstimateCoinBuyRequest.CommissionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EstimateCoinBuyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EstimateCoinBuyRequest): EstimateCoinBuyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EstimateCoinBuyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EstimateCoinBuyRequest;
    static deserializeBinaryFromReader(message: EstimateCoinBuyRequest, reader: jspb.BinaryReader): EstimateCoinBuyRequest;
}

export namespace EstimateCoinBuyRequest {
    export type AsObject = {
        coinIdToBuy: number,
        coinToBuy: string,
        coinIdToSell: number,
        coinToSell: string,
        valueToBuy: string,
        height: number,
        coinIdCommission: number,
        coinCommission: string,
        swapFrom: SwapFrom,
        routeList: Array<number>,
    }

    export enum BuyCase {
        BUY_NOT_SET = 0,
        COIN_ID_TO_BUY = 1,
        COIN_TO_BUY = 5,
    }

    export enum SellCase {
        SELL_NOT_SET = 0,
        COIN_ID_TO_SELL = 2,
        COIN_TO_SELL = 6,
    }

    export enum CommissionCase {
        COMMISSION_NOT_SET = 0,
        COIN_ID_COMMISSION = 9,
        COIN_COMMISSION = 10,
    }

}

export class EstimateCoinBuyResponse extends jspb.Message { 
    getWillPay(): string;
    setWillPay(value: string): EstimateCoinBuyResponse;
    getCommission(): string;
    setCommission(value: string): EstimateCoinBuyResponse;
    getSwapFrom(): SwapFrom;
    setSwapFrom(value: SwapFrom): EstimateCoinBuyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EstimateCoinBuyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EstimateCoinBuyResponse): EstimateCoinBuyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EstimateCoinBuyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EstimateCoinBuyResponse;
    static deserializeBinaryFromReader(message: EstimateCoinBuyResponse, reader: jspb.BinaryReader): EstimateCoinBuyResponse;
}

export namespace EstimateCoinBuyResponse {
    export type AsObject = {
        willPay: string,
        commission: string,
        swapFrom: SwapFrom,
    }
}

export class EstimateCoinSellRequest extends jspb.Message { 

    hasCoinIdToBuy(): boolean;
    clearCoinIdToBuy(): void;
    getCoinIdToBuy(): number;
    setCoinIdToBuy(value: number): EstimateCoinSellRequest;

    hasCoinToBuy(): boolean;
    clearCoinToBuy(): void;
    getCoinToBuy(): string;
    setCoinToBuy(value: string): EstimateCoinSellRequest;

    hasCoinIdToSell(): boolean;
    clearCoinIdToSell(): void;
    getCoinIdToSell(): number;
    setCoinIdToSell(value: number): EstimateCoinSellRequest;

    hasCoinToSell(): boolean;
    clearCoinToSell(): void;
    getCoinToSell(): string;
    setCoinToSell(value: string): EstimateCoinSellRequest;
    getValueToSell(): string;
    setValueToSell(value: string): EstimateCoinSellRequest;
    getHeight(): number;
    setHeight(value: number): EstimateCoinSellRequest;

    hasCoinIdCommission(): boolean;
    clearCoinIdCommission(): void;
    getCoinIdCommission(): number;
    setCoinIdCommission(value: number): EstimateCoinSellRequest;

    hasCoinCommission(): boolean;
    clearCoinCommission(): void;
    getCoinCommission(): string;
    setCoinCommission(value: string): EstimateCoinSellRequest;
    getSwapFrom(): SwapFrom;
    setSwapFrom(value: SwapFrom): EstimateCoinSellRequest;
    clearRouteList(): void;
    getRouteList(): Array<number>;
    setRouteList(value: Array<number>): EstimateCoinSellRequest;
    addRoute(value: number, index?: number): number;

    getBuyCase(): EstimateCoinSellRequest.BuyCase;
    getSellCase(): EstimateCoinSellRequest.SellCase;
    getCommissionCase(): EstimateCoinSellRequest.CommissionCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EstimateCoinSellRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EstimateCoinSellRequest): EstimateCoinSellRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EstimateCoinSellRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EstimateCoinSellRequest;
    static deserializeBinaryFromReader(message: EstimateCoinSellRequest, reader: jspb.BinaryReader): EstimateCoinSellRequest;
}

export namespace EstimateCoinSellRequest {
    export type AsObject = {
        coinIdToBuy: number,
        coinToBuy: string,
        coinIdToSell: number,
        coinToSell: string,
        valueToSell: string,
        height: number,
        coinIdCommission: number,
        coinCommission: string,
        swapFrom: SwapFrom,
        routeList: Array<number>,
    }

    export enum BuyCase {
        BUY_NOT_SET = 0,
        COIN_ID_TO_BUY = 1,
        COIN_TO_BUY = 5,
    }

    export enum SellCase {
        SELL_NOT_SET = 0,
        COIN_ID_TO_SELL = 2,
        COIN_TO_SELL = 6,
    }

    export enum CommissionCase {
        COMMISSION_NOT_SET = 0,
        COIN_ID_COMMISSION = 9,
        COIN_COMMISSION = 10,
    }

}

export class EstimateCoinSellResponse extends jspb.Message { 
    getWillGet(): string;
    setWillGet(value: string): EstimateCoinSellResponse;
    getCommission(): string;
    setCommission(value: string): EstimateCoinSellResponse;
    getSwapFrom(): SwapFrom;
    setSwapFrom(value: SwapFrom): EstimateCoinSellResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EstimateCoinSellResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EstimateCoinSellResponse): EstimateCoinSellResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EstimateCoinSellResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EstimateCoinSellResponse;
    static deserializeBinaryFromReader(message: EstimateCoinSellResponse, reader: jspb.BinaryReader): EstimateCoinSellResponse;
}

export namespace EstimateCoinSellResponse {
    export type AsObject = {
        willGet: string,
        commission: string,
        swapFrom: SwapFrom,
    }
}

export class EstimateCoinSellAllRequest extends jspb.Message { 

    hasCoinIdToBuy(): boolean;
    clearCoinIdToBuy(): void;
    getCoinIdToBuy(): number;
    setCoinIdToBuy(value: number): EstimateCoinSellAllRequest;

    hasCoinToBuy(): boolean;
    clearCoinToBuy(): void;
    getCoinToBuy(): string;
    setCoinToBuy(value: string): EstimateCoinSellAllRequest;

    hasCoinIdToSell(): boolean;
    clearCoinIdToSell(): void;
    getCoinIdToSell(): number;
    setCoinIdToSell(value: number): EstimateCoinSellAllRequest;

    hasCoinToSell(): boolean;
    clearCoinToSell(): void;
    getCoinToSell(): string;
    setCoinToSell(value: string): EstimateCoinSellAllRequest;
    getValueToSell(): string;
    setValueToSell(value: string): EstimateCoinSellAllRequest;
    getGasPrice(): number;
    setGasPrice(value: number): EstimateCoinSellAllRequest;
    getHeight(): number;
    setHeight(value: number): EstimateCoinSellAllRequest;
    getSwapFrom(): SwapFrom;
    setSwapFrom(value: SwapFrom): EstimateCoinSellAllRequest;
    clearRouteList(): void;
    getRouteList(): Array<number>;
    setRouteList(value: Array<number>): EstimateCoinSellAllRequest;
    addRoute(value: number, index?: number): number;

    getBuyCase(): EstimateCoinSellAllRequest.BuyCase;
    getSellCase(): EstimateCoinSellAllRequest.SellCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EstimateCoinSellAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EstimateCoinSellAllRequest): EstimateCoinSellAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EstimateCoinSellAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EstimateCoinSellAllRequest;
    static deserializeBinaryFromReader(message: EstimateCoinSellAllRequest, reader: jspb.BinaryReader): EstimateCoinSellAllRequest;
}

export namespace EstimateCoinSellAllRequest {
    export type AsObject = {
        coinIdToBuy: number,
        coinToBuy: string,
        coinIdToSell: number,
        coinToSell: string,
        valueToSell: string,
        gasPrice: number,
        height: number,
        swapFrom: SwapFrom,
        routeList: Array<number>,
    }

    export enum BuyCase {
        BUY_NOT_SET = 0,
        COIN_ID_TO_BUY = 1,
        COIN_TO_BUY = 7,
    }

    export enum SellCase {
        SELL_NOT_SET = 0,
        COIN_ID_TO_SELL = 2,
        COIN_TO_SELL = 6,
    }

}

export class EstimateCoinSellAllResponse extends jspb.Message { 
    getWillGet(): string;
    setWillGet(value: string): EstimateCoinSellAllResponse;
    getSwapFrom(): SwapFrom;
    setSwapFrom(value: SwapFrom): EstimateCoinSellAllResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EstimateCoinSellAllResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EstimateCoinSellAllResponse): EstimateCoinSellAllResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EstimateCoinSellAllResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EstimateCoinSellAllResponse;
    static deserializeBinaryFromReader(message: EstimateCoinSellAllResponse, reader: jspb.BinaryReader): EstimateCoinSellAllResponse;
}

export namespace EstimateCoinSellAllResponse {
    export type AsObject = {
        willGet: string,
        swapFrom: SwapFrom,
    }
}

export class EstimateTxCommissionRequest extends jspb.Message { 
    getTx(): string;
    setTx(value: string): EstimateTxCommissionRequest;
    getHeight(): number;
    setHeight(value: number): EstimateTxCommissionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EstimateTxCommissionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EstimateTxCommissionRequest): EstimateTxCommissionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EstimateTxCommissionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EstimateTxCommissionRequest;
    static deserializeBinaryFromReader(message: EstimateTxCommissionRequest, reader: jspb.BinaryReader): EstimateTxCommissionRequest;
}

export namespace EstimateTxCommissionRequest {
    export type AsObject = {
        tx: string,
        height: number,
    }
}

export class EstimateTxCommissionResponse extends jspb.Message { 
    getCommission(): string;
    setCommission(value: string): EstimateTxCommissionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EstimateTxCommissionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EstimateTxCommissionResponse): EstimateTxCommissionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EstimateTxCommissionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EstimateTxCommissionResponse;
    static deserializeBinaryFromReader(message: EstimateTxCommissionResponse, reader: jspb.BinaryReader): EstimateTxCommissionResponse;
}

export namespace EstimateTxCommissionResponse {
    export type AsObject = {
        commission: string,
    }
}

export class EventsRequest extends jspb.Message { 
    getHeight(): number;
    setHeight(value: number): EventsRequest;
    clearSearchList(): void;
    getSearchList(): Array<string>;
    setSearchList(value: Array<string>): EventsRequest;
    addSearch(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EventsRequest): EventsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventsRequest;
    static deserializeBinaryFromReader(message: EventsRequest, reader: jspb.BinaryReader): EventsRequest;
}

export namespace EventsRequest {
    export type AsObject = {
        height: number,
        searchList: Array<string>,
    }
}

export class EventsResponse extends jspb.Message { 
    clearEventsList(): void;
    getEventsList(): Array<google_protobuf_struct_pb.Struct>;
    setEventsList(value: Array<google_protobuf_struct_pb.Struct>): EventsResponse;
    addEvents(value?: google_protobuf_struct_pb.Struct, index?: number): google_protobuf_struct_pb.Struct;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EventsResponse): EventsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventsResponse;
    static deserializeBinaryFromReader(message: EventsResponse, reader: jspb.BinaryReader): EventsResponse;
}

export namespace EventsResponse {
    export type AsObject = {
        eventsList: Array<google_protobuf_struct_pb.Struct.AsObject>,
    }
}

export class MissedBlocksRequest extends jspb.Message { 
    getPublicKey(): string;
    setPublicKey(value: string): MissedBlocksRequest;
    getHeight(): number;
    setHeight(value: number): MissedBlocksRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MissedBlocksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MissedBlocksRequest): MissedBlocksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MissedBlocksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MissedBlocksRequest;
    static deserializeBinaryFromReader(message: MissedBlocksRequest, reader: jspb.BinaryReader): MissedBlocksRequest;
}

export namespace MissedBlocksRequest {
    export type AsObject = {
        publicKey: string,
        height: number,
    }
}

export class MissedBlocksResponse extends jspb.Message { 
    getMissedBlocks(): string;
    setMissedBlocks(value: string): MissedBlocksResponse;
    getMissedBlocksCount(): number;
    setMissedBlocksCount(value: number): MissedBlocksResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MissedBlocksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MissedBlocksResponse): MissedBlocksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MissedBlocksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MissedBlocksResponse;
    static deserializeBinaryFromReader(message: MissedBlocksResponse, reader: jspb.BinaryReader): MissedBlocksResponse;
}

export namespace MissedBlocksResponse {
    export type AsObject = {
        missedBlocks: string,
        missedBlocksCount: number,
    }
}

export class UnconfirmedTxsResponse extends jspb.Message { 
    getTransactionCount(): number;
    setTransactionCount(value: number): UnconfirmedTxsResponse;
    getTotalTransactions(): number;
    setTotalTransactions(value: number): UnconfirmedTxsResponse;
    getTotalBytes(): number;
    setTotalBytes(value: number): UnconfirmedTxsResponse;
    clearTransactionsList(): void;
    getTransactionsList(): Array<string>;
    setTransactionsList(value: Array<string>): UnconfirmedTxsResponse;
    addTransactions(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnconfirmedTxsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UnconfirmedTxsResponse): UnconfirmedTxsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnconfirmedTxsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnconfirmedTxsResponse;
    static deserializeBinaryFromReader(message: UnconfirmedTxsResponse, reader: jspb.BinaryReader): UnconfirmedTxsResponse;
}

export namespace UnconfirmedTxsResponse {
    export type AsObject = {
        transactionCount: number,
        totalTransactions: number,
        totalBytes: number,
        transactionsList: Array<string>,
    }
}

export class UnconfirmedTxsRequest extends jspb.Message { 
    getLimit(): number;
    setLimit(value: number): UnconfirmedTxsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnconfirmedTxsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UnconfirmedTxsRequest): UnconfirmedTxsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnconfirmedTxsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnconfirmedTxsRequest;
    static deserializeBinaryFromReader(message: UnconfirmedTxsRequest, reader: jspb.BinaryReader): UnconfirmedTxsRequest;
}

export namespace UnconfirmedTxsRequest {
    export type AsObject = {
        limit: number,
    }
}

export class ValidatorsRequest extends jspb.Message { 
    getHeight(): number;
    setHeight(value: number): ValidatorsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidatorsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ValidatorsRequest): ValidatorsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidatorsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidatorsRequest;
    static deserializeBinaryFromReader(message: ValidatorsRequest, reader: jspb.BinaryReader): ValidatorsRequest;
}

export namespace ValidatorsRequest {
    export type AsObject = {
        height: number,
    }
}

export class ValidatorsResponse extends jspb.Message { 
    clearValidatorsList(): void;
    getValidatorsList(): Array<ValidatorsResponse.Result>;
    setValidatorsList(value: Array<ValidatorsResponse.Result>): ValidatorsResponse;
    addValidators(value?: ValidatorsResponse.Result, index?: number): ValidatorsResponse.Result;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidatorsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ValidatorsResponse): ValidatorsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidatorsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidatorsResponse;
    static deserializeBinaryFromReader(message: ValidatorsResponse, reader: jspb.BinaryReader): ValidatorsResponse;
}

export namespace ValidatorsResponse {
    export type AsObject = {
        validatorsList: Array<ValidatorsResponse.Result.AsObject>,
    }


    export class Result extends jspb.Message { 
        getPublicKey(): string;
        setPublicKey(value: string): Result;
        getVotingPower(): number;
        setVotingPower(value: number): Result;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Result.AsObject;
        static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Result;
        static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
    }

    export namespace Result {
        export type AsObject = {
            publicKey: string,
            votingPower: number,
        }
    }

}

export class SubscribeRequest extends jspb.Message { 
    getQuery(): string;
    setQuery(value: string): SubscribeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeRequest): SubscribeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeRequest;
    static deserializeBinaryFromReader(message: SubscribeRequest, reader: jspb.BinaryReader): SubscribeRequest;
}

export namespace SubscribeRequest {
    export type AsObject = {
        query: string,
    }
}

export class SubscribeResponse extends jspb.Message { 
    getQuery(): string;
    setQuery(value: string): SubscribeResponse;

    hasData(): boolean;
    clearData(): void;
    getData(): google_protobuf_struct_pb.Struct | undefined;
    setData(value?: google_protobuf_struct_pb.Struct): SubscribeResponse;
    clearEventsList(): void;
    getEventsList(): Array<SubscribeResponse.Event>;
    setEventsList(value: Array<SubscribeResponse.Event>): SubscribeResponse;
    addEvents(value?: SubscribeResponse.Event, index?: number): SubscribeResponse.Event;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeResponse): SubscribeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeResponse;
    static deserializeBinaryFromReader(message: SubscribeResponse, reader: jspb.BinaryReader): SubscribeResponse;
}

export namespace SubscribeResponse {
    export type AsObject = {
        query: string,
        data?: google_protobuf_struct_pb.Struct.AsObject,
        eventsList: Array<SubscribeResponse.Event.AsObject>,
    }


    export class Event extends jspb.Message { 
        getKey(): string;
        setKey(value: string): Event;
        clearEventsList(): void;
        getEventsList(): Array<string>;
        setEventsList(value: Array<string>): Event;
        addEvents(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Event.AsObject;
        static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Event;
        static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
    }

    export namespace Event {
        export type AsObject = {
            key: string,
            eventsList: Array<string>,
        }
    }

}

export class HaltsRequest extends jspb.Message { 
    getHeight(): number;
    setHeight(value: number): HaltsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HaltsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HaltsRequest): HaltsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HaltsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HaltsRequest;
    static deserializeBinaryFromReader(message: HaltsRequest, reader: jspb.BinaryReader): HaltsRequest;
}

export namespace HaltsRequest {
    export type AsObject = {
        height: number,
    }
}

export class HaltsResponse extends jspb.Message { 
    clearPublicKeysList(): void;
    getPublicKeysList(): Array<string>;
    setPublicKeysList(value: Array<string>): HaltsResponse;
    addPublicKeys(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HaltsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HaltsResponse): HaltsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HaltsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HaltsResponse;
    static deserializeBinaryFromReader(message: HaltsResponse, reader: jspb.BinaryReader): HaltsResponse;
}

export namespace HaltsResponse {
    export type AsObject = {
        publicKeysList: Array<string>,
    }
}

export class FrozenRequest extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): FrozenRequest;

    hasCoinId(): boolean;
    clearCoinId(): void;
    getCoinId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
    setCoinId(value?: google_protobuf_wrappers_pb.UInt64Value): FrozenRequest;
    getHeight(): number;
    setHeight(value: number): FrozenRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FrozenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FrozenRequest): FrozenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FrozenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FrozenRequest;
    static deserializeBinaryFromReader(message: FrozenRequest, reader: jspb.BinaryReader): FrozenRequest;
}

export namespace FrozenRequest {
    export type AsObject = {
        address: string,
        coinId?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
        height: number,
    }
}

export class FrozenAllRequest extends jspb.Message { 
    getStartHeight(): number;
    setStartHeight(value: number): FrozenAllRequest;
    getEndHeight(): number;
    setEndHeight(value: number): FrozenAllRequest;
    getHeight(): number;
    setHeight(value: number): FrozenAllRequest;
    clearAddressesList(): void;
    getAddressesList(): Array<string>;
    setAddressesList(value: Array<string>): FrozenAllRequest;
    addAddresses(value: string, index?: number): string;
    clearCoinIdsList(): void;
    getCoinIdsList(): Array<number>;
    setCoinIdsList(value: Array<number>): FrozenAllRequest;
    addCoinIds(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FrozenAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FrozenAllRequest): FrozenAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FrozenAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FrozenAllRequest;
    static deserializeBinaryFromReader(message: FrozenAllRequest, reader: jspb.BinaryReader): FrozenAllRequest;
}

export namespace FrozenAllRequest {
    export type AsObject = {
        startHeight: number,
        endHeight: number,
        height: number,
        addressesList: Array<string>,
        coinIdsList: Array<number>,
    }
}

export class FrozenResponse extends jspb.Message { 
    clearFrozenList(): void;
    getFrozenList(): Array<FrozenResponse.Frozen>;
    setFrozenList(value: Array<FrozenResponse.Frozen>): FrozenResponse;
    addFrozen(value?: FrozenResponse.Frozen, index?: number): FrozenResponse.Frozen;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FrozenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FrozenResponse): FrozenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FrozenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FrozenResponse;
    static deserializeBinaryFromReader(message: FrozenResponse, reader: jspb.BinaryReader): FrozenResponse;
}

export namespace FrozenResponse {
    export type AsObject = {
        frozenList: Array<FrozenResponse.Frozen.AsObject>,
    }


    export class Frozen extends jspb.Message { 
        getHeight(): number;
        setHeight(value: number): Frozen;
        getAddress(): string;
        setAddress(value: string): Frozen;

        hasCandidateKey(): boolean;
        clearCandidateKey(): void;
        getCandidateKey(): google_protobuf_wrappers_pb.StringValue | undefined;
        setCandidateKey(value?: google_protobuf_wrappers_pb.StringValue): Frozen;

        hasCoin(): boolean;
        clearCoin(): void;
        getCoin(): Coin | undefined;
        setCoin(value?: Coin): Frozen;
        getValue(): string;
        setValue(value: string): Frozen;

        hasMoveToCandidateKey(): boolean;
        clearMoveToCandidateKey(): void;
        getMoveToCandidateKey(): google_protobuf_wrappers_pb.StringValue | undefined;
        setMoveToCandidateKey(value?: google_protobuf_wrappers_pb.StringValue): Frozen;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Frozen.AsObject;
        static toObject(includeInstance: boolean, msg: Frozen): Frozen.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Frozen, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Frozen;
        static deserializeBinaryFromReader(message: Frozen, reader: jspb.BinaryReader): Frozen;
    }

    export namespace Frozen {
        export type AsObject = {
            height: number,
            address: string,
            candidateKey?: google_protobuf_wrappers_pb.StringValue.AsObject,
            coin?: Coin.AsObject,
            value: string,
            moveToCandidateKey?: google_protobuf_wrappers_pb.StringValue.AsObject,
        }
    }

}

export class WaitListRequest extends jspb.Message { 
    getPublicKey(): string;
    setPublicKey(value: string): WaitListRequest;
    getAddress(): string;
    setAddress(value: string): WaitListRequest;
    getHeight(): number;
    setHeight(value: number): WaitListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WaitListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WaitListRequest): WaitListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WaitListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WaitListRequest;
    static deserializeBinaryFromReader(message: WaitListRequest, reader: jspb.BinaryReader): WaitListRequest;
}

export namespace WaitListRequest {
    export type AsObject = {
        publicKey: string,
        address: string,
        height: number,
    }
}

export class WaitListResponse extends jspb.Message { 
    clearListList(): void;
    getListList(): Array<WaitListResponse.Wait>;
    setListList(value: Array<WaitListResponse.Wait>): WaitListResponse;
    addList(value?: WaitListResponse.Wait, index?: number): WaitListResponse.Wait;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WaitListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WaitListResponse): WaitListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WaitListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WaitListResponse;
    static deserializeBinaryFromReader(message: WaitListResponse, reader: jspb.BinaryReader): WaitListResponse;
}

export namespace WaitListResponse {
    export type AsObject = {
        listList: Array<WaitListResponse.Wait.AsObject>,
    }


    export class Wait extends jspb.Message { 
        getPublicKey(): string;
        setPublicKey(value: string): Wait;

        hasCoin(): boolean;
        clearCoin(): void;
        getCoin(): Coin | undefined;
        setCoin(value?: Coin): Wait;
        getValue(): string;
        setValue(value: string): Wait;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Wait.AsObject;
        static toObject(includeInstance: boolean, msg: Wait): Wait.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Wait, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Wait;
        static deserializeBinaryFromReader(message: Wait, reader: jspb.BinaryReader): Wait;
    }

    export namespace Wait {
        export type AsObject = {
            publicKey: string,
            coin?: Coin.AsObject,
            value: string,
        }
    }

}

export enum BlockField {
    TRANSACTIONS = 0,
    MISSED = 1,
    BLOCK_REWARD = 2,
    SIZE = 3,
    PROPOSER = 4,
    VALIDATORS = 5,
    EVIDENCE = 6,
}

export enum SwapFrom {
    OPTIMAL = 0,
    BANCOR = 1,
    POOL = 2,
}
