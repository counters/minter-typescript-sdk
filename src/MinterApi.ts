import HttpOptions from "./types/HttpOptions";
import GrpcOptions from "./types/GrpcOptions";
import MinterHttpApi from "./MinterHttpApi";
import MinterGrpcApi from "./MinterGrpcApi";
import {
  CoinInfoResponse,
  CoinInfoRequest,
  AddressResponse,
  AddressRequest,
  EstimateCoinSellResponse,
  SwapFrom,
  BestTradeRequest,
  BestTradeResponse,
  EstimateCoinSellRequest,
  CandidateResponse,
  CandidateRequest,
  CandidatesResponse,
  CandidatesRequest
} from "./proto/resources_pb";
import Params from "./Params";
import ConvertAmount from "./utils/ConvertAmount";

class MinterApi {
  private readonly grpcOptions: GrpcOptions | null = null;
  private httpOptions: HttpOptions | null = null;

  private minterHttpApi: MinterHttpApi | null = null;
  private minterGrpcApi: MinterGrpcApi | null = null;

  private params = new Params();

  private convertAmount = new ConvertAmount();

  constructor(grpcOptions: GrpcOptions | null, httpOptions: HttpOptions | null = null) {
    if (grpcOptions) {
      this.grpcOptions = grpcOptions;
      this.minterGrpcApi = new MinterGrpcApi(grpcOptions);
    } else if (httpOptions) {
      this.httpOptions = httpOptions;
      this.minterHttpApi = new MinterHttpApi(httpOptions);
    } else {
      throw new Error();
    }
  }

  public getCoinInfoGrpc(symbol: string, height: number | null = null, deadline: number | null = null): Promise<CoinInfoResponse> {
    if (this.grpcOptions) {
      return this.minterGrpcApi!.getCoinInfoGrpc(this.params.requestCoinInfo(symbol, height), deadline);
    } else {
      return this.minterHttpApi!.getCoinInfoGrpc(symbol, height, deadline);
    }
  }

  public getCoinInfoByRequest(request: CoinInfoRequest, deadline: number | null = null): Promise<CoinInfoResponse> {
    if (this.grpcOptions) {
      return this.minterGrpcApi!.getCoinInfoGrpc(request, deadline);
    } else {
      return this.minterHttpApi!.getCoinInfoGrpcRequest(request, deadline);
    }
  }

  public getAddressGrpc(address: string, delegated: boolean | null = null, height: number | null = null, deadline: number | null = null): Promise<AddressResponse> {
    if (this.grpcOptions) {
      return this.minterGrpcApi!.getAddressGrpc(this.params.requestAddress(address, delegated, height), deadline);
    } else {
      // return this.minterGrpcApi!.getAddressGrpc(this.params.requestAddress(address, delegated, height), deadline);
      return this.minterHttpApi!.getAddressGrpc(address, delegated, height, deadline);
    }
  }

  public getAddressGrpcByRequest(request: AddressRequest, deadline: number | null = null): Promise<AddressResponse> {
    if (this.grpcOptions) {
      return this.minterGrpcApi!.getAddressGrpc(request, deadline);
    } else {
      return this.minterGrpcApi!.getAddressGrpc(request, deadline);
      // return this.minterHttpApi!.getAddressGrpcRequest(request, deadline);
    }
  }

  // tslint:disable:variable-name
  public estimateCoinSellGrpc(
    coinToSell: number,
    valueToSell: number,
    coinToBuy: number = 0,
    coin_id_commission: number | null = null,
    swap_from: SwapFrom | null = null,
    route: Array<number> | null = null,
    height: number | null = null,
    deadline: number | null = null
  ): Promise<EstimateCoinSellResponse> {
    if (this.grpcOptions) {
      return this.minterGrpcApi!.estimateCoinSellGrpc(
        this.params.requestEstimateCoinSell(coinToSell, this.convertAmount.toPip(valueToSell), coinToBuy, coin_id_commission, swap_from, route, height),
        deadline
      );
    } else {
      return this.minterHttpApi!.estimateCoinSellGrpc(coinToSell, valueToSell, coinToBuy, coin_id_commission, swap_from, route, height, deadline);
    }
  }

  public estimateCoinSellByRequest(request: EstimateCoinSellRequest, deadline: number | null = null): Promise<EstimateCoinSellResponse> {
    if (this.grpcOptions) {
      return this.minterGrpcApi!.estimateCoinSellGrpc(request, deadline);
    } else {
      return this.minterHttpApi!.estimateCoinSellGrpcByRequest(request, deadline);
    }
  }

  getBestTradeGrpc(
    sell_coin: number,
    amount: number,
    buy_coin: number,
    type: BestTradeRequest.Type,
    max_depth: number | null = null,
    height: number | null = null,
    deadline: number | null = null
  ): Promise<BestTradeResponse> {
    if (this.grpcOptions) {
      return this.minterGrpcApi!.getBestTradeGrpc(this.params.requestBestTrade(sell_coin, this.convertAmount.toPip(amount), buy_coin, type, max_depth, height), deadline);
    } else {
      return this.minterHttpApi!.getBestTradeGrpc(sell_coin, amount, buy_coin, type, max_depth, height, deadline);
    }
  }

  public getCandidateGrpc(publicKey: string, notShowStakes: boolean | null = null, height: number | null = null, deadline: number | null = null): Promise<CandidateResponse> {
    if (this.grpcOptions) {
      return this.minterGrpcApi!.getCandidateGrpc(this.params.requestCandidate(publicKey, notShowStakes, height), deadline);
    } else {
      return this.minterHttpApi!.getCandidateGrpc(publicKey, notShowStakes, height, deadline);
    }
  }

  public getCandidateGrpcByRequest(request: CandidateRequest, deadline: number | null = null): Promise<CandidateResponse> {
    if (this.grpcOptions) {
      return this.minterGrpcApi!.getCandidateGrpc(request, deadline);
    } else {
      return this.minterHttpApi!.getCandidateGrpcByRequest(request, deadline);
    }
  }

  public getCandidatesGrpc(
    includeStakes: boolean | null = null,
    notShowStakes: boolean | null = null,
    candidateStatus: CandidatesRequest.CandidateStatus | null = null,
    height: number | null = null,
    deadline: number | null = null
  ): Promise<CandidatesResponse> {
    if (this.grpcOptions) {
      return this.minterGrpcApi!.getCandidatesGrpc(this.params.requestCandidates(includeStakes, notShowStakes, candidateStatus, height), deadline);
    } else {
      return this.minterHttpApi!.getCandidatesGrpc(includeStakes, notShowStakes, candidateStatus, height, deadline);
    }
  }
}

export default MinterApi;
