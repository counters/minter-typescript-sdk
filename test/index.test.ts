import MinterApi from '../src';
import Config from './Config';

test('MinterApi().getCoinInfoGrpc()', async () => {
  const config = new Config();
  const grpcMinterApi = new MinterApi(config.grpcOptions);
  const httpMinterApi = new MinterApi(null, config.httpOptions);
  const symbol = 'ROBOT';
  const grpcResult = await grpcMinterApi.getCoinInfoGrpc(symbol);
  const httpResult = await httpMinterApi.getCoinInfoGrpc(symbol);
  expect(grpcResult.toObject()).toEqual(httpResult.toObject());
  expect(grpcResult.getSymbol()).toEqual(symbol);
});

test('MinterApi().getCoinInfoGrpc2()', async () => {
  const config = new Config();
  const grpcMinterApi = new MinterApi(config.grpcOptions);
  const httpMinterApi = new MinterApi(null, config.httpOptions);
  const symbol = 'USDTE';
  const grpcResult = await grpcMinterApi.getCoinInfoGrpc(symbol);
  const httpResult = await httpMinterApi.getCoinInfoGrpc(symbol);
  expect(grpcResult.toObject()).toEqual(httpResult.toObject());
  expect(grpcResult.getSymbol()).toEqual(symbol);
});
