"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const JsonToGrpc_1 = require("./JsonToGrpc");
const Params_1 = require("./Params");
const ConvertSwapFrom_1 = require("./convert/ConvertSwapFrom");
const ConvertAmount_1 = require("./utils/ConvertAmount");
class MinterHttpApi {
    httpOptions;
    nodeUrl;
    jsonToGrpc = new JsonToGrpc_1.default();
    params = new Params_1.default();
    convertAmount = new ConvertAmount_1.default();
    convertSwapFrom = new ConvertSwapFrom_1.default();
    constructor(httpOptions) {
        this.httpOptions = httpOptions;
        this.nodeUrl = httpOptions.raw;
    }
    getCoinInfoGrpc(symbol, height = null, timeout = null) {
        const request = this.params.requestCoinInfo(symbol, height);
        return this.getCoinInfoGrpcRequest(request, timeout);
    }
    getCoinInfoGrpcRequest(request, timeout = null) {
        return new Promise((resolve, reject) => {
            this.getCoinInfoJsonByRequest(request, timeout)
                .then(value => resolve(this.jsonToGrpc.CoinInfo(value)))
                .catch(reject);
        });
    }
    getAddressJsonByRequest(request, timeout = null) {
        return this.httpGet(this.urlAddress(request), timeout);
    }
    getAddressGrpcRequest(request, timeout = null) {
        return new Promise((resolve, reject) => {
            this.getAddressJsonByRequest(request, timeout)
                .then(value => resolve(this.jsonToGrpc.Address(value)))
                .catch(reject);
        });
    }
    getAddressGrpc(address, delegated = null, height = null, timeout = null) {
        const request = this.params.requestAddress(address, delegated, height);
        return this.getAddressGrpcRequest(request, timeout);
    }
    getCoinInfoJsonByRequest(request, timeout = null) {
        return this.httpGet(this.urlCoinInfo(request), timeout);
    }
    getCoinInfoJson(symbol, height = null, timeout = null) {
        const request = this.params.requestCoinInfo(symbol, height);
        return this.httpGet(this.urlCoinInfo(request), timeout);
    }
    estimateCoinSellJsonByRequest(request, timeout = null) {
        return this.httpGet(this.urlEstimateCoinSell(request), timeout);
    }
    estimateCoinSellGrpcRequest(request, timeout = null) {
        return new Promise((resolve, reject) => {
            this.estimateCoinSellJsonByRequest(request, timeout)
                .then(value => resolve(this.jsonToGrpc.EstimateCoinSell(value)))
                .catch(reject);
        });
    }
    estimateCoinSellGrpc(coinToSell, valueToSell, coinToBuy = 0, 
    // tslint:disable-next-line:variable-name
    coin_id_commission = null, 
    // tslint:disable-next-line:variable-name
    swap_from = null, route = null, height = null, timeout = null) {
        const request = this.params.requestEstimateCoinSell(coinToSell, this.convertAmount.toPip(valueToSell), coinToBuy, coin_id_commission, swap_from, route, height);
        return this.estimateCoinSellGrpcRequest(request, timeout);
    }
    urlCoinInfo(request) {
        const params = [];
        if (request.getHeight())
            params.push({ height: request.getHeight().toString() });
        return this.url(this.nodeUrl + 'coin_info/' + request.getSymbol(), params);
    }
    urlAddress(request) {
        const params = [];
        if (request.getHeight())
            params.push({ height: request.getHeight().toString() });
        if (request.getDelegated() === true)
            params.push({ delegated: 'true' });
        else if (request.getDelegated() === false)
            params.push({ delegated: 'false' });
        return this.url(this.nodeUrl + 'address/' + request.getAddress(), params);
    }
    url(patch, params) {
        const query = [];
        params.forEach(val => {
            // tslint:disable-next-line:forin
            for (const key in val) {
                // query.push(key+"="+val[key])
                query.push(`${key}=${val[key]}`);
            }
        });
        return query.length > 0 ? patch + '?' + query.join('&') : patch;
    }
    httpGet(url, timeout = null) {
        return new Promise((resolve, reject) => {
            axios_1.default
                .get(url)
                .then(res => {
                resolve(res.data);
            })
                .catch(error => {
                // console.debug(error.response);
                reject(error.response.data);
                reject();
            });
        });
    }
    urlEstimateCoinSell(request) {
        // console.info(request.toObject());
        const params = [];
        if (request.getHeight())
            params.push({ height: request.getHeight().toString() });
        params.push({ coin_id_to_sell: request.getCoinIdToSell().toString() });
        params.push({ coin_id_to_buy: request.getCoinIdToBuy().toString() });
        params.push({ value_to_sell: request.getValueToSell().toString() });
        const swapFrom = this.convertSwapFrom.getName(request.getSwapFrom());
        if (swapFrom != null)
            params.push({ swap_from: swapFrom });
        // params.push({ route: request.getCoinIdToSell().toString() });
        request.getRouteList().forEach(value => {
            params.push({ route: value.toString() });
        });
        params.push({ coin_id_commission: request.getCoinIdCommission().toString() });
        // console.info(params);
        return this.url(this.nodeUrl + 'estimate_coin_sell', params);
    }
}
exports.default = MinterHttpApi;
//# sourceMappingURL=MinterHttpApi.js.map