// GENERATED CODE -- DO NOT EDIT!
'use strict';
var grpc = require('@grpc/grpc-js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var resources_pb = require('./resources_pb.js');
function serialize_api_pb_AddressRequest(arg) {
    if (!(arg instanceof resources_pb.AddressRequest)) {
        throw new Error('Expected argument of type api_pb.AddressRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_AddressRequest(buffer_arg) {
    return resources_pb.AddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_AddressResponse(arg) {
    if (!(arg instanceof resources_pb.AddressResponse)) {
        throw new Error('Expected argument of type api_pb.AddressResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_AddressResponse(buffer_arg) {
    return resources_pb.AddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_AddressesRequest(arg) {
    if (!(arg instanceof resources_pb.AddressesRequest)) {
        throw new Error('Expected argument of type api_pb.AddressesRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_AddressesRequest(buffer_arg) {
    return resources_pb.AddressesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_AddressesResponse(arg) {
    if (!(arg instanceof resources_pb.AddressesResponse)) {
        throw new Error('Expected argument of type api_pb.AddressesResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_AddressesResponse(buffer_arg) {
    return resources_pb.AddressesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_BestTradeRequest(arg) {
    if (!(arg instanceof resources_pb.BestTradeRequest)) {
        throw new Error('Expected argument of type api_pb.BestTradeRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_BestTradeRequest(buffer_arg) {
    return resources_pb.BestTradeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_BestTradeResponse(arg) {
    if (!(arg instanceof resources_pb.BestTradeResponse)) {
        throw new Error('Expected argument of type api_pb.BestTradeResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_BestTradeResponse(buffer_arg) {
    return resources_pb.BestTradeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_BlockRequest(arg) {
    if (!(arg instanceof resources_pb.BlockRequest)) {
        throw new Error('Expected argument of type api_pb.BlockRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_BlockRequest(buffer_arg) {
    return resources_pb.BlockRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_BlockResponse(arg) {
    if (!(arg instanceof resources_pb.BlockResponse)) {
        throw new Error('Expected argument of type api_pb.BlockResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_BlockResponse(buffer_arg) {
    return resources_pb.BlockResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_BlocksRequest(arg) {
    if (!(arg instanceof resources_pb.BlocksRequest)) {
        throw new Error('Expected argument of type api_pb.BlocksRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_BlocksRequest(buffer_arg) {
    return resources_pb.BlocksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_BlocksResponse(arg) {
    if (!(arg instanceof resources_pb.BlocksResponse)) {
        throw new Error('Expected argument of type api_pb.BlocksResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_BlocksResponse(buffer_arg) {
    return resources_pb.BlocksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_CandidateRequest(arg) {
    if (!(arg instanceof resources_pb.CandidateRequest)) {
        throw new Error('Expected argument of type api_pb.CandidateRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_CandidateRequest(buffer_arg) {
    return resources_pb.CandidateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_CandidateResponse(arg) {
    if (!(arg instanceof resources_pb.CandidateResponse)) {
        throw new Error('Expected argument of type api_pb.CandidateResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_CandidateResponse(buffer_arg) {
    return resources_pb.CandidateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_CandidatesRequest(arg) {
    if (!(arg instanceof resources_pb.CandidatesRequest)) {
        throw new Error('Expected argument of type api_pb.CandidatesRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_CandidatesRequest(buffer_arg) {
    return resources_pb.CandidatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_CandidatesResponse(arg) {
    if (!(arg instanceof resources_pb.CandidatesResponse)) {
        throw new Error('Expected argument of type api_pb.CandidatesResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_CandidatesResponse(buffer_arg) {
    return resources_pb.CandidatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_CoinIdRequest(arg) {
    if (!(arg instanceof resources_pb.CoinIdRequest)) {
        throw new Error('Expected argument of type api_pb.CoinIdRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_CoinIdRequest(buffer_arg) {
    return resources_pb.CoinIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_CoinInfoRequest(arg) {
    if (!(arg instanceof resources_pb.CoinInfoRequest)) {
        throw new Error('Expected argument of type api_pb.CoinInfoRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_CoinInfoRequest(buffer_arg) {
    return resources_pb.CoinInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_CoinInfoResponse(arg) {
    if (!(arg instanceof resources_pb.CoinInfoResponse)) {
        throw new Error('Expected argument of type api_pb.CoinInfoResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_CoinInfoResponse(buffer_arg) {
    return resources_pb.CoinInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_CommissionVotesRequest(arg) {
    if (!(arg instanceof resources_pb.CommissionVotesRequest)) {
        throw new Error('Expected argument of type api_pb.CommissionVotesRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_CommissionVotesRequest(buffer_arg) {
    return resources_pb.CommissionVotesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_CommissionVotesResponse(arg) {
    if (!(arg instanceof resources_pb.CommissionVotesResponse)) {
        throw new Error('Expected argument of type api_pb.CommissionVotesResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_CommissionVotesResponse(buffer_arg) {
    return resources_pb.CommissionVotesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_EstimateCoinBuyRequest(arg) {
    if (!(arg instanceof resources_pb.EstimateCoinBuyRequest)) {
        throw new Error('Expected argument of type api_pb.EstimateCoinBuyRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_EstimateCoinBuyRequest(buffer_arg) {
    return resources_pb.EstimateCoinBuyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_EstimateCoinBuyResponse(arg) {
    if (!(arg instanceof resources_pb.EstimateCoinBuyResponse)) {
        throw new Error('Expected argument of type api_pb.EstimateCoinBuyResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_EstimateCoinBuyResponse(buffer_arg) {
    return resources_pb.EstimateCoinBuyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_EstimateCoinSellAllRequest(arg) {
    if (!(arg instanceof resources_pb.EstimateCoinSellAllRequest)) {
        throw new Error('Expected argument of type api_pb.EstimateCoinSellAllRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_EstimateCoinSellAllRequest(buffer_arg) {
    return resources_pb.EstimateCoinSellAllRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_EstimateCoinSellAllResponse(arg) {
    if (!(arg instanceof resources_pb.EstimateCoinSellAllResponse)) {
        throw new Error('Expected argument of type api_pb.EstimateCoinSellAllResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_EstimateCoinSellAllResponse(buffer_arg) {
    return resources_pb.EstimateCoinSellAllResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_EstimateCoinSellRequest(arg) {
    if (!(arg instanceof resources_pb.EstimateCoinSellRequest)) {
        throw new Error('Expected argument of type api_pb.EstimateCoinSellRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_EstimateCoinSellRequest(buffer_arg) {
    return resources_pb.EstimateCoinSellRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_EstimateCoinSellResponse(arg) {
    if (!(arg instanceof resources_pb.EstimateCoinSellResponse)) {
        throw new Error('Expected argument of type api_pb.EstimateCoinSellResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_EstimateCoinSellResponse(buffer_arg) {
    return resources_pb.EstimateCoinSellResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_EstimateTxCommissionRequest(arg) {
    if (!(arg instanceof resources_pb.EstimateTxCommissionRequest)) {
        throw new Error('Expected argument of type api_pb.EstimateTxCommissionRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_EstimateTxCommissionRequest(buffer_arg) {
    return resources_pb.EstimateTxCommissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_EstimateTxCommissionResponse(arg) {
    if (!(arg instanceof resources_pb.EstimateTxCommissionResponse)) {
        throw new Error('Expected argument of type api_pb.EstimateTxCommissionResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_EstimateTxCommissionResponse(buffer_arg) {
    return resources_pb.EstimateTxCommissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_EventsRequest(arg) {
    if (!(arg instanceof resources_pb.EventsRequest)) {
        throw new Error('Expected argument of type api_pb.EventsRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_EventsRequest(buffer_arg) {
    return resources_pb.EventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_EventsResponse(arg) {
    if (!(arg instanceof resources_pb.EventsResponse)) {
        throw new Error('Expected argument of type api_pb.EventsResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_EventsResponse(buffer_arg) {
    return resources_pb.EventsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_FrozenAllRequest(arg) {
    if (!(arg instanceof resources_pb.FrozenAllRequest)) {
        throw new Error('Expected argument of type api_pb.FrozenAllRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_FrozenAllRequest(buffer_arg) {
    return resources_pb.FrozenAllRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_FrozenRequest(arg) {
    if (!(arg instanceof resources_pb.FrozenRequest)) {
        throw new Error('Expected argument of type api_pb.FrozenRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_FrozenRequest(buffer_arg) {
    return resources_pb.FrozenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_FrozenResponse(arg) {
    if (!(arg instanceof resources_pb.FrozenResponse)) {
        throw new Error('Expected argument of type api_pb.FrozenResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_FrozenResponse(buffer_arg) {
    return resources_pb.FrozenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_GenesisResponse(arg) {
    if (!(arg instanceof resources_pb.GenesisResponse)) {
        throw new Error('Expected argument of type api_pb.GenesisResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_GenesisResponse(buffer_arg) {
    return resources_pb.GenesisResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_HaltsRequest(arg) {
    if (!(arg instanceof resources_pb.HaltsRequest)) {
        throw new Error('Expected argument of type api_pb.HaltsRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_HaltsRequest(buffer_arg) {
    return resources_pb.HaltsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_HaltsResponse(arg) {
    if (!(arg instanceof resources_pb.HaltsResponse)) {
        throw new Error('Expected argument of type api_pb.HaltsResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_HaltsResponse(buffer_arg) {
    return resources_pb.HaltsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_LimitOrderRequest(arg) {
    if (!(arg instanceof resources_pb.LimitOrderRequest)) {
        throw new Error('Expected argument of type api_pb.LimitOrderRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_LimitOrderRequest(buffer_arg) {
    return resources_pb.LimitOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_LimitOrderResponse(arg) {
    if (!(arg instanceof resources_pb.LimitOrderResponse)) {
        throw new Error('Expected argument of type api_pb.LimitOrderResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_LimitOrderResponse(buffer_arg) {
    return resources_pb.LimitOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_LimitOrdersOfPoolRequest(arg) {
    if (!(arg instanceof resources_pb.LimitOrdersOfPoolRequest)) {
        throw new Error('Expected argument of type api_pb.LimitOrdersOfPoolRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_LimitOrdersOfPoolRequest(buffer_arg) {
    return resources_pb.LimitOrdersOfPoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_LimitOrdersOfPoolResponse(arg) {
    if (!(arg instanceof resources_pb.LimitOrdersOfPoolResponse)) {
        throw new Error('Expected argument of type api_pb.LimitOrdersOfPoolResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_LimitOrdersOfPoolResponse(buffer_arg) {
    return resources_pb.LimitOrdersOfPoolResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_LimitOrdersRequest(arg) {
    if (!(arg instanceof resources_pb.LimitOrdersRequest)) {
        throw new Error('Expected argument of type api_pb.LimitOrdersRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_LimitOrdersRequest(buffer_arg) {
    return resources_pb.LimitOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_LimitOrdersResponse(arg) {
    if (!(arg instanceof resources_pb.LimitOrdersResponse)) {
        throw new Error('Expected argument of type api_pb.LimitOrdersResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_LimitOrdersResponse(buffer_arg) {
    return resources_pb.LimitOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_MaxGasPriceRequest(arg) {
    if (!(arg instanceof resources_pb.MaxGasPriceRequest)) {
        throw new Error('Expected argument of type api_pb.MaxGasPriceRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_MaxGasPriceRequest(buffer_arg) {
    return resources_pb.MaxGasPriceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_MaxGasPriceResponse(arg) {
    if (!(arg instanceof resources_pb.MaxGasPriceResponse)) {
        throw new Error('Expected argument of type api_pb.MaxGasPriceResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_MaxGasPriceResponse(buffer_arg) {
    return resources_pb.MaxGasPriceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_MinGasPriceResponse(arg) {
    if (!(arg instanceof resources_pb.MinGasPriceResponse)) {
        throw new Error('Expected argument of type api_pb.MinGasPriceResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_MinGasPriceResponse(buffer_arg) {
    return resources_pb.MinGasPriceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_MissedBlocksRequest(arg) {
    if (!(arg instanceof resources_pb.MissedBlocksRequest)) {
        throw new Error('Expected argument of type api_pb.MissedBlocksRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_MissedBlocksRequest(buffer_arg) {
    return resources_pb.MissedBlocksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_MissedBlocksResponse(arg) {
    if (!(arg instanceof resources_pb.MissedBlocksResponse)) {
        throw new Error('Expected argument of type api_pb.MissedBlocksResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_MissedBlocksResponse(buffer_arg) {
    return resources_pb.MissedBlocksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_NetInfoResponse(arg) {
    if (!(arg instanceof resources_pb.NetInfoResponse)) {
        throw new Error('Expected argument of type api_pb.NetInfoResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_NetInfoResponse(buffer_arg) {
    return resources_pb.NetInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_PriceCommissionRequest(arg) {
    if (!(arg instanceof resources_pb.PriceCommissionRequest)) {
        throw new Error('Expected argument of type api_pb.PriceCommissionRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_PriceCommissionRequest(buffer_arg) {
    return resources_pb.PriceCommissionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_PriceCommissionResponse(arg) {
    if (!(arg instanceof resources_pb.PriceCommissionResponse)) {
        throw new Error('Expected argument of type api_pb.PriceCommissionResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_PriceCommissionResponse(buffer_arg) {
    return resources_pb.PriceCommissionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_SendTransactionRequest(arg) {
    if (!(arg instanceof resources_pb.SendTransactionRequest)) {
        throw new Error('Expected argument of type api_pb.SendTransactionRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_SendTransactionRequest(buffer_arg) {
    return resources_pb.SendTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_SendTransactionResponse(arg) {
    if (!(arg instanceof resources_pb.SendTransactionResponse)) {
        throw new Error('Expected argument of type api_pb.SendTransactionResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_SendTransactionResponse(buffer_arg) {
    return resources_pb.SendTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_StatusResponse(arg) {
    if (!(arg instanceof resources_pb.StatusResponse)) {
        throw new Error('Expected argument of type api_pb.StatusResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_StatusResponse(buffer_arg) {
    return resources_pb.StatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_SubscribeRequest(arg) {
    if (!(arg instanceof resources_pb.SubscribeRequest)) {
        throw new Error('Expected argument of type api_pb.SubscribeRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_SubscribeRequest(buffer_arg) {
    return resources_pb.SubscribeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_SubscribeResponse(arg) {
    if (!(arg instanceof resources_pb.SubscribeResponse)) {
        throw new Error('Expected argument of type api_pb.SubscribeResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_SubscribeResponse(buffer_arg) {
    return resources_pb.SubscribeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_SwapPoolProviderRequest(arg) {
    if (!(arg instanceof resources_pb.SwapPoolProviderRequest)) {
        throw new Error('Expected argument of type api_pb.SwapPoolProviderRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_SwapPoolProviderRequest(buffer_arg) {
    return resources_pb.SwapPoolProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_SwapPoolRequest(arg) {
    if (!(arg instanceof resources_pb.SwapPoolRequest)) {
        throw new Error('Expected argument of type api_pb.SwapPoolRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_SwapPoolRequest(buffer_arg) {
    return resources_pb.SwapPoolRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_SwapPoolResponse(arg) {
    if (!(arg instanceof resources_pb.SwapPoolResponse)) {
        throw new Error('Expected argument of type api_pb.SwapPoolResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_SwapPoolResponse(buffer_arg) {
    return resources_pb.SwapPoolResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_SwapPoolsRequest(arg) {
    if (!(arg instanceof resources_pb.SwapPoolsRequest)) {
        throw new Error('Expected argument of type api_pb.SwapPoolsRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_SwapPoolsRequest(buffer_arg) {
    return resources_pb.SwapPoolsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_SwapPoolsResponse(arg) {
    if (!(arg instanceof resources_pb.SwapPoolsResponse)) {
        throw new Error('Expected argument of type api_pb.SwapPoolsResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_SwapPoolsResponse(buffer_arg) {
    return resources_pb.SwapPoolsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_TransactionRequest(arg) {
    if (!(arg instanceof resources_pb.TransactionRequest)) {
        throw new Error('Expected argument of type api_pb.TransactionRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_TransactionRequest(buffer_arg) {
    return resources_pb.TransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_TransactionResponse(arg) {
    if (!(arg instanceof resources_pb.TransactionResponse)) {
        throw new Error('Expected argument of type api_pb.TransactionResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_TransactionResponse(buffer_arg) {
    return resources_pb.TransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_TransactionsRequest(arg) {
    if (!(arg instanceof resources_pb.TransactionsRequest)) {
        throw new Error('Expected argument of type api_pb.TransactionsRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_TransactionsRequest(buffer_arg) {
    return resources_pb.TransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_TransactionsResponse(arg) {
    if (!(arg instanceof resources_pb.TransactionsResponse)) {
        throw new Error('Expected argument of type api_pb.TransactionsResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_TransactionsResponse(buffer_arg) {
    return resources_pb.TransactionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_UnconfirmedTxsRequest(arg) {
    if (!(arg instanceof resources_pb.UnconfirmedTxsRequest)) {
        throw new Error('Expected argument of type api_pb.UnconfirmedTxsRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_UnconfirmedTxsRequest(buffer_arg) {
    return resources_pb.UnconfirmedTxsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_UnconfirmedTxsResponse(arg) {
    if (!(arg instanceof resources_pb.UnconfirmedTxsResponse)) {
        throw new Error('Expected argument of type api_pb.UnconfirmedTxsResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_UnconfirmedTxsResponse(buffer_arg) {
    return resources_pb.UnconfirmedTxsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_UpdateVotesRequest(arg) {
    if (!(arg instanceof resources_pb.UpdateVotesRequest)) {
        throw new Error('Expected argument of type api_pb.UpdateVotesRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_UpdateVotesRequest(buffer_arg) {
    return resources_pb.UpdateVotesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_UpdateVotesResponse(arg) {
    if (!(arg instanceof resources_pb.UpdateVotesResponse)) {
        throw new Error('Expected argument of type api_pb.UpdateVotesResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_UpdateVotesResponse(buffer_arg) {
    return resources_pb.UpdateVotesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_ValidatorsRequest(arg) {
    if (!(arg instanceof resources_pb.ValidatorsRequest)) {
        throw new Error('Expected argument of type api_pb.ValidatorsRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_ValidatorsRequest(buffer_arg) {
    return resources_pb.ValidatorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_ValidatorsResponse(arg) {
    if (!(arg instanceof resources_pb.ValidatorsResponse)) {
        throw new Error('Expected argument of type api_pb.ValidatorsResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_ValidatorsResponse(buffer_arg) {
    return resources_pb.ValidatorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_VersionNetworkRequest(arg) {
    if (!(arg instanceof resources_pb.VersionNetworkRequest)) {
        throw new Error('Expected argument of type api_pb.VersionNetworkRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_VersionNetworkRequest(buffer_arg) {
    return resources_pb.VersionNetworkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_VersionNetworkResponse(arg) {
    if (!(arg instanceof resources_pb.VersionNetworkResponse)) {
        throw new Error('Expected argument of type api_pb.VersionNetworkResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_VersionNetworkResponse(buffer_arg) {
    return resources_pb.VersionNetworkResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_WaitListRequest(arg) {
    if (!(arg instanceof resources_pb.WaitListRequest)) {
        throw new Error('Expected argument of type api_pb.WaitListRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_WaitListRequest(buffer_arg) {
    return resources_pb.WaitListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_api_pb_WaitListResponse(arg) {
    if (!(arg instanceof resources_pb.WaitListResponse)) {
        throw new Error('Expected argument of type api_pb.WaitListResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_api_pb_WaitListResponse(buffer_arg) {
    return resources_pb.WaitListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_google_protobuf_Empty(arg) {
    if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
        throw new Error('Expected argument of type google.protobuf.Empty');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_google_protobuf_Empty(buffer_arg) {
    return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}
// /*import "protoc-gen-openapiv2/options/annotations.proto";*/
//
var ApiServiceService = exports.ApiServiceService = {
    // Subscribe
    // 
    // Subscribe returns a subscription for events by query. Only supported in WS and gRPC methods.
    subscribe: {
        path: '/api_pb.ApiService/Subscribe',
        requestStream: false,
        responseStream: true,
        requestType: resources_pb.SubscribeRequest,
        responseType: resources_pb.SubscribeResponse,
        requestSerialize: serialize_api_pb_SubscribeRequest,
        requestDeserialize: deserialize_api_pb_SubscribeRequest,
        responseSerialize: serialize_api_pb_SubscribeResponse,
        responseDeserialize: deserialize_api_pb_SubscribeResponse,
    },
    // option (google.api.http) = {
    // get: "/subscribe"
    // };
    // Halts 
    //
    // Halts returns the candidate votes for stopping the network at block.
    halts: {
        path: '/api_pb.ApiService/Halts',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.HaltsRequest,
        responseType: resources_pb.HaltsResponse,
        requestSerialize: serialize_api_pb_HaltsRequest,
        requestDeserialize: deserialize_api_pb_HaltsRequest,
        responseSerialize: serialize_api_pb_HaltsResponse,
        responseDeserialize: deserialize_api_pb_HaltsResponse,
    },
    // option (google.api.http) = {
    // get: "/halts/{height}"
    // };
    // Genesis
    //
    // Genesis returns genesis file.
    genesis: {
        path: '/api_pb.ApiService/Genesis',
        requestStream: false,
        responseStream: false,
        requestType: google_protobuf_empty_pb.Empty,
        responseType: resources_pb.GenesisResponse,
        requestSerialize: serialize_google_protobuf_Empty,
        requestDeserialize: deserialize_google_protobuf_Empty,
        responseSerialize: serialize_api_pb_GenesisResponse,
        responseDeserialize: deserialize_api_pb_GenesisResponse,
    },
    // option (google.api.http) = {
    // get: "/genesis"
    // };
    // MinGasPrice
    //
    // MinGasPrice returns current min gas price.
    minGasPrice: {
        path: '/api_pb.ApiService/MinGasPrice',
        requestStream: false,
        responseStream: false,
        requestType: google_protobuf_empty_pb.Empty,
        responseType: resources_pb.MinGasPriceResponse,
        requestSerialize: serialize_google_protobuf_Empty,
        requestDeserialize: deserialize_google_protobuf_Empty,
        responseSerialize: serialize_api_pb_MinGasPriceResponse,
        responseDeserialize: deserialize_api_pb_MinGasPriceResponse,
    },
    // option (google.api.http) = {
    // get: "/min_gas_price"
    // };
    // NetInfo
    //
    // NetInfo returns network info
    netInfo: {
        path: '/api_pb.ApiService/NetInfo',
        requestStream: false,
        responseStream: false,
        requestType: google_protobuf_empty_pb.Empty,
        responseType: resources_pb.NetInfoResponse,
        requestSerialize: serialize_google_protobuf_Empty,
        requestDeserialize: deserialize_google_protobuf_Empty,
        responseSerialize: serialize_api_pb_NetInfoResponse,
        responseDeserialize: deserialize_api_pb_NetInfoResponse,
    },
    // option (google.api.http) = {
    // get: "/net_info"
    // };
    // Status
    //
    // Status returns node status including pubkey, latest block.
    status: {
        path: '/api_pb.ApiService/Status',
        requestStream: false,
        responseStream: false,
        requestType: google_protobuf_empty_pb.Empty,
        responseType: resources_pb.StatusResponse,
        requestSerialize: serialize_google_protobuf_Empty,
        requestDeserialize: deserialize_google_protobuf_Empty,
        responseSerialize: serialize_api_pb_StatusResponse,
        responseDeserialize: deserialize_api_pb_StatusResponse,
    },
    // option (google.api.http) = {
    // get: "/status"
    // };
    // Address
    //
    // Address returns coins list, balance and transaction count of an address.
    address: {
        path: '/api_pb.ApiService/Address',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.AddressRequest,
        responseType: resources_pb.AddressResponse,
        requestSerialize: serialize_api_pb_AddressRequest,
        requestDeserialize: deserialize_api_pb_AddressRequest,
        responseSerialize: serialize_api_pb_AddressResponse,
        responseDeserialize: deserialize_api_pb_AddressResponse,
    },
    // option (google.api.http) = {
    // get: "/address/{address}"
    // };
    // Addresses
    //
    // Addresses returns list of addresses.
    addresses: {
        path: '/api_pb.ApiService/Addresses',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.AddressesRequest,
        responseType: resources_pb.AddressesResponse,
        requestSerialize: serialize_api_pb_AddressesRequest,
        requestDeserialize: deserialize_api_pb_AddressesRequest,
        responseSerialize: serialize_api_pb_AddressesResponse,
        responseDeserialize: deserialize_api_pb_AddressesResponse,
    },
    // option (google.api.http) = {
    // get: "/addresses"
    // };
    // Block
    //
    // Block returns block data at given height.
    block: {
        path: '/api_pb.ApiService/Block',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.BlockRequest,
        responseType: resources_pb.BlockResponse,
        requestSerialize: serialize_api_pb_BlockRequest,
        requestDeserialize: deserialize_api_pb_BlockRequest,
        responseSerialize: serialize_api_pb_BlockResponse,
        responseDeserialize: deserialize_api_pb_BlockResponse,
    },
    // option (google.api.http) = {
    // get: "/block/{height}"
    // };
    // Candidate
    //
    // Candidate returns candidate’s info by provided public key.
    //
    // {{import "fields.md"}}
    candidate: {
        path: '/api_pb.ApiService/Candidate',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.CandidateRequest,
        responseType: resources_pb.CandidateResponse,
        requestSerialize: serialize_api_pb_CandidateRequest,
        requestDeserialize: deserialize_api_pb_CandidateRequest,
        responseSerialize: serialize_api_pb_CandidateResponse,
        responseDeserialize: deserialize_api_pb_CandidateResponse,
    },
    // option (google.api.http) = {
    // get: "/candidate/{public_key}"
    // };
    // Candidates
    //
    // Candidates returns list of candidates.
    candidates: {
        path: '/api_pb.ApiService/Candidates',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.CandidatesRequest,
        responseType: resources_pb.CandidatesResponse,
        requestSerialize: serialize_api_pb_CandidatesRequest,
        requestDeserialize: deserialize_api_pb_CandidatesRequest,
        responseSerialize: serialize_api_pb_CandidatesResponse,
        responseDeserialize: deserialize_api_pb_CandidatesResponse,
    },
    // option (google.api.http) = {
    // get: "/candidates"
    // };
    // CoinInfoById
    //
    // CoinInfoById returns information about coin ID.
    coinInfoById: {
        path: '/api_pb.ApiService/CoinInfoById',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.CoinIdRequest,
        responseType: resources_pb.CoinInfoResponse,
        requestSerialize: serialize_api_pb_CoinIdRequest,
        requestDeserialize: deserialize_api_pb_CoinIdRequest,
        responseSerialize: serialize_api_pb_CoinInfoResponse,
        responseDeserialize: deserialize_api_pb_CoinInfoResponse,
    },
    // option (google.api.http) = {
    // get: "/coin_info_by_id/{id}"
    // };
    // CoinInfo
    //
    // CoinInfo returns information about coin symbol.
    coinInfo: {
        path: '/api_pb.ApiService/CoinInfo',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.CoinInfoRequest,
        responseType: resources_pb.CoinInfoResponse,
        requestSerialize: serialize_api_pb_CoinInfoRequest,
        requestDeserialize: deserialize_api_pb_CoinInfoRequest,
        responseSerialize: serialize_api_pb_CoinInfoResponse,
        responseDeserialize: deserialize_api_pb_CoinInfoResponse,
    },
    // option (google.api.http) = {
    // get: "/coin_info/{symbol}"
    // };
    // EstimateCoinBuy
    //
    // EstimateCoinBuy returns estimate of buy coin transaction.
    estimateCoinBuy: {
        path: '/api_pb.ApiService/EstimateCoinBuy',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.EstimateCoinBuyRequest,
        responseType: resources_pb.EstimateCoinBuyResponse,
        requestSerialize: serialize_api_pb_EstimateCoinBuyRequest,
        requestDeserialize: deserialize_api_pb_EstimateCoinBuyRequest,
        responseSerialize: serialize_api_pb_EstimateCoinBuyResponse,
        responseDeserialize: deserialize_api_pb_EstimateCoinBuyResponse,
    },
    // option (google.api.http) = {
    // get: "/estimate_coin_buy"
    // };
    // EstimateCoinSell
    //
    // EstimateCoinSell returns estimate of sell coin transaction.
    estimateCoinSell: {
        path: '/api_pb.ApiService/EstimateCoinSell',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.EstimateCoinSellRequest,
        responseType: resources_pb.EstimateCoinSellResponse,
        requestSerialize: serialize_api_pb_EstimateCoinSellRequest,
        requestDeserialize: deserialize_api_pb_EstimateCoinSellRequest,
        responseSerialize: serialize_api_pb_EstimateCoinSellResponse,
        responseDeserialize: deserialize_api_pb_EstimateCoinSellResponse,
    },
    // option (google.api.http) = {
    // get: "/estimate_coin_sell"
    // };
    // EstimateCoinSellAll
    //
    // EstimateCoinSellAll returns estimate of sell all coin transaction.
    estimateCoinSellAll: {
        path: '/api_pb.ApiService/EstimateCoinSellAll',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.EstimateCoinSellAllRequest,
        responseType: resources_pb.EstimateCoinSellAllResponse,
        requestSerialize: serialize_api_pb_EstimateCoinSellAllRequest,
        requestDeserialize: deserialize_api_pb_EstimateCoinSellAllRequest,
        responseSerialize: serialize_api_pb_EstimateCoinSellAllResponse,
        responseDeserialize: deserialize_api_pb_EstimateCoinSellAllResponse,
    },
    // option (google.api.http) = {
    // get: "/estimate_coin_sell_all"
    // };
    // EstimateTxCommission
    //
    // EstimateTxCommission returns estimate of transaction.
    estimateTxCommission: {
        path: '/api_pb.ApiService/EstimateTxCommission',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.EstimateTxCommissionRequest,
        responseType: resources_pb.EstimateTxCommissionResponse,
        requestSerialize: serialize_api_pb_EstimateTxCommissionRequest,
        requestDeserialize: deserialize_api_pb_EstimateTxCommissionRequest,
        responseSerialize: serialize_api_pb_EstimateTxCommissionResponse,
        responseDeserialize: deserialize_api_pb_EstimateTxCommissionResponse,
    },
    // option (google.api.http) = {
    // get: "/estimate_tx_commission/{tx}"
    // };
    // Events
    //
    // Events returns events at given height.
    events: {
        path: '/api_pb.ApiService/Events',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.EventsRequest,
        responseType: resources_pb.EventsResponse,
        requestSerialize: serialize_api_pb_EventsRequest,
        requestDeserialize: deserialize_api_pb_EventsRequest,
        responseSerialize: serialize_api_pb_EventsResponse,
        responseDeserialize: deserialize_api_pb_EventsResponse,
    },
    // option (google.api.http) = {
    // get: "/events/{height}"
    // };
    // MaxGasPrice
    //
    // MaxGasPrice returns current max gas.
    maxGasPrice: {
        path: '/api_pb.ApiService/MaxGasPrice',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.MaxGasPriceRequest,
        responseType: resources_pb.MaxGasPriceResponse,
        requestSerialize: serialize_api_pb_MaxGasPriceRequest,
        requestDeserialize: deserialize_api_pb_MaxGasPriceRequest,
        responseSerialize: serialize_api_pb_MaxGasPriceResponse,
        responseDeserialize: deserialize_api_pb_MaxGasPriceResponse,
    },
    // option (google.api.http) = {
    // get: "/max_gas_price"
    // };
    // MissedBlocks
    //
    // MissedBlocks returns missed blocks by validator public key.
    missedBlocks: {
        path: '/api_pb.ApiService/MissedBlocks',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.MissedBlocksRequest,
        responseType: resources_pb.MissedBlocksResponse,
        requestSerialize: serialize_api_pb_MissedBlocksRequest,
        requestDeserialize: deserialize_api_pb_MissedBlocksRequest,
        responseSerialize: serialize_api_pb_MissedBlocksResponse,
        responseDeserialize: deserialize_api_pb_MissedBlocksResponse,
    },
    // option (google.api.http) = {
    // get: "/missed_blocks/{public_key}"
    // };
    // SendTransaction
    //
    // SendTransaction returns the result of sending signed tx. To ensure that transaction was successfully committed to the blockchain, you need to find the transaction by the hash and ensure that the status code equals to 0.
    //
    sendTransaction: {
        path: '/api_pb.ApiService/SendTransaction',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.SendTransactionRequest,
        responseType: resources_pb.SendTransactionResponse,
        requestSerialize: serialize_api_pb_SendTransactionRequest,
        requestDeserialize: deserialize_api_pb_SendTransactionRequest,
        responseSerialize: serialize_api_pb_SendTransactionResponse,
        responseDeserialize: deserialize_api_pb_SendTransactionResponse,
    },
    // option (google.api.http) = {
    // get: "/send_transaction/{tx}"
    // additional_bindings {
    // post: "/send_transaction"
    // body: "*"
    // }
    // };
    // Transaction
    //
    // Transaction returns transaction info.
    transaction: {
        path: '/api_pb.ApiService/Transaction',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.TransactionRequest,
        responseType: resources_pb.TransactionResponse,
        requestSerialize: serialize_api_pb_TransactionRequest,
        requestDeserialize: deserialize_api_pb_TransactionRequest,
        responseSerialize: serialize_api_pb_TransactionResponse,
        responseDeserialize: deserialize_api_pb_TransactionResponse,
    },
    // option (google.api.http) = {
    // get: "/transaction/{hash}"
    // };
    // Transactions
    //
    // Transactions returns transactions by query.
    transactions: {
        path: '/api_pb.ApiService/Transactions',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.TransactionsRequest,
        responseType: resources_pb.TransactionsResponse,
        requestSerialize: serialize_api_pb_TransactionsRequest,
        requestDeserialize: deserialize_api_pb_TransactionsRequest,
        responseSerialize: serialize_api_pb_TransactionsResponse,
        responseDeserialize: deserialize_api_pb_TransactionsResponse,
    },
    // option (google.api.http) = {
    // get: "/transactions"
    // };
    // UnconfirmedTxs
    //
    // UnconfirmedTxs returns unconfirmed transactions.
    unconfirmedTxs: {
        path: '/api_pb.ApiService/UnconfirmedTxs',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.UnconfirmedTxsRequest,
        responseType: resources_pb.UnconfirmedTxsResponse,
        requestSerialize: serialize_api_pb_UnconfirmedTxsRequest,
        requestDeserialize: deserialize_api_pb_UnconfirmedTxsRequest,
        responseSerialize: serialize_api_pb_UnconfirmedTxsResponse,
        responseDeserialize: deserialize_api_pb_UnconfirmedTxsResponse,
    },
    // option (google.api.http) = {
    // get: "/unconfirmed_txs"
    // };
    // Validators
    //
    // Validators returns list of active validators.
    validators: {
        path: '/api_pb.ApiService/Validators',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.ValidatorsRequest,
        responseType: resources_pb.ValidatorsResponse,
        requestSerialize: serialize_api_pb_ValidatorsRequest,
        requestDeserialize: deserialize_api_pb_ValidatorsRequest,
        responseSerialize: serialize_api_pb_ValidatorsResponse,
        responseDeserialize: deserialize_api_pb_ValidatorsResponse,
    },
    // option (google.api.http) = {
    // get: "/validators"
    // };
    // Frozen
    //
    // Frozen returns frozen balance.
    // Deprecated: Use FrozenAll instead.
    frozen: {
        path: '/api_pb.ApiService/Frozen',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.FrozenRequest,
        responseType: resources_pb.FrozenResponse,
        requestSerialize: serialize_api_pb_FrozenRequest,
        requestDeserialize: deserialize_api_pb_FrozenRequest,
        responseSerialize: serialize_api_pb_FrozenResponse,
        responseDeserialize: deserialize_api_pb_FrozenResponse,
    },
    // option (google.api.http) = {
    // get: "/frozen/{address}"
    // };
    // FrozenAll
    //
    // FrozenAll returns frozen balance.
    frozenAll: {
        path: '/api_pb.ApiService/FrozenAll',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.FrozenAllRequest,
        responseType: resources_pb.FrozenResponse,
        requestSerialize: serialize_api_pb_FrozenAllRequest,
        requestDeserialize: deserialize_api_pb_FrozenAllRequest,
        responseSerialize: serialize_api_pb_FrozenResponse,
        responseDeserialize: deserialize_api_pb_FrozenResponse,
    },
    // option (google.api.http) = {
    // get: "/frozen_all"
    // };
    // WaitList
    //
    // WaitList returns the list of address stakes in waitlist.
    waitList: {
        path: '/api_pb.ApiService/WaitList',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.WaitListRequest,
        responseType: resources_pb.WaitListResponse,
        requestSerialize: serialize_api_pb_WaitListRequest,
        requestDeserialize: deserialize_api_pb_WaitListRequest,
        responseSerialize: serialize_api_pb_WaitListResponse,
        responseDeserialize: deserialize_api_pb_WaitListResponse,
    },
    // option (google.api.http) = {
    // get: "/waitlist/{address}"
    // };
    // TestBlock
    //
    // TestBlock returns the list of example transactions in block. Available only testnet mode.
    testBlock: {
        path: '/api_pb.ApiService/TestBlock',
        requestStream: false,
        responseStream: false,
        requestType: google_protobuf_empty_pb.Empty,
        responseType: resources_pb.BlockResponse,
        requestSerialize: serialize_google_protobuf_Empty,
        requestDeserialize: deserialize_google_protobuf_Empty,
        responseSerialize: serialize_api_pb_BlockResponse,
        responseDeserialize: deserialize_api_pb_BlockResponse,
    },
    // option (google.api.http) = {
    // get: "/test/block"
    // };
    // SwapPool
    //
    // SwapPool returns total supply and reserves.
    swapPool: {
        path: '/api_pb.ApiService/SwapPool',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.SwapPoolRequest,
        responseType: resources_pb.SwapPoolResponse,
        requestSerialize: serialize_api_pb_SwapPoolRequest,
        requestDeserialize: deserialize_api_pb_SwapPoolRequest,
        responseSerialize: serialize_api_pb_SwapPoolResponse,
        responseDeserialize: deserialize_api_pb_SwapPoolResponse,
    },
    // option (google.api.http) = {
    // get: "/swap_pool/{coin0}/{coin1}"
    // };
    // SwapPools
    //
    // SwapPools returns list of all pools.
    swapPools: {
        path: '/api_pb.ApiService/SwapPools',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.SwapPoolsRequest,
        responseType: resources_pb.SwapPoolsResponse,
        requestSerialize: serialize_api_pb_SwapPoolsRequest,
        requestDeserialize: deserialize_api_pb_SwapPoolsRequest,
        responseSerialize: serialize_api_pb_SwapPoolsResponse,
        responseDeserialize: deserialize_api_pb_SwapPoolsResponse,
    },
    // /*option (google.api.method_visibility).restriction = "INTERNAL";*/
    // SwapPoolProvider
    //
    // SwapPoolProvider returns reserves and liquidity balance of provider.
    swapPoolProvider: {
        path: '/api_pb.ApiService/SwapPoolProvider',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.SwapPoolProviderRequest,
        responseType: resources_pb.SwapPoolResponse,
        requestSerialize: serialize_api_pb_SwapPoolProviderRequest,
        requestDeserialize: deserialize_api_pb_SwapPoolProviderRequest,
        responseSerialize: serialize_api_pb_SwapPoolResponse,
        responseDeserialize: deserialize_api_pb_SwapPoolResponse,
    },
    // option (google.api.http) = {
    // get: "/swap_pool/{coin0}/{coin1}/{provider}"
    // };
    // PriceCommission
    //
    // PriceCommission returns commissions.
    priceCommission: {
        path: '/api_pb.ApiService/PriceCommission',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.PriceCommissionRequest,
        responseType: resources_pb.PriceCommissionResponse,
        requestSerialize: serialize_api_pb_PriceCommissionRequest,
        requestDeserialize: deserialize_api_pb_PriceCommissionRequest,
        responseSerialize: serialize_api_pb_PriceCommissionResponse,
        responseDeserialize: deserialize_api_pb_PriceCommissionResponse,
    },
    // option (google.api.http) = {
    // get: "/price_commissions"
    // };
    // VersionNetwork
    //
    // VersionNetwork returns versions network.
    versionNetwork: {
        path: '/api_pb.ApiService/VersionNetwork',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.VersionNetworkRequest,
        responseType: resources_pb.VersionNetworkResponse,
        requestSerialize: serialize_api_pb_VersionNetworkRequest,
        requestDeserialize: deserialize_api_pb_VersionNetworkRequest,
        responseSerialize: serialize_api_pb_VersionNetworkResponse,
        responseDeserialize: deserialize_api_pb_VersionNetworkResponse,
    },
    // option (google.api.http) = {
    // get: "/version_network"
    // };
    // CommissionVotes
    //
    // CommissionVotes returns votes for update commissions.
    commissionVotes: {
        path: '/api_pb.ApiService/CommissionVotes',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.CommissionVotesRequest,
        responseType: resources_pb.CommissionVotesResponse,
        requestSerialize: serialize_api_pb_CommissionVotesRequest,
        requestDeserialize: deserialize_api_pb_CommissionVotesRequest,
        responseSerialize: serialize_api_pb_CommissionVotesResponse,
        responseDeserialize: deserialize_api_pb_CommissionVotesResponse,
    },
    // option (google.api.http) = {
    // get: "/commission_votes/{target_version}"
    // };
    // UpdateVotes
    //
    // UpdateVotes returns votes for update network.
    updateVotes: {
        path: '/api_pb.ApiService/UpdateVotes',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.UpdateVotesRequest,
        responseType: resources_pb.UpdateVotesResponse,
        requestSerialize: serialize_api_pb_UpdateVotesRequest,
        requestDeserialize: deserialize_api_pb_UpdateVotesRequest,
        responseSerialize: serialize_api_pb_UpdateVotesResponse,
        responseDeserialize: deserialize_api_pb_UpdateVotesResponse,
    },
    // option (google.api.http) = {
    // get: "/update_votes/{target_version}"
    // };
    // Blocks
    //
    // Blocks returns blocks at given interval.
    blocks: {
        path: '/api_pb.ApiService/Blocks',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.BlocksRequest,
        responseType: resources_pb.BlocksResponse,
        requestSerialize: serialize_api_pb_BlocksRequest,
        requestDeserialize: deserialize_api_pb_BlocksRequest,
        responseSerialize: serialize_api_pb_BlocksResponse,
        responseDeserialize: deserialize_api_pb_BlocksResponse,
    },
    // option (google.api.http) = {
    // get: "/blocks"
    // };
    // LimitOrder
    //
    // LimitOrder returns order by ID.
    limitOrder: {
        path: '/api_pb.ApiService/LimitOrder',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.LimitOrderRequest,
        responseType: resources_pb.LimitOrderResponse,
        requestSerialize: serialize_api_pb_LimitOrderRequest,
        requestDeserialize: deserialize_api_pb_LimitOrderRequest,
        responseSerialize: serialize_api_pb_LimitOrderResponse,
        responseDeserialize: deserialize_api_pb_LimitOrderResponse,
    },
    // option (google.api.http) = {
    // get: "/limit_order/{order_id}"
    // };
    // LimitOrdersOfPool
    //
    // LimitOrdersOfPool returns sell orders for a pair of coins.
    limitOrdersOfPool: {
        path: '/api_pb.ApiService/LimitOrdersOfPool',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.LimitOrdersOfPoolRequest,
        responseType: resources_pb.LimitOrdersOfPoolResponse,
        requestSerialize: serialize_api_pb_LimitOrdersOfPoolRequest,
        requestDeserialize: deserialize_api_pb_LimitOrdersOfPoolRequest,
        responseSerialize: serialize_api_pb_LimitOrdersOfPoolResponse,
        responseDeserialize: deserialize_api_pb_LimitOrdersOfPoolResponse,
    },
    // option (google.api.http) = {
    // get: "/limit_orders/{sell_coin}/{buy_coin}"
    // };
    // LimitOrders
    //
    // LimitOrders returns orders by IDs.
    limitOrders: {
        path: '/api_pb.ApiService/LimitOrders',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.LimitOrdersRequest,
        responseType: resources_pb.LimitOrdersResponse,
        requestSerialize: serialize_api_pb_LimitOrdersRequest,
        requestDeserialize: deserialize_api_pb_LimitOrdersRequest,
        responseSerialize: serialize_api_pb_LimitOrdersResponse,
        responseDeserialize: deserialize_api_pb_LimitOrdersResponse,
    },
    // option (google.api.http) = {
    // get: "/limit_orders"
    // };
    // BestTrade
    //
    // BestTrade returns optimal exchange route.
    bestTrade: {
        path: '/api_pb.ApiService/BestTrade',
        requestStream: false,
        responseStream: false,
        requestType: resources_pb.BestTradeRequest,
        responseType: resources_pb.BestTradeResponse,
        requestSerialize: serialize_api_pb_BestTradeRequest,
        requestDeserialize: deserialize_api_pb_BestTradeRequest,
        responseSerialize: serialize_api_pb_BestTradeResponse,
        responseDeserialize: deserialize_api_pb_BestTradeResponse,
    },
    // /*option (google.api.method_visibility).restriction = "INTERNAL";*/
};
exports.ApiServiceClient = grpc.makeGenericClientConstructor(ApiServiceService);
//# sourceMappingURL=api_grpc_pb.js.map