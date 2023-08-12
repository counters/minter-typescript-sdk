# Minter TypeScript SDK

The SDK is written in TypeScript with native gRPC transport support (excluding the browser). Suitable for creating WEB 3.0 applications, console and desktop applications.

## Install

```shell
yarn add minter-typescript-sdk@github:counters/minter-typescript-sdk
# or
npm install counters/minter-typescript-sdk
```

## Init

### Http/Https transport

```ts
import MinterApi, {HttpOptions} from "minter-typescript-sdk";

const httpOptions: HttpOptions = { raw: 'http://minter-api:8843/v2/', timeout: null, headers: null };
const minterApi = new MinterApi(null, httpOptions);
```

### Import for browser (optional)

```ts
import MinterApi, {HttpOptions} from "minter-typescript-sdk/lib/browser";
```

### gRPC transport

```ts
import MinterApi, {GrpcOptions} from "minter-typescript-sdk";

const grpcOptions: GrpcOptions = { hostname: 'minter-api', port: 8842, deadline: 2500, useTransportSecurity: false };
const minterApi = new MinterApi(grpcOptions);
```


## Methods

### getCoinInfo

```ts
const coinInfo = await minterApi.getCoinInfoGrpc("COUNTER");
console.info(coinInfo.toObject());
```

![Minter TypeScript SDK code completion](sdk-code-completion.png "Minter TypeScript SDK code completion")


### getBestTrade

```ts
import {BestTradeRequest} from "minter-typescript-sdk/lib/proto/resources_pb";

const bestTrade = await minterApi.getBestTradeGrpc(3757, 100.0, 1902, BestTradeRequest.Type.INPUT)
console.info(bestTrade.toObject()); // { pathList: [ 3757, 1902 ], result: '7929802038004399105' }
```

### Other methods available
estimateCoinSell, getAddress

### Advanced usage

```ts
const convertAmount = new ConvertAmount()

const deadline: number | null = null;
const sell_coin = 1902;
const buy_coin = 0;
const amount = 1.0;
const type = BestTradeRequest.Type.INPUT;
const height: number | null = null;
const max_depth: number | null = null;

minterApi.getBestTradeGrpc(sell_coin, amount, buy_coin, type, max_depth, height, deadline)
    .then(value => {
        console.info(value.toObject()); // { pathList: [ 1902, 0 ], result: '10838518193168082966333' }
        console.info(convertAmount.toBip(value.getResult() )); // 10838.518193168084
    })
    .catch(error => console.error(error));
```

## Utils

### ConvertAmount

```ts
const convertAmount = new ConvertAmount();
console.info(convertAmount.toBip("1000000000000000000")); // 1.0
console.info(convertAmount.toPip(1.0)); // 1000000000000000000
```
