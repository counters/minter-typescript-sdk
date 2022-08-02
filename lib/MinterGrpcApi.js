"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_grpc_pb_1 = require("./proto/api_grpc_pb");
const grpc_js_1 = require("@grpc/grpc-js");
class MinterGrpcApi {
    client;
    grpcOptions;
    constructor(grpcOptions) {
        this.grpcOptions = grpcOptions;
        this.client = new api_grpc_pb_1.ApiServiceClient(`${this.grpcOptions.hostname}:${this.grpcOptions.port}`, grpc_js_1.credentials.createInsecure());
    }
    getCoinInfoGrpc(request, deadline = null) {
        return new Promise((resolve, reject) => {
            this.client.coinInfo(request, new grpc_js_1.Metadata(), this.getOptions(deadline), (err, response) => {
                if (err)
                    reject(err);
                else
                    resolve(response);
            });
        });
    }
    getAddressGrpc(request, deadline = null) {
        return new Promise((resolve, reject) => {
            this.client.address(request, new grpc_js_1.Metadata(), this.getOptions(deadline), (err, response) => {
                if (err)
                    reject(err);
                else
                    resolve(response);
            });
        });
    }
    estimateCoinSellGrpc(request, deadline = null) {
        return new Promise((resolve, reject) => {
            this.client.estimateCoinSell(request, new grpc_js_1.Metadata(), this.getOptions(deadline), (err, response) => {
                if (err)
                    reject(err);
                else
                    resolve(response);
            });
        });
    }
    getOptions(deadline = null) {
        deadline = deadline ? deadline : this.grpcOptions.deadline;
        if (deadline)
            return {
                deadline: new Date().setMilliseconds(new Date().getMilliseconds() + deadline)
            };
        else
            return {};
    }
}
exports.default = MinterGrpcApi;
//# sourceMappingURL=MinterGrpcApi.js.map