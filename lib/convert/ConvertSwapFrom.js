"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resources_pb_1 = require("../proto/resources_pb");
class ConvertSwapFrom {
    getSwapFrom(name) {
        if (name === 'bancor')
            return resources_pb_1.SwapFrom.BANCOR;
        else if (name === 'pool')
            return resources_pb_1.SwapFrom.POOL;
        else if (name === 'optimal')
            return resources_pb_1.SwapFrom.OPTIMAL;
        else
            return null;
    }
    getUid(name) {
        if (this.getSwapFrom(name) != null)
            return resources_pb_1.SwapFrom.BANCOR;
        else
            return null;
    }
    getName(uid) {
        if (uid === resources_pb_1.SwapFrom.BANCOR)
            return 'bancor';
        else if (uid === resources_pb_1.SwapFrom.POOL)
            return 'pool';
        else if (uid === resources_pb_1.SwapFrom.OPTIMAL)
            return 'optimal';
        else
            return null;
    }
}
exports.default = ConvertSwapFrom;
//# sourceMappingURL=ConvertSwapFrom.js.map