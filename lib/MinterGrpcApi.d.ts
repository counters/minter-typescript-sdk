import { CoinInfoRequest, CoinInfoResponse, AddressRequest, AddressResponse, EstimateCoinSellRequest, EstimateCoinSellResponse, BestTradeRequest, BestTradeResponse, CandidateResponse, CandidateRequest, CandidatesRequest, CandidatesResponse } from "./proto/resources_pb";
import GrpcOptions from "./types/GrpcOptions";
export default class MinterGrpcApi {
    private client;
    private grpcOptions;
    constructor(grpcOptions: GrpcOptions);
    getCoinInfoGrpc(request: CoinInfoRequest, deadline?: number | null): Promise<CoinInfoResponse>;
    getAddressGrpc(request: AddressRequest, deadline?: number | null): Promise<AddressResponse>;
    estimateCoinSellGrpc(request: EstimateCoinSellRequest, deadline?: number | null): Promise<EstimateCoinSellResponse>;
    getBestTradeGrpc(request: BestTradeRequest, deadline?: number | null): Promise<BestTradeResponse>;
    private getOptions;
    getCandidateGrpc(request: CandidateRequest, deadline?: number | null): Promise<CandidateResponse>;
    getCandidatesGrpc(request: CandidatesRequest, deadline?: number | null): Promise<CandidatesResponse>;
}
