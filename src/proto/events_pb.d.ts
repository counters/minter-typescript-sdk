// package: api_pb
// file: events.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class JailEvent extends jspb.Message { 
    getValidatorPubKey(): string;
    setValidatorPubKey(value: string): JailEvent;
    getJailedUntil(): number;
    setJailedUntil(value: number): JailEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JailEvent.AsObject;
    static toObject(includeInstance: boolean, msg: JailEvent): JailEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JailEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JailEvent;
    static deserializeBinaryFromReader(message: JailEvent, reader: jspb.BinaryReader): JailEvent;
}

export namespace JailEvent {
    export type AsObject = {
        validatorPubKey: string,
        jailedUntil: number,
    }
}

export class RemoveCandidateEvent extends jspb.Message { 
    getCandidatePubKey(): string;
    setCandidatePubKey(value: string): RemoveCandidateEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveCandidateEvent.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveCandidateEvent): RemoveCandidateEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveCandidateEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveCandidateEvent;
    static deserializeBinaryFromReader(message: RemoveCandidateEvent, reader: jspb.BinaryReader): RemoveCandidateEvent;
}

export namespace RemoveCandidateEvent {
    export type AsObject = {
        candidatePubKey: string,
    }
}

export class RewardEvent extends jspb.Message { 
    getRole(): RewardEvent.Role;
    setRole(value: RewardEvent.Role): RewardEvent;
    getAddress(): string;
    setAddress(value: string): RewardEvent;
    getAmount(): string;
    setAmount(value: string): RewardEvent;
    getValidatorPubKey(): string;
    setValidatorPubKey(value: string): RewardEvent;
    getForCoin(): number;
    setForCoin(value: number): RewardEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RewardEvent.AsObject;
    static toObject(includeInstance: boolean, msg: RewardEvent): RewardEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RewardEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RewardEvent;
    static deserializeBinaryFromReader(message: RewardEvent, reader: jspb.BinaryReader): RewardEvent;
}

export namespace RewardEvent {
    export type AsObject = {
        role: RewardEvent.Role,
        address: string,
        amount: string,
        validatorPubKey: string,
        forCoin: number,
    }

    export enum Role {
    VALIDATOR = 0,
    DELEGATOR = 1,
    DAO = 2,
    DEVELOPERS = 3,
    }

}

export class SlashEvent extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): SlashEvent;
    getAmount(): string;
    setAmount(value: string): SlashEvent;
    getCoin(): number;
    setCoin(value: number): SlashEvent;
    getValidatorPubKey(): string;
    setValidatorPubKey(value: string): SlashEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SlashEvent.AsObject;
    static toObject(includeInstance: boolean, msg: SlashEvent): SlashEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SlashEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SlashEvent;
    static deserializeBinaryFromReader(message: SlashEvent, reader: jspb.BinaryReader): SlashEvent;
}

export namespace SlashEvent {
    export type AsObject = {
        address: string,
        amount: string,
        coin: number,
        validatorPubKey: string,
    }
}

export class UnbondEvent extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): UnbondEvent;
    getAmount(): string;
    setAmount(value: string): UnbondEvent;
    getCoin(): number;
    setCoin(value: number): UnbondEvent;
    getValidatorPubKey(): string;
    setValidatorPubKey(value: string): UnbondEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnbondEvent.AsObject;
    static toObject(includeInstance: boolean, msg: UnbondEvent): UnbondEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnbondEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnbondEvent;
    static deserializeBinaryFromReader(message: UnbondEvent, reader: jspb.BinaryReader): UnbondEvent;
}

export namespace UnbondEvent {
    export type AsObject = {
        address: string,
        amount: string,
        coin: number,
        validatorPubKey: string,
    }
}

export class StakeKickEvent extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): StakeKickEvent;
    getAmount(): string;
    setAmount(value: string): StakeKickEvent;
    getCoin(): number;
    setCoin(value: number): StakeKickEvent;
    getValidatorPubKey(): string;
    setValidatorPubKey(value: string): StakeKickEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakeKickEvent.AsObject;
    static toObject(includeInstance: boolean, msg: StakeKickEvent): StakeKickEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakeKickEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakeKickEvent;
    static deserializeBinaryFromReader(message: StakeKickEvent, reader: jspb.BinaryReader): StakeKickEvent;
}

export namespace StakeKickEvent {
    export type AsObject = {
        address: string,
        amount: string,
        coin: number,
        validatorPubKey: string,
    }
}

