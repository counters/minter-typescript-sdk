import {BestTradeRequest} from '../proto/resources_pb';

class ConvertBestTradeType {

  public getName(uid: number): string | null {
    if (uid === BestTradeRequest.Type.INPUT) return 'input';
    else if (uid === BestTradeRequest.Type.OUTPUT) return 'output';
    else return null;
  }
}
export default ConvertBestTradeType;
