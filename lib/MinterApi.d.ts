import HttpOptions from './types/HttpOptions';
import GrpcOptions from './types/GrpcOptions';
import { CoinInfoResponse, CoinInfoRequest, AddressResponse, AddressRequest, EstimateCoinSellResponse, SwapFrom } from './proto/resources_pb';
declare class MinterApi {
    private readonly grpcOptions;
    private httpOptions;
    private minterHttpApi;
    private minterGrpcApi;
    private params;
    private convertAmount;
    constructor(grpcOptions: GrpcOptions | null, httpOptions?: HttpOptions | null);
    getCoinInfoGrpc(symbol: string, height?: number | null, deadline?: number | null): Promise<CoinInfoResponse>;
    getCoinInfoByRequest(request: CoinInfoRequest, deadline?: number | null): Promise<CoinInfoResponse>;
    getAddressGrpc(address: string, delegated?: boolean | null, height?: number | null, deadline?: number | null): Promise<AddressResponse>;
    getAddressByRequest(request: AddressRequest, deadline?: number | null): Promise<AddressResponse>;
    estimateCoinSellGrpc(coinToSell: number, valueToSell: number, coinToBuy?: number, coin_id_commission?: number | null, swap_from?: SwapFrom | null, route?: Array<number> | null, height?: number | null, deadline?: number | null): Promise<EstimateCoinSellResponse>;
    estimateCoinSellByRequest(request: AddressRequest, deadline?: number | null): Promise<AddressResponse>;
}
export default MinterApi;
