import { SwapFrom } from '../proto/resources_pb';
declare class ConvertSwapFrom {
    getSwapFrom(name: string): SwapFrom | null;
    getUid(name: string): number | null;
    getName(uid: number): string | null;
}
export default ConvertSwapFrom;
