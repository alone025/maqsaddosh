import React from "react";
import Input from "../components/input";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div className="tope flex flex-row gap-2 items-center mt-[30px] pl-0.5 cursor-pointer">
        <img src="/pictures/arrowLeft.svg" alt="arrow" />
        <p onClick={()=>navigate(-1)} className="text-sm md:text-[17px] text-black font-inter font-semibold leading-[normal]">
          Назад к входу
        </p>
      </div>
      <div className="content max-w-[336px] mx-auto w-full pt-7 flex flex-col items-center text-center">
        <h4 className="text-lg text-black font-inter font-medium leading-[normal] mb-1">
          Регистрация
        </h4>
        <p className="text-[13px] text-black font-inter font-normal leading-[normal]">
          Для регистрации нужно подтвердить номер телефона или электронную
          почту.
        </p>
        <form action="submit" className="mt-[26px] w-full">
          <Input
            required={true}
            placeholder={"Номер телефона или электронная почта"}
            type={"text"}
          />
          <p className="text-[13px] mt-7 cursor-pointer hover:underline text-black font-inter font-normal leading-[normal]">
            Отправим SMS-код для подтверждения.
          </p>
          <Button onClick={()=>window.open("/otp","_current")} type={"submit"} text={"Далее"} className={"mt-[60px]"} />
        </form>
      </div>
      <div className="bottome mt-25 max-w-[400px] flex flex-col items-center mx-auto w-full">
        <p className="text-[13px] font-inter font-normal text-black flex gap-[15px] flex-row">
          А вы уже зарегистрированы?
          <span onClick={()=>window.open('/login',"_current")} className="font-medium text-[#44A0F5] hover:underline transition-all">
            Вход
          </span>
        </p>
        <div className="integration flex flex-row gap-1 mt-5">
          <img
            src="/pictures/google.svg"
            alt="google"
            className="cursor-pointer"
          />
          <img
            src="/pictures/apple.svg"
            alt="apple"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="addition mt-8 max-w-[457px] flex flex-col items-center mx-auto w-full">
        <div className="tags flex flex-row gap-1">
          <div className="tag bg-[#F6F6F6] px-[9px] py-1 rounded-[5px] text-xs text-black font-inter font-medium cursor-pointer">
            Как восстоновить?
          </div>
          <div className="tag bg-[#F6F6F6] px-[9px] py-1 rounded-[5px] text-xs text-black font-inter font-medium  cursor-pointer">
            Я не могу войти!
          </div>
        </div>
        <p className="mt-3.5 text-center text-[#000000] opacity-40 text-xs leading-4 font-inter font-normal">
          Проект разработан для поддержки пользователей в осознанном движении к
          своим целям, сокращая путь от идеи до результата.
        </p>
      </div>
    </div>
  );
};

export default Register;
