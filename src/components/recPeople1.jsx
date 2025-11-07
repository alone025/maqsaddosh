import React from "react";

const RecPeople1 = () => {
  return (
    <div>
      <div className="title pl-4 pr-6 mb-6 flex justify-between">
        <h4 className="text-[13px] font-inter font-medium text-black leading-[normal]">
          Рекомендуемые цели для вас
        </h4>
      </div>
      <div className="cards flex flex-col gap-[26px]">
        <div className="card px-4 pb-8 border-b border-b-[#EEEEEE]">
          <div className="flex gap-3 items-center mb-3">
            <img src="/pictures/rec1.svg" alt="rec" />
            <img src="/pictures/recb.svg" alt="browser" />
            <img src="/pictures/recs.svg" alt="suniy yuldosh" />
          </div>
          <div className="txt mt-[3px]">
            <p className="text-[17px] font-inter font-semibold leading-[normal] text-black">
              Жамшид Усманов
            </p>
            <p className="text-xs text-[#44A0F5] font-inter font-semibold leading-[normal]">
              г.Самарканд. 32 года
            </p>
            <p className="text-xs text-black font-inter font-medium mt-1 leading-[normal]">
              Стратег
            </p>
          </div>
          <p className="my-3.5 text-[17px] text-black font-inter font-medium leading-[normal] max-w-[375px]">
            Estetik mavjudlikning falsafiy ifodalash 32 kunda bir umrlik
            ko'nikma.
          </p>

          <div className="regi2 flex gap-1 mt-4">
            <button className="h-6 px-2.5 cursor-pointer outline-none rounded-sm bg-[#817BFF] flex flex-row justify-center items-center gap-0.5 text-xs text-white font-inter font-medium leading-[normal]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.99984 2.91663V11.0833M2.9165 6.99996H11.0832"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Присоединиться
            </button>
            <div className="size w-max h-6 px-2.5 flex gap-0.5 items-center text-black text-xs font-inter font-medium leading-[normal] bg-[#F6F6F6] rounded-sm">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75 12.25V11.0833C1.75 10.4645 1.99583 9.871 2.43342 9.43342C2.871 8.99583 3.46449 8.75 4.08333 8.75H6.41667C7.0355 8.75 7.629 8.99583 8.06658 9.43342C8.50417 9.871 8.75 10.4645 8.75 11.0833V12.25M9.33333 1.82584C9.83524 1.95435 10.2801 2.24625 10.5978 2.65552C10.9155 3.06479 11.0879 3.56815 11.0879 4.08625C11.0879 4.60435 10.9155 5.10772 10.5978 5.51699C10.2801 5.92626 9.83524 6.21816 9.33333 6.34667M12.25 12.25V11.0833C12.247 10.5684 12.0738 10.0688 11.7572 9.66258C11.4407 9.25635 10.9986 8.96626 10.5 8.83751M7.58333 4.08333C7.58333 5.372 6.53866 6.41667 5.25 6.41667C3.96134 6.41667 2.91667 5.372 2.91667 4.08333C2.91667 2.79467 3.96134 1.75 5.25 1.75C6.53866 1.75 7.58333 2.79467 7.58333 4.08333Z"
                  stroke="black"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              74
            </div>
            <div className="mss cursor-pointer w-max h-6 px-2.5 flex gap-0.5 items-center text-black text-xs font-inter font-medium leading-[normal] bg-[#F6F6F6] rounded-sm">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75 11.6667L2.50833 9.39167C1.85293 8.42233 1.61583 7.27441 1.84113 6.16135C2.06643 5.04828 2.73879 4.04581 3.7332 3.34033C4.72761 2.63485 5.9764 2.27436 7.24739 2.3259C8.51837 2.37743 9.72506 2.83748 10.6431 3.6205C11.5611 4.40352 12.128 5.45624 12.2384 6.58291C12.3487 7.70959 11.9951 8.83355 11.2431 9.74583C10.4911 10.6581 9.39205 11.2966 8.15021 11.5426C6.90838 11.7886 5.60828 11.6254 4.49167 11.0833L1.75 11.6667Z"
                  stroke="black"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Чат
            </div>
          </div>
        </div>
        <div className="card px-4 pb-8 border-b border-b-[#EEEEEE]">
          <div className="flex gap-3 items-center mb-3">
            <img src="/pictures/rec1.svg" alt="rec" />
            <img src="/pictures/recb.svg" alt="browser" />
            <img src="/pictures/recs.svg" alt="suniy yuldosh" />
          </div>
          <div className="txt mt-[3px]">
            <p className="text-[17px] font-inter font-semibold leading-[normal] text-black">
              Жамшид Усманов
            </p>
            <p className="text-xs text-[#44A0F5] font-inter font-semibold leading-[normal]">
              г.Самарканд. 32 года
            </p>
            <p className="text-xs text-black font-inter font-medium mt-1 leading-[normal]">
              Стратег
            </p>
          </div>
          <p className="my-3.5 text-[17px] text-black font-inter font-medium leading-[normal] max-w-[375px]">
            Estetik mavjudlikning falsafiy ifodalash 32 kunda bir umrlik
            ko'nikma.
          </p>

          <div className="regi2 flex gap-1 mt-4">
            <button className="h-6 px-2.5 cursor-pointer outline-none rounded-sm bg-[#817BFF] flex flex-row justify-center items-center gap-0.5 text-xs text-white font-inter font-medium leading-[normal]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.99984 2.91663V11.0833M2.9165 6.99996H11.0832"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Присоединиться
            </button>
            <div className="size w-max h-6 px-2.5 flex gap-0.5 items-center text-black text-xs font-inter font-medium leading-[normal] bg-[#F6F6F6] rounded-sm">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75 12.25V11.0833C1.75 10.4645 1.99583 9.871 2.43342 9.43342C2.871 8.99583 3.46449 8.75 4.08333 8.75H6.41667C7.0355 8.75 7.629 8.99583 8.06658 9.43342C8.50417 9.871 8.75 10.4645 8.75 11.0833V12.25M9.33333 1.82584C9.83524 1.95435 10.2801 2.24625 10.5978 2.65552C10.9155 3.06479 11.0879 3.56815 11.0879 4.08625C11.0879 4.60435 10.9155 5.10772 10.5978 5.51699C10.2801 5.92626 9.83524 6.21816 9.33333 6.34667M12.25 12.25V11.0833C12.247 10.5684 12.0738 10.0688 11.7572 9.66258C11.4407 9.25635 10.9986 8.96626 10.5 8.83751M7.58333 4.08333C7.58333 5.372 6.53866 6.41667 5.25 6.41667C3.96134 6.41667 2.91667 5.372 2.91667 4.08333C2.91667 2.79467 3.96134 1.75 5.25 1.75C6.53866 1.75 7.58333 2.79467 7.58333 4.08333Z"
                  stroke="black"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              74
            </div>
            <div className="mss cursor-pointer w-max h-6 px-2.5 flex gap-0.5 items-center text-black text-xs font-inter font-medium leading-[normal] bg-[#F6F6F6] rounded-sm">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75 11.6667L2.50833 9.39167C1.85293 8.42233 1.61583 7.27441 1.84113 6.16135C2.06643 5.04828 2.73879 4.04581 3.7332 3.34033C4.72761 2.63485 5.9764 2.27436 7.24739 2.3259C8.51837 2.37743 9.72506 2.83748 10.6431 3.6205C11.5611 4.40352 12.128 5.45624 12.2384 6.58291C12.3487 7.70959 11.9951 8.83355 11.2431 9.74583C10.4911 10.6581 9.39205 11.2966 8.15021 11.5426C6.90838 11.7886 5.60828 11.6254 4.49167 11.0833L1.75 11.6667Z"
                  stroke="black"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Чат
            </div>
          </div>
        </div>
      </div>
      <div className="fn mt-8 pl-[26px]">
            <button className="border cursor-pointer hover:bg-[#817BFF] hover:text-white transition-colors border-[#817BFF] rounded-[7px] h-7 text-[#817BFF] text-[13px] font-inter font-medium leading-0 px-[9px]">
            Посмотреть все рекомендуемые
        </button>
        <div className="lst flex flex-wrap gap-4 mt-12 max-w-[330px]">
            <p className="text-sm text-black font-inter font-normal leading-[normal] cursor-pointer">Цели для вас</p>
            <p className="text-sm text-black font-inter font-normal leading-[normal] cursor-pointer">Посты</p>
            <p className="text-sm text-black font-inter font-normal leading-[normal] cursor-pointer">Челенджы</p>
            <p className="text-sm text-black font-inter font-normal leading-[normal] cursor-pointer">Категории</p>
            <p className="text-sm text-black font-inter font-normal leading-[normal] cursor-pointer">Интерес общество</p>
        </div>
      </div>
    </div>
  );
};

export default RecPeople1;
