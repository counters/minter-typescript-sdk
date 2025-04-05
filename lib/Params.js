"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resources_pb_1 = require("./proto/resources_pb");
class Params {
    requestCoinInfo(symbol, height = null) {
        const request = new resources_pb_1.CoinInfoRequest();
        if (height)
            request.setHeight(height);
        return request.setSymbol(symbol);
    }
    requestAddress(address, delegated = null, height = null) {
        const request = new resources_pb_1.AddressRequest();
        if (height)
            request.setHeight(height);
        if (delegated !== null)
            request.setDelegated(delegated);
        return request.setAddress(address);
    }
    // tslint:disable:variable-name
    requestEstimateCoinSell(coinToSell, valueToSell, coinToBuy = 0, coin_id_commission = null, swap_from = null, route = null, height = null) {
        const request = new resources_pb_1.EstimateCoinSellRequest();
        if (height)
            request.setHeight(height);
        if (coin_id_commission)
            request.setCoinIdCommission(coin_id_commission);
        /*if (swap_from!==null) */ request.setSwapFrom(swap_from);
        if (route)
            request.setRouteList(route);
        return request
            .setCoinIdToSell(coinToSell)
            .setValueToSell(valueToSell)
            .setCoinIdToBuy(coinToBuy);
    }
    requestBestTrade(sell_coin, amount, buy_coin, type, max_depth = null, height = null) {
        const request = new resources_pb_1.BestTradeRequest();
        if (height)
            request.setHeight(height);
        if (max_depth)
            request.setMaxDepth(max_depth);
        return request
            .setType(type)
            .setSellCoin(sell_coin)
            .setBuyCoin(buy_coin)
            .setAmount(amount);
    }
    requestCandidate(publicKey, notShowStakes = null, height = null) {
        const request = new resources_pb_1.CandidateRequest();
        if (height)
            request.setHeight(height);
        if (notShowStakes !== null)
            request.setNotShowStakes(notShowStakes);
        return request.setPublicKey(publicKey);
    }
    requestCandidates(includeStakes = null, notShowStakes = null, candidateStatus = null, height = null) {
        const request = new resources_pb_1.CandidatesRequest();
        if (height)
            request.setHeight(height);
        if (includeStakes !== null)
            request.setIncludeStakes(includeStakes);
        if (notShowStakes !== null)
            request.setNotShowStakes(notShowStakes);
        if (candidateStatus !== null)
            request.setStatus(candidateStatus);
        return request;
    }
}
exports.default = Params;
//# sourceMappingURL=Params.js.map