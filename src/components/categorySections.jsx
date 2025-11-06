import React from "react";

const CategorySections = () => {
  return (
    <div className="">
      <div className="flex flex-row gap-1 mx-auto">
        <div className="scat flex justify-center items-center cursor-pointer hover:bg-[#F6F6F6] transition-colors bg-[#F6F6F6] h-[42px] px-5 rounded-[9px]">
          <p className="text-[15px] text-black font-inter font-semibold leading-[normal]">
            Все
          </p>
        </div>
        <div className="scat flex justify-center items-center cursor-pointer hover:bg-[#F6F6F6] transition-colors bg-transparent border border-[#EEEEEE] h-[42px] px-5 rounded-[9px]">
          <p className="text-[15px] text-nowrap text-black font-inter font-semibold leading-[normal]">
            IT & kommunikatsia
          </p>
        </div>
        <div className="scat flex justify-center items-center cursor-pointer hover:bg-[#F6F6F6] transition-colors bg-transparent border border-[#EEEEEE] h-[42px] px-5 rounded-[9px]">
          <p className="text-[15px] text-black font-inter font-semibold leading-[normal]">
            Design
          </p>
        </div>
        <div className="scat flex justify-center items-center cursor-pointer hover:bg-[#F6F6F6] transition-colors bg-transparent border border-[#EEEEEE] h-[42px] px-5 rounded-[9px]">
          <p className="text-[15px] text-black font-inter font-semibold leading-[normal]">
            Sport
          </p>
        </div>
        <div className="scat flex justify-center items-center cursor-pointer hover:bg-[#F6F6F6] transition-colors bg-transparent border border-[#EEEEEE] h-[42px] px-5 rounded-[9px]">
          <p className="text-[15px] text-black font-inter font-semibold leading-[normal]">
            Innovatsiya
          </p>
        </div>
        <div className="box h-[42px] hover:bg-[#44A0F5] group min-w-[42px] cursor-pointer transition-colors flex justify-center items-center bg-transparent rounded-full border border-[#EEEEEE] ml-0.5">
          <img src="/pictures/playlistadd.svg" alt="add" className="group-hover:hidden" />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="hidden group-hover:block"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6663 5.33337H3.33301M3.33301 8.00004H9.33301M7.33301 10.6667H3.33301M9.99967 10.6667H13.9997M11.9997 8.66671V12.6667"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CategorySections;
