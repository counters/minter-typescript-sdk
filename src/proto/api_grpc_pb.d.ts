// package: api_pb
// file: api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as api_pb from "./api_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as resources_pb from "./resources_pb";

interface IApiServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    subscribe: IApiServiceService_ISubscribe;
    halts: IApiServiceService_IHalts;
    genesis: IApiServiceService_IGenesis;
    minGasPrice: IApiServiceService_IMinGasPrice;
    netInfo: IApiServiceService_INetInfo;
    status: IApiServiceService_IStatus;
    address: IApiServiceService_IAddress;
    addresses: IApiServiceService_IAddresses;
    block: IApiServiceService_IBlock;
    candidate: IApiServiceService_ICandidate;
    candidates: IApiServiceService_ICandidates;
    coinInfoById: IApiServiceService_ICoinInfoById;
    coinInfo: IApiServiceService_ICoinInfo;
    estimateCoinBuy: IApiServiceService_IEstimateCoinBuy;
    estimateCoinSell: IApiServiceService_IEstimateCoinSell;
    estimateCoinSellAll: IApiServiceService_IEstimateCoinSellAll;
    estimateTxCommission: IApiServiceService_IEstimateTxCommission;
    events: IApiServiceService_IEvents;
    maxGasPrice: IApiServiceService_IMaxGasPrice;
    missedBlocks: IApiServiceService_IMissedBlocks;
    sendTransaction: IApiServiceService_ISendTransaction;
    transaction: IApiServiceService_ITransaction;
    transactions: IApiServiceService_ITransactions;
    unconfirmedTxs: IApiServiceService_IUnconfirmedTxs;
    validators: IApiServiceService_IValidators;
    frozen: IApiServiceService_IFrozen;
    frozenAll: IApiServiceService_IFrozenAll;
    waitList: IApiServiceService_IWaitList;
    testBlock: IApiServiceService_ITestBlock;
    swapPool: IApiServiceService_ISwapPool;
    swapPools: IApiServiceService_ISwapPools;
    swapPoolProvider: IApiServiceService_ISwapPoolProvider;
    priceCommission: IApiServiceService_IPriceCommission;
    versionNetwork: IApiServiceService_IVersionNetwork;
    commissionVotes: IApiServiceService_ICommissionVotes;
    updateVotes: IApiServiceService_IUpdateVotes;
    blocks: IApiServiceService_IBlocks;
    limitOrder: IApiServiceService_ILimitOrder;
    limitOrdersOfPool: IApiServiceService_ILimitOrdersOfPool;
    limitOrders: IApiServiceService_ILimitOrders;
    bestTrade: IApiServiceService_IBestTrade;
}

