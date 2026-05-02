import axios from "axios";
import {
  AddressRequest,
  AddressResponse,
  BestTradeRequest,
  BestTradeResponse,
  CandidateRequest,
  CandidateResponse,
  CandidatesRequest,
  CandidatesResponse,
  CoinInfoRequest,
  CoinInfoResponse,
  EstimateCoinSellRequest,
  EstimateCoinSellResponse,
  SwapFrom,
    BestTradeRequest_Type,
    CandidatesRequest_CandidateStatus
} from "./generated/proto/resources";
import HttpOptions from "./types/HttpOptions";
import JsonToGrpc from "./JsonToGrpc";
import Params from "./Params";
import ConvertSwapFrom from "./convert/ConvertSwapFrom";
import ConvertAmount from "./utils/ConvertAmount";
import ConvertBestTradeType from "./convert/ConvertBestTradeType";
import ConvertCandidateStatus from "./convert/ConvertCandidateStatus";

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
    type: BestTradeRequest_Type,
    max_depth: number | null = null,
    height: number | null = null,
    timeout: number | null = null
  ): Promise<BestTradeResponse> {
    const request = this.params.requestBestTrade(sell_coin, this.convertAmount.toPip(amount), buy_coin, type, max_depth, height);
    return this.getBestTradeGrpcByRequest(request, timeout);
  }

  private urlCoinInfo(request: CoinInfoRequest): string {
    const params: Array<Record<string, string>> = [];
    if (request.height) params.push({ height: request.height.toString() });
    return this.url(this.nodeUrl + "coin_info/" + request.symbol, params);
  }

  private urlAddress(request: AddressRequest) {
    const params: Array<Record<string, string>> = [];
    if (request.height) params.push({ height: request.height.toString() });
    if (request.delegated === true) params.push({ delegated: "true" });
    else if (request.delegated === false) params.push({ delegated: "false" });
    return this.url(this.nodeUrl + "address/" + request.address, params);
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

  public getCandidatesGrpc(
    includeStakes: boolean | null,
    notShowStakes: boolean | null,
    candidateStatus: CandidatesRequest_CandidateStatus | null,
    height: number | null,
    timeout: number | null
  ): Promise<CandidatesResponse> {
    const request = this.params.requestCandidates(includeStakes, notShowStakes, candidateStatus, height);
    return this.getCandidatesGrpcByRequest(request, timeout);
  }

  private urlEstimateCoinSell(request: EstimateCoinSellRequest) {
    // console.info(request.toObject());
    const params: Array<Record<string, string>> = [];
    if (request.height) params.push({ height: request.height.toString() });
    params.push({ coin_id_to_sell: request.coinIdToSell!.toString() });
    params.push({ coin_id_to_buy: request.coinIdToBuy!.toString() });
    params.push({ value_to_sell: request.valueToSell.toString() });
    const swapFrom = this.convertSwapFrom.getName(request.swapFrom);
    if (swapFrom != null) params.push({ swap_from: swapFrom });
    // params.push({ route: request.getCoinIdToSell().toString() });
    if(request.route) {
      request.route.forEach(value => {
        params.push({ route: value.toString() });
      });
    }
    if (request.coinIdCommission) {
      params.push({ coin_id_commission: request.coinIdCommission.toString() });
    }
    // console.info(params);
    return this.url(this.nodeUrl + "estimate_coin_sell", params);
  }

  private urlBestTrade(request: BestTradeRequest): string {
    const params: Array<Record<string, string>> = [];
    if (request.height && request.height !== 0) params.push({ height: request.height.toString() });
    if (request.maxDepth) params.push({ max_depth: request.maxDepth.toString() });
    const type = this.convertBestTradeType.getName(request.type);
    return this.url(this.nodeUrl + "best_trade/" + request.sellCoin + "/" + request.buyCoin + "/" + type + "/" + request.amount, params);
  }

  private urlCandidate(request: CandidateRequest) {
    const params: Array<Record<string, string>> = [];
    if (request.height) params.push({ height: request.height.toString() });
    if (request.notShowStakes === true) params.push({ not_show_stakes: "true" });
    else if (request.notShowStakes === false) params.push({ not_show_stakes: "false" });
    return this.url(this.nodeUrl + "candidate/" + request.publicKey, params);
  }
  public getCandidateJsonByRequest(request: CandidateRequest, timeout: number | null = null): Promise<Record<string, any>> {
    return this.httpGet(this.urlCandidate(request), timeout);
  }

  public getCandidateGrpcByRequest(request: CandidateRequest, timeout: number | null = null): Promise<CandidateResponse> {
    return new Promise<CandidateResponse>((resolve, reject) => {
      this.getCandidateJsonByRequest(request, timeout)
        .then(value => resolve(this.jsonToGrpc.Candidate(value)))
        .catch(reject);
    });
  }

  public getCandidateGrpc(publicKey: string, notShowStakes: boolean | null = null, height: number | null = null, timeout: number | null = null): Promise<CandidateResponse> {
    const request = this.params.requestCandidate(publicKey, notShowStakes, height);
    return this.getCandidateGrpcByRequest(request, timeout);
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

  public getCandidatesJsonByRequest(request: CandidatesRequest, timeout: number | null = null): Promise<Record<string, any>> {
    return this.httpGet(this.urlCandidates(request), timeout);
  }

  public getCandidatesGrpcByRequest(request: CandidatesRequest, timeout: number | null = null): Promise<CandidatesResponse> {
    return new Promise<CandidatesResponse>((resolve, reject) => {
      this.getCandidatesJsonByRequest(request, timeout)
        .then(value => resolve(this.jsonToGrpc.Candidates(value)))
        .catch(reject);
    });
  }

  private urlCandidates(request: CandidatesRequest) {
    const params: Array<Record<string, string>> = [];
    if (request.height) params.push({ height: request.height.toString() });
    if (request.notShowStakes === true) params.push({ not_show_stakes: "true" });
    else if (request.notShowStakes === false) params.push({ not_show_stakes: "false" });
    if (request.includeStakes === true) params.push({ include_stakes: "all" });
    else if (request.includeStakes === false) params.push({ include_stakes: "false" });

    const status = new ConvertCandidateStatus().get(request.status);
    if (status) params.push({ status: status });
    return this.url(this.nodeUrl + "candidates", params);
  }
}

export default MinterHttpApi;
