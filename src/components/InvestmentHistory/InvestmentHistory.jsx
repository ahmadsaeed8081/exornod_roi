import React, { useEffect, useState } from "react";
import { propTypes } from "react-copy-to-clipboard";
import { FaInfoCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import moment from "moment";
import Counter from "../../components/Counter";
const InvestmentHistory = (props) => {
  const [timers, setTimers] = useState([]);


  const count = (time) => {
    const now = new Date(time*1000);  
    const t=moment(now).format('D MMM YYYY');
    return t;
    
  };
  const investmentData = [
    {
      no: 1,
      amount: "100 USDT",
      date: "03-Jul-2025",
      expReturn: "0.5%",
      doubleROI: "72H:30M:10S",
      principalReturn: "5D:1H:3M:1S",
      totalEarned: "2.5 USDT",
      active: true,
    },
    {
      no: 2,
      amount: "200 USDT",
      date: "04-Jul-2025",
      expReturn: "1%",
      doubleROI: "Active",
      principalReturn: "Declined",
      totalEarned: "6.3 USDT",
      active: false,
    },
    // Add more data to test scrolling
    {
      no: 3,
      amount: "300 USDT",
      date: "05-Jul-2025",
      expReturn: "1.5%",
      doubleROI: "48H:15M:30S",
      principalReturn: "3D:2H:0M:0S",
      totalEarned: "9.0 USDT",
      active: true,
    },
    {
      no: 4,
      amount: "400 USDT",
      date: "06-Jul-2025",
      expReturn: "2%",
      doubleROI: "24H:0M:0S",
      principalReturn: "2D:0H:0M:0S",
      totalEarned: "12.0 USDT",
      active: true,
    },
    {
      no: 5,
      amount: "500 USDT",
      date: "07-Jul-2025",
      expReturn: "2.5%",
      doubleROI: "12H:30M:0S",
      principalReturn: "1D:12H:0M:0S",
      totalEarned: "15.0 USDT",
      active: true,
    },
     {
      no: 6,
      amount: "500 USDT",
      date: "07-Jul-2025",
      expReturn: "2.5%",
      doubleROI: "12H:30M:0S",
      principalReturn: "1D:12H:0M:0S",
      totalEarned: "15.0 USDT",
      active: true,
    },
     {
      no: 7,
      amount: "500 USDT",
      date: "07-Jul-2025",
      expReturn: "2.5%",
      doubleROI: "12H:30M:0S",
      principalReturn: "1D:12H:0M:0S",
      totalEarned: "15.0 USDT",
      active: true,
    },
     {
      no: 8,
      amount: "500 USDT",
      date: "07-Jul-2025",
      expReturn: "2.5%",
      doubleROI: "12H:30M:0S",
      principalReturn: "1D:12H:0M:0S",
      totalEarned: "15.0 USDT",
      active: true,
    },
     {
      no: 9,
      amount: "500 USDT",
      date: "07-Jul-2025",
      expReturn: "2.5%",
      doubleROI: "12H:30M:0S",
      principalReturn: "1D:12H:0M:0S",
      totalEarned: "15.0 USDT",
      active: true,
    },
     {
      no: 10,
      amount: "500 USDT",
      date: "07-Jul-2025",
      expReturn: "2.5%",
      doubleROI: "12H:30M:0S",
      principalReturn: "1D:12H:0M:0S",
      totalEarned: "15.0 USDT",
      active: true,
    },
     {
      no:11,
      amount: "500 USDT",
      date: "07-Jul-2025",
      expReturn: "2.5%",
      doubleROI: "12H:30M:0S",
      principalReturn: "1D:12H:0M:0S",
      totalEarned: "15.0 USDT",
      active: true,
    },
  ];



  // Helper: Convert "5D:1H:3M:1S" → seconds
  const parseDuration = (str) => {
    const parts = { D: 0, H: 0, M: 0, S: 0 };
    str.match(/\d+[DHMS]/g)?.forEach((chunk) => {
      const unit = chunk.slice(-1);
      const val = parseInt(chunk.slice(0, -1));
      parts[unit] = val;
    });
    return (
      (parts.D || 0) * 86400 +
      (parts.H || 0) * 3600 +
      (parts.M || 0) * 60 +
      (parts.S || 0)
    );
  };



  // const calculateTimeLeft = () => {
  //   const difference = +new Date('2024-12-31T00:00:00') - +new Date();
  //   let timeLeft = {};

  //   if (difference > 0) {
  //     timeLeft = {
  //       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  //       minutes: Math.floor((difference / 1000 / 60) % 60),
  //       seconds: Math.floor((difference / 1000) % 60),
  //     };
  //   } else {
  //     timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  //   }

  //   return timeLeft;
  // };

  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);



  // Helper: Format seconds → "5D:1H:3M:1S"
  const formatTime = (sec) => {
    // sec=sec/10000;
    const d= Math.floor(sec / (1000 * 60 * 60 * 24));
    const h= Math.floor((sec / (1000 * 60 * 60)) % 24);
    const m= Math.floor((sec / 1000 / 60) % 60);
    const s= Math.floor((sec / 1000) % 60);
    // const s = sec % 60;
    return `${d > 0 ? d + "D:" : ""}${h}H:${m}M:${s}S`;
  };

  // Timer Setup
  useEffect(() => {
    // 1. Initialize timers based on data
    const initialTimers = investmentData.map((item) => ({
      doubleROI:
        typeof item.doubleROI === "string" && item.doubleROI.includes(":")
          ? parseDuration(item.doubleROI)
          : null,
      principalReturn:
        typeof item.principalReturn === "string" &&
        item.principalReturn.includes(":")
          ? parseDuration(item.principalReturn)
          : null,
    }));

    setTimers(initialTimers);

    // 2. Countdown interval
    const interval = setInterval(() => {
      setTimers((prev) =>
        prev.map((timer) => ({
          doubleROI:
            timer?.doubleROI !== null && timer.doubleROI > 0
              ? timer.doubleROI - 1
              : timer?.doubleROI,
          principalReturn:
            timer?.principalReturn !== null && timer.principalReturn > 0
              ? timer.principalReturn - 1
              : timer?.principalReturn,
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container tw-mx-auto  tw-mt-8 tw-text-white">
            <h2 className="tw-text-white tw-pt-4 tw-text-center  tw-font-Dots tw-text-3xl tw-font-normal tw-mb-8">
         Investment  <span className=" tw-text-primary tw-font-Dots">History</span>
      </h2>
      <div className="tw-flex tw-gap-4 tw-mb-4">
        <div className="tw-relative group tw-cursor-pointer">
          <Tooltip id="tooltip-2direct" place="bottom">
            When you refer 2 people, you get double ROI on your investment.
          </Tooltip>
        </div>
        <div className="tw-relative group tw-cursor-pointer">
          <Tooltip id="tooltip-5direct" place="bottom">
            Referring 5 people lets you withdraw your principal amount.
          </Tooltip>
        </div>
      </div>

      <div className="tw-overflow-hidden tw-rounded-md tw-border tw-border-gray-700">
        <div className="tw-max-h-96 tw-overflow-y-auto">
          <table className="tw-w-full tw-text-sm">
            <thead className="tw-sticky tw-top-0 tw-z-10">
              <tr className="tw-bg-primary tw-text-black">
                <th className="tw-p-2.5 tw-text-left tw-whitespace-nowrap">No</th>
                <th className="tw-p-2.5 tw-text-left tw-whitespace-nowrap">Amount</th>
                <th className="tw-p-2.5 tw-text-left tw-whitespace-nowrap">Date</th>
                <th className="tw-p-2.5 tw-text-left tw-whitespace-nowrap">Exp. Return</th>
                <th className="tw-p-2.5 tw-text-left tw-whitespace-nowrap">
                  Double ROI{" "}
                  <FaInfoCircle
                    data-tooltip-id="tooltip-2direct"
                    className="tw-inline tw-ml-1"
                  />
                </th>
                <th className="tw-p-2 tw-text-left tw-whitespace-nowrap">
                  Principal Return{" "}
                  <FaInfoCircle
                    data-tooltip-id="tooltip-5direct"
                    className="tw-inline tw-ml-1"
                  />
                </th>
                {/* <th className="tw-p-2 tw-text-left tw-whitespace-nowrap">Total Earned</th> */}
              </tr>
            </thead>
            <tbody>
              {props.Allinvestment.map((inv, i) => (
                <tr
                  key={i}
                  className="tw-border-b tw-border-gray-700 hover:tw-bg-primary hover:tw-text-black"
                >



                  <td className="tw-p-2 tw-whitespace-nowrap">{Number(inv.investmentNum)+1}</td>
                  <td className="tw-p-2 tw-whitespace-nowrap">{Number(inv.investedAmount)/10**6} USDT</td>
                  <td className="tw-p-2 tw-whitespace-nowrap">{count(Number(inv.DepositTime))}</td>
                  <td className="tw-p-2 tw-whitespace-nowrap">{Number(inv.roi_percentage)/10**6}%</td>
                  {/* <td className="tw-p-2">
                    {timers[i] && timers[i].doubleROI !== null
                      ? formatTime(timers[i].doubleROI)
                      : inv.doubleROI}
                  </td> */}
                  <td className="tw-p-2">
                      <Counter double_roi={inv.double_roi} time={(Number(inv.DepositTime)+259200)}/>
                  </td> 
                  
                  <td className="tw-p-2">
                  <Counter double_roi={inv.principle_return} time={(Number(inv.DepositTime)+864000)}/>

                  </td>
                  {/* <td className="tw-p-2">{inv.totalEarned}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvestmentHistory;