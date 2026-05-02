import {CandidatesRequest_CandidateStatus} from '../generated/proto/resources';

class ConvertCandidateStatus {

    /**
     * CandidateStatus to http param string
     * @param candidateStatus
     * @return string | null
     */
    public get(candidateStatus: CandidatesRequest_CandidateStatus | null = null): string | null {
        if (candidateStatus === CandidatesRequest_CandidateStatus.all) return 'all'
        else if (candidateStatus === CandidatesRequest_CandidateStatus.off) return 'off'
        else if (candidateStatus === CandidatesRequest_CandidateStatus.on) return 'on'
        else if (candidateStatus === CandidatesRequest_CandidateStatus.validator) return 'validator'
        else return null;
    }
}

export default ConvertCandidateStatus;
