import axios from "axios";
import {
  AddressRequest,
  AddressResponse,
  BestTradeRequest, BestTradeResponse,
  CoinInfoRequest,
  CoinInfoResponse,
  EstimateCoinSellRequest,
  EstimateCoinSellResponse,
  SwapFrom
} from "./proto/resources_pb";
import HttpOptions from "./types/HttpOptions";
import JsonToGrpc from "./JsonToGrpc";
import Params from "./Params";
import ConvertSwapFrom from "./convert/ConvertSwapFrom";
import ConvertAmount from "./utils/ConvertAmount";
import ConvertBestTradeType from "./convert/ConvertBestTradeType";

class MinterHttpApi {
  private httpOptions: HttpOptions;
  private nodeUrl: string;

  private jsonToGrpc = new JsonToGrpc();
  private params = new Params();

  private convertAmount = new ConvertAmount();

  private convertSwapFrom = new ConvertSwapFrom();
  private convertBestTradeType = new ConvertBestTradeType();

  constructor(httpOptions: HttpOptions) {
    this.httpOptions = httpOptions;
    this.nodeUrl = httpOptions.raw;
  }

  public getCoinInfoGrpc(symbol: string, height: number | null = null, timeout: number | null = null): Promise<CoinInfoResponse> {
    const request = this.params.requestCoinInfo(symbol, height);
    return this.getCoinInfoGrpcRequest(request, timeout);
  }

  public getCoinInfoGrpcRequest(request: CoinInfoRequest, timeout: number | null = null): Promise<CoinInfoResponse> {
    return new Promise<CoinInfoResponse>((resolve, reject) => {
      this.getCoinInfoJsonByRequest(request, timeout)
        .then(value => resolve(this.jsonToGrpc.CoinInfo(value)))
        .catch(reject);
    });
  }

  public getAddressJsonByRequest(request: AddressRequest, timeout: number | null = null): Promise<Record<string, any>> {
    return this.httpGet(this.urlAddress(request), timeout);
  }

  public getAddressGrpcByRequest(request: AddressRequest, timeout: number | null = null): Promise<AddressResponse> {
    return new Promise<AddressResponse>((resolve, reject) => {
      this.getAddressJsonByRequest(request, timeout)
        .then(value => resolve(this.jsonToGrpc.Address(value)))
        .catch(reject);
    });
  }

  public getAddressGrpc(address: string, delegated: boolean | null = null, height: number | null = null, timeout: number | null = null): Promise<AddressResponse> {
    const request = this.params.requestAddress(address, delegated, height);
    return this.getAddressGrpcByRequest(request, timeout);
  }

  public getCoinInfoJsonByRequest(request: CoinInfoRequest, timeout: number | null = null): Promise<Record<string, any>> {
    return this.httpGet(this.urlCoinInfo(request), timeout);
  }
  public getCoinInfoJson(symbol: string, height: number | null = null, timeout: number | null = null): Promise<Record<string, any>> {
    const request = this.params.requestCoinInfo(symbol, height);
    return this.httpGet(this.urlCoinInfo(request), timeout);
  }

  public estimateCoinSellJsonByRequest(request: EstimateCoinSellRequest, timeout: number | null = null): Promise<Record<string, any>> {
    return this.httpGet(this.urlEstimateCoinSell(request), timeout);
  }
  public estimateCoinSellGrpcByRequest(request: EstimateCoinSellRequest, timeout: number | null = null): Promise<EstimateCoinSellResponse> {
    return new Promise<EstimateCoinSellResponse>((resolve, reject) => {
      this.estimateCoinSellJsonByRequest(request, timeout)
        .then(value => resolve(this.jsonToGrpc.EstimateCoinSell(value)))
        .catch(reject);
    });
  }
  public estimateCoinSellGrpc(
    coinToSell: number,
    valueToSell: number,
    coinToBuy: number = 0,
    coin_id_commission: number | null = null,
    swap_from: SwapFrom | null = null,
    route: Array<number> | null = null,
    height: number | null = null,
    timeout: number | null = null
  ): Promise<EstimateCoinSellResponse> {
    const request = this.params.requestEstimateCoinSell(coinToSell, this.convertAmount.toPip(valueToSell), coinToBuy, coin_id_commission, swap_from, route, height);
    return this.estimateCoinSellGrpcByRequest(request, timeout);
  }

