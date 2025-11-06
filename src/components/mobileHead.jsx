// import { useState } from "react";
import ButtonIcon from "./buttonIcon";
import { useNavigate } from "react-router-dom";

const MobileHead = ({registered}) => {
  const navigate = useNavigate();
  // const [registered, setRegistered] = useState(false);
  return (
    <div className="flex flex-row justify-between items-center px-2 py-2.5">
      <img src="/mobileLogo.svg" alt="Maqsaddosh" />
      {!registered && (
        <ButtonIcon
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6667 6.66732V5.00065C11.6667 4.55862 11.4911 4.1347 11.1785 3.82214C10.866 3.50958 10.442 3.33398 10 3.33398H4.16667C3.72464 3.33398 3.30072 3.50958 2.98816 3.82214C2.67559 4.1347 2.5 4.55862 2.5 5.00065V15.0007C2.5 15.4427 2.67559 15.8666 2.98816 16.1792C3.30072 16.4917 3.72464 16.6673 4.16667 16.6673H10C10.442 16.6673 10.866 16.4917 11.1785 16.1792C11.4911 15.8666 11.6667 15.4427 11.6667 15.0007V13.334M16.6667 10.0007H5.83333M5.83333 10.0007L8.33333 7.50065M5.83333 10.0007L8.33333 12.5007"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          text={"Войти"}
          type={"button"}
          onClick={() => navigate("/login")}
          className={"max-w-[90px] rounded-full!"}
        />
      )}

      {
        registered && (
          <div className="flex flex-row gap-2">
            <div className="c h-[46px] w-[46px] rounded-xl flex  justify-center items-center  bg-[#F6F6F6]">
              <img src="/pictures/challange.svg" alt="" />

            </div>
            <img src="/pictures/mail.svg" alt="" />
          </div>
        )
      }
    </div>
  );
};

export default MobileHead;