interface IApiServiceService_ISubscribe extends grpc.MethodDefinition<resources_pb.SubscribeRequest, resources_pb.SubscribeResponse> {
    path: "/api_pb.ApiService/Subscribe";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<resources_pb.SubscribeRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.SubscribeRequest>;
    responseSerialize: grpc.serialize<resources_pb.SubscribeResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.SubscribeResponse>;
}
interface IApiServiceService_IHalts extends grpc.MethodDefinition<resources_pb.HaltsRequest, resources_pb.HaltsResponse> {
    path: "/api_pb.ApiService/Halts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.HaltsRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.HaltsRequest>;
    responseSerialize: grpc.serialize<resources_pb.HaltsResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.HaltsResponse>;
}
interface IApiServiceService_IGenesis extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, resources_pb.GenesisResponse> {
    path: "/api_pb.ApiService/Genesis";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<resources_pb.GenesisResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.GenesisResponse>;
}
interface IApiServiceService_IMinGasPrice extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, resources_pb.MinGasPriceResponse> {
    path: "/api_pb.ApiService/MinGasPrice";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<resources_pb.MinGasPriceResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.MinGasPriceResponse>;
}
interface IApiServiceService_INetInfo extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, resources_pb.NetInfoResponse> {
    path: "/api_pb.ApiService/NetInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<resources_pb.NetInfoResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.NetInfoResponse>;
}
interface IApiServiceService_IStatus extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, resources_pb.StatusResponse> {
    path: "/api_pb.ApiService/Status";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<resources_pb.StatusResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.StatusResponse>;
}
interface IApiServiceService_IAddress extends grpc.MethodDefinition<resources_pb.AddressRequest, resources_pb.AddressResponse> {
    path: "/api_pb.ApiService/Address";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.AddressRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.AddressRequest>;
    responseSerialize: grpc.serialize<resources_pb.AddressResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.AddressResponse>;
}
interface IApiServiceService_IAddresses extends grpc.MethodDefinition<resources_pb.AddressesRequest, resources_pb.AddressesResponse> {
    path: "/api_pb.ApiService/Addresses";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.AddressesRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.AddressesRequest>;
    responseSerialize: grpc.serialize<resources_pb.AddressesResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.AddressesResponse>;
}
interface IApiServiceService_IBlock extends grpc.MethodDefinition<resources_pb.BlockRequest, resources_pb.BlockResponse> {
    path: "/api_pb.ApiService/Block";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.BlockRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.BlockRequest>;
    responseSerialize: grpc.serialize<resources_pb.BlockResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.BlockResponse>;
}
interface IApiServiceService_ICandidate extends grpc.MethodDefinition<resources_pb.CandidateRequest, resources_pb.CandidateResponse> {
    path: "/api_pb.ApiService/Candidate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.CandidateRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.CandidateRequest>;
    responseSerialize: grpc.serialize<resources_pb.CandidateResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.CandidateResponse>;
}
interface IApiServiceService_ICandidates extends grpc.MethodDefinition<resources_pb.CandidatesRequest, resources_pb.CandidatesResponse> {
    path: "/api_pb.ApiService/Candidates";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.CandidatesRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.CandidatesRequest>;
    responseSerialize: grpc.serialize<resources_pb.CandidatesResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.CandidatesResponse>;
}
interface IApiServiceService_ICoinInfoById extends grpc.MethodDefinition<resources_pb.CoinIdRequest, resources_pb.CoinInfoResponse> {
    path: "/api_pb.ApiService/CoinInfoById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.CoinIdRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.CoinIdRequest>;
    responseSerialize: grpc.serialize<resources_pb.CoinInfoResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.CoinInfoResponse>;
}
interface IApiServiceService_ICoinInfo extends grpc.MethodDefinition<resources_pb.CoinInfoRequest, resources_pb.CoinInfoResponse> {
    path: "/api_pb.ApiService/CoinInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.CoinInfoRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.CoinInfoRequest>;
    responseSerialize: grpc.serialize<resources_pb.CoinInfoResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.CoinInfoResponse>;
}
interface IApiServiceService_IEstimateCoinBuy extends grpc.MethodDefinition<resources_pb.EstimateCoinBuyRequest, resources_pb.EstimateCoinBuyResponse> {
    path: "/api_pb.ApiService/EstimateCoinBuy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.EstimateCoinBuyRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.EstimateCoinBuyRequest>;
    responseSerialize: grpc.serialize<resources_pb.EstimateCoinBuyResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.EstimateCoinBuyResponse>;
}
interface IApiServiceService_IEstimateCoinSell extends grpc.MethodDefinition<resources_pb.EstimateCoinSellRequest, resources_pb.EstimateCoinSellResponse> {
    path: "/api_pb.ApiService/EstimateCoinSell";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.EstimateCoinSellRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.EstimateCoinSellRequest>;
    responseSerialize: grpc.serialize<resources_pb.EstimateCoinSellResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.EstimateCoinSellResponse>;
}
interface IApiServiceService_IEstimateCoinSellAll extends grpc.MethodDefinition<resources_pb.EstimateCoinSellAllRequest, resources_pb.EstimateCoinSellAllResponse> {
    path: "/api_pb.ApiService/EstimateCoinSellAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.EstimateCoinSellAllRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.EstimateCoinSellAllRequest>;
    responseSerialize: grpc.serialize<resources_pb.EstimateCoinSellAllResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.EstimateCoinSellAllResponse>;
}
interface IApiServiceService_IEstimateTxCommission extends grpc.MethodDefinition<resources_pb.EstimateTxCommissionRequest, resources_pb.EstimateTxCommissionResponse> {
    path: "/api_pb.ApiService/EstimateTxCommission";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.EstimateTxCommissionRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.EstimateTxCommissionRequest>;
    responseSerialize: grpc.serialize<resources_pb.EstimateTxCommissionResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.EstimateTxCommissionResponse>;
}
interface IApiServiceService_IEvents extends grpc.MethodDefinition<resources_pb.EventsRequest, resources_pb.EventsResponse> {
    path: "/api_pb.ApiService/Events";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.EventsRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.EventsRequest>;
    responseSerialize: grpc.serialize<resources_pb.EventsResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.EventsResponse>;
}
interface IApiServiceService_IMaxGasPrice extends grpc.MethodDefinition<resources_pb.MaxGasPriceRequest, resources_pb.MaxGasPriceResponse> {
    path: "/api_pb.ApiService/MaxGasPrice";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.MaxGasPriceRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.MaxGasPriceRequest>;
    responseSerialize: grpc.serialize<resources_pb.MaxGasPriceResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.MaxGasPriceResponse>;
}
interface IApiServiceService_IMissedBlocks extends grpc.MethodDefinition<resources_pb.MissedBlocksRequest, resources_pb.MissedBlocksResponse> {
    path: "/api_pb.ApiService/MissedBlocks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.MissedBlocksRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.MissedBlocksRequest>;
    responseSerialize: grpc.serialize<resources_pb.MissedBlocksResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.MissedBlocksResponse>;
}
interface IApiServiceService_ISendTransaction extends grpc.MethodDefinition<resources_pb.SendTransactionRequest, resources_pb.SendTransactionResponse> {
    path: "/api_pb.ApiService/SendTransaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.SendTransactionRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.SendTransactionRequest>;
    responseSerialize: grpc.serialize<resources_pb.SendTransactionResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.SendTransactionResponse>;
}
interface IApiServiceService_ITransaction extends grpc.MethodDefinition<resources_pb.TransactionRequest, resources_pb.TransactionResponse> {
    path: "/api_pb.ApiService/Transaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.TransactionRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.TransactionRequest>;
    responseSerialize: grpc.serialize<resources_pb.TransactionResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.TransactionResponse>;
}
interface IApiServiceService_ITransactions extends grpc.MethodDefinition<resources_pb.TransactionsRequest, resources_pb.TransactionsResponse> {
    path: "/api_pb.ApiService/Transactions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.TransactionsRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.TransactionsRequest>;
    responseSerialize: grpc.serialize<resources_pb.TransactionsResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.TransactionsResponse>;
}
interface IApiServiceService_IUnconfirmedTxs extends grpc.MethodDefinition<resources_pb.UnconfirmedTxsRequest, resources_pb.UnconfirmedTxsResponse> {
    path: "/api_pb.ApiService/UnconfirmedTxs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.UnconfirmedTxsRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.UnconfirmedTxsRequest>;
    responseSerialize: grpc.serialize<resources_pb.UnconfirmedTxsResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.UnconfirmedTxsResponse>;
}
interface IApiServiceService_IValidators extends grpc.MethodDefinition<resources_pb.ValidatorsRequest, resources_pb.ValidatorsResponse> {
    path: "/api_pb.ApiService/Validators";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.ValidatorsRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.ValidatorsRequest>;
    responseSerialize: grpc.serialize<resources_pb.ValidatorsResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.ValidatorsResponse>;
}
interface IApiServiceService_IFrozen extends grpc.MethodDefinition<resources_pb.FrozenRequest, resources_pb.FrozenResponse> {
    path: "/api_pb.ApiService/Frozen";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.FrozenRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.FrozenRequest>;
    responseSerialize: grpc.serialize<resources_pb.FrozenResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.FrozenResponse>;
}
interface IApiServiceService_IFrozenAll extends grpc.MethodDefinition<resources_pb.FrozenAllRequest, resources_pb.FrozenResponse> {
    path: "/api_pb.ApiService/FrozenAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.FrozenAllRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.FrozenAllRequest>;
    responseSerialize: grpc.serialize<resources_pb.FrozenResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.FrozenResponse>;
}
interface IApiServiceService_IWaitList extends grpc.MethodDefinition<resources_pb.WaitListRequest, resources_pb.WaitListResponse> {
    path: "/api_pb.ApiService/WaitList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.WaitListRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.WaitListRequest>;
    responseSerialize: grpc.serialize<resources_pb.WaitListResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.WaitListResponse>;
}
interface IApiServiceService_ITestBlock extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, resources_pb.BlockResponse> {
    path: "/api_pb.ApiService/TestBlock";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<resources_pb.BlockResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.BlockResponse>;
}
interface IApiServiceService_ISwapPool extends grpc.MethodDefinition<resources_pb.SwapPoolRequest, resources_pb.SwapPoolResponse> {
    path: "/api_pb.ApiService/SwapPool";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.SwapPoolRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.SwapPoolRequest>;
    responseSerialize: grpc.serialize<resources_pb.SwapPoolResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.SwapPoolResponse>;
}
interface IApiServiceService_ISwapPools extends grpc.MethodDefinition<resources_pb.SwapPoolsRequest, resources_pb.SwapPoolsResponse> {
    path: "/api_pb.ApiService/SwapPools";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.SwapPoolsRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.SwapPoolsRequest>;
    responseSerialize: grpc.serialize<resources_pb.SwapPoolsResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.SwapPoolsResponse>;
}
interface IApiServiceService_ISwapPoolProvider extends grpc.MethodDefinition<resources_pb.SwapPoolProviderRequest, resources_pb.SwapPoolResponse> {
    path: "/api_pb.ApiService/SwapPoolProvider";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.SwapPoolProviderRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.SwapPoolProviderRequest>;
    responseSerialize: grpc.serialize<resources_pb.SwapPoolResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.SwapPoolResponse>;
}
interface IApiServiceService_IPriceCommission extends grpc.MethodDefinition<resources_pb.PriceCommissionRequest, resources_pb.PriceCommissionResponse> {
    path: "/api_pb.ApiService/PriceCommission";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.PriceCommissionRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.PriceCommissionRequest>;
    responseSerialize: grpc.serialize<resources_pb.PriceCommissionResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.PriceCommissionResponse>;
}
interface IApiServiceService_IVersionNetwork extends grpc.MethodDefinition<resources_pb.VersionNetworkRequest, resources_pb.VersionNetworkResponse> {
    path: "/api_pb.ApiService/VersionNetwork";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.VersionNetworkRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.VersionNetworkRequest>;
    responseSerialize: grpc.serialize<resources_pb.VersionNetworkResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.VersionNetworkResponse>;
}
interface IApiServiceService_ICommissionVotes extends grpc.MethodDefinition<resources_pb.CommissionVotesRequest, resources_pb.CommissionVotesResponse> {
    path: "/api_pb.ApiService/CommissionVotes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.CommissionVotesRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.CommissionVotesRequest>;
    responseSerialize: grpc.serialize<resources_pb.CommissionVotesResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.CommissionVotesResponse>;
}
interface IApiServiceService_IUpdateVotes extends grpc.MethodDefinition<resources_pb.UpdateVotesRequest, resources_pb.UpdateVotesResponse> {
    path: "/api_pb.ApiService/UpdateVotes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.UpdateVotesRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.UpdateVotesRequest>;
    responseSerialize: grpc.serialize<resources_pb.UpdateVotesResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.UpdateVotesResponse>;
}
interface IApiServiceService_IBlocks extends grpc.MethodDefinition<resources_pb.BlocksRequest, resources_pb.BlocksResponse> {
    path: "/api_pb.ApiService/Blocks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.BlocksRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.BlocksRequest>;
    responseSerialize: grpc.serialize<resources_pb.BlocksResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.BlocksResponse>;
}
interface IApiServiceService_ILimitOrder extends grpc.MethodDefinition<resources_pb.LimitOrderRequest, resources_pb.LimitOrderResponse> {
    path: "/api_pb.ApiService/LimitOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.LimitOrderRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.LimitOrderRequest>;
    responseSerialize: grpc.serialize<resources_pb.LimitOrderResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.LimitOrderResponse>;
}
interface IApiServiceService_ILimitOrdersOfPool extends grpc.MethodDefinition<resources_pb.LimitOrdersOfPoolRequest, resources_pb.LimitOrdersOfPoolResponse> {
    path: "/api_pb.ApiService/LimitOrdersOfPool";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.LimitOrdersOfPoolRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.LimitOrdersOfPoolRequest>;
    responseSerialize: grpc.serialize<resources_pb.LimitOrdersOfPoolResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.LimitOrdersOfPoolResponse>;
}
interface IApiServiceService_ILimitOrders extends grpc.MethodDefinition<resources_pb.LimitOrdersRequest, resources_pb.LimitOrdersResponse> {
    path: "/api_pb.ApiService/LimitOrders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.LimitOrdersRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.LimitOrdersRequest>;
    responseSerialize: grpc.serialize<resources_pb.LimitOrdersResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.LimitOrdersResponse>;
}
interface IApiServiceService_IBestTrade extends grpc.MethodDefinition<resources_pb.BestTradeRequest, resources_pb.BestTradeResponse> {
    path: "/api_pb.ApiService/BestTrade";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<resources_pb.BestTradeRequest>;
    requestDeserialize: grpc.deserialize<resources_pb.BestTradeRequest>;
    responseSerialize: grpc.serialize<resources_pb.BestTradeResponse>;
    responseDeserialize: grpc.deserialize<resources_pb.BestTradeResponse>;
}