  public getBestTradeJsonByRequest(request: BestTradeRequest, timeout: number | null = null): Promise<Record<string, any>> {
    return this.httpGet(this.urlBestTrade(request), timeout);
  }

  public getBestTradeGrpcByRequest(request: BestTradeRequest, timeout: number | null = null): Promise<BestTradeResponse> {
    return new Promise<BestTradeResponse>((resolve, reject) => {
      this.getBestTradeJsonByRequest(request, timeout)
          .then(value => resolve(this.jsonToGrpc.BestTrade(value)))
          .catch(reject);
    });
  }

  public getBestTradeGrpc(
      sell_coin: number,
      amount: number,
      buy_coin: number,
      type: BestTradeRequest.Type,
      max_depth: number | null = null,
      height: number | null = null,
    timeout: number | null = null
  ): Promise<BestTradeResponse> {
    const request = this.params.requestBestTrade(sell_coin, this.convertAmount.toPip(amount), buy_coin, type, max_depth, height);
    return this.getBestTradeGrpcByRequest(request, timeout);
  }




  private urlCoinInfo(request: CoinInfoRequest): string {
    const params: Array<Record<string, string>> = [];
    if (request.getHeight()) params.push({ height: request.getHeight().toString() });
    return this.url(this.nodeUrl + "coin_info/" + request.getSymbol(), params);
  }

  private urlAddress(request: AddressRequest) {
    const params: Array<Record<string, string>> = [];
    if (request.getHeight()) params.push({ height: request.getHeight().toString() });
    if (request.getDelegated() === true) params.push({ delegated: "true" });
    else if (request.getDelegated() === false) params.push({ delegated: "false" });
    return this.url(this.nodeUrl + "address/" + request.getAddress(), params);
  }

  private url(patch: string, params: ReadonlyArray<Record<string, string>>): string {
    const query: Array<string> = [];
    params.forEach(val => {
      // tslint:disable-next-line:forin
      for (const key in val) {
        // query.push(key+"="+val[key])
        query.push(`${key}=${val[key]}`);
      }
    });
    return query.length > 0 ? patch + "?" + query.join("&") : patch;
  }

  private httpGet(url: string, timeout: number | null = null): Promise<Record<string, Array<any>>> {
    return new Promise<Record<string, Array<any>>>((resolve, reject) => {
      axios
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

  private urlEstimateCoinSell(request: EstimateCoinSellRequest) {
    // console.info(request.toObject());
    const params: Array<Record<string, string>> = [];
    if (request.getHeight()) params.push({ height: request.getHeight().toString() });
    params.push({ coin_id_to_sell: request.getCoinIdToSell().toString() });
    params.push({ coin_id_to_buy: request.getCoinIdToBuy().toString() });
    params.push({ value_to_sell: request.getValueToSell().toString() });
    const swapFrom = this.convertSwapFrom.getName(request.getSwapFrom());
    if (swapFrom != null) params.push({ swap_from: swapFrom });
    // params.push({ route: request.getCoinIdToSell().toString() });
    request.getRouteList().forEach(value => {
      params.push({ route: value.toString() });
    });
    params.push({ coin_id_commission: request.getCoinIdCommission().toString() });
    // console.info(params);
    return this.url(this.nodeUrl + "estimate_coin_sell", params);
  }

  private urlBestTrade(request: BestTradeRequest): string {
    const params: Array<Record<string, string>> = [];
    if (request.getHeight() && request.getHeight()!==0) params.push({ "height": request.getHeight().toString() });
    if (request.getMaxDepth() ) params.push({ "max_depth": request.getMaxDepth().toString() });
    const type = this.convertBestTradeType.getName(request.getType());
    return this.url(this.nodeUrl + "best_trade/"+request.getSellCoin()+"/"+request.getBuyCoin()+"/"+type+"/"+request.getAmount(), params);
  }
}

export default MinterHttpApi;
