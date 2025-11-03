import React, { useRef, useState } from 'react';

const OtpInput = ({ length = 6, onChangeOTP }) => {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Only numbers
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value[value.length - 1]; // Only take last digit
    setOtp(newOtp);
    onChangeOTP && onChangeOTP(newOtp.join(''));

    // Move to next input
    if (index < length - 1 && value) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
        onChangeOTP && onChangeOTP(newOtp.join(''));
      } else if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData('text').slice(0, length);
    const pasteArray = paste.split('');
    const newOtp = [...otp];
    pasteArray.forEach((char, i) => {
      newOtp[i] = char;
      if (inputsRef.current[i]) inputsRef.current[i].value = char;
    });
    setOtp(newOtp);
    onChangeOTP && onChangeOTP(newOtp.join(''));
  };

  return (
    <div className="flex gap-2 justify-center">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          type="text"
          inputMode="numeric"
          maxLength={1}
          placeholder="*"
          ref={(el) => (inputsRef.current[i] = el)}
          value={otp[i]}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          onPaste={handlePaste}
          required
          className="bg-[#F7F7F7] rounded-md outline-none border border-transparent focus:border-[#d4d3d3] text-black text-[22px] font-inter font-semibold leading-[normal] w-[50px] h-11 text-center"
        />
      ))}
    </div>
  );
};

export default OtpInput;