export const ApiServiceService: IApiServiceService;

export interface IApiServiceServer extends grpc.UntypedServiceImplementation {
    subscribe: grpc.handleServerStreamingCall<resources_pb.SubscribeRequest, resources_pb.SubscribeResponse>;
    halts: grpc.handleUnaryCall<resources_pb.HaltsRequest, resources_pb.HaltsResponse>;
    genesis: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, resources_pb.GenesisResponse>;
    minGasPrice: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, resources_pb.MinGasPriceResponse>;
    netInfo: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, resources_pb.NetInfoResponse>;
    status: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, resources_pb.StatusResponse>;
    address: grpc.handleUnaryCall<resources_pb.AddressRequest, resources_pb.AddressResponse>;
    addresses: grpc.handleUnaryCall<resources_pb.AddressesRequest, resources_pb.AddressesResponse>;
    block: grpc.handleUnaryCall<resources_pb.BlockRequest, resources_pb.BlockResponse>;
    candidate: grpc.handleUnaryCall<resources_pb.CandidateRequest, resources_pb.CandidateResponse>;
    candidates: grpc.handleUnaryCall<resources_pb.CandidatesRequest, resources_pb.CandidatesResponse>;
    coinInfoById: grpc.handleUnaryCall<resources_pb.CoinIdRequest, resources_pb.CoinInfoResponse>;
    coinInfo: grpc.handleUnaryCall<resources_pb.CoinInfoRequest, resources_pb.CoinInfoResponse>;
    estimateCoinBuy: grpc.handleUnaryCall<resources_pb.EstimateCoinBuyRequest, resources_pb.EstimateCoinBuyResponse>;
    estimateCoinSell: grpc.handleUnaryCall<resources_pb.EstimateCoinSellRequest, resources_pb.EstimateCoinSellResponse>;
    estimateCoinSellAll: grpc.handleUnaryCall<resources_pb.EstimateCoinSellAllRequest, resources_pb.EstimateCoinSellAllResponse>;
    estimateTxCommission: grpc.handleUnaryCall<resources_pb.EstimateTxCommissionRequest, resources_pb.EstimateTxCommissionResponse>;
    events: grpc.handleUnaryCall<resources_pb.EventsRequest, resources_pb.EventsResponse>;
    maxGasPrice: grpc.handleUnaryCall<resources_pb.MaxGasPriceRequest, resources_pb.MaxGasPriceResponse>;
    missedBlocks: grpc.handleUnaryCall<resources_pb.MissedBlocksRequest, resources_pb.MissedBlocksResponse>;
    sendTransaction: grpc.handleUnaryCall<resources_pb.SendTransactionRequest, resources_pb.SendTransactionResponse>;
    transaction: grpc.handleUnaryCall<resources_pb.TransactionRequest, resources_pb.TransactionResponse>;
    transactions: grpc.handleUnaryCall<resources_pb.TransactionsRequest, resources_pb.TransactionsResponse>;
    unconfirmedTxs: grpc.handleUnaryCall<resources_pb.UnconfirmedTxsRequest, resources_pb.UnconfirmedTxsResponse>;
    validators: grpc.handleUnaryCall<resources_pb.ValidatorsRequest, resources_pb.ValidatorsResponse>;
    frozen: grpc.handleUnaryCall<resources_pb.FrozenRequest, resources_pb.FrozenResponse>;
    frozenAll: grpc.handleUnaryCall<resources_pb.FrozenAllRequest, resources_pb.FrozenResponse>;
    waitList: grpc.handleUnaryCall<resources_pb.WaitListRequest, resources_pb.WaitListResponse>;
    testBlock: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, resources_pb.BlockResponse>;
    swapPool: grpc.handleUnaryCall<resources_pb.SwapPoolRequest, resources_pb.SwapPoolResponse>;
    swapPools: grpc.handleUnaryCall<resources_pb.SwapPoolsRequest, resources_pb.SwapPoolsResponse>;
    swapPoolProvider: grpc.handleUnaryCall<resources_pb.SwapPoolProviderRequest, resources_pb.SwapPoolResponse>;
    priceCommission: grpc.handleUnaryCall<resources_pb.PriceCommissionRequest, resources_pb.PriceCommissionResponse>;
    versionNetwork: grpc.handleUnaryCall<resources_pb.VersionNetworkRequest, resources_pb.VersionNetworkResponse>;
    commissionVotes: grpc.handleUnaryCall<resources_pb.CommissionVotesRequest, resources_pb.CommissionVotesResponse>;
    updateVotes: grpc.handleUnaryCall<resources_pb.UpdateVotesRequest, resources_pb.UpdateVotesResponse>;
    blocks: grpc.handleUnaryCall<resources_pb.BlocksRequest, resources_pb.BlocksResponse>;
    limitOrder: grpc.handleUnaryCall<resources_pb.LimitOrderRequest, resources_pb.LimitOrderResponse>;
    limitOrdersOfPool: grpc.handleUnaryCall<resources_pb.LimitOrdersOfPoolRequest, resources_pb.LimitOrdersOfPoolResponse>;
    limitOrders: grpc.handleUnaryCall<resources_pb.LimitOrdersRequest, resources_pb.LimitOrdersResponse>;
    bestTrade: grpc.handleUnaryCall<resources_pb.BestTradeRequest, resources_pb.BestTradeResponse>;
}

