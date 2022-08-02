import { SwapFrom } from '../proto/resources_pb';

class ConvertSwapFrom {
  public getSwapFrom(name: string): SwapFrom | null {
    if(name==='bancor') return SwapFrom.BANCOR
    else if(name==='pool') return SwapFrom.POOL
    else if(name==='optimal') return SwapFrom.OPTIMAL
      else return null;
  }

  public getUid(name: string): number | null {
    if(this.getSwapFrom(name)!=null) return SwapFrom.BANCOR
      else return null;
  }

  public getName(uid: number): string | null {
    if (uid === SwapFrom.BANCOR) return 'bancor';
    else if (uid === SwapFrom.POOL) return 'pool';
    else if (uid === SwapFrom.OPTIMAL) return 'optimal';
    else return null;
  }
}
export default ConvertSwapFrom;
