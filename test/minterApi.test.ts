import MinterApi from "../src";
import Config from "./Config";

test("MinterApi().estimateCoinSell()", async () => {
  const config = new Config();
  const grpcMinterApi = new MinterApi(config.grpcOptions);
  const httpMinterApi = new MinterApi(null, config.httpOptions);
  // const route = [1993];// USDTE
  const coinToSell = 1902; // HUB
  const route = null;
  const grpcResult = await grpcMinterApi.estimateCoinSellGrpc(coinToSell, 1.0, 0, null, null, route);
  // console.info(grpcResult.toObject());

  const httpResult = await httpMinterApi.estimateCoinSellGrpc(coinToSell, 1.0, 0, null, null, route);
  // console.info(httpResult.toObject());
  expect(grpcResult.toObject()).toEqual(httpResult.toObject());
  // expect(grpcResult.getSymbol()).toEqual(symbol);
});
