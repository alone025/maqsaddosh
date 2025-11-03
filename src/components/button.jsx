import React from "react";

const Button = ({ text, disabled,className, onClick, type }) => {
  return (
    <button type={type || 'button'} disabled={disabled} onClick={onClick} className={`h-10 cursor-pointer flex justify-center items-center rounded-lg bg-[#000000] w-full px-3 text-[13px] font-inter font-medium text-white ${className}`}>
      {text}
    </button>
  );
};

export default Button;
