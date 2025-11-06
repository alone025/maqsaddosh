import React from "react";
import MobileHead from "../components/mobileHead";
import Sidebar from "../components/sidebar";
import CategorySections from "../components/categorySections";
import MaqsadCard from "../components/maqsadCard";
import Tabbar from "../components/tabbar";
import Searchbar from "../components/searchbar";
import RightSide from "../components/rightSide";
import InstaRec from "../components/instaRec";

const HomeRegistered = () => {
  return (
    <div className="flex max-md:pb-10 flex-col md:flex-row gap-3 md:gap-5">
      <div className="topmobile md:hidden">
        <MobileHead registered={true} />
      </div>
      <div className="sidebar max-md:hidden flex-1/3 max-w-[70px] md:max-w-[100px] lg:max-w-[255px] flex">
        <Sidebar registered={true} />
      </div>
      <div className="w-full md:flex-1/2 pt-1.5 center-content flex flex-col items-center">
        <div className="top flex-col max-md:w-full scroll-none flex overflow-scroll">
          <div className="max-md:hidden w-full searchbar mb-[18px]">
            <Searchbar />
          </div>
          <CategorySections />
        </div>
        <div className="maqsads pl-2.5 w-full mt-8 flex flex-col gap-[60px]">
          <MaqsadCard registered={true} media={2} />
          <div className="max-w-[570px] w-full mx-auto">
            <InstaRec/>
          </div>
          <MaqsadCard registered={true} media={3} />
        </div>
        <div className="footer mt-auto">
          <div className="logo w-full flex justify-center mt-11">
            <img src="/logo.svg" alt="Maqsaddosh" className="max-w-[45px]" />
          </div>
          <div className="navs flex-wrap mt-11 flex flex-row justify-between gap-3">
            <p className="text-sm cursor-pointer text-black font-inter font-normal leading-[normal]">
              О проекте
            </p>
            <p className="text-sm cursor-pointer text-black font-inter font-normal leading-[normal]">
              Помошь
            </p>
            <p className="text-sm cursor-pointer text-black font-inter font-normal leading-[normal]">
              Условия использования
            </p>
            <p className="text-sm cursor-pointer text-black font-inter font-normal leading-[normal]">
              Конфиденциальность
            </p>
            <p className="text-sm cursor-pointer text-black font-inter font-normal leading-[normal]">
              Вакансии
            </p>
          </div>
          <p className="mt-2.5 text-xs font-inter font-normal text-black leading-[15px] opacity-40">
            Проект разработан для поддержки пользователей в осознанном движении
            к своим целям, сокращая путь от идеи до результата.
          </p>
        </div>
      </div>
      <div className="right-news max-xl:hidden border-l border-l-[#EEEEEE] pl-10 flex flex-col flex-1/3 xl:flex-1/4 pt-1.5 min-h-[calc(100vh-48px)]">
        <RightSide />
      </div>

      <div className="tabbar md:hidden">
        <Tabbar registered={true} />
      </div>
    </div>
  );
};

export default HomeRegistered;
