// TeamModal.tsx
import React from "react";

const teamData = [

];



const TeamMemberShipModal= ({ isOpen, onClose,directs_members }) => {
  if (!isOpen) return null;

  return (
    <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-40 tw-flex tw-items-center tw-justify-center tw-z-50">
      <div className=" tw-bg-lightBlue tw-text-white tw-w-[420px] tw-rounded-xl tw-shadow-lg tw-p-4">
        <div className="tw-flex tw-justify-between tw-items-center   tw-pb-2">
          <h2 className="tw-text-sm tw-font-medium">Team Members</h2>
          <button onClick={onClose} className="tw-text-white hover:tw-text-red-500">✕</button>
        </div>

        <div className="tw-mt-3">
          <div className="tw-grid tw-rounded-md  tw-py-2 tw-grid-cols-3 tw-text-center tw-text-sm tw-font-medium tw-bg-primary tw-text-black tw-rounded-t-md tw-py-1">
            <div>Number</div>
            <div>Address</div>
            <div>Earning</div>
          </div>
          <div className=" tw-bg-[#101010] tw-mt-3 tw-rounded-lg">
            {directs_members.members.map((member, index) => (
              <div
                key={index}
                className="tw-grid tw-grid-cols-3  tw-border-b tw-text-center tw-text-sm tw-py-2 border-b tw-border-gray-700 last:tw-border-b-0 hover:tw-bg-primary hover:tw-text-black"
              >
                <div>{member.number}</div>
                <div>{directs_members ?directs_members.members[index]:""}</div>
                <div>{directs_members ?directs_members.income[index]:""}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="tw-flex tw-justify-center tw-mt-4">
          <button
            onClick={onClose}
            className=" tw-bg-primary tw-text-black tw-px-4 tw-py-1.5 tw-rounded-md tw-text-sm "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberShipModal;
