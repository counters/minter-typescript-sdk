
import Big from 'big.js';

class ConvertAmount {
  // private PIP_STR = "0.000000000000000001";
  //    private val UNIT = 10 ** -15;
  // private UNIT_STR = "0.000000000000001";
  // private testPipIn1BIP = "1000000000000000000";
  // private oneBip = BigInt("1000000000000000000");
  private forMul = Big("1000000000000000000");

  public toPip(amount: number): string {
    const big = Big(amount);
    return big.mul(this.forMul).toFixed(0)
  }

  public toBip(amount: string): number {
    // const bigNum= BigInt(amount);
    // return Number(bigNum/this.oneBip)
    const big = Big(amount);
    return big.div(this.forMul).toNumber()
    // const big = new Big(2);
  }

}
export default ConvertAmount;
