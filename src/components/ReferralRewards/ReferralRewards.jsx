import React, { useState } from "react";
import Slider from "react-slick";
import { FaLock } from "react-icons/fa";
import { FaDollarSign, FaUsers } from "react-icons/fa6";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamMemberShipModal from "../TeamMemberShipModal/TeamMemberShipModal";

const ReferralRewards = ({refCount,levelEarning,directs_members, Level_locking}) => {

   const [isModalOpen, setIsModalOpen] = useState(false);

  const levels = [
    { level: "Level 01", percentage: "10%", earning: "$70", teamMember: 15,Icon:<img  className=" tw-cursor-pointer" onClick={()=>setIsModalOpen(true)} src={require('../../assets/images/Eye.png')} alt="" />},
    { level: "Level 02", percentage: "10%", earning: "$70", teamMember: 15 },
    { level: "Level 03", percentage: "10%", earning: "$70", teamMember: 15 },
    { level: "Level 04", percentage: "10%", earning: "$70", teamMember: 15 },
    { level: "Level 05", percentage: "10%", earning: "$70", teamMember: 15 },
    { level: "Level 06", percentage: "10%", earning: "$70", teamMember: 15 },
    { level: "Level 07", percentage: "10%", earning: "$70", teamMember: 15 },
    { level: "Level 08", percentage: "10%", earning: "$70", teamMember: 15 },
    { level: "Level 09", percentage: "10%", earning: "$70", teamMember: 15 },
    { level: "Level 10", percentage: "10%", earning: "$70", teamMember: 15 },
    { level: "Level 11", percentage: "10%", earning: "$70", teamMember: 15 },
    { level: "Level 12", percentage: "10%", earning: "$70", teamMember: 15 },
    { level: "Level 13", percentage: "10%", earning: "$70", teamMember: 15,},
    { level: "Level 14", percentage: "10%", earning: "$70", teamMember: 15 },
    { level: "Level 15", percentage: "10%", earning: "$70", teamMember: 15 },
    { level: "Level 16", percentage: "10%", earning: "$70", teamMember: 15 },
    { level: "Level 17", percentage: "10%", earning: "$70", teamMember: 15 },
    { level: "Level 18", percentage: "10%", earning: "$70", teamMember: 15 },
    { level: "Level 19", percentage: "10%", earning: "$70", teamMember: 15 },
    { level: "Level 20", percentage: "10%", earning: "$70", teamMember: 15 },
  ];

  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };
 

  return (
    <div className=" container tw-py-12">
        <TeamMemberShipModal directs_members ={directs_members} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <h2 className="tw-text-white tw-pt-4 tw-text-center  tw-font-Dots tw-text-3xl tw-font-normal tw-mb-8">
         Referral <span className=" tw-text-primary tw-font-Dots">Reward</span>
      </h2>

      <div className="tw-container tw-mx-auto">
        <Slider ref={sliderRef} {...settings}>
          {levels.map((item, index) => (
            <div key={index} className="tw-px-3">
              <div className=" tw-bg-lightBlue tw-rounded-xl tw-p-6 tw-relative tw-text-white tw-shadow-md">
             { Level_locking?(
                <div className="tw-absolute tw-top-4 tw-right-4 tw-p-2 tw-rounded-full">
                <img src={require('../../assets/images/lock.png')} className=" tw-w-9" alt="" />
               </div>
             ):("")}

                <h3 className="tw-text-xl tw-font-medium tw-mb-4">{item.level}</h3>
                <div className="tw-text-sm tw-space-y-2">
                  <div className="tw-flex tw-justify-between">
                    <span>Percentage</span>
                    <span>{item.percentage}</span>
                  </div>
                  <div className="tw-flex tw-py-2 tw-justify-between">
                    <span className="tw-flex tw-items-center">
                      Earning
                    </span>
                    <span className=" tw-flex tw-gap-1"> <img  src={require('../../assets/images/t_icon.png')}  className=" tw-w-6" alt="" /> {levelEarning[index]?Number(levelEarning[index])/10**6:0}</span>
                  </div>
                  <div className="tw-flex tw-justify-between">
                    <span className="tw-flex tw-items-center">
                      Team Member
                    </span>
                    <span className=" tw-flex tw-gap-1 tw-items-center">{refCount[index]?Number(refCount[index]):0} {item?.Icon} </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Navigation Arrows */}
        <div className="tw-flex tw-justify-center tw-gap-4 tw-mt-8">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className=" tw-bg-transparent  tw-border tw-rounded-full tw-border-white tw-p-2 tw-shadow-lg tw-hover:bg-blue-200"
          >
            <IoArrowBack size={20}  className="tw-text-white" />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className=" tw-bg-transparent   tw-border tw-border-white tw-rounded-full  tw-p-2 tw-shadow-lg tw-hover:bg-blue-200"
          >
            <IoArrowForward size={20} className=" tw-text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferralRewards;
