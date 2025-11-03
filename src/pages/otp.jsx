import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import OtpInput from "../components/otpInputs";

const Otp = () => {
  const navigate = useNavigate()
  const handleOtpChange = (otp) => {
    console.log("Current OTP:", otp);
  };
  return (
    <div>
      <div className="tope flex flex-row gap-2 items-center mt-[30px] pl-0.5 cursor-pointer">
        <img src="/pictures/arrowLeft.svg" alt="arrow" />
        <p onClick={()=>navigate(-1)} className="text-sm md:text-[17px] text-black font-inter font-semibold leading-[normal]">
          Назад
        </p>
      </div>
      <div className="content max-w-[336px] mx-auto w-full pt-7 flex flex-col items-center text-center">
        <h4 className="text-lg text-black font-inter font-medium leading-[normal] mb-1">
          Подтверждение
        </h4>
        <p className="text-[13px] text-black font-inter font-normal leading-[normal]">
          SMS-код отправлен на номер +998 *** 44, который вы указали при
          регистрации.
        </p>
        <form action="submit" className="mt-[26px] w-full">
          <OtpInput length={6} onChangeOTP={handleOtpChange} />

          <p className="text-[13px] mt-7 cursor-pointer hover:underline text-black font-inter font-normal leading-[normal]">
            Код придёт по SMS в течение 59 секунд.
          </p>
          <p className='text-[13px] mt-[26px] cursor-pointer hover:underline font-inter font-semibold text-[#44A0F5] leading-[normal]">'>
            Запросить ещё раз!
          </p>
          <Button onClick={()=>window.open('/fillingdata',"_current")} type={"submit"} text={"Далее"} className={"mt-7"} />
        </form>
      </div>
      <div className="bottome mt-32 max-w-[400px] flex flex-col items-center mx-auto w-full">
        <p className="text-[13px] font-inter font-normal text-black flex gap-[15px] flex-row">
          А вы уже зарегистрированы?
          <span className="font-medium text-[#44A0F5] hover:underline transition-all">
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

export default Otp;
