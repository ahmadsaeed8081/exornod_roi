import React from "react";
import { FaTelegram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
      <div className=" tw-overflow-x-hidden">
        <div className="container sm:tw-text-left tw-text-center tw-py-14">
          <div className="row  g-5">
            <div className="col-md-4">
              <div>
                <img
                  src={logo}
                  className="tw-object-contain tw-w-[280px]"
                  alt=""
                />
              </div>
              <p className="  tw-text-white tw-pt-4">
                A secure ecosystem for DApps, blockchain solutions, and
                community-driven technologies. Experience the next evolution in
                decentralized finance.{" "}
              </p>

              <ul className=" tw-pt-2 tw-p-0 tw-flex tw-gap-3     tw-items-center">
                <li className="">
                  <Link to={"#"} className=" tw-w-7 tw-h-7 tw-rounded-full tw-bg-primary tw-flex tw-justify-center tw-items-center">
                    <FaFacebookF  size={20} className=" tw-text-black" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"} className=" tw-w-7 tw-h-7 tw-rounded-full tw-bg-primary tw-flex tw-justify-center tw-items-center">
                   <FaInstagram size={20} className=" tw-text-black" />

                  </Link>
                </li>
               <li>
                  <Link to={"#"} className=" tw-w-7 tw-h-7 tw-rounded-full tw-bg-primary tw-flex tw-justify-center tw-items-center">
                   <FaLinkedinIn size={20} className=" tw-text-black" />

                  </Link>
                </li>
                <li>
                  <Link to={"#"} className=" tw-w-7 tw-h-7 tw-rounded-full tw-bg-primary tw-flex tw-justify-center tw-items-center">
                   <AiFillYoutube size={20} className=" tw-text-black" />

                  </Link>
                </li>
                
              </ul>
            </div>
            <div className=" col-md-4">
              <h2 className=" tw-text-primary  pb-2 tw-text-xl">COMPANY</h2>
              <ul className=" tw-leading-8 p-0">
                <li className=" text-white">Home</li>
                <li className=" text-white">About Us</li>
                <li className=" text-white">Key Benefits</li>
                <li className=" text-white">Our Work</li>
                <li className=" text-white">Products</li>
              </ul>
            </div>
            <div className=" col-md-4">
               <h2 className=" tw-text-primary  pb-2 tw-text-xl">CONTACT</h2>
              <ul className=" tw-leading-8 p-0">
                <li className=" text-white tw-flex tw-gap-2 tw-items-center"> <div> <img src={require('../../assets/images/email.png')} alt="" /> </div> someone@example.com</li>
                <li className=" text-white">0x487Aaa0C723f5EF2148B56E41b096e02654Cff75</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" tw-bg-primary tw-w-full tw-py-2  tw-text-center">
        <p className=" sm:tw-text-base tw-text-sm tw-m-0 tw-text-black   tw-font-normal tw-font-poppins">
          Copyright @2025 All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
