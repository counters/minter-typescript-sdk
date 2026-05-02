import { BestTradeRequest_Type} from '../generated/proto/resources';

class ConvertBestTradeType {

  public getName(uid: number): string | null {
    if (uid === BestTradeRequest_Type.input) return 'input';
    else if (uid === BestTradeRequest_Type.output) return 'output';
    else return null;
  }
}
export default ConvertBestTradeType;
