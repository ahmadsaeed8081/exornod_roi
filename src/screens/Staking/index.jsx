import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/header";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../../components/Button";
import Footer from "../../components/footer";
import Tabs from "../../components/Tabs";

const Staking = () => {
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

  const options = ["150 days", "Option 2", "Option 3"];
  const options2 = ["0", "60", "2323"];
  const options3 = ["7.78", "44.23", "3.54"];
  const options4 = ["7.78", "44.23", "3.54"];

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

  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const defaultTab = "Stake";

  const tabData = [
    {
      title: "Stake",
      content: (
        <>
          <div className="tw-rounded-md">
            <div className="tw-flex tw-py-2 tw-pb-4 tw-justify-between tw-items-center">
              <p className="tw-m-0 tw-text-white tw-text-xl sm:tw-text-2xl tw-font-bold">
                USDT
              </p>
              <img 
                src={require("../../assets/images/t_icon.png")} 
                className="tw-w-6 sm:tw-w-8"
                alt="USDT icon"
              />
            </div>

            <div className="tw-border-t tw-py-4 tw-border-b">
              <div className="tw-flex tw-justify-between tw-items-center">
                <p className="tw-m-0 tw-text-white tw-font-normal tw-text-sm sm:tw-text-base">
                  Lock-up Period
                </p>
                <p className="tw-m-0 tw-text-white tw-text-sm sm:tw-text-base">1 Year</p>
              </div>
              <div className="tw-flex tw-pt-3 tw-justify-between tw-items-center">
                <p className="tw-m-0 tw-text-white tw-font-normal tw-text-sm sm:tw-text-base">APY:</p>
                <p className="tw-m-0 tw-text-white tw-text-sm sm:tw-text-base">25%</p>
              </div>
            </div>

            <div className="tw-flex-col tw-flex tw-justify-between tw-min-h-[300px] sm:tw-min-h-[384px] tw-py-6 sm:tw-py-10">
              <div className="tw-flex tw-flex-col tw-gap-4">
                <div>
                  <div className="tw-flex tw-flex-col xs:tw-flex-row tw-justify-between tw-items-start xs:tw-items-center tw-gap-2 xs:tw-gap-0">
                    <p className="tw-font-medium tw-text-white tw-text-sm sm:tw-text-base">
                      Amount: (Min $10 - Max $50)
                    </p>
                    <p className="tw-text-white tw-text-xs sm:tw-text-sm">
                      Balance: 100 USDT
                    </p>
                  </div>
                  <div
                    className="tw-relative tw-w-full tw-inline-block tw-mt-2"
                    ref={dropdownRef2}
                  >
                    <input
                      placeholder="Amount"
                      className="tw-w-full tw-p-2 sm:tw-p-3 tw-rounded-md tw-outline-none tw-text-sm sm:tw-text-base"
                    />

                    {isOpen2 && (
                      <ul className="tw-absolute tw-p-0 tw-bg-white tw-border tw-text-black tw-shadow-lg tw-rounded-md tw-mt-1 tw-w-full tw-max-h-40 tw-overflow-auto">
                        {options2.map((option) => (
                          <li
                            key={option}
                            onClick={() => handleOption2Click(option)}
                            className="tw-py-2 tw-px-3 sm:tw-px-4 tw-cursor-pointer tw-text-sm sm:tw-text-base hover:tw-bg-gray-100"
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              <div className="tw-mt-4 sm:tw-mt-0">
                <Button
                  label={"Approve"}
                  className={"tw-w-full tw-text-white tw-rounded-md tw-py-2 sm:tw-py-3"}
                />
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Unstake",
      content: (
        <>
          <div className="tw-rounded-md">
            <div className="tw-flex tw-py-2 tw-pb-4 tw-justify-between tw-items-center">
              <p className="tw-m-0 tw-text-white tw-text-xl sm:tw-text-2xl tw-font-bold">
                USDT
              </p>
              <img 
                src={require("../../assets/images/t_icon.png")} 
                className="tw-w-6 sm:tw-w-8"
                alt="USDT icon"
              />
            </div>

            <div className="tw-flex-col tw-flex tw-justify-between tw-min-h-[300px] sm:tw-min-h-[384px] tw-py-6 sm:tw-py-10">
              <div>
                <label className="tw-text-white tw-text-sm sm:tw-text-base">Current Investment:</label>
                <div className="tw-mt-2">
                  <div
                    className="tw-relative tw-w-full tw-inline-block"
                    ref={dropdownRef3}
                  >
                    <button
                      onClick={handleToggle3}
                      className="tw-bg-white tw-flex tw-justify-between tw-border tw-w-full tw-text-black tw-py-3 sm:tw-py-4 tw-items-center tw-px-3 sm:tw-px-4 tw-rounded-md tw-text-sm sm:tw-text-base"
                    >
                      <p className="tw-m-0 tw-truncate">
                        {selectedOption3 || "Select Investment"}
                      </p>
                      <p className="tw-m-0">
                        <img
                          src={require("../../assets/images/bxs_up-arrow.png")}
                          className="tw-w-3 sm:tw-w-4"
                          alt="dropdown arrow"
                        />
                      </p>
                    </button>
                    {isOpen3 && (
                      <ul className="tw-absolute tw-p-0 tw-z-20 tw-bg-white tw-text-black tw-shadow-lg tw-rounded-md tw-mt-1 tw-w-full tw-max-h-40 tw-overflow-auto">
                        {options3.map((option) => (
                          <li
                            key={option}
                            onClick={() => handleOption3Click(option)}
                            className="tw-py-2 tw-px-3 sm:tw-px-4 tw-cursor-pointer tw-text-sm sm:tw-text-base hover:tw-bg-gray-100"
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="tw-pt-3 tw-flex tw-flex-wrap tw-gap-2 sm:tw-gap-3 tw-justify-end">
                  <div className="tw-flex tw-items-center tw-gap-1 sm:tw-gap-2">
                    <div className="tw-w-6 sm:tw-w-8 tw-h-6 sm:tw-h-8 tw-flex tw-justify-center tw-items-center tw-rounded-md tw-bg-primary">
                      <p className="tw-m-0 tw-text-xs sm:tw-text-sm tw-text-white">
                        {String(timeLeft.days).padStart(2, "0")}
                      </p>
                    </div>
                    <p className="tw-m-0 tw-text-xs sm:tw-text-sm tw-text-white">Days</p>
                  </div>
                  <div className="tw-flex tw-items-center tw-gap-1 sm:tw-gap-2">
                    <div className="tw-w-6 sm:tw-w-8 tw-h-6 sm:tw-h-8 tw-flex tw-justify-center tw-items-center tw-rounded-md tw-bg-primary">
                      <p className="tw-m-0 tw-text-xs sm:tw-text-sm tw-text-white">
                        {String(timeLeft.hours).padStart(2, "0")}
                      </p>
                    </div>
                    <p className="tw-m-0 tw-text-xs sm:tw-text-sm tw-text-white">Hours</p>
                  </div>
                  <div className="tw-flex tw-items-center tw-gap-1 sm:tw-gap-2">
                    <div className="tw-w-6 sm:tw-w-8 tw-h-6 sm:tw-h-8 tw-flex tw-justify-center tw-items-center tw-rounded-md tw-bg-primary">
                      <p className="tw-m-0 tw-text-xs sm:tw-text-sm tw-text-white">
                        {String(timeLeft.minutes).padStart(2, "0")}
                      </p>
                    </div>
                    <p className="tw-m-0 tw-text-xs sm:tw-text-sm tw-text-white">Minutes</p>
                  </div>
                  <div className="tw-flex tw-items-center tw-gap-1 sm:tw-gap-2">
                    <div className="tw-w-6 sm:tw-w-8 tw-h-6 sm:tw-h-8 tw-flex tw-justify-center tw-items-center tw-rounded-md tw-bg-primary">
                      <p className="tw-m-0 tw-text-xs sm:tw-text-sm tw-text-white">
                        {String(timeLeft.seconds).padStart(2, "0")}
                      </p>
                    </div>
                    <p className="tw-m-0 tw-text-xs sm:tw-text-sm tw-text-white">Second</p>
                  </div>
                </div>
              </div>
              <div className="tw-mt-4 sm:tw-mt-0">
                <Button
                  label={"Unstake"}
                  className={"tw-w-full tw-text-white tw-rounded-md tw-py-2 sm:tw-py-3"}
                />
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Reward",
      content: (
        <>
          <div className="tw-rounded-md">
            <div className="tw-flex tw-mb-4 tw-py-3 tw-border-b tw-justify-between tw-items-center">
              <p className="tw-m-0 tw-text-white tw-text-xl sm:tw-text-2xl tw-font-bold">
                USDT
              </p>
              <img 
                src={require("../../assets/images/t_icon.png")} 
                className="tw-w-6 sm:tw-w-8"
                alt="USDT icon"
              />
            </div>

            <div className="tw-flex tw-justify-between tw-items-center tw-py-2">
              <p className="tw-m-0 tw-font-inter tw-text-sm tw-text-white">
                Total Investment
              </p>
              <p className="tw-m-0 tw-font-poppins tw-text-sm tw-text-white">
                0
              </p>
            </div>

            <div className="tw-flex tw-justify-between tw-items-center tw-py-2">
              <p className="tw-m-0 tw-font-inter tw-text-sm tw-text-white">
                Total Earnings
              </p>
              <p className="tw-m-0 tw-font-poppins tw-text-sm tw-text-white">
                0
              </p>
            </div>

            <div className="tw-flex tw-justify-between tw-items-center tw-py-2">
              <p className="tw-m-0 tw-font-inter tw-text-sm tw-text-white">
                Available to Claim
              </p>
              <p className="tw-m-0 tw-font-poppins tw-text-sm tw-text-white">
                0
              </p>
            </div>

            <div className="tw-flex-col tw-flex tw-justify-between tw-min-h-[300px] sm:tw-min-h-[384px] tw-py-6 sm:tw-py-10">
              <div>
                <label className="tw-text-white tw-text-sm sm:tw-text-base">Investment History</label>
                <div className="tw-mt-2">
                  <div
                    className="tw-relative tw-w-full tw-inline-block"
                    ref={dropdownRef4}
                  >
                    <button
                      onClick={handleToggle4}
                      className="tw-border-[#2596EF] tw-flex tw-bg-white tw-justify-between tw-border tw-w-full tw-text-black tw-py-3 sm:tw-py-4 tw-items-center tw-px-3 sm:tw-px-4 tw-rounded-md tw-text-sm sm:tw-text-base"
                    >
                      <p className="tw-m-0 tw-truncate">
                        {selectedOption4 || "Select an option"}
                      </p>
                      <p className="tw-m-0">
                        <img
                          src={require("../../assets/images/bxs_up-arrow.png")}
                          className="tw-w-3 sm:tw-w-4"
                          alt="dropdown arrow"
                        />
                      </p>
                    </button>
                    {isOpen4 && (
                      <ul className="tw-absolute tw-bg-white tw-p-0 tw-z-30 tw-shadow-md tw-rounded-md tw-mt-1 tw-w-full tw-max-h-40 tw-overflow-auto">
                        {options4.map((option) => (
                          <li
                            key={option}
                            onClick={() => handleOption4Click(option)}
                            className="tw-py-2 tw-px-3 sm:tw-px-4 tw-cursor-pointer tw-text-sm sm:tw-text-base hover:tw-bg-gray-100"
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}

                  </div>
                  <div className="  tw-pt-1 tw-text-white tw-flex tw-gap-1 tw-items-center tw-justify-end">Earning: <span className=" tw-text-primary">0</span></div>
                </div>
              </div>
              <div className="tw-mt-4 sm:tw-mt-0">
                <Button
                  label={"Claim"}
                  className={"tw-w-full tw-text-white tw-rounded-md tw-py-2 sm:tw-py-3"}
                />
              </div>
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

export default Staking;