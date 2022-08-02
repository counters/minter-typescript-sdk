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
    coinByJson(coin) {
        return new resources_pb_1.Coin().setId(coin.id).setSymbol(coin.symbol);
    }
}
exports.default = JsonToGrpc;
//# sourceMappingURL=JsonToGrpc.js.map