import React, { useEffect, useState } from "react";
import Hero from '../../components/hero';
import Footer from '../../components/footer';
import StakeComponent from '../../components/Stake';
import ReferralRewards from '../../components/ReferralRewards/ReferralRewards';
import InvestmentHistory from '../../components/InvestmentHistory/InvestmentHistory';
import { useLocation } from "react-router-dom";
import Web3 from "web3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { polygon, polygonAmoy } from "wagmi/chains";
import Loader from "../../../src/components/Loader.js";

import {
  token_abi, 
  USDT_address,
  cont_address,
  cont_abi,       

} from "../../components/configs/Contracts.js";
import { useWeb3Modal } from '@web3modal/wagmi/react'

import { useSwitchChain, useAccount, useDisconnect } from "wagmi";


import { useSimulateContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { arbitrum, arbitrumSepolia } from "wagmi/chains";


const Home = () => {


  const chainId = process.env.REACT_APP_ENV == "production" ? polygon.id : polygonAmoy.id;

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const [isProcessingPayment, setIsProcessingPayment] = useState(true);


  const { switchChainAsync } = useSwitchChain();
  const { chainId: currentChainId } = useAccount();
  const { writeContractAsync,writeContract,data:hash, ...states } = useWriteContract();

  const { address,isConnected, isConnecting ,isDisconnected} = useAccount()

  const [count, set_count] = useState(0);

  const notify = () => toast("Transaction Successfull!");

  const [ref_add, set_ref] = useState("0x0000000000000000000000000000000000000000");




  // const { address, isConnecting ,isDisconnected} = useAccount()


  const [loader, setLoader] = useState(false);
  const [investment, setInvestment] = useState("");
  const [curr_time, set_curr_time] = useState(0);
  const [total_withdraw_reward, set_total_withdraw_reward] = useState(0);
  const [withdraw_Amount, set_withdraw_Amount] = useState("0");


  const [todayEarning, set_todayEarning] = useState(0);

  const [totlaInvestment, setTotalInvestment] = useState(0);
  const [totalEarning, set_totalEarning] = useState(0);
  const [levelBusiness, set_levelBusiness] = useState([]);
  const [levelEarning, set_levelEarning] = useState([]);
  const [Level_rew, set_levelRew] = useState([]);

  const [refCount, set_refCount] = useState([]);

  const [directs, set_directs] = useState("0");
  const [RoiEarning, set_RoiEarning] = useState(0);
  const [pol_balance, setBalance] = useState(0);
  const [exor_balance, set_exorBalance] = useState(0);

  const [usdt_balance, set_usdtBalance] = useState(0);
  const [team, set_team] = useState(0);
  const [teamBusiness, set_teamBusiness] = useState(0);

  const [maximum_investment, set_maximum_investment] = useState(0);

  
  const [minimum_investment, set_minimum_investment] = useState(0);
  const [minWithdraw, set_minWithdraw] = useState(0);
  const [withdrawFee, set_withdrawFee] = useState(0);

  const [maxWithdraw, set_maxWithdraw] = useState(0);

  const [Allinvestment, set_Allinvestment] = useState([]);
  const [withdrawList, setwithdrawList] = useState([]);
  const [availBalance, set_availBalance] = useState(0);
  
  const [totalusers, set_totalusers] = useState("0");

  const [totalbusiness, setbusiness] = useState("0");
  
  const [total_withdraw, set_total_withdraw] = useState("0");

  const [totalReferralsEarning, settotalReferralsEarning] = useState(0);

  const [referral, setReferral] = useState("0x0000000000000000000000000000000000000000");
  const [upliner, set_upline] = useState();
  const [MatchingEarning, set_MatchingEarning] = useState(0);
  const [super_leg_bal, set_super_leg_bal] = useState(0);
  const [other_leg_bal, set_other_leg_bal] = useState(0);
  const [totalEarned, set_totalEarned] = useState();

  
  const [directs_members, set_directs_members] = useState([]);
  const [Level_locking, set_Level_locking] = useState([]);
  const [exorUsdPrice, set_exorUsdPrice] = useState(0);
  const [rank, set_rank] = useState(0);
  const [total_principle_return    ,   set_total_principle_return] = useState(0);

  
  const [state, setState] = useState({
    days: 0,
    minutes: 0,
    hours: 0,
    seconds: 0,
    time_up: "",
    // bid_time: selectedAmount,
  });



  const { isLoading: isConfirming, isSuccess: isConfirmed} =
  useWaitForTransactionReceipt({
    hash,
  })
  useEffect(() => {

    if(address)
    {
      mount();

    }
  }, [ address]);


  useEffect(()=>{
    if(isConfirmed)
    {
      if(count==0)
      {
        // alert("ninkn")
        stake1()
  
      }
      if(count==1)
      {
        set_count(0)
        notify()
        setInvestment(0)
        mount();
      }
    }
  
  
  },[isConfirmed])


  async function USDT_approval () {
    try {
        const tx = await writeContractAsync({
          abi: token_abi,
          address: USDT_address,
          args: [cont_address,( investment ? Number(investment)*10**6 : "0")],
          functionName: "approve",

        }); 
        // stake1();
  
       } catch (err) {
        console.error(err);
    }
  }
async function stake1() {


      try {
          const tx = await writeContractAsync({
            abi: cont_abi,
            address: cont_address,
            functionName: "invest", 
            args: [
              (investment? Number(investment)*10**6 : 0),referral
            ],
  
          });
  
          set_count(1)
  
      } catch (err) {
          console.error(err);
      }
  }


  async function claim1() {

    
    try {


        const tx = await writeContractAsync({
          abi: cont_abi,
          address: cont_address,
          functionName: "withdrawReward", 
          args: [
            (Number(withdraw_Amount)*10**6)
          ],
  
        });
  
        set_count(1)
  
    } catch (err) {
        console.error(err);
    }
  }




  const search = useLocation().search;
  const id = new URLSearchParams(search).get("ref");


  async function mount() {
    if (isDisconnected) {
      return;
    }
    // try {
      setLoader(true)
      let address1=address;
      let web3= new Web3(new Web3.providers.HttpProvider("https://polygon-bor-rpc.publicnode.com", {
        timeout: 60000 
}));
      //  alert(web3.utils.sha3( "initialize()").substr(0, 10))

      const pol_balance = await web3.eth.getBalance(address);

      const contract = new web3.eth.Contract(cont_abi, cont_address);

      const contract_usdt = new web3.eth.Contract(token_abi, USDT_address);

      let usdt_balance = await contract_usdt.methods.balanceOf(address1).call();
      let directs_members= await contract.methods.ReferralsList().call({from : address1.toString()});

      console.log(directs_members);

      let Level_count = await contract.methods.Level_count(address1).call();
      let Level_business = await contract.methods.Level_business(address1).call();

      // let arr;
      let total_earning= await contract.methods.get_totalEarning(address1).call();
      let level_earning= await contract.methods.get_level_earning(address1).call();
      let roi_earning= await contract.methods.get_roi_earning(address1).call();

      let exorUsdPrice= await contract.methods.get_ExorPriceInUSDT().call();


      let Level_locking = await contract.methods.Level_locking(address1).call();
      let Level_rew1 = await contract.methods.Level_rew(address1).call();
      let matching_arr = await contract.methods.get_matchingRew(address1).call();

      const business = await contract.methods.totalbusiness().call();
      const totalusers = await contract.methods.totalusers().call();
      const total_withdraw = await contract.methods.total_withdraw().call();
      let rank_no = await contract.methods.get_rank(address1).call(); 
      // let total_withdraw1 = await withdraw_contract.methods.total_withdraw(address1).call(); 


      const user = await contract.methods.user(address1).call();
      const allInvestments = await contract.methods.getAllinvestments().call({ from: address1.toString() });
      console.log(allInvestments)
      let minimum_investment = await contract.methods.minimum_investment().call(); 
      let maximum_investment = await contract.methods.maximum_investment().call(); 

      let temp=0;
      let team_business=0;
      for(let i=0;i<20;i++)
      {
        // alert(Number(Level_count[i]))
        temp+=Number(Level_count[i]);
        // alert(Number(temp))
        team_business+=Number(Level_business[i]);
      }

      if (id != null) {

        setReferral(id);

      }
      set_rank(rank_no)

      set_directs_members(directs_members)
      setBalance(pol_balance);
      set_usdtBalance(usdt_balance);
      setTotalInvestment(user[2])
      set_availBalance((Number(total_earning)) - (Number(user.totalWithdraw_reward)));
      set_totalEarning(Number(total_earning));
      set_levelRew(Level_rew1)
      set_minimum_investment(minimum_investment);
      set_maximum_investment(maximum_investment);
      set_total_withdraw_reward(Number(user.totalWithdraw_reward));
      setbusiness(business);

      set_totalusers(totalusers)
      set_total_withdraw(total_withdraw)
      settotalReferralsEarning(user[7])
      set_directs(user[6])
      set_totalEarned(Number(user[10]))

      set_upline(user.upline)

      set_total_principle_return(Number(user.total_principle_return))
      set_Level_locking(Level_locking)
      // set_totalEarning(Number(total_earning))
      set_levelEarning(level_earning.LevelRewards);
      set_levelBusiness(Level_business)
      set_RoiEarning(Number(roi_earning))
      set_todayEarning(Number(user[9]))
      set_MatchingEarning(Number(matching_arr.rew))
      set_exorUsdPrice(Number(exorUsdPrice)/10**18)
      set_team(temp)
      set_teamBusiness(team_business)

      set_refCount(Level_count);
      // alert(Number(matching_arr.sl))
      set_super_leg_bal(Number(matching_arr.sl))
      set_other_leg_bal(Number(matching_arr.ol))

      set_Allinvestment(allInvestments)     

      setLoader(false)



    // } catch (error) {
    //   // Catch any errors for any of the above operations.

    //   console.error(error);
    // }
  }




  

  async function Invest() 
  {
    if (isDisconnected) {
      alert("kindly connect your wallet");
      return

    }
    if (investment <= 0 || investment == "") {
      alert("please write amount ");
      return
    }
    if (investment < (Number(minimum_investment)/10**6)) {
      alert("You can't invest less than "+ Number(minimum_investment)/10**6+" USDT");
      return
    }
    if (investment >( Number(maximum_investment)/10**6)) {
      alert("You can't invest more than "+ Number(maximum_investment)/10**6+" USDT");
      return
    }
    if (Number(usdt_balance) < Number(investment)*10**6) {
      alert("you dont have enough usdt to invest");
      return;
    } 


    if(chainId != currentChainId )
      {
        await switchChainAsync({ chainId });
        await USDT_approval?.();
      } 
      else 
      {
        await USDT_approval?.();
      }
  
    
    




  }

  async function WithdrawReward() {

        if (isDisconnected) {
          alert("kindly connect your wallet");
          return;
    
        }
        if (Number(withdraw_Amount) <= 0 || Number(withdraw_Amount) == "") {
          alert("please write amount ");
          return
        }
        if (Number(withdraw_Amount) < 10) {
          alert("You can't withdraw less than 10$");
          return
        }
        // if (Number(withdraw_Amount) > Number(maxWithdraw)/10**18) {
        //   alert("You can't withdraw more than "+Number(maxWithdraw)/10**18);
        //   return
        // }
        // if (Number(totalEarning)==0) {
        //   alert("You don't have earning to withdraw");
        //   return;
        // }
        if (Number(withdraw_Amount) > (Number(availBalance)/10**6)) {
          alert("you cant withdraw more than your current balance");

          return;
        }
        if (chainId != currentChainId )
          {
            await switchChainAsync({ chainId });
            await claim1?.();
          } 
          else 
          {
            await claim1?.();
          }

        // if (chain.id != du_CHAIN_ID) {
        //   reward_switch?.();
        // } else {
        //   console.log("object withdraw "+withdraw_Amount);

        //   withdraw?.()
        // }

  }




  return (
    <div className=' tw-overflow-x-hidden'>
      <Hero  total_withdraw={total_withdraw} totalusers={totalusers} totalbusiness={totalbusiness} />
      <StakeComponent totalEarned={totalEarned} other_leg_bal={other_leg_bal}  super_leg_bal={super_leg_bal} total_principle_return={total_principle_return} rank={rank} exorUsdPrice={exorUsdPrice} maximum_investment={maximum_investment} MatchingEarning={MatchingEarning} upliner={upliner} team={team} teamBusiness={teamBusiness} withdrawFee={withdrawFee} todayEarning={todayEarning} availBalance={availBalance} exor_balance={exor_balance} RoiEarning={RoiEarning} directs={directs} levelEarning={levelEarning} total_withdraw_reward={total_withdraw_reward} totalReferralsEarning={totalReferralsEarning} withdraw_Amount={withdraw_Amount} setInvestment={setInvestment}  minimum_investment={minimum_investment}  Invest={Invest} set_withdraw_Amount={set_withdraw_Amount}  WithdrawReward={WithdrawReward} investment={investment} totlaInvestment={totlaInvestment} totalEarning={totalEarning} address={address}/>

      {/* <StakeComponent   /> */}
      <InvestmentHistory Allinvestment={Allinvestment} />
     
      <ReferralRewards exorUsdPrice={exorUsdPrice} Level_rew={Level_rew} levelBusiness={levelBusiness} Level_locking={Level_locking} directs_members={directs_members} refCount={refCount} levelEarning={levelEarning} />
      
      <Footer/>
      {loader && <Loader />}
    </div>
  );
};

export default Home;