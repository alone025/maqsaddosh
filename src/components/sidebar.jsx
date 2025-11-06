import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";

const Sidebar = ({ registered }) => {
  const navigate = useNavigate();
  return (
    <div className="left-sidebar flex flex-col sticky h-[calc(100vh-48px)] overflow-scroll scroll-none top-5 w-full border-r border-r-[#EEEEEE] pr-5">
      <img src="/logo2.svg" alt="Maqsaddosh" className="max-w-[134px]" />
      {!registered && (
        <div className="login-reg flex-row mt-[37px] ml-3 gap-1 lg:space-x-1 flex">
          <Button
            text={"Войти"}
            type={"button"}
            className={"max-w-[75px] max-md:hidden"}
            onClick={() => navigate("/login")}
          />
          <Button
            text={"Регистрация"}
            type={"button"}
            className={"bg-[#F6F6F6]! text-black! max-lg:hidden"}
            onClick={() => navigate("/register")}
          />
        </div>
      )}
      {
        registered && (
            <div className="profile mt-[30px] ml-3">
        <div className="tp flex flex-col lg:flex-row gap-3 items-center">
          <img src="/pictures/userDemo.svg" alt="user" />
          <div className="flex flex-row gap-2">
            <div className="c h-9 w-9 rounded-xl flex  justify-center items-center  bg-[#F6F6F6]">
              <img src="/pictures/challange.svg" alt="" />
            </div>
            <img src="/pictures/mail.svg" alt="" className="w-9 h-9" />
          </div>
        </div>
        <p className="text-[15px] text-black font-inter font-semibold leading-[normal] mt-3">
          @isei025
        </p>
        <p className="mt-0.5 text-xs font-inter font-normal text-black opacity-40">
          Сабина Казиева
        </p>
        <div className="tags flex flex-row gap-1 mt-4">
          <div className="tag flex flex-row items-center gap-1 px-[7px] py-[5px] rounded-[5px] bg-[#F6F6F6]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              title="Maqsaddosh"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 14V12.6667C2 11.9594 2.28095 11.2811 2.78105 10.781C3.28115 10.281 3.95942 10 4.66667 10H7.33333C8.04058 10 8.71885 10.281 9.21895 10.781C9.71905 11.2811 10 11.9594 10 12.6667V14M10.6667 2.08667C11.2403 2.23354 11.7487 2.56714 12.1118 3.03488C12.4748 3.50262 12.6719 4.07789 12.6719 4.67C12.6719 5.26212 12.4748 5.83739 12.1118 6.30513C11.7487 6.77287 11.2403 7.10647 10.6667 7.25334M14 14V12.6667C13.9966 12.0781 13.7986 11.5072 13.4368 11.043C13.0751 10.5787 12.5699 10.2471 12 10.1M8.66667 4.66667C8.66667 6.13943 7.47276 7.33333 6 7.33333C4.52724 7.33333 3.33333 6.13943 3.33333 4.66667C3.33333 3.19391 4.52724 2 6 2C7.47276 2 8.66667 3.19391 8.66667 4.66667Z"
                stroke="black"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p
              title="Maqsaddosh"
              className="text-[13px] max-lg:hidden text-black font-inter font-medium leading-[normal]"
            >
              Maqsaddosh
            </p>
          </div>
          <div className="tag flex flex-row  items-center gap-1 px-[7px] py-[5px] rounded-[5px] bg-[#F6F6F6]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              title="Цели"
            >
              <path
                d="M14 8C14 11.3137 11.3137 14 8 14M14 8C14 4.68629 11.3137 2 8 2M14 8H12M8 14C4.68629 14 2 11.3137 2 8M8 14V12M2 8C2 4.68629 4.68629 2 8 2M2 8H4.66667M8 2V4.66667M8 8V8.00667"
                stroke="black"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p
              title="Цели"
              className="text-[13px] max-lg:hidden text-black font-inter font-medium leading-[normal]"
            >
              Цели
            </p>
          </div>
        </div>
      </div>
        )
      }
      <div className="narv mt-[35px] lg:ml-3 flex flex-col items-center lg:items-start gap-6">
        <div className="nav cursor-pointer flex flex-row items-center gap-3">
          <img src="/pictures/home.svg" alt="" />
          <p className="text-[15px] hidden lg:block text-black font-inter font-medium leading-[normal]">
            Главная
          </p>
        </div>

        <div className="nav cursor-pointer flex flex-row items-center gap-3">
          <img src="/pictures/search.svg" alt="" />
          <p className="text-[15px] hidden lg:block text-black font-inter font-medium leading-[normal]">
            Поисковый запрос
          </p>
        </div>
        <div className="nav cursor-pointer flex flex-row items-center gap-3">
          <img src="/pictures/lenta.svg" alt="" />
          <p className="text-[15px] hidden lg:block text-black font-inter font-medium leading-[normal]">
            Лента целей
          </p>
        </div>
        <div className="nav cursor-pointer flex flex-row items-center gap-3">
          <img src="/pictures/challange.svg" alt="" />
          <p className="text-[15px] hidden lg:block text-black font-inter font-medium leading-[normal]">
            Челленджи
          </p>
        </div>
        <div className="nav cursor-pointer flex flex-row items-center gap-3">
          <img src="/pictures/feature.svg" alt="" />
          <p className="text-[15px] hidden lg:block text-black font-inter font-medium leading-[normal]">
            Расширении
          </p>
        </div>
      </div>
      <div className="settings lg:ml-3 mt-auto">
        <div className="set cursor-pointer flex flex-row mt-5 max-lg:justify-center items-center gap-3">
          <img src="/pictures/settings.svg" alt="" />
          <p className="text-[15px] hidden lg:block text-black font-inter font-medium leading-[normal]">
            Настройка
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-1 lg:gap-4 mt-4">
          <p className="text-xs cursor-pointer opacity-30 text-black font-inter font-normal leading-[normal]">
            Privacy & policy
          </p>
          <p className="text-xs cursor-pointer opacity-30 text-black font-inter font-normal leading-[normal]">
            Terms of use
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
