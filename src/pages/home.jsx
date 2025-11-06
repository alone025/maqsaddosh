import React from "react";
import Button from "../components/button";

import CategorySections from "../components/categorySections";
import MaqsadCard from "../components/maqsadCard";
import MobileHead from "../components/mobileHead";
import Sidebar from "../components/sidebar";
import Tabbar from "../components/tabbar";

const Home = () => {
  return (
    <div className="flex max-md:pb-10 flex-col md:flex-row gap-3 md:gap-5">
      <div className="topmobile md:hidden">
        <MobileHead registered={false} />
      </div>
      <div className="sidebar max-md:hidden flex-1/3 max-w-[70px] md:max-w-[100px] lg:max-w-[255px] flex">
        <Sidebar registered={false} />
      </div>
      <div className="w-full md:flex-1/2 pt-1.5 center-content flex flex-col items-center">
        <div className="top max-md:w-full scroll-none flex overflow-scroll">
          <CategorySections />
        </div>
        <div className="maqsads pl-2.5 w-full mt-8 flex flex-col gap-[60px]">
          <MaqsadCard registered={false} media={2} />
          <MaqsadCard registered={false} media={3} />
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
      <div className="right-news max-lg:hidden border-l border-l-[#EEEEEE] pl-10 flex flex-col flex-1/3 xl:flex-1/4 pt-1.5 min-h-[calc(100vh-48px)]">
        <div className="tx pt-[7px] max-w-[300px]">
          <h3 className="text-[17px] text-black font-inter font-semibold leading-[normal] pb-2.5">
            Вы вошли как гость
          </h3>
          <p className="text-[13px] opacity-60 text-black font-inter font-normal leading-[normal]">
            Войдите в аккаунт, чтобы получить полный доступ ко всем
            возможностям: отслеживание целей, установка собственных, участие в
            челленджах, просмотр ленты, взаимодействие с другими участниками и
            многое другое.
          </p>
        </div>
        <div className="tx2 mt-[50px] max-w-[300px]">
          <h3 className="text-[17px]  text-black font-inter font-semibold leading-[normal] pb-2.5">
            О проекте
          </h3>

          <p className="text-[13px] opacity-60 text-black font-inter font-normal leading-[normal]">
            Этот проект создан для тех, кто устал просто мечтать и хочет начать
            действовать. Для тех, кто чувствует в себе силу двигаться вперёд, но
            не всегда знает, с чего начать. Мы собрали всё в одном месте, чтобы
            дать вам пространство, где цель становится не просто словами, а
            реальным маршрутом с поддержкой, сообществом и результатом.
            <br />
            <br />
            Платформа помогает каждому пользователю определить свою цель,
            отслеживать прогресс, принимать участие в челленджах и объединяться
            с другими людьми, идущими по схожему пути. Это не просто инструмент
            — это сообщество, где у каждого есть шанс стать частью движения к
            лучшей версии себя.
            <br />
            <br />
            Мы верим, что большие перемены начинаются с малого: одного шага,
            одного дня, одной цели. Поэтому наш проект ориентирован не на
            давление, а на поддержку. Вы можете ставить личные цели, отслеживать
            их, делиться прогрессом, вступать в команды и участвовать в
            марафонах — от физической активности до ментального роста и
            привычек.
            <br />
            <br />
            Платформа мотивирует вас оставаться на пути, предоставляя понятные
            инструменты, систему достижений, социальную поддержку и среду, где
            вы не один. Мы разработали этот проект, чтобы вы могли
            почувствовать, что цель — это не что-то далёкое, а вполне
            достижимое, особенно когда вы не один.
          </p>
        </div>
      </div>

      <div className="tabbar md:hidden">
        <Tabbar registered={false} />
      </div>
    </div>
  );
};

export default Home;
