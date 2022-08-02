export namespace ApiServiceService {
    namespace subscribe {
        export const path: string;
        export const requestStream: boolean;
        export const responseStream: boolean;
        export const requestType: typeof resources_pb.SubscribeRequest;
        export const responseType: typeof resources_pb.SubscribeResponse;
        export { serialize_api_pb_SubscribeRequest as requestSerialize };
        export { deserialize_api_pb_SubscribeRequest as requestDeserialize };
        export { serialize_api_pb_SubscribeResponse as responseSerialize };
        export { deserialize_api_pb_SubscribeResponse as responseDeserialize };
    }
    namespace halts {
        const path_1: string;
        export { path_1 as path };
        const requestStream_1: boolean;
        export { requestStream_1 as requestStream };
        const responseStream_1: boolean;
        export { responseStream_1 as responseStream };
        const requestType_1: typeof resources_pb.HaltsRequest;
        export { requestType_1 as requestType };
        const responseType_1: typeof resources_pb.HaltsResponse;
        export { responseType_1 as responseType };
        export { serialize_api_pb_HaltsRequest as requestSerialize };
        export { deserialize_api_pb_HaltsRequest as requestDeserialize };
        export { serialize_api_pb_HaltsResponse as responseSerialize };
        export { deserialize_api_pb_HaltsResponse as responseDeserialize };
    }
    namespace genesis {
        const path_2: string;
        export { path_2 as path };
        const requestStream_2: boolean;
        export { requestStream_2 as requestStream };
        const responseStream_2: boolean;
        export { responseStream_2 as responseStream };
        const requestType_2: typeof google_protobuf_empty_pb.Empty;
        export { requestType_2 as requestType };
        const responseType_2: typeof resources_pb.GenesisResponse;
        export { responseType_2 as responseType };
        export { serialize_google_protobuf_Empty as requestSerialize };
        export { deserialize_google_protobuf_Empty as requestDeserialize };
        export { serialize_api_pb_GenesisResponse as responseSerialize };
        export { deserialize_api_pb_GenesisResponse as responseDeserialize };
    }
    namespace minGasPrice {
        const path_3: string;
        export { path_3 as path };
        const requestStream_3: boolean;
        export { requestStream_3 as requestStream };
        const responseStream_3: boolean;
        export { responseStream_3 as responseStream };
        const requestType_3: typeof google_protobuf_empty_pb.Empty;
        export { requestType_3 as requestType };
        const responseType_3: typeof resources_pb.MinGasPriceResponse;
        export { responseType_3 as responseType };
        export { serialize_google_protobuf_Empty as requestSerialize };
        export { deserialize_google_protobuf_Empty as requestDeserialize };
        export { serialize_api_pb_MinGasPriceResponse as responseSerialize };
        export { deserialize_api_pb_MinGasPriceResponse as responseDeserialize };
    }
    namespace netInfo {
        const path_4: string;
        export { path_4 as path };
        const requestStream_4: boolean;
        export { requestStream_4 as requestStream };
        const responseStream_4: boolean;
        export { responseStream_4 as responseStream };
        const requestType_4: typeof google_protobuf_empty_pb.Empty;
        export { requestType_4 as requestType };
        const responseType_4: typeof resources_pb.NetInfoResponse;
        export { responseType_4 as responseType };
        export { serialize_google_protobuf_Empty as requestSerialize };
        export { deserialize_google_protobuf_Empty as requestDeserialize };
        export { serialize_api_pb_NetInfoResponse as responseSerialize };
        export { deserialize_api_pb_NetInfoResponse as responseDeserialize };
    }
    namespace status {
        const path_5: string;
        export { path_5 as path };
        const requestStream_5: boolean;
        export { requestStream_5 as requestStream };
        const responseStream_5: boolean;
        export { responseStream_5 as responseStream };
        const requestType_5: typeof google_protobuf_empty_pb.Empty;
        export { requestType_5 as requestType };
        const responseType_5: typeof resources_pb.StatusResponse;
        export { responseType_5 as responseType };
        export { serialize_google_protobuf_Empty as requestSerialize };
        export { deserialize_google_protobuf_Empty as requestDeserialize };
        export { serialize_api_pb_StatusResponse as responseSerialize };
        export { deserialize_api_pb_StatusResponse as responseDeserialize };
    }
    namespace address {
        const path_6: string;
        export { path_6 as path };
        const requestStream_6: boolean;
        export { requestStream_6 as requestStream };
        const responseStream_6: boolean;
        export { responseStream_6 as responseStream };
        const requestType_6: typeof resources_pb.AddressRequest;
        export { requestType_6 as requestType };
        const responseType_6: typeof resources_pb.AddressResponse;
        export { responseType_6 as responseType };
        export { serialize_api_pb_AddressRequest as requestSerialize };
        export { deserialize_api_pb_AddressRequest as requestDeserialize };
        export { serialize_api_pb_AddressResponse as responseSerialize };
        export { deserialize_api_pb_AddressResponse as responseDeserialize };
    }
    namespace addresses {
        const path_7: string;
        export { path_7 as path };
        const requestStream_7: boolean;
        export { requestStream_7 as requestStream };
        const responseStream_7: boolean;
        export { responseStream_7 as responseStream };
        const requestType_7: typeof resources_pb.AddressesRequest;
        export { requestType_7 as requestType };
        const responseType_7: typeof resources_pb.AddressesResponse;
        export { responseType_7 as responseType };
        export { serialize_api_pb_AddressesRequest as requestSerialize };
        export { deserialize_api_pb_AddressesRequest as requestDeserialize };
        export { serialize_api_pb_AddressesResponse as responseSerialize };
        export { deserialize_api_pb_AddressesResponse as responseDeserialize };
    }
    namespace block {
        const path_8: string;
        export { path_8 as path };
        const requestStream_8: boolean;
        export { requestStream_8 as requestStream };
        const responseStream_8: boolean;
        export { responseStream_8 as responseStream };
        const requestType_8: typeof resources_pb.BlockRequest;
        export { requestType_8 as requestType };
        const responseType_8: typeof resources_pb.BlockResponse;
        export { responseType_8 as responseType };
        export { serialize_api_pb_BlockRequest as requestSerialize };
        export { deserialize_api_pb_BlockRequest as requestDeserialize };
        export { serialize_api_pb_BlockResponse as responseSerialize };
        export { deserialize_api_pb_BlockResponse as responseDeserialize };
    }
    namespace candidate {
        const path_9: string;
        export { path_9 as path };
        const requestStream_9: boolean;
        export { requestStream_9 as requestStream };
        const responseStream_9: boolean;
        export { responseStream_9 as responseStream };
        const requestType_9: typeof resources_pb.CandidateRequest;
        export { requestType_9 as requestType };
        const responseType_9: typeof resources_pb.CandidateResponse;
        export { responseType_9 as responseType };
        export { serialize_api_pb_CandidateRequest as requestSerialize };
        export { deserialize_api_pb_CandidateRequest as requestDeserialize };
        export { serialize_api_pb_CandidateResponse as responseSerialize };
        export { deserialize_api_pb_CandidateResponse as responseDeserialize };
    }
    namespace candidates {
        const path_10: string;
        export { path_10 as path };
        const requestStream_10: boolean;
        export { requestStream_10 as requestStream };
        const responseStream_10: boolean;
        export { responseStream_10 as responseStream };
        const requestType_10: typeof resources_pb.CandidatesRequest;
        export { requestType_10 as requestType };
        const responseType_10: typeof resources_pb.CandidatesResponse;
        export { responseType_10 as responseType };
        export { serialize_api_pb_CandidatesRequest as requestSerialize };
        export { deserialize_api_pb_CandidatesRequest as requestDeserialize };
        export { serialize_api_pb_CandidatesResponse as responseSerialize };
        export { deserialize_api_pb_CandidatesResponse as responseDeserialize };
    }
    namespace coinInfoById {
        const path_11: string;
        export { path_11 as path };
        const requestStream_11: boolean;
        export { requestStream_11 as requestStream };
        const responseStream_11: boolean;
        export { responseStream_11 as responseStream };
        const requestType_11: typeof resources_pb.CoinIdRequest;
        export { requestType_11 as requestType };
        const responseType_11: typeof resources_pb.CoinInfoResponse;
        export { responseType_11 as responseType };
        export { serialize_api_pb_CoinIdRequest as requestSerialize };
        export { deserialize_api_pb_CoinIdRequest as requestDeserialize };
        export { serialize_api_pb_CoinInfoResponse as responseSerialize };
        export { deserialize_api_pb_CoinInfoResponse as responseDeserialize };
    }
    namespace coinInfo {
        const path_12: string;
        export { path_12 as path };
        const requestStream_12: boolean;
        export { requestStream_12 as requestStream };
        const responseStream_12: boolean;
        export { responseStream_12 as responseStream };
        const requestType_12: typeof resources_pb.CoinInfoRequest;
        export { requestType_12 as requestType };
        const responseType_12: typeof resources_pb.CoinInfoResponse;
        export { responseType_12 as responseType };
        export { serialize_api_pb_CoinInfoRequest as requestSerialize };
        export { deserialize_api_pb_CoinInfoRequest as requestDeserialize };
        export { serialize_api_pb_CoinInfoResponse as responseSerialize };
        export { deserialize_api_pb_CoinInfoResponse as responseDeserialize };
    }
    namespace estimateCoinBuy {
        const path_13: string;
        export { path_13 as path };
        const requestStream_13: boolean;
        export { requestStream_13 as requestStream };
        const responseStream_13: boolean;
        export { responseStream_13 as responseStream };
        const requestType_13: typeof resources_pb.EstimateCoinBuyRequest;
        export { requestType_13 as requestType };
        const responseType_13: typeof resources_pb.EstimateCoinBuyResponse;
        export { responseType_13 as responseType };
        export { serialize_api_pb_EstimateCoinBuyRequest as requestSerialize };
        export { deserialize_api_pb_EstimateCoinBuyRequest as requestDeserialize };
        export { serialize_api_pb_EstimateCoinBuyResponse as responseSerialize };
        export { deserialize_api_pb_EstimateCoinBuyResponse as responseDeserialize };
    }
    namespace estimateCoinSell {
        const path_14: string;
        export { path_14 as path };
        const requestStream_14: boolean;
        export { requestStream_14 as requestStream };
        const responseStream_14: boolean;
        export { responseStream_14 as responseStream };
        const requestType_14: typeof resources_pb.EstimateCoinSellRequest;
        export { requestType_14 as requestType };
        const responseType_14: typeof resources_pb.EstimateCoinSellResponse;
        export { responseType_14 as responseType };
        export { serialize_api_pb_EstimateCoinSellRequest as requestSerialize };
        export { deserialize_api_pb_EstimateCoinSellRequest as requestDeserialize };
        export { serialize_api_pb_EstimateCoinSellResponse as responseSerialize };
        export { deserialize_api_pb_EstimateCoinSellResponse as responseDeserialize };
    }
    namespace estimateCoinSellAll {
        const path_15: string;
        export { path_15 as path };
        const requestStream_15: boolean;
        export { requestStream_15 as requestStream };
        const responseStream_15: boolean;
        export { responseStream_15 as responseStream };
        const requestType_15: typeof resources_pb.EstimateCoinSellAllRequest;
        export { requestType_15 as requestType };
        const responseType_15: typeof resources_pb.EstimateCoinSellAllResponse;
        export { responseType_15 as responseType };
        export { serialize_api_pb_EstimateCoinSellAllRequest as requestSerialize };
        export { deserialize_api_pb_EstimateCoinSellAllRequest as requestDeserialize };
        export { serialize_api_pb_EstimateCoinSellAllResponse as responseSerialize };
        export { deserialize_api_pb_EstimateCoinSellAllResponse as responseDeserialize };
    }
    namespace estimateTxCommission {
        const path_16: string;
        export { path_16 as path };
        const requestStream_16: boolean;
        export { requestStream_16 as requestStream };
        const responseStream_16: boolean;
        export { responseStream_16 as responseStream };
        const requestType_16: typeof resources_pb.EstimateTxCommissionRequest;
        export { requestType_16 as requestType };
        const responseType_16: typeof resources_pb.EstimateTxCommissionResponse;
        export { responseType_16 as responseType };
        export { serialize_api_pb_EstimateTxCommissionRequest as requestSerialize };
        export { deserialize_api_pb_EstimateTxCommissionRequest as requestDeserialize };
        export { serialize_api_pb_EstimateTxCommissionResponse as responseSerialize };
        export { deserialize_api_pb_EstimateTxCommissionResponse as responseDeserialize };
    }
    namespace events {
        const path_17: string;
        export { path_17 as path };
        const requestStream_17: boolean;
        export { requestStream_17 as requestStream };
        const responseStream_17: boolean;
        export { responseStream_17 as responseStream };
        const requestType_17: typeof resources_pb.EventsRequest;
        export { requestType_17 as requestType };
        const responseType_17: typeof resources_pb.EventsResponse;
        export { responseType_17 as responseType };
        export { serialize_api_pb_EventsRequest as requestSerialize };
        export { deserialize_api_pb_EventsRequest as requestDeserialize };
        export { serialize_api_pb_EventsResponse as responseSerialize };
        export { deserialize_api_pb_EventsResponse as responseDeserialize };
    }
    namespace maxGasPrice {
        const path_18: string;
        export { path_18 as path };
        const requestStream_18: boolean;
        export { requestStream_18 as requestStream };
        const responseStream_18: boolean;
        export { responseStream_18 as responseStream };
        const requestType_18: typeof resources_pb.MaxGasPriceRequest;
        export { requestType_18 as requestType };
        const responseType_18: typeof resources_pb.MaxGasPriceResponse;
        export { responseType_18 as responseType };
        export { serialize_api_pb_MaxGasPriceRequest as requestSerialize };
        export { deserialize_api_pb_MaxGasPriceRequest as requestDeserialize };
        export { serialize_api_pb_MaxGasPriceResponse as responseSerialize };
        export { deserialize_api_pb_MaxGasPriceResponse as responseDeserialize };
    }
    namespace missedBlocks {
        const path_19: string;
        export { path_19 as path };
        const requestStream_19: boolean;
        export { requestStream_19 as requestStream };
        const responseStream_19: boolean;
        export { responseStream_19 as responseStream };
        const requestType_19: typeof resources_pb.MissedBlocksRequest;
        export { requestType_19 as requestType };
        const responseType_19: typeof resources_pb.MissedBlocksResponse;
        export { responseType_19 as responseType };
        export { serialize_api_pb_MissedBlocksRequest as requestSerialize };
        export { deserialize_api_pb_MissedBlocksRequest as requestDeserialize };
        export { serialize_api_pb_MissedBlocksResponse as responseSerialize };
        export { deserialize_api_pb_MissedBlocksResponse as responseDeserialize };
    }
    namespace sendTransaction {
        const path_20: string;
        export { path_20 as path };
        const requestStream_20: boolean;
        export { requestStream_20 as requestStream };
        const responseStream_20: boolean;
        export { responseStream_20 as responseStream };
        const requestType_20: typeof resources_pb.SendTransactionRequest;
        export { requestType_20 as requestType };
        const responseType_20: typeof resources_pb.SendTransactionResponse;
        export { responseType_20 as responseType };
        export { serialize_api_pb_SendTransactionRequest as requestSerialize };
        export { deserialize_api_pb_SendTransactionRequest as requestDeserialize };
        export { serialize_api_pb_SendTransactionResponse as responseSerialize };
        export { deserialize_api_pb_SendTransactionResponse as responseDeserialize };
    }
    namespace transaction {
        const path_21: string;
        export { path_21 as path };
        const requestStream_21: boolean;
        export { requestStream_21 as requestStream };
        const responseStream_21: boolean;
        export { responseStream_21 as responseStream };
        const requestType_21: typeof resources_pb.TransactionRequest;
        export { requestType_21 as requestType };
        const responseType_21: typeof resources_pb.TransactionResponse;
        export { responseType_21 as responseType };
        export { serialize_api_pb_TransactionRequest as requestSerialize };
        export { deserialize_api_pb_TransactionRequest as requestDeserialize };
        export { serialize_api_pb_TransactionResponse as responseSerialize };
        export { deserialize_api_pb_TransactionResponse as responseDeserialize };
    }
    namespace transactions {
        const path_22: string;
        export { path_22 as path };
        const requestStream_22: boolean;
        export { requestStream_22 as requestStream };
        const responseStream_22: boolean;
        export { responseStream_22 as responseStream };
        const requestType_22: typeof resources_pb.TransactionsRequest;
        export { requestType_22 as requestType };
        const responseType_22: typeof resources_pb.TransactionsResponse;
        export { responseType_22 as responseType };
        export { serialize_api_pb_TransactionsRequest as requestSerialize };
        export { deserialize_api_pb_TransactionsRequest as requestDeserialize };
        export { serialize_api_pb_TransactionsResponse as responseSerialize };
        export { deserialize_api_pb_TransactionsResponse as responseDeserialize };
    }
    namespace unconfirmedTxs {
        const path_23: string;
        export { path_23 as path };
        const requestStream_23: boolean;
        export { requestStream_23 as requestStream };
        const responseStream_23: boolean;
        export { responseStream_23 as responseStream };
        const requestType_23: typeof resources_pb.UnconfirmedTxsRequest;
        export { requestType_23 as requestType };
        const responseType_23: typeof resources_pb.UnconfirmedTxsResponse;
        export { responseType_23 as responseType };
        export { serialize_api_pb_UnconfirmedTxsRequest as requestSerialize };
        export { deserialize_api_pb_UnconfirmedTxsRequest as requestDeserialize };
        export { serialize_api_pb_UnconfirmedTxsResponse as responseSerialize };
        export { deserialize_api_pb_UnconfirmedTxsResponse as responseDeserialize };
    }
    namespace validators {
        const path_24: string;
        export { path_24 as path };
        const requestStream_24: boolean;
        export { requestStream_24 as requestStream };
        const responseStream_24: boolean;
        export { responseStream_24 as responseStream };
        const requestType_24: typeof resources_pb.ValidatorsRequest;
        export { requestType_24 as requestType };
        const responseType_24: typeof resources_pb.ValidatorsResponse;
        export { responseType_24 as responseType };
        export { serialize_api_pb_ValidatorsRequest as requestSerialize };
        export { deserialize_api_pb_ValidatorsRequest as requestDeserialize };
        export { serialize_api_pb_ValidatorsResponse as responseSerialize };
        export { deserialize_api_pb_ValidatorsResponse as responseDeserialize };
    }
    namespace frozen {
        const path_25: string;
        export { path_25 as path };
        const requestStream_25: boolean;
        export { requestStream_25 as requestStream };
        const responseStream_25: boolean;
        export { responseStream_25 as responseStream };
        const requestType_25: typeof resources_pb.FrozenRequest;
        export { requestType_25 as requestType };
        const responseType_25: typeof resources_pb.FrozenResponse;
        export { responseType_25 as responseType };
        export { serialize_api_pb_FrozenRequest as requestSerialize };
        export { deserialize_api_pb_FrozenRequest as requestDeserialize };
        export { serialize_api_pb_FrozenResponse as responseSerialize };
        export { deserialize_api_pb_FrozenResponse as responseDeserialize };
    }
    namespace frozenAll {
        const path_26: string;
        export { path_26 as path };
        const requestStream_26: boolean;
        export { requestStream_26 as requestStream };
        const responseStream_26: boolean;
        export { responseStream_26 as responseStream };
        const requestType_26: typeof resources_pb.FrozenAllRequest;
        export { requestType_26 as requestType };
        const responseType_26: typeof resources_pb.FrozenResponse;
        export { responseType_26 as responseType };
        export { serialize_api_pb_FrozenAllRequest as requestSerialize };
        export { deserialize_api_pb_FrozenAllRequest as requestDeserialize };
        export { serialize_api_pb_FrozenResponse as responseSerialize };
        export { deserialize_api_pb_FrozenResponse as responseDeserialize };
    }
    namespace waitList {
        const path_27: string;
        export { path_27 as path };
        const requestStream_27: boolean;
        export { requestStream_27 as requestStream };
        const responseStream_27: boolean;
        export { responseStream_27 as responseStream };
        const requestType_27: typeof resources_pb.WaitListRequest;
        export { requestType_27 as requestType };
        const responseType_27: typeof resources_pb.WaitListResponse;
        export { responseType_27 as responseType };
        export { serialize_api_pb_WaitListRequest as requestSerialize };
        export { deserialize_api_pb_WaitListRequest as requestDeserialize };
        export { serialize_api_pb_WaitListResponse as responseSerialize };
        export { deserialize_api_pb_WaitListResponse as responseDeserialize };
    }
    namespace testBlock {
        const path_28: string;
        export { path_28 as path };
        const requestStream_28: boolean;
        export { requestStream_28 as requestStream };
        const responseStream_28: boolean;
        export { responseStream_28 as responseStream };
        const requestType_28: typeof google_protobuf_empty_pb.Empty;
        export { requestType_28 as requestType };
        const responseType_28: typeof resources_pb.BlockResponse;
        export { responseType_28 as responseType };
        export { serialize_google_protobuf_Empty as requestSerialize };
        export { deserialize_google_protobuf_Empty as requestDeserialize };
        export { serialize_api_pb_BlockResponse as responseSerialize };
        export { deserialize_api_pb_BlockResponse as responseDeserialize };
    }
    namespace swapPool {
        const path_29: string;
        export { path_29 as path };
        const requestStream_29: boolean;
        export { requestStream_29 as requestStream };
        const responseStream_29: boolean;
        export { responseStream_29 as responseStream };
        const requestType_29: typeof resources_pb.SwapPoolRequest;
        export { requestType_29 as requestType };
        const responseType_29: typeof resources_pb.SwapPoolResponse;
        export { responseType_29 as responseType };
        export { serialize_api_pb_SwapPoolRequest as requestSerialize };
        export { deserialize_api_pb_SwapPoolRequest as requestDeserialize };
        export { serialize_api_pb_SwapPoolResponse as responseSerialize };
        export { deserialize_api_pb_SwapPoolResponse as responseDeserialize };
    }
    namespace swapPools {
        const path_30: string;
        export { path_30 as path };
        const requestStream_30: boolean;
        export { requestStream_30 as requestStream };
        const responseStream_30: boolean;
        export { responseStream_30 as responseStream };
        const requestType_30: typeof resources_pb.SwapPoolsRequest;
        export { requestType_30 as requestType };
        const responseType_30: typeof resources_pb.SwapPoolsResponse;
        export { responseType_30 as responseType };
        export { serialize_api_pb_SwapPoolsRequest as requestSerialize };
        export { deserialize_api_pb_SwapPoolsRequest as requestDeserialize };
        export { serialize_api_pb_SwapPoolsResponse as responseSerialize };
        export { deserialize_api_pb_SwapPoolsResponse as responseDeserialize };
    }
    namespace swapPoolProvider {
        const path_31: string;
        export { path_31 as path };
        const requestStream_31: boolean;
        export { requestStream_31 as requestStream };
        const responseStream_31: boolean;
        export { responseStream_31 as responseStream };
        const requestType_31: typeof resources_pb.SwapPoolProviderRequest;
        export { requestType_31 as requestType };
        const responseType_31: typeof resources_pb.SwapPoolResponse;
        export { responseType_31 as responseType };
        export { serialize_api_pb_SwapPoolProviderRequest as requestSerialize };
        export { deserialize_api_pb_SwapPoolProviderRequest as requestDeserialize };
        export { serialize_api_pb_SwapPoolResponse as responseSerialize };
        export { deserialize_api_pb_SwapPoolResponse as responseDeserialize };
    }
    namespace priceCommission {
        const path_32: string;
        export { path_32 as path };
        const requestStream_32: boolean;
        export { requestStream_32 as requestStream };
        const responseStream_32: boolean;
        export { responseStream_32 as responseStream };
        const requestType_32: typeof resources_pb.PriceCommissionRequest;
        export { requestType_32 as requestType };
        const responseType_32: typeof resources_pb.PriceCommissionResponse;
        export { responseType_32 as responseType };
        export { serialize_api_pb_PriceCommissionRequest as requestSerialize };
        export { deserialize_api_pb_PriceCommissionRequest as requestDeserialize };
        export { serialize_api_pb_PriceCommissionResponse as responseSerialize };
        export { deserialize_api_pb_PriceCommissionResponse as responseDeserialize };
    }
    namespace versionNetwork {
        const path_33: string;
        export { path_33 as path };
        const requestStream_33: boolean;
        export { requestStream_33 as requestStream };
        const responseStream_33: boolean;
        export { responseStream_33 as responseStream };
        const requestType_33: typeof resources_pb.VersionNetworkRequest;
        export { requestType_33 as requestType };
        const responseType_33: typeof resources_pb.VersionNetworkResponse;
        export { responseType_33 as responseType };
        export { serialize_api_pb_VersionNetworkRequest as requestSerialize };
        export { deserialize_api_pb_VersionNetworkRequest as requestDeserialize };
        export { serialize_api_pb_VersionNetworkResponse as responseSerialize };
        export { deserialize_api_pb_VersionNetworkResponse as responseDeserialize };
    }
    namespace commissionVotes {
        const path_34: string;
        export { path_34 as path };
        const requestStream_34: boolean;
        export { requestStream_34 as requestStream };
        const responseStream_34: boolean;
        export { responseStream_34 as responseStream };
        const requestType_34: typeof resources_pb.CommissionVotesRequest;
        export { requestType_34 as requestType };
        const responseType_34: typeof resources_pb.CommissionVotesResponse;
        export { responseType_34 as responseType };
        export { serialize_api_pb_CommissionVotesRequest as requestSerialize };
        export { deserialize_api_pb_CommissionVotesRequest as requestDeserialize };
        export { serialize_api_pb_CommissionVotesResponse as responseSerialize };
        export { deserialize_api_pb_CommissionVotesResponse as responseDeserialize };
    }
    namespace updateVotes {
        const path_35: string;
        export { path_35 as path };
        const requestStream_35: boolean;
        export { requestStream_35 as requestStream };
        const responseStream_35: boolean;
        export { responseStream_35 as responseStream };
        const requestType_35: typeof resources_pb.UpdateVotesRequest;
        export { requestType_35 as requestType };
        const responseType_35: typeof resources_pb.UpdateVotesResponse;
        export { responseType_35 as responseType };
        export { serialize_api_pb_UpdateVotesRequest as requestSerialize };
        export { deserialize_api_pb_UpdateVotesRequest as requestDeserialize };
        export { serialize_api_pb_UpdateVotesResponse as responseSerialize };
        export { deserialize_api_pb_UpdateVotesResponse as responseDeserialize };
    }
    namespace blocks {
        const path_36: string;
        export { path_36 as path };
        const requestStream_36: boolean;
        export { requestStream_36 as requestStream };
        const responseStream_36: boolean;
        export { responseStream_36 as responseStream };
        const requestType_36: typeof resources_pb.BlocksRequest;
        export { requestType_36 as requestType };
        const responseType_36: typeof resources_pb.BlocksResponse;
        export { responseType_36 as responseType };
        export { serialize_api_pb_BlocksRequest as requestSerialize };
        export { deserialize_api_pb_BlocksRequest as requestDeserialize };
        export { serialize_api_pb_BlocksResponse as responseSerialize };
        export { deserialize_api_pb_BlocksResponse as responseDeserialize };
    }
    namespace limitOrder {
        const path_37: string;
        export { path_37 as path };
        const requestStream_37: boolean;
        export { requestStream_37 as requestStream };
        const responseStream_37: boolean;
        export { responseStream_37 as responseStream };
        const requestType_37: typeof resources_pb.LimitOrderRequest;
        export { requestType_37 as requestType };
        const responseType_37: typeof resources_pb.LimitOrderResponse;
        export { responseType_37 as responseType };
        export { serialize_api_pb_LimitOrderRequest as requestSerialize };
        export { deserialize_api_pb_LimitOrderRequest as requestDeserialize };
        export { serialize_api_pb_LimitOrderResponse as responseSerialize };
        export { deserialize_api_pb_LimitOrderResponse as responseDeserialize };
    }
    namespace limitOrdersOfPool {
        const path_38: string;
        export { path_38 as path };
        const requestStream_38: boolean;
        export { requestStream_38 as requestStream };
        const responseStream_38: boolean;
        export { responseStream_38 as responseStream };
        const requestType_38: typeof resources_pb.LimitOrdersOfPoolRequest;
        export { requestType_38 as requestType };
        const responseType_38: typeof resources_pb.LimitOrdersOfPoolResponse;
        export { responseType_38 as responseType };
        export { serialize_api_pb_LimitOrdersOfPoolRequest as requestSerialize };
        export { deserialize_api_pb_LimitOrdersOfPoolRequest as requestDeserialize };
        export { serialize_api_pb_LimitOrdersOfPoolResponse as responseSerialize };
        export { deserialize_api_pb_LimitOrdersOfPoolResponse as responseDeserialize };
    }
    namespace limitOrders {
        const path_39: string;
        export { path_39 as path };
        const requestStream_39: boolean;
        export { requestStream_39 as requestStream };
        const responseStream_39: boolean;
        export { responseStream_39 as responseStream };
        const requestType_39: typeof resources_pb.LimitOrdersRequest;
        export { requestType_39 as requestType };
        const responseType_39: typeof resources_pb.LimitOrdersResponse;
        export { responseType_39 as responseType };
        export { serialize_api_pb_LimitOrdersRequest as requestSerialize };
        export { deserialize_api_pb_LimitOrdersRequest as requestDeserialize };
        export { serialize_api_pb_LimitOrdersResponse as responseSerialize };
        export { deserialize_api_pb_LimitOrdersResponse as responseDeserialize };
    }
    namespace bestTrade {
        const path_40: string;
        export { path_40 as path };
        const requestStream_40: boolean;
        export { requestStream_40 as requestStream };
        const responseStream_40: boolean;
        export { responseStream_40 as responseStream };
        const requestType_40: typeof resources_pb.BestTradeRequest;
        export { requestType_40 as requestType };
        const responseType_40: typeof resources_pb.BestTradeResponse;
        export { responseType_40 as responseType };
        export { serialize_api_pb_BestTradeRequest as requestSerialize };
        export { deserialize_api_pb_BestTradeRequest as requestDeserialize };
        export { serialize_api_pb_BestTradeResponse as responseSerialize };
        export { deserialize_api_pb_BestTradeResponse as responseDeserialize };
    }
}
export const ApiServiceClient: grpc.ServiceClientConstructor;
import resources_pb = require("./resources_pb.js");
declare function serialize_api_pb_SubscribeRequest(arg: any): Buffer;
declare function deserialize_api_pb_SubscribeRequest(buffer_arg: any): resources_pb.SubscribeRequest;
declare function serialize_api_pb_SubscribeResponse(arg: any): Buffer;
declare function deserialize_api_pb_SubscribeResponse(buffer_arg: any): resources_pb.SubscribeResponse;
declare function serialize_api_pb_HaltsRequest(arg: any): Buffer;
declare function deserialize_api_pb_HaltsRequest(buffer_arg: any): resources_pb.HaltsRequest;
declare function serialize_api_pb_HaltsResponse(arg: any): Buffer;
declare function deserialize_api_pb_HaltsResponse(buffer_arg: any): resources_pb.HaltsResponse;
import google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb.js");
declare function serialize_google_protobuf_Empty(arg: any): Buffer;
declare function deserialize_google_protobuf_Empty(buffer_arg: any): google_protobuf_empty_pb.Empty;
declare function serialize_api_pb_GenesisResponse(arg: any): Buffer;
declare function deserialize_api_pb_GenesisResponse(buffer_arg: any): resources_pb.GenesisResponse;
declare function serialize_api_pb_MinGasPriceResponse(arg: any): Buffer;
declare function deserialize_api_pb_MinGasPriceResponse(buffer_arg: any): resources_pb.MinGasPriceResponse;
declare function serialize_api_pb_NetInfoResponse(arg: any): Buffer;
declare function deserialize_api_pb_NetInfoResponse(buffer_arg: any): resources_pb.NetInfoResponse;
declare function serialize_api_pb_StatusResponse(arg: any): Buffer;
declare function deserialize_api_pb_StatusResponse(buffer_arg: any): resources_pb.StatusResponse;
declare function serialize_api_pb_AddressRequest(arg: any): Buffer;
declare function deserialize_api_pb_AddressRequest(buffer_arg: any): resources_pb.AddressRequest;
declare function serialize_api_pb_AddressResponse(arg: any): Buffer;
declare function deserialize_api_pb_AddressResponse(buffer_arg: any): resources_pb.AddressResponse;
declare function serialize_api_pb_AddressesRequest(arg: any): Buffer;
declare function deserialize_api_pb_AddressesRequest(buffer_arg: any): resources_pb.AddressesRequest;
declare function serialize_api_pb_AddressesResponse(arg: any): Buffer;
declare function deserialize_api_pb_AddressesResponse(buffer_arg: any): resources_pb.AddressesResponse;
declare function serialize_api_pb_BlockRequest(arg: any): Buffer;
declare function deserialize_api_pb_BlockRequest(buffer_arg: any): resources_pb.BlockRequest;
declare function serialize_api_pb_BlockResponse(arg: any): Buffer;
declare function deserialize_api_pb_BlockResponse(buffer_arg: any): resources_pb.BlockResponse;
declare function serialize_api_pb_CandidateRequest(arg: any): Buffer;
declare function deserialize_api_pb_CandidateRequest(buffer_arg: any): resources_pb.CandidateRequest;
declare function serialize_api_pb_CandidateResponse(arg: any): Buffer;
declare function deserialize_api_pb_CandidateResponse(buffer_arg: any): resources_pb.CandidateResponse;
declare function serialize_api_pb_CandidatesRequest(arg: any): Buffer;
declare function deserialize_api_pb_CandidatesRequest(buffer_arg: any): resources_pb.CandidatesRequest;
declare function serialize_api_pb_CandidatesResponse(arg: any): Buffer;
declare function deserialize_api_pb_CandidatesResponse(buffer_arg: any): resources_pb.CandidatesResponse;
declare function serialize_api_pb_CoinIdRequest(arg: any): Buffer;
declare function deserialize_api_pb_CoinIdRequest(buffer_arg: any): resources_pb.CoinIdRequest;
declare function serialize_api_pb_CoinInfoResponse(arg: any): Buffer;
declare function deserialize_api_pb_CoinInfoResponse(buffer_arg: any): resources_pb.CoinInfoResponse;
declare function serialize_api_pb_CoinInfoRequest(arg: any): Buffer;
declare function deserialize_api_pb_CoinInfoRequest(buffer_arg: any): resources_pb.CoinInfoRequest;
declare function serialize_api_pb_EstimateCoinBuyRequest(arg: any): Buffer;
declare function deserialize_api_pb_EstimateCoinBuyRequest(buffer_arg: any): resources_pb.EstimateCoinBuyRequest;
declare function serialize_api_pb_EstimateCoinBuyResponse(arg: any): Buffer;
declare function deserialize_api_pb_EstimateCoinBuyResponse(buffer_arg: any): resources_pb.EstimateCoinBuyResponse;
declare function serialize_api_pb_EstimateCoinSellRequest(arg: any): Buffer;
declare function deserialize_api_pb_EstimateCoinSellRequest(buffer_arg: any): resources_pb.EstimateCoinSellRequest;
declare function serialize_api_pb_EstimateCoinSellResponse(arg: any): Buffer;
declare function deserialize_api_pb_EstimateCoinSellResponse(buffer_arg: any): resources_pb.EstimateCoinSellResponse;
declare function serialize_api_pb_EstimateCoinSellAllRequest(arg: any): Buffer;
declare function deserialize_api_pb_EstimateCoinSellAllRequest(buffer_arg: any): resources_pb.EstimateCoinSellAllRequest;
declare function serialize_api_pb_EstimateCoinSellAllResponse(arg: any): Buffer;
declare function deserialize_api_pb_EstimateCoinSellAllResponse(buffer_arg: any): resources_pb.EstimateCoinSellAllResponse;
declare function serialize_api_pb_EstimateTxCommissionRequest(arg: any): Buffer;
declare function deserialize_api_pb_EstimateTxCommissionRequest(buffer_arg: any): resources_pb.EstimateTxCommissionRequest;
declare function serialize_api_pb_EstimateTxCommissionResponse(arg: any): Buffer;
declare function deserialize_api_pb_EstimateTxCommissionResponse(buffer_arg: any): resources_pb.EstimateTxCommissionResponse;
declare function serialize_api_pb_EventsRequest(arg: any): Buffer;
declare function deserialize_api_pb_EventsRequest(buffer_arg: any): resources_pb.EventsRequest;
declare function serialize_api_pb_EventsResponse(arg: any): Buffer;
declare function deserialize_api_pb_EventsResponse(buffer_arg: any): resources_pb.EventsResponse;
declare function serialize_api_pb_MaxGasPriceRequest(arg: any): Buffer;
declare function deserialize_api_pb_MaxGasPriceRequest(buffer_arg: any): resources_pb.MaxGasPriceRequest;
declare function serialize_api_pb_MaxGasPriceResponse(arg: any): Buffer;
declare function deserialize_api_pb_MaxGasPriceResponse(buffer_arg: any): resources_pb.MaxGasPriceResponse;
declare function serialize_api_pb_MissedBlocksRequest(arg: any): Buffer;
declare function deserialize_api_pb_MissedBlocksRequest(buffer_arg: any): resources_pb.MissedBlocksRequest;
declare function serialize_api_pb_MissedBlocksResponse(arg: any): Buffer;
declare function deserialize_api_pb_MissedBlocksResponse(buffer_arg: any): resources_pb.MissedBlocksResponse;
declare function serialize_api_pb_SendTransactionRequest(arg: any): Buffer;
declare function deserialize_api_pb_SendTransactionRequest(buffer_arg: any): resources_pb.SendTransactionRequest;
declare function serialize_api_pb_SendTransactionResponse(arg: any): Buffer;
declare function deserialize_api_pb_SendTransactionResponse(buffer_arg: any): resources_pb.SendTransactionResponse;
declare function serialize_api_pb_TransactionRequest(arg: any): Buffer;
declare function deserialize_api_pb_TransactionRequest(buffer_arg: any): resources_pb.TransactionRequest;
declare function serialize_api_pb_TransactionResponse(arg: any): Buffer;
declare function deserialize_api_pb_TransactionResponse(buffer_arg: any): resources_pb.TransactionResponse;
declare function serialize_api_pb_TransactionsRequest(arg: any): Buffer;
declare function deserialize_api_pb_TransactionsRequest(buffer_arg: any): resources_pb.TransactionsRequest;
declare function serialize_api_pb_TransactionsResponse(arg: any): Buffer;
declare function deserialize_api_pb_TransactionsResponse(buffer_arg: any): resources_pb.TransactionsResponse;
declare function serialize_api_pb_UnconfirmedTxsRequest(arg: any): Buffer;
declare function deserialize_api_pb_UnconfirmedTxsRequest(buffer_arg: any): resources_pb.UnconfirmedTxsRequest;
declare function serialize_api_pb_UnconfirmedTxsResponse(arg: any): Buffer;
declare function deserialize_api_pb_UnconfirmedTxsResponse(buffer_arg: any): resources_pb.UnconfirmedTxsResponse;
declare function serialize_api_pb_ValidatorsRequest(arg: any): Buffer;
declare function deserialize_api_pb_ValidatorsRequest(buffer_arg: any): resources_pb.ValidatorsRequest;
declare function serialize_api_pb_ValidatorsResponse(arg: any): Buffer;
declare function deserialize_api_pb_ValidatorsResponse(buffer_arg: any): resources_pb.ValidatorsResponse;
declare function serialize_api_pb_FrozenRequest(arg: any): Buffer;
declare function deserialize_api_pb_FrozenRequest(buffer_arg: any): resources_pb.FrozenRequest;
declare function serialize_api_pb_FrozenResponse(arg: any): Buffer;
declare function deserialize_api_pb_FrozenResponse(buffer_arg: any): resources_pb.FrozenResponse;
declare function serialize_api_pb_FrozenAllRequest(arg: any): Buffer;
declare function deserialize_api_pb_FrozenAllRequest(buffer_arg: any): resources_pb.FrozenAllRequest;
declare function serialize_api_pb_WaitListRequest(arg: any): Buffer;
declare function deserialize_api_pb_WaitListRequest(buffer_arg: any): resources_pb.WaitListRequest;
declare function serialize_api_pb_WaitListResponse(arg: any): Buffer;
declare function deserialize_api_pb_WaitListResponse(buffer_arg: any): resources_pb.WaitListResponse;
declare function serialize_api_pb_SwapPoolRequest(arg: any): Buffer;
declare function deserialize_api_pb_SwapPoolRequest(buffer_arg: any): resources_pb.SwapPoolRequest;
declare function serialize_api_pb_SwapPoolResponse(arg: any): Buffer;
declare function deserialize_api_pb_SwapPoolResponse(buffer_arg: any): resources_pb.SwapPoolResponse;
declare function serialize_api_pb_SwapPoolsRequest(arg: any): Buffer;
declare function deserialize_api_pb_SwapPoolsRequest(buffer_arg: any): resources_pb.SwapPoolsRequest;
declare function serialize_api_pb_SwapPoolsResponse(arg: any): Buffer;
declare function deserialize_api_pb_SwapPoolsResponse(buffer_arg: any): resources_pb.SwapPoolsResponse;
declare function serialize_api_pb_SwapPoolProviderRequest(arg: any): Buffer;
declare function deserialize_api_pb_SwapPoolProviderRequest(buffer_arg: any): resources_pb.SwapPoolProviderRequest;
declare function serialize_api_pb_PriceCommissionRequest(arg: any): Buffer;
declare function deserialize_api_pb_PriceCommissionRequest(buffer_arg: any): resources_pb.PriceCommissionRequest;
declare function serialize_api_pb_PriceCommissionResponse(arg: any): Buffer;
declare function deserialize_api_pb_PriceCommissionResponse(buffer_arg: any): resources_pb.PriceCommissionResponse;
declare function serialize_api_pb_VersionNetworkRequest(arg: any): Buffer;
declare function deserialize_api_pb_VersionNetworkRequest(buffer_arg: any): resources_pb.VersionNetworkRequest;
declare function serialize_api_pb_VersionNetworkResponse(arg: any): Buffer;
declare function deserialize_api_pb_VersionNetworkResponse(buffer_arg: any): resources_pb.VersionNetworkResponse;
declare function serialize_api_pb_CommissionVotesRequest(arg: any): Buffer;
declare function deserialize_api_pb_CommissionVotesRequest(buffer_arg: any): resources_pb.CommissionVotesRequest;
declare function serialize_api_pb_CommissionVotesResponse(arg: any): Buffer;
declare function deserialize_api_pb_CommissionVotesResponse(buffer_arg: any): resources_pb.CommissionVotesResponse;
declare function serialize_api_pb_UpdateVotesRequest(arg: any): Buffer;
declare function deserialize_api_pb_UpdateVotesRequest(buffer_arg: any): resources_pb.UpdateVotesRequest;
declare function serialize_api_pb_UpdateVotesResponse(arg: any): Buffer;
declare function deserialize_api_pb_UpdateVotesResponse(buffer_arg: any): resources_pb.UpdateVotesResponse;
declare function serialize_api_pb_BlocksRequest(arg: any): Buffer;
declare function deserialize_api_pb_BlocksRequest(buffer_arg: any): resources_pb.BlocksRequest;
declare function serialize_api_pb_BlocksResponse(arg: any): Buffer;
declare function deserialize_api_pb_BlocksResponse(buffer_arg: any): resources_pb.BlocksResponse;
declare function serialize_api_pb_LimitOrderRequest(arg: any): Buffer;
declare function deserialize_api_pb_LimitOrderRequest(buffer_arg: any): resources_pb.LimitOrderRequest;
declare function serialize_api_pb_LimitOrderResponse(arg: any): Buffer;
declare function deserialize_api_pb_LimitOrderResponse(buffer_arg: any): resources_pb.LimitOrderResponse;
declare function serialize_api_pb_LimitOrdersOfPoolRequest(arg: any): Buffer;
declare function deserialize_api_pb_LimitOrdersOfPoolRequest(buffer_arg: any): resources_pb.LimitOrdersOfPoolRequest;
declare function serialize_api_pb_LimitOrdersOfPoolResponse(arg: any): Buffer;
declare function deserialize_api_pb_LimitOrdersOfPoolResponse(buffer_arg: any): resources_pb.LimitOrdersOfPoolResponse;
declare function serialize_api_pb_LimitOrdersRequest(arg: any): Buffer;
declare function deserialize_api_pb_LimitOrdersRequest(buffer_arg: any): resources_pb.LimitOrdersRequest;
declare function serialize_api_pb_LimitOrdersResponse(arg: any): Buffer;
declare function deserialize_api_pb_LimitOrdersResponse(buffer_arg: any): resources_pb.LimitOrdersResponse;
declare function serialize_api_pb_BestTradeRequest(arg: any): Buffer;
declare function deserialize_api_pb_BestTradeRequest(buffer_arg: any): resources_pb.BestTradeRequest;
declare function serialize_api_pb_BestTradeResponse(arg: any): Buffer;
declare function deserialize_api_pb_BestTradeResponse(buffer_arg: any): resources_pb.BestTradeResponse;
import grpc = require("@grpc/grpc-js");
export {};
