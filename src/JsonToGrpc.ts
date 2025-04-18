import { StringValue, UInt64Value } from "google-protobuf/google/protobuf/wrappers_pb";
import {
  AddressBalance,
  AddressDelegatedBalance,
  AddressResponse,
  BestTradeResponse,
  CandidateResponse,
  CandidatesResponse,
  Coin,
  CoinInfoResponse,
  EstimateCoinSellResponse,
  Multisig
} from "./proto/resources_pb";
import ConvertSwapFrom from "./convert/ConvertSwapFrom";

class JsonToGrpc {
  private convertSwapFrom = new ConvertSwapFrom();

  public CoinInfo(value: any): CoinInfoResponse {
    const ownerAddress = value.owner_address ? new StringValue().setValue(value.owner_address) : undefined;
    const response = new CoinInfoResponse();
    response
      // tslint:disable:radix
      .setId(parseInt(value.id))
      .setName(value.name)
      .setSymbol(value.symbol)
      .setVolume(value.volume)
      .setCrr(parseInt(value.crr))
      .setReserveBalance(value.reserve_balance)
      .setMaxSupply(value.max_supply)
      .setOwnerAddress(ownerAddress)
      .setMintable(value.mintable)
      .setBurnable(value.burnable);
    return response;
  }

  public Address(value: any): AddressResponse {
    const response = new AddressResponse();
    const balanceList: Array<AddressBalance> = [];
    value.balance.forEach((item: any) => {
      const addressBalance: AddressBalance = new AddressBalance()
        .setCoin(this.coinByJson(item.coin))
        .setValue(item.value)
        .setBipValue(item.bip_value);
      balanceList.push(addressBalance);
    });
    const totalList: Array<AddressBalance> = [];
    value.total.forEach((item: any) => {
      const addressBalance: AddressBalance = new AddressBalance()
        .setCoin(this.coinByJson(item.coin))
        .setValue(item.value)
        .setBipValue(item.bip_value);
      totalList.push(addressBalance);
    });
    const delegatedList: Array<AddressDelegatedBalance> = [];
    value.delegated.forEach((item: any) => {
      const addressBalance = new AddressDelegatedBalance()
        .setCoin(this.coinByJson(item.coin))
        .setValue(item.value)
        .setBipValue(item.bip_value)
        .setDelegateBipValue(item.delegate_bip_value);
      delegatedList.push(addressBalance);
    });
    let multisig: Multisig | undefined;
    if (value.multisig) {
      multisig = new Multisig()
        .setThreshold(value.multisig.threshold)
        .setAddressesList(value.multisig.addresses)
        .setWeightsList(value.multisig.weights);
    }

    response
      .setBalanceList(balanceList)
      .setDelegatedList(delegatedList)
      .setTotalList(totalList)
      .setTransactionCount(value.transaction_count)
      .setBipValue(value.bip_value)
      .setLockedStakeUntilBlock(value.locked_stake_until_block)
      .setMultisig(multisig);
    return response;
  }

  public EstimateCoinSell(value: Record<string, any>): EstimateCoinSellResponse {
    // console.info(value);
    const swapFrom = this.convertSwapFrom.getSwapFrom(value.swap_from);
    if (swapFrom === null) throw new Error(value.swap_from);
    const response = new EstimateCoinSellResponse();
    response
      .setWillGet(value.will_get)
      .setCommission(value.commission)
      .setSwapFrom(swapFrom);
    return response;
  }

  public BestTrade(value: Record<string, any>): BestTradeResponse {
    const arrPatch: Array<number> = [];
    value.path.forEach((path: string) => {
      arrPatch.push(Number(path));
    });
    const response = new BestTradeResponse();
    response.setPathList(arrPatch).setResult(value.result);
    return response;
  }

  public Candidate(value: Record<string, any>): CandidateResponse {
    const stakesList: Array<CandidateResponse.Stake> = [];
    value.stakes.forEach((item: Record<string, any>) => {
      const stake = new CandidateResponse.Stake()
        .setCoin(this.coinByJson(item.coin))
        .setValue(item.value)
        .setBipValue(item.bip_value)
        .setOwner(item.owner);
      stakesList.push(stake);
    });
    const minStake = value.min_stake ? new StringValue().setValue(value.min_stake) : undefined;
    const response = new CandidateResponse();

    if (value.used_slots) response.setUsedSlots(new UInt64Value().setValue(parseInt(value.used_slots)));
    if (value.uniq_users) response.setUniqUsers(new UInt64Value().setValue(parseInt(value.uniq_users)));

    response
      .setId(Number(value.id))
      .setRewardAddress(value.reward_address)
      .setOwnerAddress(value.owner_address)
      .setControlAddress(value.control_address)
      .setTotalStake(value.total_stake)
      .setPublicKey(value.public_key)
      // .setCommission(Number(value.commission))
      .setCommission(parseInt(value.commission))
      .setMinStake(minStake)
      .setStakesList(stakesList)
      .setStatus(parseInt(value.status))
      .setValidator(value.validator)
      .setJailedUntil(parseInt(value.jailed_until));
    return response;
  }

  public Candidates(value: Record<string, any>): CandidatesResponse {
    const array: Array<CandidateResponse> = [];
    value.candidates.forEach((item: Record<string, any>) => {
      array.push(this.Candidate(item));
    });
    return new CandidatesResponse().setCandidatesList(array);
  }

  private coinByJson(coin: any): Coin {
    return new Coin().setId(parseInt(coin.id)).setSymbol(coin.symbol);
  }
}

export default JsonToGrpc;
