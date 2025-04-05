"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resources_pb_1 = require("../proto/resources_pb");
var CandidateStatus = resources_pb_1.CandidatesRequest.CandidateStatus;
class ConvertCandidateStatus {
    /**
     * CandidateStatus to http param string
     * @param candidateStatus
     * @return string | null
     */
    get(candidateStatus = null) {
        if (candidateStatus === CandidateStatus.ALL)
            return 'all';
        else if (candidateStatus === CandidateStatus.OFF)
            return 'off';
        else if (candidateStatus === CandidateStatus.ON)
            return 'on';
        else if (candidateStatus === CandidateStatus.VALIDATOR)
            return 'validator';
        else
            return null;
    }
}
exports.default = ConvertCandidateStatus;
//# sourceMappingURL=ConvertCandidateStatus.js.map