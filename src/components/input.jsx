
const Input = ({ id, required, type, placeholder, value, onChange, disabled, readonly, className }) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      readOnly={readonly}
      required={required}
      className={`bg-[#F7F7F7] rounded-md h-11 outline-none border-transparent border focus:border-[#d4d3d3] w-full px-[17px] flex items-center font-inter text-[#000000] text-[13px] font-normal placeholder:text-[#000000] placeholder:font-inter placeholder:opacity-50 ${className}`}
    />
  );
};

export default Input;
