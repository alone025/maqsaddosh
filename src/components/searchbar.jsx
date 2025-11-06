import React from "react";

const Searchbar = () => {
  return (
    <div className="border w-full bg-white border-[#EEEEEE] h-[50px] rounded-[10px] px-[15px] flex flex-row items-center justify-between">
      <div className="lft cursor-pointer flex flex-row items-center gap-2">
        <img src="/pictures/createIcon.svg" alt="add" />
        <p className="text-[15px] font-inter font-normal text-black leading-[normal]">
          Создать
        </p>
      </div>

      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-[5px]"
      >
        <path
          d="M9.9998 4.66668L5.66647 9.00002C5.40125 9.26523 5.25226 9.62494 5.25226 10C5.25226 10.3751 5.40125 10.7348 5.66647 11C5.93169 11.2652 6.2914 11.4142 6.66647 11.4142C7.04154 11.4142 7.40125 11.2652 7.66647 11L11.9998 6.66668C12.5302 6.13625 12.8282 5.41683 12.8282 4.66668C12.8282 3.91654 12.5302 3.19712 11.9998 2.66668C11.4694 2.13625 10.7499 1.83826 9.9998 1.83826C9.24966 1.83826 8.53024 2.13625 7.9998 2.66668L3.66647 7.00002C2.87082 7.79567 2.42383 8.8748 2.42383 10C2.42383 11.1252 2.87082 12.2044 3.66647 13C4.46212 13.7957 5.54125 14.2427 6.66647 14.2427C7.79169 14.2427 8.87082 13.7957 9.66647 13L13.9998 8.66668"
          stroke="black"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLsinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Searchbar;
