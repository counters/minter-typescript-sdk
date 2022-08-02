import HttpOptions from './types/HttpOptions';
import GrpcOptions from './types/GrpcOptions';
import MinterHttpApi from './MinterHttpApi';
import MinterGrpcApi from './MinterGrpcApi';
import { CoinInfoResponse, CoinInfoRequest, AddressResponse, AddressRequest, EstimateCoinSellResponse, SwapFrom } from './proto/resources_pb';
import Params from './Params';
import ConvertAmount from './utils/ConvertAmount';

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

  public getAddressGrpc(
    address: string,
    delegated: boolean | null = null,
    height: number | null = null,
    deadline: number | null = null
  ): Promise<AddressResponse> {
    if (this.grpcOptions) {
      return this.minterGrpcApi!.getAddressGrpc(this.params.requestAddress(address, delegated, height), deadline);
    } else {
      // return this.minterGrpcApi!.getAddressGrpc(this.params.requestAddress(address, delegated, height), deadline);
      return this.minterHttpApi!.getAddressGrpc(address, delegated, height, deadline);
    }
  }

  public getAddressByRequest(request: AddressRequest, deadline: number | null = null): Promise<AddressResponse> {
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

  public estimateCoinSellByRequest(request: AddressRequest, deadline: number | null = null): Promise<AddressResponse> {
    if (this.grpcOptions) {
      return this.minterGrpcApi!.getAddressGrpc(request, deadline);
    } else {
      return this.minterGrpcApi!.getAddressGrpc(request, deadline);
      // return this.minterHttpApi!.getAddressGrpcRequest(request, deadline);
    }
  }
}
export default MinterApi;
