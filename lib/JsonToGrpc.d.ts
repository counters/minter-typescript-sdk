import { AddressResponse, BestTradeResponse, CandidateResponse, CandidatesResponse, CoinInfoResponse, EstimateCoinSellResponse } from "./proto/resources_pb";
declare class JsonToGrpc {
    private convertSwapFrom;
    CoinInfo(value: any): CoinInfoResponse;
    Address(value: any): AddressResponse;
    EstimateCoinSell(value: Record<string, any>): EstimateCoinSellResponse;
    BestTrade(value: Record<string, any>): BestTradeResponse;
    Candidate(value: Record<string, any>): CandidateResponse;
    Candidates(value: Record<string, any>): CandidatesResponse;
    private coinByJson;
}
export default JsonToGrpc;
