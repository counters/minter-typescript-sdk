"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const resources_pb_1 = require("./proto/resources_pb");
const ConvertSwapFrom_1 = require("./convert/ConvertSwapFrom");
class JsonToGrpc {
    convertSwapFrom = new ConvertSwapFrom_1.default();
    CoinInfo(value) {
        const ownerAddress = value.owner_address ? new wrappers_pb_1.StringValue().setValue(value.owner_address) : undefined;
        const response = new resources_pb_1.CoinInfoResponse();
        response
            // tslint:disable:radix
            .setId(parseInt(value.id))
            .setName(value.name)
            .setSymbol(value.symbol)
            .setVolume(value.volume)
            .setCrr(parseInt(value.crr))
            .setReserveBalance(value.reserve_balance)
            .setMaxSupply(value.max_supply)
            .setOwnerAddress(ownerAddress)
            .setMintable(value.mintable)
            .setBurnable(value.burnable);
        return response;
    }
    Address(value) {
        const response = new resources_pb_1.AddressResponse();
        const balanceList = [];
        value.balance.forEach((item) => {
            const addressBalance = new resources_pb_1.AddressBalance()
                .setCoin(this.coinByJson(item.coin))
                .setValue(item.value)
                .setBipValue(item.bip_value);
            balanceList.push(addressBalance);
        });
        const totalList = [];
        value.total.forEach((item) => {
            const addressBalance = new resources_pb_1.AddressBalance()
                .setCoin(this.coinByJson(item.coin))
                .setValue(item.value)
                .setBipValue(item.bip_value);
            totalList.push(addressBalance);
        });
        const delegatedList = [];
        value.delegated.forEach((item) => {
            const addressBalance = new resources_pb_1.AddressDelegatedBalance()
                .setCoin(this.coinByJson(item.coin))
                .setValue(item.value)
                .setBipValue(item.bip_value)
                .setDelegateBipValue(item.delegate_bip_value);
            delegatedList.push(addressBalance);
        });
        let multisig;
        if (value.multisig) {
            multisig = new resources_pb_1.Multisig()
                .setThreshold(value.multisig.threshold)
                .setAddressesList(value.multisig.addresses)
                .setWeightsList(value.multisig.weights);
        }
        response
            .setBalanceList(balanceList)
            .setDelegatedList(delegatedList)
            .setTotalList(totalList)
            .setTransactionCount(value.transaction_count)
            .setBipValue(value.bip_value)
            .setLockedStakeUntilBlock(value.locked_stake_until_block)
            .setMultisig(multisig);
        return response;
    }
    EstimateCoinSell(value) {
        // console.info(value);
        const swapFrom = this.convertSwapFrom.getSwapFrom(value.swap_from);
        if (swapFrom === null)
            throw new Error(value.swap_from);
        const response = new resources_pb_1.EstimateCoinSellResponse();
        response
            .setWillGet(value.will_get)
            .setCommission(value.commission)
            .setSwapFrom(swapFrom);
        return response;
    }
    BestTrade(value) {
        const arrPatch = [];
        value.path.forEach((path) => {
            arrPatch.push(Number(path));
        });
        const response = new resources_pb_1.BestTradeResponse();
        response.setPathList(arrPatch).setResult(value.result);
        return response;
    }
    Candidate(value) {
        const stakesList = [];
        value.stakes.forEach((item) => {
            const stake = new resources_pb_1.CandidateResponse.Stake()
                .setCoin(this.coinByJson(item.coin))
                .setValue(item.value)
                .setBipValue(item.bip_value)
                .setOwner(item.owner);
            stakesList.push(stake);
        });
        const minStake = value.min_stake ? new wrappers_pb_1.StringValue().setValue(value.min_stake) : undefined;
        const response = new resources_pb_1.CandidateResponse();
        if (value.used_slots)
            response.setUsedSlots(new wrappers_pb_1.UInt64Value().setValue(parseInt(value.used_slots)));
        if (value.uniq_users)
            response.setUniqUsers(new wrappers_pb_1.UInt64Value().setValue(parseInt(value.uniq_users)));
        response
            .setId(Number(value.id))
            .setRewardAddress(value.reward_address)
            .setOwnerAddress(value.owner_address)
            .setControlAddress(value.control_address)
            .setTotalStake(value.total_stake)
            .setPublicKey(value.public_key)
            // .setCommission(Number(value.commission))
            .setCommission(parseInt(value.commission))
            .setMinStake(minStake)
            .setStakesList(stakesList)
            .setStatus(parseInt(value.status))
            .setValidator(value.validator)
            .setJailedUntil(parseInt(value.jailed_until));
        return response;
    }
    Candidates(value) {
        const array = [];
        value.candidates.forEach((item) => {
            array.push(this.Candidate(item));
        });
        return new resources_pb_1.CandidatesResponse().setCandidatesList(array);
    }
    coinByJson(coin) {
        return new resources_pb_1.Coin().setId(parseInt(coin.id)).setSymbol(coin.symbol);
    }
}
exports.default = JsonToGrpc;
//# sourceMappingURL=JsonToGrpc.js.map