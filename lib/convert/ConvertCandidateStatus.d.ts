import { CandidatesRequest } from '../proto/resources_pb';
import CandidateStatus = CandidatesRequest.CandidateStatus;
declare class ConvertCandidateStatus {
    /**
     * CandidateStatus to http param string
     * @param candidateStatus
     * @return string | null
     */
    get(candidateStatus?: CandidateStatus | null): string | null;
}
export default ConvertCandidateStatus;
