import { AddressRequest, BestTradeRequest, CandidateRequest, CandidatesRequest, CoinInfoRequest, EstimateCoinSellRequest, SwapFrom } from "./proto/resources_pb";

class Params {
  public requestCoinInfo(symbol: string, height: number | null = null): CoinInfoRequest {
    const request = new CoinInfoRequest();
    if (height) request.setHeight(height);
    return request.setSymbol(symbol);
  }

  public requestAddress(address: string, delegated: boolean | null = null, height: number | null = null): AddressRequest {
    const request = new AddressRequest();
    if (height) request.setHeight(height);
    if (delegated !== null) request.setDelegated(delegated);
    return request.setAddress(address);
  }

  // tslint:disable:variable-name
  public requestEstimateCoinSell(
    coinToSell: number,
    valueToSell: string,
    coinToBuy: number = 0,
    coin_id_commission: number | null = null,
    swap_from: SwapFrom | null = null,
    route: Array<number> | null = null,
    height: number | null = null
  ): EstimateCoinSellRequest {
    const request = new EstimateCoinSellRequest();
    if (height) request.setHeight(height);
    if (coin_id_commission) request.setCoinIdCommission(coin_id_commission);
    /*if (swap_from!==null) */ request.setSwapFrom(swap_from!);
    if (route) request.setRouteList(route);
    return request
      .setCoinIdToSell(coinToSell)
      .setValueToSell(valueToSell)
      .setCoinIdToBuy(coinToBuy);
  }

  requestBestTrade(
    sell_coin: number,
    amount: string,
    buy_coin: number,
    type: BestTradeRequest.Type,
    max_depth: number | null = null,
    height: number | null = null
  ): BestTradeRequest {
    const request = new BestTradeRequest();
    if (height) request.setHeight(height);
    if (max_depth) request.setMaxDepth(max_depth);

    return request
      .setType(type)
      .setSellCoin(sell_coin)
      .setBuyCoin(buy_coin)
      .setAmount(amount);
  }

  public requestCandidate(publicKey: string, notShowStakes: boolean | null = null, height: number | null = null): CandidateRequest {
    const request = new CandidateRequest();
    if (height) request.setHeight(height);
    if (notShowStakes !== null) request.setNotShowStakes(notShowStakes);
    return request.setPublicKey(publicKey);
  }

  public requestCandidates(
    includeStakes: boolean | null = null,
    notShowStakes: boolean | null = null,
    candidateStatus: CandidatesRequest.CandidateStatus | null = null,
    height: number | null = null
  ): CandidatesRequest {
    const request = new CandidatesRequest();
    if (height) request.setHeight(height);
    if (includeStakes !== null) request.setIncludeStakes(includeStakes);
    if (notShowStakes !== null) request.setNotShowStakes(notShowStakes);
    if (candidateStatus !== null) request.setStatus(candidateStatus);
    return request;
  }
}

export default Params;
