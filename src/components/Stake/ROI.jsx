import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/Button";
import Tabs from "../../components/Tabs";

const ROI = (props) => {

  const [ROI, set_ROI] = useState(0);
  const [Expected_return, set_Expected_return] = useState(0);
  const [withdrawFee, set_withdrawFee] = useState(0);



  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const dropdownRef2 = useRef(null);

  const [isOpen3, setIsOpen3] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const dropdownRef3 = useRef(null);

  const [isOpen4, setIsOpen4] = useState(false);
  const [selectedOption4, setSelectedOption4] = useState(null);
  const dropdownRef4 = useRef(null);

  const [investAmount, setInvestAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");

  const options = ["$50", "$100", "$200", "$300", "$500"];
  const bookOptions = ["Book #1", "Book #2", "Book #3"];
  const durationOptions = ["365 Days"];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleToggle3 = () => {
    setIsOpen3(!isOpen3);
  };

  const handleToggle4 = () => {
    setIsOpen4(!isOpen4);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleOption2Click = (option) => {
    setSelectedOption2(option);
    setIsOpen2(false);
  };

  const handleOption3Click = (option) => {
    setSelectedOption3(option);
    setIsOpen3(false);
  };

  const handleOption4Click = (option) => {
    setSelectedOption4(option);
    setIsOpen4(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (
        dropdownRef2.current &&
        !dropdownRef2.current.contains(event.target)
      ) {
        setIsOpen2(false);
      }
      if (
        dropdownRef3.current &&
        !dropdownRef3.current.contains(event.target)
      ) {
        setIsOpen3(false);
      }
      if (
        dropdownRef4.current &&
        !dropdownRef4.current.contains(event.target)
      ) {
        setIsOpen4(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);




  function cal_after_withdraw(_withdraw_Amount) 
  {
    ;
    
  }


  function find_Exp_earn(amount) {

    return (amount *2);

  }

  function find_Roi(amount) {
    if (Number(amount) >= Number(props.minimum_investment) && amount < 100) {
      // alert("amount "+ amount+"   "+"minim "+ minimum_investment)
      return  1.2;
    } else if (amount >= 100 && amount < 1000) {
      return 1.2 ;
    } else if (amount >= 1000 && amount < 10000) {
      return 1.2;
    } else if (amount >= 10000) {
      return 1.2 ;
    }
    return 0;
  }








  const defaultTab = "Invest";

  const tabData = [
    {
      title: "Invest",
      content: (
        <>
          <div className="tw-rounded-md sm:tw-min-h-[420px] tw-min-h-auto tw-relative">
            <div className="tw-py-4 tw-flex tw-flex-col sm:tw-flex-row tw-justify-between tw-items-start xs:tw-items-center tw-gap-3">
              <div className="tw-w-full sm:tw-w-7/12">
                <h1 className="tw-m-0 tw-text-white tw-text-xl sm:tw-text-2xl md:tw-text-2xl tw-font-semibold">
                  Boost Your Daily Income With{" "}
                  <span className="tw-text-primary">Exornode</span>
                </h1>
              </div>
              <div className="tw-w-full sm:tw-w-5/12 tw-flex tw-justify-end">
                {/* <Button
                  label={"Boost"}
                  rIcons={
                    <img
                      src={require("../../assets/images/boost.png")}
                      className="tw-w-4"
                      alt="boost"
                    />
                  }
                  className={
                    "tw-border tw-bg-transparent tw-text-primary tw-rounded-md  tw-border-primary tw-text-sm xs:tw-text-base tw-py-2 tw-px-3"
                  }
                /> */}
              </div>
            </div>

            <div className="tw-border-t tw-border-b tw-border-white tw-py-4">
              <div className="tw-flex tw-justify-between tw-items-center">
                <p className="tw-m-0 tw-text-white tw-text-sm sm:tw-text-base tw-font-medium">
                  Per Day Percentage
                </p>
                <p className="tw-m-0 tw-text-white tw-text-sm sm:tw-text-base">
                  0.5%
                </p>
              </div>
              <div className="tw-flex tw-justify-between tw-items-center tw-mt-2">
                <p className="tw-m-0 tw-text-white tw-text-sm sm:tw-text-base tw-font-medium">
                  Expected Return
                </p>
                <p className="tw-m-0 tw-text-white tw-text-sm sm:tw-text-base">
                  {Expected_return} USDT (2x)
                </p>
              </div>
            </div>

            <div className="tw-pt-4">
              <label className="tw-text-white tw-text-sm sm:tw-text-base">
                Invest Amount:(Min:{Number(props.minimum_investment)/10**6}$ - Max:{Number(props.maximum_investment)/10**6}$)
              </label>
              <div className="tw-mt-2">
                <input
                  type="number"
                  className="tw-bg-white tw-outline-none tw-rounded-lg tw-w-full tw-p-2 sm:tw-p-3 tw-text-sm sm:tw-text-base"
                  value={props.investment}
                  onChange={(e) => {
                    props.setInvestment(e.target.value);
                    set_Expected_return(find_Exp_earn(e.target.value));
                  }}
                  placeholder="0"
                  min={props.minimum_investment}
                
                />
              </div>
            </div>

            <div className="tw-py-4  tw-mt-12 tw-w-full">
              <Button
                onClick={() => props.Invest()} label={"Invest"}
                className={
                  "tw-w-full tw-text-black tw-rounded-md tw-py-2 sm:tw-py-3"
                }
              />
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Withdraw",
      content: (
        <>
          <div className="tw-rounded-md tw-min-h-[420px] tw-relative">
            <div className="tw-py-4 tw-flex tw-flex-col sm:tw-flex-row tw-justify-between tw-items-start xs:tw-items-center tw-gap-3">
              <div className="tw-w-full sm:tw-w-7/12">
                <h1 className="tw-m-0 tw-text-white tw-text-xl sm:tw-text-2xl md:tw-text-2xl tw-font-semibold">
                  Withdraw Exor on your Staked USDT
                </h1>
              </div>
              {/* <div className="tw-w-full sm:tw-w-5/12 tw-flex tw-justify-end">
                <Button
                  label={"Boost"}
                  rIcons={
                    <img
                      src={require("../../assets/images/boost.png")}
                      className="tw-w-4"
                      alt="boost"
                    />
                  }
                  className={
                    "tw-border tw-bg-transparent  tw-text-primary tw-rounded-md tw-border-primary tw-text-sm xs:tw-text-base tw-py-2 tw-px-3"
                  }
                />
              </div> */}
            </div>

            <div className="tw-border-t tw-border-b tw-border-white tw-py-4">
              <div className="tw-flex tw-justify-between tw-items-center tw-mb-3">
                <p className="tw-m-0 tw-text-white tw-text-sm sm:tw-text-base">
                  Balance After Withdraw
                </p>
                <p className="tw-m-0 tw-text-white tw-text-sm sm:tw-text-base">
                  0
                </p>
              </div>
              <div className="tw-flex tw-justify-between tw-items-center">
                <p className="tw-m-0 tw-text-white tw-text-sm sm:tw-text-base">
                  Total Withdraw
                </p>
                <p className="tw-m-0 tw-text-white tw-text-sm sm:tw-text-base">
                  0 USDT
                </p>
              </div>
            </div>

            <div className="tw-pt-4">
              <label className="tw-text-white tw-text-sm sm:tw-text-base">
                Withdraw Amount
              </label>
              <div className="tw-mt-2">
                <input
                  type="number"
                  className="tw-bg-white tw-outline-none tw-rounded-lg tw-w-full tw-p-2 sm:tw-p-3 tw-text-sm sm:tw-text-base"
                      placeholder="" 
                      value={props.withdraw_Amount}
                      onChange={(e) => {
                        props.set_withdraw_Amount(e.target.value);
                        set_withdrawFee((Number(e.target.value) * Number(props.withdrawFee))/100);

                      }}
                />
              </div>
            </div>

            <div className="tw-py-4 tw-absolute tw-bottom-0 tw-w-full">
              <Button
              onClick={() => props.WithdrawReward()}
                label={"Withdraw"}
                className={
                  "tw-w-full tw-text-white tw-rounded-md tw-py-2 sm:tw-py-3"
                }
              />
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="tw-bg-center tw-relative tw-bg-cover tw-w-full tw-h-auto">
      <div className="tw-max-w-4xl tw-mx-auto">
        <Tabs tabs={tabData} defaultTab={defaultTab} />
      </div>
    </div>
  );
};

export default ROI;
