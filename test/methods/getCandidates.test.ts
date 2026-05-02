import Config from "./../Config";
import MinterApi from "../../src";
import { CandidatesRequest_CandidateStatus } from "../../src/generated/proto/resources";

test("MinterApi().getCandidatesGrpc()", async () => {
  const config = new Config();
  const grpcMinterApi = new MinterApi(config.grpcOptions);
  const httpMinterApi = new MinterApi(null, config.httpOptions);

  const include_stakes: boolean | null = null;
  const notShowStakes: boolean | null = null;
    const candidateStatus: CandidatesRequest_CandidateStatus | null = null;
  const height: number | null = null;
  const timeout: number | null = null;
    const grpcResult = await grpcMinterApi.getCandidatesGrpc(include_stakes, notShowStakes, candidateStatus, height, timeout);
    // console.info(grpcResult);
    const httpResult = await httpMinterApi.getCandidatesGrpc(include_stakes, notShowStakes, candidateStatus, height, timeout);
    // console.info(httpResult);
  expect(grpcResult).toEqual(httpResult);
});
