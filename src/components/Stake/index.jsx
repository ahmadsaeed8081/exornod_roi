import React, { useState } from "react";
import Staking from "../../screens/Staking";
import { GoCopy } from "react-icons/go";
import { FaRegStar, FaStar } from "react-icons/fa";
import ROI from "./ROI";
import LeaderShipModal from "../LeaderShipBonus/LeaderShipBonus";

import {
  CopyToClipboard,
  PartnerIcon,
  CycleIcon,
} from "react-copy-to-clipboard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const StakeComponent = (props) => {
  const [tabs, setTabs] = useState("staking");
  const [isModalOpen, setIsModalOpen] = useState(false);


  const addressCopy_notify = () => toast("address is Copied!");

  const link_notify = () => toast("Referral Link Copied!");


  return (
    <div className="container tw-relative tw-pt-11">
      <LeaderShipModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="row    g-5">
        <div className="col-lg-6">
          <div className=" row">
            <ROI totalReferralsEarning={props.totalReferralsEarning} maximum_investment={props.maximum_investment} withdrawFee={props.withdrawFee} set_withdraw_Amount={props.set_withdraw_Amount} availBalance={props.availBalance} withdraw_Amount={props.withdraw_Amount} setInvestment={props.setInvestment}  minimum_investment={props.minimum_investment} Invest={props.Invest}  total_withdraw_reaward={props.total_withdraw_reaward} WithdrawReward={props.WithdrawReward} investment={props.investment} address={props.address}/>
          </div>
        </div>
        <div className="col-lg-6">
          <div className=" row  g-4">
            <div className=" col-md-12">
              <div className=" tw-flex tw-gap-6 tw-items-center   tw-bg-lightBlue   tw-rounded-3xl  p-4">
                <div className=" tw-relative">
                  <img
                    src={require("../../assets/images/profile.png")}
                    className=" tw-border tw-border-primary tw-rounded-full"
                    alt=""
                  />
                </div>
                <div>
                  <h6 className="  tw-text-white  tw-font-poppins tw-flex tw-gap-3  tw-items-center">
                   {props.address ? props.address.slice(0,4)+"..."+ props.address.slice(39,42):"kindly connect"}
                  {" "}
                  <CopyToClipboard
                        text={props.address? props.address:""}
                        >
                    <GoCopy onClick={addressCopy_notify}  size={23} className="  tw-text-primary" />
                    </CopyToClipboard>

                  </h6>
                  <span className="   tw-text-white tw-font-poppins tw-text-md">
                    Upline ID: {props.upliner ? props.upliner.slice(0,4)+"..."+ props.upliner.slice(39,42):""}
                  </span>
                </div>
              </div>
            </div>
            <div className=" col-md-6">
              <div className=" tw-border  tw-border-textColor   tw-rounded-3xl  p-4">
                <h6 className="   tw-text-white  tw-font-inter ">
                  Current Balance
                </h6>
                <span className="  tw-text-white  tw-font-medium  tw-font-inter tw-text-2xl">
                  {Number(props.availBalance)/10**6}
                  
                </span>
              </div>
            </div>
            <div className=" col-md-6">
              <div className=" tw-border  tw-border-textColor   tw-rounded-3xl  p-4">
                <h6 className="   tw-text-white  tw-font-inter ">
                  Total Investment
                </h6>
                <span className="  tw-text-white  tw-font-medium  tw-font-inter tw-text-2xl">
                  {Number(props.totlaInvestment)/10**6}
                  
                </span>
              </div>
            </div>
            <div className=" col-md-6">
              <div className=" tw-border  tw-border-textColor   tw-rounded-3xl  p-4">
                <h6 className="   tw-text-white  tw-font-inter ">
                  Total Withdraw
                </h6>
                <span className="  tw-text-white  tw-font-medium  tw-font-inter tw-text-2xl">
                {Number(props.total_withdraw_reward)/10**6}
                
                </span>
              </div>
            </div>
            <div className=" col-md-6">
              <div className=" tw-border  tw-border-textColor   tw-rounded-3xl  p-4">
                <h6 className="   tw-text-white  tw-font-inter ">
                  Total Referrals
                </h6>
                <span className="  tw-text-white  tw-font-medium  tw-font-inter tw-text-2xl">
                  {Number(props.directs)}
                  
                </span>
              </div>
            </div>
            <div className=" col-md-6">
              <div className=" tw-border  tw-cursor-pointer tw-border-textColor   tw-rounded-3xl  p-4">
                <div className=" tw-flex tw-justify-between tw-items-center">
                  <h6 className="   tw-text-white  tw-font-inter ">
                    Team Bonus
                  </h6>
                  <img
                    onClick={() => setIsModalOpen(true)}
                    src={require("../../assets/images/bouns.png")}
                    alt=""
                  />
                </div>
                <span className="  tw-text-white  tw-font-medium  tw-font-inter tw-text-2xl">
                  {Number(props.MatchingEarning)/10**6}
                  
                </span>
              </div>
            </div>
            <div className=" col-md-6">
              <div className=" tw-border  tw-border-textColor   tw-rounded-3xl  p-4">
                <h6 className="   tw-text-white  tw-font-inter ">
                  Direct Earnings
                </h6>
                <span className="  tw-text-white  tw-font-medium  tw-font-inter tw-text-2xl">
                  {Number(props.totalReferralsEarning)/10**6}
                </span>
              </div>
            </div>
            <div className=" col-md-12">
              <div className=" tw-border  tw-border-textColor   tw-rounded-3xl  p-4">
                <h6 className="  tw-text-white  tw-font-poppins tw-flex tw-gap-3  tw-justify-between tw-items-center">
                Invite Link
                <CopyToClipboard
                        text={`${window.location.host}/?ref=${props.address? props.address:""}`}
                    >
                   <GoCopy  onClick={link_notify}  size={23} color="#fff" />
                  </CopyToClipboard>

                </h6>
                <span className="   tw-text-primary tw-font-poppins tw-text-md">
                {window.location.host}/?ref={props.address?props.address.slice(0,4)+"..."+props.address.slice(39,42):"kindly connect"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />

    </div>
  );
};

export default StakeComponent;
