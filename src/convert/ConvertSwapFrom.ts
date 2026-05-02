import { SwapFrom } from '../generated/proto/resources';

class ConvertSwapFrom {
  public getSwapFrom(name: string): SwapFrom | null {
    if(name==='bancor') return SwapFrom.bancor
    else if(name==='pool') return SwapFrom.pool
    else if(name==='optimal') return SwapFrom.optimal
      else return null;
  }

  public getUid(name: string): number | null {
    if(this.getSwapFrom(name)!=null) return SwapFrom.bancor
      else return null;
  }

  public getName(uid: number): string | null {
    if (uid === SwapFrom.bancor) return 'bancor';
    else if (uid === SwapFrom.pool) return 'pool';
    else if (uid === SwapFrom.optimal) return 'optimal';
    else return null;
  }
}
export default ConvertSwapFrom;
