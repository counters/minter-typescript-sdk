import { AddressResponse, CoinInfoResponse, EstimateCoinSellResponse } from './proto/resources_pb';
declare class JsonToGrpc {
    private convertSwapFrom;
    CoinInfo(value: any): CoinInfoResponse;
    Address(value: any): AddressResponse;
    EstimateCoinSell(value: Record<string, any>): EstimateCoinSellResponse;
    private coinByJson;
}
export default JsonToGrpc;
