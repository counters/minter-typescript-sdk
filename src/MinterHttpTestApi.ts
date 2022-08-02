// import axios from 'axios';
// import { CoinInfoRequest, CoinInfoResponse } from './proto/resources_pb';
import HttpOptions from './types/HttpOptions';
// import JsonToGrpc from './JsonToGrpc';
// import Params from './Params';

class MinterHttpTestApi {
  // private httpOptions: HttpOptions;
  // private nodeUrl: string;
  // private jsonToGrpc = new JsonToGrpc();
  // private params = new Params();
  /*  constructor(httpOptions: HttpOptions) {
    this.httpOptions = httpOptions;
    this.nodeUrl = httpOptions.raw;
  }*/
  /*  public getCoinInfoGrpc(
    symbol: string,
    height: number | null = null,
    timeout: number | null = null
  ): Promise<CoinInfoResponse> {
    const request = this.params.requestCoinInfo(symbol, height);
    return this.getCoinInfoGrpcRequest(request, timeout);
  }*/
  /*  public getCoinInfoGrpcRequest(request: CoinInfoRequest, timeout: number | null = null): Promise<CoinInfoResponse> {
    return new Promise<CoinInfoResponse>((resolve, reject) => {
      this.getCoinInfoJsonByRequest(request, timeout)
        .then(value => resolve(this.jsonToGrpc.CoinInfo(value)))
        .catch(reject);
    });
  }*/
  /*  public getCoinInfoJsonByRequest(
    request: CoinInfoRequest,
    timeout: number | null = null
  ): Promise<Record<string, any>> {
    return this.httpGet(this.urlCoinInfo(request), timeout);
  }
  public getCoinInfoJson(
    symbol: string,
    height: number | null = null,
    timeout: number | null = null
  ): Promise<Record<string, any>> {
    const request = this.params.requestCoinInfo(symbol, height);
    return this.httpGet(this.urlCoinInfo(request), timeout);
  }

  private urlCoinInfo(request: CoinInfoRequest): string {
    const params: Array<Record<string, string>> = [];
    if (request.getHeight()) params.push({ height: request.getHeight().toString() });
    return this.url(this.nodeUrl + '/coin_info/' + request.getSymbol(), params);
  }
*/
  /*  public url(patch: string, params: ReadonlyArray<Record<string, string>>): string {
    const query: string[] = [];
    params.forEach(val => {
      // tslint:disable-next-line:forin
      for (const key in val) {
        // query.push(key+"="+val[key])
        query.push(`${key}=${val[key]}`);
      }
    });
    return query.length > 0 ? patch + '?' + query.join('&') : patch;
  }*/
  /*  public httpGet(url: string, timeout: number | null = null): Promise<Record<string, any[]>> {
    return new Promise<Record<string, any[]>>((resolve, reject) => {
      axios
        .get(url)
        .then(res => {
          resolve(res.data);
        })
        .catch(error => {
          // console.debug(error.response);
          reject(error.response.data);
          reject();
        });
    });
  }*/
}

export default MinterHttpTestApi;
