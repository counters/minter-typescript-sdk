import GrpcOptions from "../src/types/GrpcOptions";
import HttpOptions from "../src/types/HttpOptions";

export default class Config {
  public grpcOptions: GrpcOptions = {
    hostname: "minter-api-host",
    port: 8842,
    deadline: 2500,
    useTransportSecurity: false
  };
  public httpOptions: HttpOptions = {raw: "http://minter-api-host:8843/v2/", timeout: null, headers: null};
}