export class UpdateNetworkEvent extends jspb.Message { 
    getVersion(): string;
    setVersion(value: string): UpdateNetworkEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateNetworkEvent.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateNetworkEvent): UpdateNetworkEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateNetworkEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateNetworkEvent;
    static deserializeBinaryFromReader(message: UpdateNetworkEvent, reader: jspb.BinaryReader): UpdateNetworkEvent;
}

export namespace UpdateNetworkEvent {
    export type AsObject = {
        version: string,
    }
}

export class UpdateCommissionsEvent extends jspb.Message { 
    getCoin(): number;
    setCoin(value: number): UpdateCommissionsEvent;
    getPayloadByte(): string;
    setPayloadByte(value: string): UpdateCommissionsEvent;
    getSend(): string;
    setSend(value: string): UpdateCommissionsEvent;
    getBuyBancor(): string;
    setBuyBancor(value: string): UpdateCommissionsEvent;
    getSellBancor(): string;
    setSellBancor(value: string): UpdateCommissionsEvent;
    getSellAllBancor(): string;
    setSellAllBancor(value: string): UpdateCommissionsEvent;
    getBuyPoolBase(): string;
    setBuyPoolBase(value: string): UpdateCommissionsEvent;
    getBuyPoolDelta(): string;
    setBuyPoolDelta(value: string): UpdateCommissionsEvent;
    getSellPoolBase(): string;
    setSellPoolBase(value: string): UpdateCommissionsEvent;
    getSellPoolDelta(): string;
    setSellPoolDelta(value: string): UpdateCommissionsEvent;
    getSellAllPoolBase(): string;
    setSellAllPoolBase(value: string): UpdateCommissionsEvent;
    getSellAllPoolDelta(): string;
    setSellAllPoolDelta(value: string): UpdateCommissionsEvent;
    getCreateTicker3(): string;
    setCreateTicker3(value: string): UpdateCommissionsEvent;
    getCreateTicker4(): string;
    setCreateTicker4(value: string): UpdateCommissionsEvent;
    getCreateTicker5(): string;
    setCreateTicker5(value: string): UpdateCommissionsEvent;
    getCreateTicker6(): string;
    setCreateTicker6(value: string): UpdateCommissionsEvent;
    getCreateTicker710(): string;
    setCreateTicker710(value: string): UpdateCommissionsEvent;
    getCreateCoin(): string;
    setCreateCoin(value: string): UpdateCommissionsEvent;
    getCreateToken(): string;
    setCreateToken(value: string): UpdateCommissionsEvent;
    getRecreateCoin(): string;
    setRecreateCoin(value: string): UpdateCommissionsEvent;
    getRecreateToken(): string;
    setRecreateToken(value: string): UpdateCommissionsEvent;
    getDeclareCandidacy(): string;
    setDeclareCandidacy(value: string): UpdateCommissionsEvent;
    getDelegate(): string;
    setDelegate(value: string): UpdateCommissionsEvent;
    getUnbond(): string;
    setUnbond(value: string): UpdateCommissionsEvent;
    getRedeemCheck(): string;
    setRedeemCheck(value: string): UpdateCommissionsEvent;
    getSetCandidateOn(): string;
    setSetCandidateOn(value: string): UpdateCommissionsEvent;
    getSetCandidateOff(): string;
    setSetCandidateOff(value: string): UpdateCommissionsEvent;
    getCreateMultisig(): string;
    setCreateMultisig(value: string): UpdateCommissionsEvent;
    getMultisendBase(): string;
    setMultisendBase(value: string): UpdateCommissionsEvent;
    getMultisendDelta(): string;
    setMultisendDelta(value: string): UpdateCommissionsEvent;
    getEditCandidate(): string;
    setEditCandidate(value: string): UpdateCommissionsEvent;
    getSetHaltBlock(): string;
    setSetHaltBlock(value: string): UpdateCommissionsEvent;
    getEditTickerOwner(): string;
    setEditTickerOwner(value: string): UpdateCommissionsEvent;
    getEditMultisig(): string;
    setEditMultisig(value: string): UpdateCommissionsEvent;
    getEditCandidatePublicKey(): string;
    setEditCandidatePublicKey(value: string): UpdateCommissionsEvent;
    getCreateSwapPool(): string;
    setCreateSwapPool(value: string): UpdateCommissionsEvent;
    getAddLiquidity(): string;
    setAddLiquidity(value: string): UpdateCommissionsEvent;
    getRemoveLiquidity(): string;
    setRemoveLiquidity(value: string): UpdateCommissionsEvent;
    getEditCandidateCommission(): string;
    setEditCandidateCommission(value: string): UpdateCommissionsEvent;
    getMintToken(): string;
    setMintToken(value: string): UpdateCommissionsEvent;
    getBurnToken(): string;
    setBurnToken(value: string): UpdateCommissionsEvent;
    getVoteCommission(): string;
    setVoteCommission(value: string): UpdateCommissionsEvent;
    getVoteUpdate(): string;
    setVoteUpdate(value: string): UpdateCommissionsEvent;
    getFailedTx(): string;
    setFailedTx(value: string): UpdateCommissionsEvent;
    getAddLimitOrder(): string;
    setAddLimitOrder(value: string): UpdateCommissionsEvent;
    getRemoveLimitOrder(): string;
    setRemoveLimitOrder(value: string): UpdateCommissionsEvent;
    getMoveStake(): string;
    setMoveStake(value: string): UpdateCommissionsEvent;
    getLockStake(): string;
    setLockStake(value: string): UpdateCommissionsEvent;
    getLock(): string;
    setLock(value: string): UpdateCommissionsEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateCommissionsEvent.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateCommissionsEvent): UpdateCommissionsEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateCommissionsEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateCommissionsEvent;
    static deserializeBinaryFromReader(message: UpdateCommissionsEvent, reader: jspb.BinaryReader): UpdateCommissionsEvent;
}

