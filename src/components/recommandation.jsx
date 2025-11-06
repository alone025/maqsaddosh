import React from "react";

const Recommandation = () => {
  return (
    <div>
      <div className="title pl-4 pr-6 mb-4 flex justify-between">
        <h4 className="text-[13px] font-inter font-medium text-black leading-[normal]">
          Рекомендуемые Challenges
        </h4>
        <p className="text-[13px] cursor-pointer font-inter font-medium text-black leading-[normal]">
          все
        </p>
      </div>
      <div className="cards flex gap-2">
        <div className="card flex-1/2 border border-[#EEEEEE] rounded-[9px] p-1">
          <img src="/pictures/rec.jpg" alt="" />
          <div className="cont px-3 mt-[15px] pb-3">
            <h4 className="text-[13px] font-inter text-black font-medium leading-[normal]">
              Estetik mavjudlikning falsafiy ifodalash 32 kunda bir umrlik
              ko'nikma.
            </h4>
            <p className="mt-2 text-[11px] font-inter font-semibold text-black opacity-30 leading-[normal]">
              12 July 10:30
            </p>
          </div>
        </div>
        <div className="card flex-1/2 border border-[#EEEEEE] rounded-[9px] p-1">
          <img src="/pictures/rec.jpg" alt="" />
          <div className="cont px-3 mt-[15px] pb-3">
            <h4 className="text-[13px] font-inter text-black font-medium leading-[normal]">
              Estetik mavjudlikning falsafiy ifodalash 32 kunda bir umrlik
              ko'nikma.
            </h4>
            <p className="mt-2 text-[11px] font-inter font-semibold text-black opacity-30 leading-[normal]">
              12 July 10:30
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommandation;
