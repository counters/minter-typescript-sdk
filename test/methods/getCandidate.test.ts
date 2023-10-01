import Config from "./../Config";
import MinterApi from "../../src";

test("MinterApi().getCandidateGrpc()", async () => {
  const config = new Config();
  const grpcMinterApi = new MinterApi(config.grpcOptions);
  const httpMinterApi = new MinterApi(null, config.httpOptions);

  const publicKey = "Mp12345bf7d1c833701ea490c2e77430486922a9fbef713b933cc3b32700f27777";
  const notShowStakes: boolean | null = null;
  const height: number | null = null;
  const timeout: number | null = null;
  const grpcResult = await grpcMinterApi.getCandidateGrpc(publicKey, notShowStakes, height, timeout);
  console.info(grpcResult.toObject());
  const httpResult = await httpMinterApi.getCandidateGrpc(publicKey, notShowStakes, height, timeout);
  console.info(httpResult.toObject());
  expect(grpcResult.toObject()).toEqual(httpResult.toObject());
});
