import { StringValue, UInt64Value } from "./generated/proto/google/protobuf/wrappers";
import {
  AddressBalance,
  AddressDelegatedBalance,
  AddressResponse,
  BestTradeResponse,
  CandidateResponse,
  CandidateResponse_Stake,
  CandidatesResponse,
  Coin,
  CoinInfoResponse,
  EstimateCoinSellResponse,
  Multisig
} from "./generated/proto/resources";
import ConvertSwapFrom from "./convert/ConvertSwapFrom";

class JsonToGrpc {
  private convertSwapFrom = new ConvertSwapFrom();

  public CoinInfo(value: any): CoinInfoResponse {
    return CoinInfoResponse.fromPartial({
      id: Number(value.id),
      name: value.name,
      symbol: value.symbol,
      volume: value.volume,
      crr: Number(value.crr),
      reserveBalance: value.reserve_balance,
      maxSupply: value.max_supply,
      ownerAddress: value.owner_address || undefined,
      mintable: value.mintable,
      burnable: value.burnable
    });
  }

  public Address(value: any): AddressResponse {
    const balanceList: Array<AddressBalance> = value.balance.map((item: any) =>
      AddressBalance.fromPartial({
        coin: this.coinByJson(item.coin),
        value: item.value,
        bipValue: item.bip_value
      })
    );
    const totalList: Array<AddressBalance> = value.total.map((item: any) =>
      AddressBalance.fromPartial({
        coin: this.coinByJson(item.coin),
        value: item.value,
        bipValue: item.bip_value
      })
    );
    const delegatedList: Array<AddressDelegatedBalance> = value.delegated.map((item: any) =>
      AddressDelegatedBalance.fromPartial({
        coin: this.coinByJson(item.coin),
        value: item.value,
        bipValue: item.bip_value,
        delegateBipValue: item.delegate_bip_value
      })
    );
    let multisig: Multisig | undefined;
    if (value.multisig) {
      multisig = Multisig.fromPartial({
        threshold: value.multisig.threshold,
        addresses: value.multisig.addresses,
        weights: value.multisig.weights
      });
    }

    return AddressResponse.fromPartial({
      balance: balanceList,
      delegated: delegatedList,
      total: totalList,
      transactionCount: value.transaction_count,
      bipValue: value.bip_value,
      lockedStakeUntilBlock: value.locked_stake_until_block,
      multisig: multisig
    });
  }

  public EstimateCoinSell(value: Record<string, any>): EstimateCoinSellResponse {
    const swapFrom = this.convertSwapFrom.getSwapFrom(value.swap_from);
    if (swapFrom === null) throw new Error(value.swap_from);
    return EstimateCoinSellResponse.fromPartial({
      willGet: value.will_get,
      commission: value.commission,
      swapFrom: swapFrom
    });
  }

  public BestTrade(value: Record<string, any>): BestTradeResponse {
    const arrPatch: Array<number> = value.path.map((path: string) => Number(path));
    return BestTradeResponse.fromPartial({
      path: arrPatch,
      result: value.result
    });
  }

  public Candidate(value: Record<string, any>): CandidateResponse {
    const stakesList: Array<CandidateResponse_Stake> = value.stakes.map((item: Record<string, any>) =>
      CandidateResponse_Stake.fromPartial({
        coin: this.coinByJson(item.coin),
        value: item.value,
        bipValue: item.bip_value,
        owner: item.owner
      })
    );

    return CandidateResponse.fromPartial({
      id: Number(value.id),
      rewardAddress: value.reward_address,
      ownerAddress: value.owner_address,
      controlAddress: value.control_address,
      totalStake: value.total_stake,
      publicKey: value.public_key,
      commission: Number(value.commission),
      minStake: value.min_stake || undefined,
      stakes: stakesList,
      status: Number(value.status),
      validator: value.validator,
      jailedUntil: Number(value.jailed_until),
      usedSlots: value.used_slots ? Number(value.used_slots) : undefined,
      uniqUsers: value.uniq_users ? Number(value.uniq_users) : undefined
    });
  }

  public Candidates(value: Record<string, any>): CandidatesResponse {
    const array: Array<CandidateResponse> = value.candidates.map((item: Record<string, any>) =>
      this.Candidate(item)
    );
    return CandidatesResponse.fromPartial({ candidates: array });
  }

  private coinByJson(coin: any): Coin {
    return Coin.fromPartial({ id: Number(coin.id), symbol: coin.symbol });
  }
}

export default JsonToGrpc;