export namespace UpdateCommissionsEvent {
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

export class OrderExpiredEvent extends jspb.Message { 
    getId(): number;
    setId(value: number): OrderExpiredEvent;
    getAddress(): string;
    setAddress(value: string): OrderExpiredEvent;
    getCoin(): number;
    setCoin(value: number): OrderExpiredEvent;
    getAmount(): string;
    setAmount(value: string): OrderExpiredEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderExpiredEvent.AsObject;
    static toObject(includeInstance: boolean, msg: OrderExpiredEvent): OrderExpiredEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderExpiredEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderExpiredEvent;
    static deserializeBinaryFromReader(message: OrderExpiredEvent, reader: jspb.BinaryReader): OrderExpiredEvent;
}

export namespace OrderExpiredEvent {
    export type AsObject = {
        id: number,
        address: string,
        coin: number,
        amount: string,
    }
}

export class UpdatedBlockRewardEvent extends jspb.Message { 
    getValue(): string;
    setValue(value: string): UpdatedBlockRewardEvent;
    getValueLockedStakeRewards(): string;
    setValueLockedStakeRewards(value: string): UpdatedBlockRewardEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdatedBlockRewardEvent.AsObject;
    static toObject(includeInstance: boolean, msg: UpdatedBlockRewardEvent): UpdatedBlockRewardEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdatedBlockRewardEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdatedBlockRewardEvent;
    static deserializeBinaryFromReader(message: UpdatedBlockRewardEvent, reader: jspb.BinaryReader): UpdatedBlockRewardEvent;
}

export namespace UpdatedBlockRewardEvent {
    export type AsObject = {
        value: string,
        valueLockedStakeRewards: string,
    }
}

export class StakeMoveEvent extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): StakeMoveEvent;
    getAmount(): string;
    setAmount(value: string): StakeMoveEvent;
    getCoin(): number;
    setCoin(value: number): StakeMoveEvent;
    getCandidatePubKey(): string;
    setCandidatePubKey(value: string): StakeMoveEvent;
    getToCandidatePubKey(): string;
    setToCandidatePubKey(value: string): StakeMoveEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StakeMoveEvent.AsObject;
    static toObject(includeInstance: boolean, msg: StakeMoveEvent): StakeMoveEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StakeMoveEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StakeMoveEvent;
    static deserializeBinaryFromReader(message: StakeMoveEvent, reader: jspb.BinaryReader): StakeMoveEvent;
}

export namespace StakeMoveEvent {
    export type AsObject = {
        address: string,
        amount: string,
        coin: number,
        candidatePubKey: string,
        toCandidatePubKey: string,
    }
}

export class UnlockEvent extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): UnlockEvent;
    getAmount(): string;
    setAmount(value: string): UnlockEvent;
    getCoin(): number;
    setCoin(value: number): UnlockEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UnlockEvent.AsObject;
    static toObject(includeInstance: boolean, msg: UnlockEvent): UnlockEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UnlockEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UnlockEvent;
    static deserializeBinaryFromReader(message: UnlockEvent, reader: jspb.BinaryReader): UnlockEvent;
}

export namespace UnlockEvent {
    export type AsObject = {
        address: string,
        amount: string,
        coin: number,
    }
}
