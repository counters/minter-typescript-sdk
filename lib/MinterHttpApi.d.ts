import { AddressRequest, AddressResponse, CoinInfoRequest, CoinInfoResponse, EstimateCoinSellRequest, EstimateCoinSellResponse, SwapFrom } from './proto/resources_pb';
import HttpOptions from './types/HttpOptions';
declare class MinterHttpApi {
    private httpOptions;
    private nodeUrl;
    private jsonToGrpc;
    private params;
    private convertAmount;
    private convertSwapFrom;
    constructor(httpOptions: HttpOptions);
    getCoinInfoGrpc(symbol: string, height?: number | null, timeout?: number | null): Promise<CoinInfoResponse>;
    getCoinInfoGrpcRequest(request: CoinInfoRequest, timeout?: number | null): Promise<CoinInfoResponse>;
    getAddressJsonByRequest(request: AddressRequest, timeout?: number | null): Promise<Record<string, any>>;
    getAddressGrpcRequest(request: AddressRequest, timeout?: number | null): Promise<AddressResponse>;
    getAddressGrpc(address: string, delegated?: boolean | null, height?: number | null, timeout?: number | null): Promise<AddressResponse>;
    getCoinInfoJsonByRequest(request: CoinInfoRequest, timeout?: number | null): Promise<Record<string, any>>;
    getCoinInfoJson(symbol: string, height?: number | null, timeout?: number | null): Promise<Record<string, any>>;
    estimateCoinSellJsonByRequest(request: EstimateCoinSellRequest, timeout?: number | null): Promise<Record<string, any>>;
    estimateCoinSellGrpcRequest(request: EstimateCoinSellRequest, timeout?: number | null): Promise<EstimateCoinSellResponse>;
    estimateCoinSellGrpc(coinToSell: number, valueToSell: number, coinToBuy?: number, coin_id_commission?: number | null, swap_from?: SwapFrom | null, route?: Array<number> | null, height?: number | null, timeout?: number | null): Promise<EstimateCoinSellResponse>;
    private urlCoinInfo;
    private urlAddress;
    private url;
    private httpGet;
    private urlEstimateCoinSell;
}
export default MinterHttpApi;