export interface IApiServiceClient {
    subscribe(request: resources_pb.SubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<resources_pb.SubscribeResponse>;
    subscribe(request: resources_pb.SubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<resources_pb.SubscribeResponse>;
    halts(request: resources_pb.HaltsRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.HaltsResponse) => void): grpc.ClientUnaryCall;
    halts(request: resources_pb.HaltsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.HaltsResponse) => void): grpc.ClientUnaryCall;
    halts(request: resources_pb.HaltsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.HaltsResponse) => void): grpc.ClientUnaryCall;
    genesis(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: resources_pb.GenesisResponse) => void): grpc.ClientUnaryCall;
    genesis(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.GenesisResponse) => void): grpc.ClientUnaryCall;
    genesis(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.GenesisResponse) => void): grpc.ClientUnaryCall;
    minGasPrice(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: resources_pb.MinGasPriceResponse) => void): grpc.ClientUnaryCall;
    minGasPrice(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.MinGasPriceResponse) => void): grpc.ClientUnaryCall;
    minGasPrice(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.MinGasPriceResponse) => void): grpc.ClientUnaryCall;
    netInfo(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: resources_pb.NetInfoResponse) => void): grpc.ClientUnaryCall;
    netInfo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.NetInfoResponse) => void): grpc.ClientUnaryCall;
    netInfo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.NetInfoResponse) => void): grpc.ClientUnaryCall;
    status(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: resources_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    status(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    status(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    address(request: resources_pb.AddressRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.AddressResponse) => void): grpc.ClientUnaryCall;
    address(request: resources_pb.AddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.AddressResponse) => void): grpc.ClientUnaryCall;
    address(request: resources_pb.AddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.AddressResponse) => void): grpc.ClientUnaryCall;
    addresses(request: resources_pb.AddressesRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.AddressesResponse) => void): grpc.ClientUnaryCall;
    addresses(request: resources_pb.AddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.AddressesResponse) => void): grpc.ClientUnaryCall;
    addresses(request: resources_pb.AddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.AddressesResponse) => void): grpc.ClientUnaryCall;
    block(request: resources_pb.BlockRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    block(request: resources_pb.BlockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    block(request: resources_pb.BlockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    candidate(request: resources_pb.CandidateRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.CandidateResponse) => void): grpc.ClientUnaryCall;
    candidate(request: resources_pb.CandidateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.CandidateResponse) => void): grpc.ClientUnaryCall;
    candidate(request: resources_pb.CandidateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.CandidateResponse) => void): grpc.ClientUnaryCall;
    candidates(request: resources_pb.CandidatesRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.CandidatesResponse) => void): grpc.ClientUnaryCall;
    candidates(request: resources_pb.CandidatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.CandidatesResponse) => void): grpc.ClientUnaryCall;
    candidates(request: resources_pb.CandidatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.CandidatesResponse) => void): grpc.ClientUnaryCall;
    coinInfoById(request: resources_pb.CoinIdRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.CoinInfoResponse) => void): grpc.ClientUnaryCall;
    coinInfoById(request: resources_pb.CoinIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.CoinInfoResponse) => void): grpc.ClientUnaryCall;
    coinInfoById(request: resources_pb.CoinIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.CoinInfoResponse) => void): grpc.ClientUnaryCall;
    coinInfo(request: resources_pb.CoinInfoRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.CoinInfoResponse) => void): grpc.ClientUnaryCall;
    coinInfo(request: resources_pb.CoinInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.CoinInfoResponse) => void): grpc.ClientUnaryCall;
    coinInfo(request: resources_pb.CoinInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.CoinInfoResponse) => void): grpc.ClientUnaryCall;
    estimateCoinBuy(request: resources_pb.EstimateCoinBuyRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateCoinBuyResponse) => void): grpc.ClientUnaryCall;
    estimateCoinBuy(request: resources_pb.EstimateCoinBuyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateCoinBuyResponse) => void): grpc.ClientUnaryCall;
    estimateCoinBuy(request: resources_pb.EstimateCoinBuyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateCoinBuyResponse) => void): grpc.ClientUnaryCall;
    estimateCoinSell(request: resources_pb.EstimateCoinSellRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateCoinSellResponse) => void): grpc.ClientUnaryCall;
    estimateCoinSell(request: resources_pb.EstimateCoinSellRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateCoinSellResponse) => void): grpc.ClientUnaryCall;
    estimateCoinSell(request: resources_pb.EstimateCoinSellRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateCoinSellResponse) => void): grpc.ClientUnaryCall;
    estimateCoinSellAll(request: resources_pb.EstimateCoinSellAllRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateCoinSellAllResponse) => void): grpc.ClientUnaryCall;
    estimateCoinSellAll(request: resources_pb.EstimateCoinSellAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateCoinSellAllResponse) => void): grpc.ClientUnaryCall;
    estimateCoinSellAll(request: resources_pb.EstimateCoinSellAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateCoinSellAllResponse) => void): grpc.ClientUnaryCall;
    estimateTxCommission(request: resources_pb.EstimateTxCommissionRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateTxCommissionResponse) => void): grpc.ClientUnaryCall;
    estimateTxCommission(request: resources_pb.EstimateTxCommissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateTxCommissionResponse) => void): grpc.ClientUnaryCall;
    estimateTxCommission(request: resources_pb.EstimateTxCommissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateTxCommissionResponse) => void): grpc.ClientUnaryCall;
    events(request: resources_pb.EventsRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.EventsResponse) => void): grpc.ClientUnaryCall;
    events(request: resources_pb.EventsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.EventsResponse) => void): grpc.ClientUnaryCall;
    events(request: resources_pb.EventsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.EventsResponse) => void): grpc.ClientUnaryCall;
    maxGasPrice(request: resources_pb.MaxGasPriceRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.MaxGasPriceResponse) => void): grpc.ClientUnaryCall;
    maxGasPrice(request: resources_pb.MaxGasPriceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.MaxGasPriceResponse) => void): grpc.ClientUnaryCall;
    maxGasPrice(request: resources_pb.MaxGasPriceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.MaxGasPriceResponse) => void): grpc.ClientUnaryCall;
    missedBlocks(request: resources_pb.MissedBlocksRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.MissedBlocksResponse) => void): grpc.ClientUnaryCall;
    missedBlocks(request: resources_pb.MissedBlocksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.MissedBlocksResponse) => void): grpc.ClientUnaryCall;
    missedBlocks(request: resources_pb.MissedBlocksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.MissedBlocksResponse) => void): grpc.ClientUnaryCall;
    sendTransaction(request: resources_pb.SendTransactionRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    sendTransaction(request: resources_pb.SendTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    sendTransaction(request: resources_pb.SendTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    transaction(request: resources_pb.TransactionRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    transaction(request: resources_pb.TransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    transaction(request: resources_pb.TransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    transactions(request: resources_pb.TransactionsRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.TransactionsResponse) => void): grpc.ClientUnaryCall;
    transactions(request: resources_pb.TransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.TransactionsResponse) => void): grpc.ClientUnaryCall;
    transactions(request: resources_pb.TransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.TransactionsResponse) => void): grpc.ClientUnaryCall;
    unconfirmedTxs(request: resources_pb.UnconfirmedTxsRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.UnconfirmedTxsResponse) => void): grpc.ClientUnaryCall;
    unconfirmedTxs(request: resources_pb.UnconfirmedTxsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.UnconfirmedTxsResponse) => void): grpc.ClientUnaryCall;
    unconfirmedTxs(request: resources_pb.UnconfirmedTxsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.UnconfirmedTxsResponse) => void): grpc.ClientUnaryCall;
    validators(request: resources_pb.ValidatorsRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.ValidatorsResponse) => void): grpc.ClientUnaryCall;
    validators(request: resources_pb.ValidatorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.ValidatorsResponse) => void): grpc.ClientUnaryCall;
    validators(request: resources_pb.ValidatorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.ValidatorsResponse) => void): grpc.ClientUnaryCall;
    frozen(request: resources_pb.FrozenRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.FrozenResponse) => void): grpc.ClientUnaryCall;
    frozen(request: resources_pb.FrozenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.FrozenResponse) => void): grpc.ClientUnaryCall;
    frozen(request: resources_pb.FrozenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.FrozenResponse) => void): grpc.ClientUnaryCall;
    frozenAll(request: resources_pb.FrozenAllRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.FrozenResponse) => void): grpc.ClientUnaryCall;
    frozenAll(request: resources_pb.FrozenAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.FrozenResponse) => void): grpc.ClientUnaryCall;
    frozenAll(request: resources_pb.FrozenAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.FrozenResponse) => void): grpc.ClientUnaryCall;
    waitList(request: resources_pb.WaitListRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.WaitListResponse) => void): grpc.ClientUnaryCall;
    waitList(request: resources_pb.WaitListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.WaitListResponse) => void): grpc.ClientUnaryCall;
    waitList(request: resources_pb.WaitListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.WaitListResponse) => void): grpc.ClientUnaryCall;
    testBlock(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: resources_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    testBlock(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    testBlock(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    swapPool(request: resources_pb.SwapPoolRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.SwapPoolResponse) => void): grpc.ClientUnaryCall;
    swapPool(request: resources_pb.SwapPoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.SwapPoolResponse) => void): grpc.ClientUnaryCall;
    swapPool(request: resources_pb.SwapPoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.SwapPoolResponse) => void): grpc.ClientUnaryCall;
    swapPools(request: resources_pb.SwapPoolsRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.SwapPoolsResponse) => void): grpc.ClientUnaryCall;
    swapPools(request: resources_pb.SwapPoolsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.SwapPoolsResponse) => void): grpc.ClientUnaryCall;
    swapPools(request: resources_pb.SwapPoolsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.SwapPoolsResponse) => void): grpc.ClientUnaryCall;
    swapPoolProvider(request: resources_pb.SwapPoolProviderRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.SwapPoolResponse) => void): grpc.ClientUnaryCall;
    swapPoolProvider(request: resources_pb.SwapPoolProviderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.SwapPoolResponse) => void): grpc.ClientUnaryCall;
    swapPoolProvider(request: resources_pb.SwapPoolProviderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.SwapPoolResponse) => void): grpc.ClientUnaryCall;
    priceCommission(request: resources_pb.PriceCommissionRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.PriceCommissionResponse) => void): grpc.ClientUnaryCall;
    priceCommission(request: resources_pb.PriceCommissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.PriceCommissionResponse) => void): grpc.ClientUnaryCall;
    priceCommission(request: resources_pb.PriceCommissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.PriceCommissionResponse) => void): grpc.ClientUnaryCall;
    versionNetwork(request: resources_pb.VersionNetworkRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.VersionNetworkResponse) => void): grpc.ClientUnaryCall;
    versionNetwork(request: resources_pb.VersionNetworkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.VersionNetworkResponse) => void): grpc.ClientUnaryCall;
    versionNetwork(request: resources_pb.VersionNetworkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.VersionNetworkResponse) => void): grpc.ClientUnaryCall;
    commissionVotes(request: resources_pb.CommissionVotesRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.CommissionVotesResponse) => void): grpc.ClientUnaryCall;
    commissionVotes(request: resources_pb.CommissionVotesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.CommissionVotesResponse) => void): grpc.ClientUnaryCall;
    commissionVotes(request: resources_pb.CommissionVotesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.CommissionVotesResponse) => void): grpc.ClientUnaryCall;
    updateVotes(request: resources_pb.UpdateVotesRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.UpdateVotesResponse) => void): grpc.ClientUnaryCall;
    updateVotes(request: resources_pb.UpdateVotesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.UpdateVotesResponse) => void): grpc.ClientUnaryCall;
    updateVotes(request: resources_pb.UpdateVotesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.UpdateVotesResponse) => void): grpc.ClientUnaryCall;
    blocks(request: resources_pb.BlocksRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.BlocksResponse) => void): grpc.ClientUnaryCall;
    blocks(request: resources_pb.BlocksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.BlocksResponse) => void): grpc.ClientUnaryCall;
    blocks(request: resources_pb.BlocksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.BlocksResponse) => void): grpc.ClientUnaryCall;
    limitOrder(request: resources_pb.LimitOrderRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.LimitOrderResponse) => void): grpc.ClientUnaryCall;
    limitOrder(request: resources_pb.LimitOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.LimitOrderResponse) => void): grpc.ClientUnaryCall;
    limitOrder(request: resources_pb.LimitOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.LimitOrderResponse) => void): grpc.ClientUnaryCall;
    limitOrdersOfPool(request: resources_pb.LimitOrdersOfPoolRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.LimitOrdersOfPoolResponse) => void): grpc.ClientUnaryCall;
    limitOrdersOfPool(request: resources_pb.LimitOrdersOfPoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.LimitOrdersOfPoolResponse) => void): grpc.ClientUnaryCall;
    limitOrdersOfPool(request: resources_pb.LimitOrdersOfPoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.LimitOrdersOfPoolResponse) => void): grpc.ClientUnaryCall;
    limitOrders(request: resources_pb.LimitOrdersRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.LimitOrdersResponse) => void): grpc.ClientUnaryCall;
    limitOrders(request: resources_pb.LimitOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.LimitOrdersResponse) => void): grpc.ClientUnaryCall;
    limitOrders(request: resources_pb.LimitOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.LimitOrdersResponse) => void): grpc.ClientUnaryCall;
    bestTrade(request: resources_pb.BestTradeRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.BestTradeResponse) => void): grpc.ClientUnaryCall;
    bestTrade(request: resources_pb.BestTradeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.BestTradeResponse) => void): grpc.ClientUnaryCall;
    bestTrade(request: resources_pb.BestTradeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.BestTradeResponse) => void): grpc.ClientUnaryCall;
}

