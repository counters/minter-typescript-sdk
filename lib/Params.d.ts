import { AddressRequest, BestTradeRequest, CoinInfoRequest, EstimateCoinSellRequest, SwapFrom } from "./proto/resources_pb";
declare class Params {
    requestCoinInfo(symbol: string, height?: number | null): CoinInfoRequest;
    requestAddress(address: string, delegated?: boolean | null, height?: number | null): AddressRequest;
    requestEstimateCoinSell(coinToSell: number, valueToSell: string, coinToBuy?: number, coin_id_commission?: number | null, swap_from?: SwapFrom | null, route?: Array<number> | null, height?: number | null): EstimateCoinSellRequest;
    requestBestTrade(sell_coin: number, amount: string, buy_coin: number, type: BestTradeRequest.Type, max_depth?: number | null, height?: number | null): BestTradeRequest;
}
export default Params;
