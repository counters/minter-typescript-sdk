"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resources_pb_1 = require("../proto/resources_pb");
class ConvertBestTradeType {
    getName(uid) {
        if (uid === resources_pb_1.BestTradeRequest.Type.INPUT)
            return 'input';
        else if (uid === resources_pb_1.BestTradeRequest.Type.OUTPUT)
            return 'output';
        else
            return null;
    }
}
exports.default = ConvertBestTradeType;
//# sourceMappingURL=ConvertBestTradeType.js.map