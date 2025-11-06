import React from "react";
import { useLocation } from "react-router-dom";

const NavbarBeforeAuth = () => {
  const pathname = useLocation();
  
  return (
    <div
      className={`${
        pathname.pathname == "/login"
          ? "lg:fixed lg:top-0 justify-around pt-5"
          : "justify-between"
      } max-lg:bg-white w-full z-11111 flex flex-row items-start ${['/login', '/register', '/otp','/fillingdata'].includes(pathname.pathname) ? "":"hidden"}`}
    >
      {pathname.pathname == "/login" ? (
        <div className="max-sm:hidden lft">
          <img src="/" alt="maqsaddosh" className="invisible" />
        </div>
      ) : (
        <div className=" lft">
          <img src="/logo2.svg" alt="maqsaddosh" className="" />
        </div>
      )}
      <div
        className={`nav pt-3 flex flex-row items-center gap-9 text-[15px] font-medium font-inter ${
          pathname.pathname == "/login"
            ? "text-black lg:text-white"
            : "text-black max-md:hidden"
        }`}
      >
        <p className="font-inter font-medium cursor-pointer text-[15px]">
          Главная
        </p>
        <p className="font-inter font-medium cursor-pointer text-[15px]">
          О платформе
        </p>
        <p className="font-inter font-medium cursor-pointer text-[15px]">
          О нас
        </p>
        <p className="font-inter font-medium cursor-pointer text-[15px]">
          Помощь
        </p>
      </div>

     {
      pathname.pathname !== '/login' && (
         <div className="block invisible"></div>
      )
     }
    </div>
  );
};

export default NavbarBeforeAuth;
