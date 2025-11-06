// import React, { useState } from "react";

const Tabbar = ({registered}) => {
//   const [registered, setRegistered] = useState(false);
  return (
    <div className="flex gap-1.5 px-2 border-t border-t-[#EEEEEE] z-111 py-3 flex-row justify-evenly items-center bg-white fixed w-full bottom-0 left-0">
      <div className="tab flex-1/5 flex px-1.5 flex-col max-w-[72px] w-full gap-[3px] items-center">
        <img src="/pictures/home.svg" alt="Home" />
        <p
          className={`text-[13px] ${registered ? "max-[350px]:hidden":"max-[400px]:hidden"} text-black leading-[normal] font-inter font-medium `}
        >
          Главная
        </p>
      </div>
      <div className="tab flex-1/5 flex px-1.5 flex-col max-w-[72px] w-full gap-[3px] items-center">
        <img src="/pictures/search.svg" alt="search" />
        <p
          className={`text-[13px] ${registered ? "max-[350px]:hidden":"max-[400px]:hidden"} text-black leading-[normal] font-inter font-medium `}
        >
          Поиск
        </p>
      </div>
      <div className="tab flex-1/5 flex px-1.5 flex-col max-w-[72px] w-full gap-[3px] items-center">
        {
            registered ? (
                <img src="/pictures/plus.svg" alt="plus" />
            ):(
                <img src="/pictures/lenta.svg" alt="lenta" />
            )
        }
        <p
          className={`text-[13px] ${registered ? "max-[350px]:hidden":"max-[400px]:hidden"} text-center text-nowrap text-black leading-[normal] font-inter font-medium`}
        >
          {
            registered ? 'Создать':'Лента целей'
          }
        </p>
      </div>
      <div className="tab flex-1/5 flex px-1.5 flex-col max-w-[72px] w-full gap-[3px] items-center">
        {
            registered? (
                <img src="/pictures/goals.svg" alt="goals" />
            ):(<img src="/pictures/challange.svg" alt="challange" />)
        }
        <p
          className={`text-[13px] ${registered ? "max-[350px]:hidden":"max-[400px]:hidden"} text-black text-nowrap leading-[normal] font-inter font-medium `}
        >
          {registered ? "Мои цели":"Челленджи"}
          
        </p>
      </div>

      <div className="tab flex-1/5 flex px-1.5 flex-col max-w-[72px] w-full gap-[3px] items-center">
        {
            registered ? (
                <img src="/pictures/profile.svg" alt="profile" />
            ):(<img src="/pictures/feature.svg" alt="feature" />)
        }
        <p
          className={`text-[13px] ${registered ? "max-[350px]:hidden":"max-[400px]:hidden"} text-black leading-[normal] font-inter font-medium `}
        >
          {
            registered ? "Профиль":"Расширении"
          }
        </p>
      </div>
    </div>
  );
};

export default Tabbar;
