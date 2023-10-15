import {
    CoinInfoRequest,
    CoinInfoResponse,
    AddressRequest,
    AddressResponse,
    EstimateCoinSellRequest,
    EstimateCoinSellResponse,
    BestTradeRequest,
    BestTradeResponse,
    CandidateResponse,
    CandidateRequest,
    CandidatesRequest, CandidatesResponse
} from "./proto/resources_pb";
import {ApiServiceClient} from "./proto/api_grpc_pb";
import {credentials, Metadata} from "@grpc/grpc-js";
import GrpcOptions from "./types/GrpcOptions";

export default class MinterGrpcApi {

  private client: ApiServiceClient;
  private grpcOptions: GrpcOptions;

  constructor(grpcOptions: GrpcOptions) {
    this.grpcOptions = grpcOptions;
    this.client = new ApiServiceClient(`${this.grpcOptions.hostname}:${this.grpcOptions.port}`, credentials.createInsecure());
  }

  public getCoinInfoGrpc(request: CoinInfoRequest, deadline: number | null = null): Promise<CoinInfoResponse> {
    return new Promise<CoinInfoResponse>((resolve, reject) => {
      this.client.coinInfo(request, new Metadata(), this.getOptions(deadline), (err, response) => {
        if (err) reject(err);
        else resolve(response);
      });
    });
  }

  public getAddressGrpc(request: AddressRequest, deadline: number | null = null): Promise<AddressResponse> {
    return new Promise<AddressResponse>((resolve, reject) => {
      this.client.address(request, new Metadata(), this.getOptions(deadline), (err, response) => {
        if (err) reject(err);
        else resolve(response);
      });
    });
  }
  public estimateCoinSellGrpc(request: EstimateCoinSellRequest, deadline: number | null = null): Promise<EstimateCoinSellResponse> {
    return new Promise<EstimateCoinSellResponse>((resolve, reject) => {
      this.client.estimateCoinSell(request, new Metadata(), this.getOptions(deadline), (err, response) => {
        if (err) reject(err);
        else resolve(response);
      });
    });
  }
  public getBestTradeGrpc(request: BestTradeRequest, deadline: number | null = null): Promise<BestTradeResponse> {
    return new Promise<BestTradeResponse>((resolve, reject) => {
      this.client.bestTrade(request, new Metadata(), this.getOptions(deadline), (err, response) => {
        if (err) reject(err);
        else resolve(response);
      });
    });
  }

  private getOptions(deadline: number | null = null) {
    deadline = deadline ? deadline : this.grpcOptions.deadline;
    if (deadline)
      return {
        deadline: new Date().setMilliseconds(new Date().getMilliseconds() + deadline)
      };
    else return {};
  }

  public getCandidateGrpc(request: CandidateRequest, deadline: number | null=null): Promise<CandidateResponse> {
    return new Promise<CandidateResponse>((resolve, reject) => {
      this.client.candidate(request, new Metadata(), this.getOptions(deadline), (err, response) => {
        if (err) reject(err);
        else resolve(response);
      });
    });
  }

    public getCandidatesGrpc(request: CandidatesRequest, deadline: number | null=null): Promise<CandidatesResponse> {
        return new Promise<CandidatesResponse>((resolve, reject) => {
            this.client.candidates(request, new Metadata(), this.getOptions(deadline), (err, response) => {
                if (err) reject(err);
                else resolve(response);
            });
        });
    }
}
