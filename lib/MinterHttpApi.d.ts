import { AddressRequest, AddressResponse, BestTradeRequest, BestTradeResponse, CoinInfoRequest, CoinInfoResponse, EstimateCoinSellRequest, EstimateCoinSellResponse, SwapFrom } from "./proto/resources_pb";
import HttpOptions from "./types/HttpOptions";
declare class MinterHttpApi {
    private httpOptions;
    private nodeUrl;
    private jsonToGrpc;
    private params;
    private convertAmount;
    private convertSwapFrom;
    private convertBestTradeType;
    constructor(httpOptions: HttpOptions);
    getCoinInfoGrpc(symbol: string, height?: number | null, timeout?: number | null): Promise<CoinInfoResponse>;
    getCoinInfoGrpcRequest(request: CoinInfoRequest, timeout?: number | null): Promise<CoinInfoResponse>;
    getAddressJsonByRequest(request: AddressRequest, timeout?: number | null): Promise<Record<string, any>>;
    getAddressGrpcByRequest(request: AddressRequest, timeout?: number | null): Promise<AddressResponse>;
    getAddressGrpc(address: string, delegated?: boolean | null, height?: number | null, timeout?: number | null): Promise<AddressResponse>;
    getCoinInfoJsonByRequest(request: CoinInfoRequest, timeout?: number | null): Promise<Record<string, any>>;
    getCoinInfoJson(symbol: string, height?: number | null, timeout?: number | null): Promise<Record<string, any>>;
    estimateCoinSellJsonByRequest(request: EstimateCoinSellRequest, timeout?: number | null): Promise<Record<string, any>>;
    estimateCoinSellGrpcByRequest(request: EstimateCoinSellRequest, timeout?: number | null): Promise<EstimateCoinSellResponse>;
    estimateCoinSellGrpc(coinToSell: number, valueToSell: number, coinToBuy?: number, coin_id_commission?: number | null, swap_from?: SwapFrom | null, route?: Array<number> | null, height?: number | null, timeout?: number | null): Promise<EstimateCoinSellResponse>;
    getBestTradeJsonByRequest(request: BestTradeRequest, timeout?: number | null): Promise<Record<string, any>>;
    getBestTradeGrpcByRequest(request: BestTradeRequest, timeout?: number | null): Promise<BestTradeResponse>;
    getBestTradeGrpc(sell_coin: number, amount: number, buy_coin: number, type: BestTradeRequest.Type, max_depth?: number | null, height?: number | null, timeout?: number | null): Promise<BestTradeResponse>;
    private urlCoinInfo;
    private urlAddress;
    private url;
    private httpGet;
    private urlEstimateCoinSell;
    private urlBestTrade;
}
export default MinterHttpApi;
