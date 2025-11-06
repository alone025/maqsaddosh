import React from "react";

const MaqsadSCard = () => {
  return (
    <div className="pt-4 border border-[#EEEEEE] rounded-xl bg-white/70">
      <div className="tp px-4 flex justify-between items-center">
        <h4 className="text-xl text-black font-inter font-medium leading-[normal]">
          30 дней новой версии себя
        </h4>
        <img src="/pictures/dote.svg" alt="dote" className="min-w-5 cursor-pointer" />
      </div>
      <p className="line-clamp-2 px-4 mt-1 text-[13px] text-black font-inter font-normal leading-4 tracking-[1%] max-w-[438px]">
        Это не просто челлендж — это перезапуск. В течение 30 дней ты будешь
        выполнять простые, но мощные действия
      </p>
      <div className="btmsec mt-[18px] px-4">
        <div className="tasks flex flex-row gap-[3px]">
          <div className="taskm h-6 bg-[#F6F6F6] rounded-[7px] px-2 flex justify-center items-center">
            <p className="text-black text-[13px] font-inter font-medium leading-[normal]">
              Задании
            </p>
          </div>
          {[0, 1, 3, 4].map((_, ind) => (
            <div
              className={`task h-6 bg-[#EDECFF] rounded-[7px] px-2 flex justify-center items-center ${
                ind + 1 > 2 && "bg-white! border border-[#EEEEEE]!"
              }`}
            >
              <p
                className={`text-[#817BFF] text-[13px] font-inter font-medium leading-[normal] ${
                  ind + 1 > 2 && "opacity-20 text-black!"
                }`}
              >
                День {ind + 1}
              </p>
            </div>
          ))}
        </div>
        <div className="goal flex flex-row gap-1 mt-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="18" height="18" rx="9" fill="#95CF95" />
            <path
              d="M5.5 9.5L8 12L13 7"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-sm font-inter font-semibold text-black leading-[normal]">
            Рано вставать, пить воду, отказываться от вредной еды!
          </p>
        </div>

        <div className="mt-2">
          <button className="cursor-pointer border border-[#817BFF] rounded-[7px] h-6 flex justify-center items-center px-2 gap-1 text-[#817BFF] text-[13px] font-inter font-medium leading-[normal]">
            Посмотреть все задании
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66699 4.66663L8.00033 7.99996L4.66699 11.3333M8.66699 4.66663L12.0003 7.99996L8.66699 11.3333"
                stroke="#817BFF"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
     
      </div>
         <div className="ft mt-[18px] py-2.5 px-4 flex gap-3 border-t border-t-[#EEEEEE]">
          <div className="flex items-center gap-px">
            <img src="/pictures/like.svg" alt="" />
            <p className="text-xs font-inter font-semibold text-black leading-[normal]">
              432
            </p>
          </div>
          <div className="flex items-center gap-px">
            <img src="/pictures/mss.svg" alt="" />
            <p className="text-xs font-inter font-semibold text-black leading-[normal]">
              +12
            </p>
          </div>
          <div className="flex items-center gap-px">
            <img src="/pictures/hand.svg" alt="" />
            <p className="text-xs font-inter font-semibold text-black leading-[normal]">
              +3
            </p>
          </div>
        </div>
    </div>
  );
};

export default MaqsadSCard;
