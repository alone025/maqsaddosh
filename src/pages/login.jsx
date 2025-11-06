import React from "react";
import Input from "../components/input";
import Button from "../components/button";

const Login = () => {
  return (
    <div className="flex gap-13 justify-between min-h-screen">
      <div className="left flex flex-col justify-center pt-20 px-5 sm:px-10 md:px-20 lg:pl-20 lg:max-w-[500px] 2xl:max-w-[600px] w-full pb-10">
        <div className="tl mb-[60px]">
          <img src="/logo.svg" alt="" />
        </div>
        <div className="content">
          <h4 className="pl-2 text-lg font-inter font-medium text-black mb-1">
            Войти в аккаунт
          </h4>
          <p className="pl-2 mb-10 text-[13px] text-black opacity-40 font-inter font-normal">
            Номер телефона или электронная почта
          </p>
          <form action="submit">
            <label
              htmlFor="login"
              className="pl-[9px] block mb-3 font-inter font-normal text-[13px] text-black"
            >
              Введите ваш логин и пароль
            </label>
            <div className="flex flex-col gap-1.5">
              <Input
                type={"text"}
                id={"login"}
                placeholder={"Номер телефона или электронная почта"}
              />
              <Input type={"password"} id={"password"} placeholder={"Пароль"} />
            </div>
            <Button text={"Войти"} type={"submit"} className={"mt-9"} />
          </form>
        </div>
        <div className="bottome mt-25">
          <p className="text-[13px] font-inter font-normal text-black mb-2">
            Забыл пароль?
          </p>
          <p className="text-[13px] font-inter font-normal text-black flex gap-[15px] flex-row">
            А вы еще не регистрировалиь?
            <span onClick={()=>window.open('/register',"_current")}  className="font-medium text-[#44A0F5] hover:underline transition-all">
              Регистрация
            </span>
          </p>
          <div className="integration flex flex-row gap-1 mt-5">
            <img src="/pictures/google.svg" alt="google" className="cursor-pointer"  />
            <img src="/pictures/apple.svg" alt="apple" className="cursor-pointer" />
          </div>
        </div>
        <div className="addition mt-25">
          <div className="tags flex flex-row gap-1">
            <div className="tag bg-[#F6F6F6] px-[9px] py-1 rounded-[5px] text-xs text-black font-inter font-medium cursor-pointer">
              Как восстоновить?
            </div>
            <div className="tag bg-[#F6F6F6] px-[9px] py-1 rounded-[5px] text-xs text-black font-inter font-medium  cursor-pointer">
              Я не могу войти!
            </div>
          </div>
          <p className="mt-3.5 text-[#000000] opacity-40 text-xs leading-4 font-inter font-normal">
            Проект разработан для поддержки пользователей в осознанном движении
            к своим целям, сокращая путь от идеи до результата.
          </p>
        </div>
      </div>
      <div className="right hidden lg:block w-full relative max-w-1/2">
        <img
          src="/pictures/bgLogin.jpg"
          alt=""
          className="absolute object-cover h-full w-full object-left"
        />
      </div>
    </div>
  );
};

export default Login;
