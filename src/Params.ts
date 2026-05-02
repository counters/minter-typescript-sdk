import {
  AddressRequest,
  BestTradeRequest,
  BestTradeRequest_Type,
  CandidateRequest,
  CandidatesRequest,
  CandidatesRequest_CandidateStatus,
  CoinInfoRequest,
  EstimateCoinSellRequest,
  SwapFrom
} from "./generated/proto/resources";

class Params {
  public requestCoinInfo(symbol: string, height: number | null = null): CoinInfoRequest {
    return CoinInfoRequest.fromPartial({
      symbol: symbol,
      height: height || undefined
    });
  }

  public requestAddress(address: string, delegated: boolean | null = null, height: number | null = null): AddressRequest {
    return AddressRequest.fromPartial({
      address: address,
      delegated: delegated || undefined,
      height: height || undefined
    });
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
    return EstimateCoinSellRequest.fromPartial({
      coinIdToSell: coinToSell,
      valueToSell: valueToSell,
      coinIdToBuy: coinToBuy,
      coinIdCommission: coin_id_commission || undefined,
      swapFrom: swap_from || undefined,
      route: route || undefined,
      height: height || undefined
    });
  }

  public requestBestTrade(
    sell_coin: number,
    amount: string,
    buy_coin: number,
    type: BestTradeRequest_Type,
    max_depth: number | null = null,
    height: number | null = null
  ): BestTradeRequest {
    return BestTradeRequest.fromPartial({
      sellCoin: sell_coin,
      amount: amount,
      buyCoin: buy_coin,
      type: type,
      maxDepth: max_depth || undefined,
      height: height || undefined
    });
  }

  public requestCandidate(publicKey: string, notShowStakes: boolean | null = null, height: number | null = null): CandidateRequest {
    return CandidateRequest.fromPartial({
      publicKey: publicKey,
      notShowStakes: notShowStakes || undefined,
      height: height || undefined
    });
  }

  public requestCandidates(
    includeStakes: boolean | null = null,
    notShowStakes: boolean | null = null,
    candidateStatus: CandidatesRequest_CandidateStatus | null = null,
    height: number | null = null
  ): CandidatesRequest {
    return CandidatesRequest.fromPartial({
      includeStakes: includeStakes || undefined,
      notShowStakes: notShowStakes || undefined,
      status: candidateStatus || undefined,
      height: height || undefined
    });
  }
}

export default Params;
