import {CandidatesRequest} from '../proto/resources_pb';
import CandidateStatus = CandidatesRequest.CandidateStatus;

class ConvertCandidateStatus {

    /**
     * CandidateStatus to http param string
     * @param candidateStatus
     * @return string | null
     */
    public get(candidateStatus: CandidateStatus | null = null): string | null {
        if (candidateStatus === CandidateStatus.ALL) return 'all'
        else if (candidateStatus === CandidateStatus.OFF) return 'off'
        else if (candidateStatus === CandidateStatus.ON) return 'on'
        else if (candidateStatus === CandidateStatus.VALIDATOR) return 'validator'
        else return null;
    }
}

export default ConvertCandidateStatus;
