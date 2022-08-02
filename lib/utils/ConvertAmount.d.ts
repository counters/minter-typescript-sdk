declare class ConvertAmount {
    private forMul;
    toPip(amount: number): string;
    toBip(amount: string): number;
}
export default ConvertAmount;
