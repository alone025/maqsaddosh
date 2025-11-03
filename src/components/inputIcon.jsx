import React from "react";

const InputIcon = ({
  id,
  required,
  type = "text",
  placeholder,
  value,
  onChange,
  disabled,
  readonly,
  className = "",
  icon, // 🆕 React node for the icon (e.g., <img /> or <svg />)
  iconPosition = "left", // 🆕 'left' or 'right'
}) => {
  return (
    <div
      className={`relative flex items-center bg-[#F7F7F7] rounded-[9px] h-11 w-full border border-transparent focus-within:border-[#d4d3d3] ${className}`}
    >
      {icon && iconPosition === "left" && (
        <div className="absolute left-2.5 flex items-center justify-center text-gray-500">
          {icon}
        </div>
      )}

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        disabled={disabled}
        readOnly={readonly}
        required={required}
        className={`bg-transparent outline-none text-[#000000] text-[13px] font-inter font-normal w-full h-full placeholder:text-[#000000] placeholder:opacity-50 ${
          icon
            ? iconPosition === "left"
              ? "pl-11 pr-2.5"
              : "pl-2.5 pr-11"
            : "px-[17px]"
        } ${className}`}
      />

      {icon && iconPosition === "right" && (
        <div className="absolute right-2.5 flex items-center justify-center text-gray-500">
          {icon}
        </div>
      )}
    </div>
  );
};

export default InputIcon;
