import React from "react";

const InstaRec = () => {
  return (
    <div className="w-full">
      <div className="tt flex justify-between mb-6">
        <p className="text-[13px] text-black font-inter font-medium">
          Рекомендуемые цели для вас
        </p>
        <p className="text-[13px] text-black font-inter font-medium cursor-pointer">
          Все
        </p>
      </div>
      <div className="cards flex gap-2 w-full overflow-scroll scroll-none">
        <div className="card p-2 flex flex-col items-center border pt-[15px] border-[#EEEEEE] min-w-[170px] max-w-[180px] h-[200px] w-full rounded-xl">
          <img src="/pictures/insta1.svg" alt="" />
          <p className="text-[13px] mt-[9px] font-inter font-semibold text-black leading-[normal]">
            Жамшид Усманов
          </p>
          <p className="text-xs text-black font-inter font-medium opacity-40 leading-[normal]">
            г.Самарканд. 32 года
          </p>
          <p className="text-xs mt-1 text-black font-inter font-medium opacity-40 leading-[normal]">
            Стратег
          </p>
          <button className="mt-4 cursor-pointer flex justify-center items-center border border-[#44A0F5] hover:bg-[#44A0F5] hover:text-white transition-colors h-6 rounded-[7px] px-2.5 text-[#44A0F5] text-[13px] font-inter leading-0 font-medium">
            Устоновить контакт
          </button>
        </div>
            <div className="card p-2 flex flex-col items-center border pt-[15px] border-[#EEEEEE] min-w-[170px] max-w-[180px] h-[200px] w-full rounded-xl">
          <img src="/pictures/insta1.svg" alt="" />
          <p className="text-[13px] mt-[9px] font-inter font-semibold text-black leading-[normal]">
            Жамшид Усманов
          </p>
          <p className="text-xs text-black font-inter font-medium opacity-40 leading-[normal]">
            г.Самарканд. 32 года
          </p>
          <p className="text-xs mt-1 text-black font-inter font-medium opacity-40 leading-[normal]">
            Стратег
          </p>
          <button className="mt-4 cursor-pointer flex justify-center items-center border border-[#44A0F5] hover:bg-[#44A0F5] hover:text-white transition-colors h-6 rounded-[7px] px-2.5 text-[#44A0F5] text-[13px] font-inter leading-0 font-medium">
            Устоновить контакт
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstaRec;
