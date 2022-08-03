import { AddressResponse, BestTradeResponse, CoinInfoResponse, EstimateCoinSellResponse } from "./proto/resources_pb";
declare class JsonToGrpc {
    private convertSwapFrom;
    CoinInfo(value: any): CoinInfoResponse;
    Address(value: any): AddressResponse;
    EstimateCoinSell(value: Record<string, any>): EstimateCoinSellResponse;
    private coinByJson;
    BestTrade(value: Record<string, any>): BestTradeResponse;
}
export default JsonToGrpc;
