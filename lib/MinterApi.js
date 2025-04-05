"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MinterHttpApi_1 = require("./MinterHttpApi");
const MinterGrpcApi_1 = require("./MinterGrpcApi");
const Params_1 = require("./Params");
const ConvertAmount_1 = require("./utils/ConvertAmount");
class MinterApi {
    grpcOptions = null;
    httpOptions = null;
    minterHttpApi = null;
    minterGrpcApi = null;
    params = new Params_1.default();
    convertAmount = new ConvertAmount_1.default();
    constructor(grpcOptions, httpOptions = null) {
        if (grpcOptions) {
            this.grpcOptions = grpcOptions;
            this.minterGrpcApi = new MinterGrpcApi_1.default(grpcOptions);
        }
        else if (httpOptions) {
            this.httpOptions = httpOptions;
            this.minterHttpApi = new MinterHttpApi_1.default(httpOptions);
        }
        else {
            throw new Error();
        }
    }
    getCoinInfoGrpc(symbol, height = null, deadline = null) {
        if (this.grpcOptions) {
            return this.minterGrpcApi.getCoinInfoGrpc(this.params.requestCoinInfo(symbol, height), deadline);
        }
        else {
            return this.minterHttpApi.getCoinInfoGrpc(symbol, height, deadline);
        }
    }
    getCoinInfoByRequest(request, deadline = null) {
        if (this.grpcOptions) {
            return this.minterGrpcApi.getCoinInfoGrpc(request, deadline);
        }
        else {
            return this.minterHttpApi.getCoinInfoGrpcRequest(request, deadline);
        }
    }
    getAddressGrpc(address, delegated = null, height = null, deadline = null) {
        if (this.grpcOptions) {
            return this.minterGrpcApi.getAddressGrpc(this.params.requestAddress(address, delegated, height), deadline);
        }
        else {
            // return this.minterGrpcApi!.getAddressGrpc(this.params.requestAddress(address, delegated, height), deadline);
            return this.minterHttpApi.getAddressGrpc(address, delegated, height, deadline);
        }
    }
    getAddressGrpcByRequest(request, deadline = null) {
        if (this.grpcOptions) {
            return this.minterGrpcApi.getAddressGrpc(request, deadline);
        }
        else {
            return this.minterGrpcApi.getAddressGrpc(request, deadline);
            // return this.minterHttpApi!.getAddressGrpcRequest(request, deadline);
        }
    }
    // tslint:disable:variable-name
    estimateCoinSellGrpc(coinToSell, valueToSell, coinToBuy = 0, coin_id_commission = null, swap_from = null, route = null, height = null, deadline = null) {
        if (this.grpcOptions) {
            return this.minterGrpcApi.estimateCoinSellGrpc(this.params.requestEstimateCoinSell(coinToSell, this.convertAmount.toPip(valueToSell), coinToBuy, coin_id_commission, swap_from, route, height), deadline);
        }
        else {
            return this.minterHttpApi.estimateCoinSellGrpc(coinToSell, valueToSell, coinToBuy, coin_id_commission, swap_from, route, height, deadline);
        }
    }
    estimateCoinSellByRequest(request, deadline = null) {
        if (this.grpcOptions) {
            return this.minterGrpcApi.estimateCoinSellGrpc(request, deadline);
        }
        else {
            return this.minterHttpApi.estimateCoinSellGrpcByRequest(request, deadline);
        }
    }
    getBestTradeGrpc(sell_coin, amount, buy_coin, type, max_depth = null, height = null, deadline = null) {
        if (this.grpcOptions) {
            return this.minterGrpcApi.getBestTradeGrpc(this.params.requestBestTrade(sell_coin, this.convertAmount.toPip(amount), buy_coin, type, max_depth, height), deadline);
        }
        else {
            return this.minterHttpApi.getBestTradeGrpc(sell_coin, amount, buy_coin, type, max_depth, height, deadline);
        }
    }
    getCandidateGrpc(publicKey, notShowStakes = null, height = null, deadline = null) {
        if (this.grpcOptions) {
            return this.minterGrpcApi.getCandidateGrpc(this.params.requestCandidate(publicKey, notShowStakes, height), deadline);
        }
        else {
            return this.minterHttpApi.getCandidateGrpc(publicKey, notShowStakes, height, deadline);
        }
    }
    getCandidateGrpcByRequest(request, deadline = null) {
        if (this.grpcOptions) {
            return this.minterGrpcApi.getCandidateGrpc(request, deadline);
        }
        else {
            return this.minterHttpApi.getCandidateGrpcByRequest(request, deadline);
        }
    }
    getCandidatesGrpc(includeStakes = null, notShowStakes = null, candidateStatus = null, height = null, deadline = null) {
        if (this.grpcOptions) {
            return this.minterGrpcApi.getCandidatesGrpc(this.params.requestCandidates(includeStakes, notShowStakes, candidateStatus, height), deadline);
        }
        else {
            return this.minterHttpApi.getCandidatesGrpc(includeStakes, notShowStakes, candidateStatus, height, deadline);
        }
    }
}
exports.default = MinterApi;
//# sourceMappingURL=MinterApi.js.map