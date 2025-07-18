import React, { useState } from "react";
import Button from "../Button";
import Header from "../header";
import { Link } from "react-router-dom";
import { RiArrowRightFill } from "react-icons/ri";
const Hero = () => {
  return (
    <div className="   tw-bg-cover tw-relative tw-bg-center tw-w-full tw-h-auto">
      <Header />

      <div className="container tw-mx-auto tw-relative tw-pt-6">
        <div className="row      sm:tw-text-left tw-text-center g-5 tw-items-center">
          <div className="col-lg-6 col-md-12">
            
            <h1 className="  tw-font-Dots tw-pt-2 text-white   md:tw-text-4xl  tw-text-2xl">
            Shaping the Future of
<span className=" tw-text-primary tw-font-Dots"> Decentralized Innovation</span>
            </h1>
            <p className=" tw-text-white sm:tw-text-start tw-text-center    tw-font-extralight tw-leading-7 tw-pt-4 tw-text-lg t">
             A secure ecosystem for DApps, blockchain solutions, and community-driven technologies. Experience the next evolution in decentralized finance.
            </p>

            <div className=" tw-flex tw-flex-row  tw-justify-center sm:tw-justify-start sm:tw-gap-4 tw-gap-2 tw-items-center tw-pt-4">
              <div>
                <Button
                  rIcons={
                    <RiArrowRightFill />

                  }
                  className={"  tw-text-black  sm:tw-text-base tw-text-xs tw-whitespace-nowrap tw-rounded-md  tw-font-normal"}
                  label={"Get Started"}
                />
              </div>
             
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="">
              <img
                src={require("../../assets/images/home.png")}
                className=" tw-w-full"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="row ">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 g-4 col-md-6 ">
              <div className="  ">
                <div className="   tw-text-center  tw-rounded-xl  tw-font-Dots tw-bg-[#101010] tw-border tw-border-primary tw-h-32 tw-p-5">
                  <div className="tw-pb-8 ">
                    <h3 className="  tw-text-primary tw-text-3xl  tw-font-Dots">
                      {member.name}
                    </h3>
                    <p className="tw-text-white tw-font-Intal tw-pt-3 m-0">{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" tw-absolute -tw-z-10 tw-left-0  tw-top-0">
        <img src={require("../../assets/images/home_left.png")} alt="" />
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: "0.0",
    role: "Total Users",
  },
  {
    name: "0.0",
    role: "Total Investment",
  },
  {
    name: "0.0",
    role: "Total Withdraw",
  },
];

export default Hero;
