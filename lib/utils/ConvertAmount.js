"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const big_js_1 = require("big.js");
class ConvertAmount {
    // private PIP_STR = "0.000000000000000001";
    //    private val UNIT = 10 ** -15;
    // private UNIT_STR = "0.000000000000001";
    // private testPipIn1BIP = "1000000000000000000";
    // private oneBip = BigInt("1000000000000000000");
    forMul = (0, big_js_1.default)("1000000000000000000");
    toPip(amount) {
        const big = (0, big_js_1.default)(amount);
        return big.mul(this.forMul).toFixed(0);
    }
    toBip(amount) {
        // const bigNum= BigInt(amount);
        // return Number(bigNum/this.oneBip)
        const big = (0, big_js_1.default)(amount);
        return big.div(this.forMul).toNumber();
        // const big = new Big(2);
    }
}
exports.default = ConvertAmount;
//# sourceMappingURL=ConvertAmount.js.map