export class ApiServiceClient extends grpc.Client implements IApiServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public subscribe(request: resources_pb.SubscribeRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<resources_pb.SubscribeResponse>;
    public subscribe(request: resources_pb.SubscribeRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<resources_pb.SubscribeResponse>;
    public halts(request: resources_pb.HaltsRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.HaltsResponse) => void): grpc.ClientUnaryCall;
    public halts(request: resources_pb.HaltsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.HaltsResponse) => void): grpc.ClientUnaryCall;
    public halts(request: resources_pb.HaltsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.HaltsResponse) => void): grpc.ClientUnaryCall;
    public genesis(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: resources_pb.GenesisResponse) => void): grpc.ClientUnaryCall;
    public genesis(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.GenesisResponse) => void): grpc.ClientUnaryCall;
    public genesis(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.GenesisResponse) => void): grpc.ClientUnaryCall;
    public minGasPrice(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: resources_pb.MinGasPriceResponse) => void): grpc.ClientUnaryCall;
    public minGasPrice(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.MinGasPriceResponse) => void): grpc.ClientUnaryCall;
    public minGasPrice(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.MinGasPriceResponse) => void): grpc.ClientUnaryCall;
    public netInfo(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: resources_pb.NetInfoResponse) => void): grpc.ClientUnaryCall;
    public netInfo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.NetInfoResponse) => void): grpc.ClientUnaryCall;
    public netInfo(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.NetInfoResponse) => void): grpc.ClientUnaryCall;
    public status(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: resources_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public status(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public status(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.StatusResponse) => void): grpc.ClientUnaryCall;
    public address(request: resources_pb.AddressRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.AddressResponse) => void): grpc.ClientUnaryCall;
    public address(request: resources_pb.AddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.AddressResponse) => void): grpc.ClientUnaryCall;
    public address(request: resources_pb.AddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.AddressResponse) => void): grpc.ClientUnaryCall;
    public addresses(request: resources_pb.AddressesRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.AddressesResponse) => void): grpc.ClientUnaryCall;
    public addresses(request: resources_pb.AddressesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.AddressesResponse) => void): grpc.ClientUnaryCall;
    public addresses(request: resources_pb.AddressesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.AddressesResponse) => void): grpc.ClientUnaryCall;
    public block(request: resources_pb.BlockRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    public block(request: resources_pb.BlockRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    public block(request: resources_pb.BlockRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    public candidate(request: resources_pb.CandidateRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.CandidateResponse) => void): grpc.ClientUnaryCall;
    public candidate(request: resources_pb.CandidateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.CandidateResponse) => void): grpc.ClientUnaryCall;
    public candidate(request: resources_pb.CandidateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.CandidateResponse) => void): grpc.ClientUnaryCall;
    public candidates(request: resources_pb.CandidatesRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.CandidatesResponse) => void): grpc.ClientUnaryCall;
    public candidates(request: resources_pb.CandidatesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.CandidatesResponse) => void): grpc.ClientUnaryCall;
    public candidates(request: resources_pb.CandidatesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.CandidatesResponse) => void): grpc.ClientUnaryCall;
    public coinInfoById(request: resources_pb.CoinIdRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.CoinInfoResponse) => void): grpc.ClientUnaryCall;
    public coinInfoById(request: resources_pb.CoinIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.CoinInfoResponse) => void): grpc.ClientUnaryCall;
    public coinInfoById(request: resources_pb.CoinIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.CoinInfoResponse) => void): grpc.ClientUnaryCall;
    public coinInfo(request: resources_pb.CoinInfoRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.CoinInfoResponse) => void): grpc.ClientUnaryCall;
    public coinInfo(request: resources_pb.CoinInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.CoinInfoResponse) => void): grpc.ClientUnaryCall;
    public coinInfo(request: resources_pb.CoinInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.CoinInfoResponse) => void): grpc.ClientUnaryCall;
    public estimateCoinBuy(request: resources_pb.EstimateCoinBuyRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateCoinBuyResponse) => void): grpc.ClientUnaryCall;
    public estimateCoinBuy(request: resources_pb.EstimateCoinBuyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateCoinBuyResponse) => void): grpc.ClientUnaryCall;
    public estimateCoinBuy(request: resources_pb.EstimateCoinBuyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateCoinBuyResponse) => void): grpc.ClientUnaryCall;
    public estimateCoinSell(request: resources_pb.EstimateCoinSellRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateCoinSellResponse) => void): grpc.ClientUnaryCall;
    public estimateCoinSell(request: resources_pb.EstimateCoinSellRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateCoinSellResponse) => void): grpc.ClientUnaryCall;
    public estimateCoinSell(request: resources_pb.EstimateCoinSellRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateCoinSellResponse) => void): grpc.ClientUnaryCall;
    public estimateCoinSellAll(request: resources_pb.EstimateCoinSellAllRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateCoinSellAllResponse) => void): grpc.ClientUnaryCall;
    public estimateCoinSellAll(request: resources_pb.EstimateCoinSellAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateCoinSellAllResponse) => void): grpc.ClientUnaryCall;
    public estimateCoinSellAll(request: resources_pb.EstimateCoinSellAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateCoinSellAllResponse) => void): grpc.ClientUnaryCall;
    public estimateTxCommission(request: resources_pb.EstimateTxCommissionRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateTxCommissionResponse) => void): grpc.ClientUnaryCall;
    public estimateTxCommission(request: resources_pb.EstimateTxCommissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateTxCommissionResponse) => void): grpc.ClientUnaryCall;
    public estimateTxCommission(request: resources_pb.EstimateTxCommissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.EstimateTxCommissionResponse) => void): grpc.ClientUnaryCall;
    public events(request: resources_pb.EventsRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.EventsResponse) => void): grpc.ClientUnaryCall;
    public events(request: resources_pb.EventsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.EventsResponse) => void): grpc.ClientUnaryCall;
    public events(request: resources_pb.EventsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.EventsResponse) => void): grpc.ClientUnaryCall;
    public maxGasPrice(request: resources_pb.MaxGasPriceRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.MaxGasPriceResponse) => void): grpc.ClientUnaryCall;
    public maxGasPrice(request: resources_pb.MaxGasPriceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.MaxGasPriceResponse) => void): grpc.ClientUnaryCall;
    public maxGasPrice(request: resources_pb.MaxGasPriceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.MaxGasPriceResponse) => void): grpc.ClientUnaryCall;
    public missedBlocks(request: resources_pb.MissedBlocksRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.MissedBlocksResponse) => void): grpc.ClientUnaryCall;
    public missedBlocks(request: resources_pb.MissedBlocksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.MissedBlocksResponse) => void): grpc.ClientUnaryCall;
    public missedBlocks(request: resources_pb.MissedBlocksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.MissedBlocksResponse) => void): grpc.ClientUnaryCall;
    public sendTransaction(request: resources_pb.SendTransactionRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    public sendTransaction(request: resources_pb.SendTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    public sendTransaction(request: resources_pb.SendTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.SendTransactionResponse) => void): grpc.ClientUnaryCall;
    public transaction(request: resources_pb.TransactionRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    public transaction(request: resources_pb.TransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    public transaction(request: resources_pb.TransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.TransactionResponse) => void): grpc.ClientUnaryCall;
    public transactions(request: resources_pb.TransactionsRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.TransactionsResponse) => void): grpc.ClientUnaryCall;
    public transactions(request: resources_pb.TransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.TransactionsResponse) => void): grpc.ClientUnaryCall;
    public transactions(request: resources_pb.TransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.TransactionsResponse) => void): grpc.ClientUnaryCall;
    public unconfirmedTxs(request: resources_pb.UnconfirmedTxsRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.UnconfirmedTxsResponse) => void): grpc.ClientUnaryCall;
    public unconfirmedTxs(request: resources_pb.UnconfirmedTxsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.UnconfirmedTxsResponse) => void): grpc.ClientUnaryCall;
    public unconfirmedTxs(request: resources_pb.UnconfirmedTxsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.UnconfirmedTxsResponse) => void): grpc.ClientUnaryCall;
    public validators(request: resources_pb.ValidatorsRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.ValidatorsResponse) => void): grpc.ClientUnaryCall;
    public validators(request: resources_pb.ValidatorsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.ValidatorsResponse) => void): grpc.ClientUnaryCall;
    public validators(request: resources_pb.ValidatorsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.ValidatorsResponse) => void): grpc.ClientUnaryCall;
    public frozen(request: resources_pb.FrozenRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.FrozenResponse) => void): grpc.ClientUnaryCall;
    public frozen(request: resources_pb.FrozenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.FrozenResponse) => void): grpc.ClientUnaryCall;
    public frozen(request: resources_pb.FrozenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.FrozenResponse) => void): grpc.ClientUnaryCall;
    public frozenAll(request: resources_pb.FrozenAllRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.FrozenResponse) => void): grpc.ClientUnaryCall;
    public frozenAll(request: resources_pb.FrozenAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.FrozenResponse) => void): grpc.ClientUnaryCall;
    public frozenAll(request: resources_pb.FrozenAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.FrozenResponse) => void): grpc.ClientUnaryCall;
    public waitList(request: resources_pb.WaitListRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.WaitListResponse) => void): grpc.ClientUnaryCall;
    public waitList(request: resources_pb.WaitListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.WaitListResponse) => void): grpc.ClientUnaryCall;
    public waitList(request: resources_pb.WaitListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.WaitListResponse) => void): grpc.ClientUnaryCall;
    public testBlock(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: resources_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    public testBlock(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    public testBlock(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.BlockResponse) => void): grpc.ClientUnaryCall;
    public swapPool(request: resources_pb.SwapPoolRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.SwapPoolResponse) => void): grpc.ClientUnaryCall;
    public swapPool(request: resources_pb.SwapPoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.SwapPoolResponse) => void): grpc.ClientUnaryCall;
    public swapPool(request: resources_pb.SwapPoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.SwapPoolResponse) => void): grpc.ClientUnaryCall;
    public swapPools(request: resources_pb.SwapPoolsRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.SwapPoolsResponse) => void): grpc.ClientUnaryCall;
    public swapPools(request: resources_pb.SwapPoolsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.SwapPoolsResponse) => void): grpc.ClientUnaryCall;
    public swapPools(request: resources_pb.SwapPoolsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.SwapPoolsResponse) => void): grpc.ClientUnaryCall;
    public swapPoolProvider(request: resources_pb.SwapPoolProviderRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.SwapPoolResponse) => void): grpc.ClientUnaryCall;
    public swapPoolProvider(request: resources_pb.SwapPoolProviderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.SwapPoolResponse) => void): grpc.ClientUnaryCall;
    public swapPoolProvider(request: resources_pb.SwapPoolProviderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.SwapPoolResponse) => void): grpc.ClientUnaryCall;
    public priceCommission(request: resources_pb.PriceCommissionRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.PriceCommissionResponse) => void): grpc.ClientUnaryCall;
    public priceCommission(request: resources_pb.PriceCommissionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.PriceCommissionResponse) => void): grpc.ClientUnaryCall;
    public priceCommission(request: resources_pb.PriceCommissionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.PriceCommissionResponse) => void): grpc.ClientUnaryCall;
    public versionNetwork(request: resources_pb.VersionNetworkRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.VersionNetworkResponse) => void): grpc.ClientUnaryCall;
    public versionNetwork(request: resources_pb.VersionNetworkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.VersionNetworkResponse) => void): grpc.ClientUnaryCall;
    public versionNetwork(request: resources_pb.VersionNetworkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.VersionNetworkResponse) => void): grpc.ClientUnaryCall;
    public commissionVotes(request: resources_pb.CommissionVotesRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.CommissionVotesResponse) => void): grpc.ClientUnaryCall;
    public commissionVotes(request: resources_pb.CommissionVotesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.CommissionVotesResponse) => void): grpc.ClientUnaryCall;
    public commissionVotes(request: resources_pb.CommissionVotesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.CommissionVotesResponse) => void): grpc.ClientUnaryCall;
    public updateVotes(request: resources_pb.UpdateVotesRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.UpdateVotesResponse) => void): grpc.ClientUnaryCall;
    public updateVotes(request: resources_pb.UpdateVotesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.UpdateVotesResponse) => void): grpc.ClientUnaryCall;
    public updateVotes(request: resources_pb.UpdateVotesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.UpdateVotesResponse) => void): grpc.ClientUnaryCall;
    public blocks(request: resources_pb.BlocksRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.BlocksResponse) => void): grpc.ClientUnaryCall;
    public blocks(request: resources_pb.BlocksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.BlocksResponse) => void): grpc.ClientUnaryCall;
    public blocks(request: resources_pb.BlocksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.BlocksResponse) => void): grpc.ClientUnaryCall;
    public limitOrder(request: resources_pb.LimitOrderRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.LimitOrderResponse) => void): grpc.ClientUnaryCall;
    public limitOrder(request: resources_pb.LimitOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.LimitOrderResponse) => void): grpc.ClientUnaryCall;
    public limitOrder(request: resources_pb.LimitOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.LimitOrderResponse) => void): grpc.ClientUnaryCall;
    public limitOrdersOfPool(request: resources_pb.LimitOrdersOfPoolRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.LimitOrdersOfPoolResponse) => void): grpc.ClientUnaryCall;
    public limitOrdersOfPool(request: resources_pb.LimitOrdersOfPoolRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.LimitOrdersOfPoolResponse) => void): grpc.ClientUnaryCall;
    public limitOrdersOfPool(request: resources_pb.LimitOrdersOfPoolRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.LimitOrdersOfPoolResponse) => void): grpc.ClientUnaryCall;
    public limitOrders(request: resources_pb.LimitOrdersRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.LimitOrdersResponse) => void): grpc.ClientUnaryCall;
    public limitOrders(request: resources_pb.LimitOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.LimitOrdersResponse) => void): grpc.ClientUnaryCall;
    public limitOrders(request: resources_pb.LimitOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.LimitOrdersResponse) => void): grpc.ClientUnaryCall;
    public bestTrade(request: resources_pb.BestTradeRequest, callback: (error: grpc.ServiceError | null, response: resources_pb.BestTradeResponse) => void): grpc.ClientUnaryCall;
    public bestTrade(request: resources_pb.BestTradeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: resources_pb.BestTradeResponse) => void): grpc.ClientUnaryCall;
    public bestTrade(request: resources_pb.BestTradeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: resources_pb.BestTradeResponse) => void): grpc.ClientUnaryCall;
}
