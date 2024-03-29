import Config from "./../Config";
import MinterApi from "../../src";
import {CandidatesRequest} from "../../src/proto/resources_pb";

test("MinterApi().getCandidatesGrpc()", async () => {
  const config = new Config();
  const grpcMinterApi = new MinterApi(config.grpcOptions);
  const httpMinterApi = new MinterApi(null, config.httpOptions);

  const include_stakes: boolean | null = null;
  const notShowStakes: boolean | null = null;
    const candidateStatus: CandidatesRequest.CandidateStatus | null = null;
  const height: number | null = null;
  const timeout: number | null = null;
    const grpcResult = await grpcMinterApi.getCandidatesGrpc(include_stakes, notShowStakes, candidateStatus, height, timeout);
    // console.info(grpcResult.toObject());
    const httpResult = await httpMinterApi.getCandidatesGrpc(include_stakes, notShowStakes, candidateStatus, height, timeout);
    // console.info(httpResult.toObject());
  expect(grpcResult.toObject()).toEqual(httpResult.toObject());
});
