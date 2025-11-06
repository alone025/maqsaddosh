import React, { useState } from "react";
import MaqsadSCard from "./maqsadSCard";
import Recommandation from "./recommandation";
import RecPeople1 from "./recPeople1";

const RightSide = () => {
  const [active, setActive] = useState("left");

  return (
    <div>
      <div className="tope border max-w-[390px] w-full border-[#EEEEEE] h-[50px] bg-white relative rounded-[10px] px-2.5 flex gap-4 items-center z-1">
        <div
          className={`lft cursor-pointer flex-1 flex justify-center ${
            active === "left" ? "text-[#827BFF]" : ""
          }`}
          onClick={() => setActive("left")}
        >
          <img src="/pictures/maqsadlarim.svg" alt="maqsadlarim" className="min-w-[157px]" />
        </div>

        <div
          className={`rgt cursor-pointer flex-1 flex justify-center ${
            active === "right" ? "text-[#827BFF]" : ""
          }`}
          onClick={() => setActive("right")}
        >
          <img
            src="/pictures/participating.svg"
            alt="ishtirok etayotganlarim"
            className="min-w-[188px]"
          />
        </div>

        <div
          className={`btmline bg-[#827BFF] absolute bottom-0 h-[3px] max-w-[76px] w-full rounded-t-[9px] transition-all duration-300 ease-in-out`}
          style={{
            width: "50%",
            left: active === "left" ? "17%" : "65%",
          }}
        ></div>
      </div>
      <div className="card mt-[18px]">
        <MaqsadSCard/>
      </div>
      <div className="recs mt-[46px]">
        <Recommandation/>
      </div>
      <div className="rec2">
        <RecPeople1/>
      </div>
    </div>
  );
};

export default RightSide;
