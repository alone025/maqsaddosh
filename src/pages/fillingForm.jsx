import React, { useRef, useState } from "react";
import InputIcon from "../components/inputIcon";
import GenderSwitch from "../components/genderSwitch";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

const FillingForm = () => {
      const navigate = useNavigate()
  const [preview, setPreview] = useState("/pictures/user.svg"); 
  const fileInputRef = useRef(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Iltimos rasmni tanlang.");
      return;
    }

    // Show preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleGenderChange = (gender) => {
    console.log("Selected gender:", gender);
  };

  return (
    <div>
      <div className="tope flex flex-row gap-2 items-center mt-[30px] pl-0.5 cursor-pointer">
        <img src="/pictures/arrowLeft.svg" alt="arrow" />
        <p onClick={()=>navigate(-1)} className="text-sm md:text-[17px] text-black font-inter font-semibold leading-[normal]">
          Назад
        </p>
      </div>
      <div className="content max-w-[336px] mx-auto flex flex-col items-center">
        <div className="profilepicture flex flex-col items-center">
          <div className="pic w-[90px] h-[90px] bg-[#F6F6F6] rounded-full overflow-hidden flex justify-center items-center">
            <img src={preview} alt="user" className="object-contain" />
          </div>
          <p
            onClick={handleClick}
            className="mt-3 text-center text-[#44A0F5] underline cursor-pointer text-[13px] font-inter font-semibold leading-[18px]"
          >
            Загрузить аватар
          </p>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
        <p className="mt-4 text-center text-black text-[13px] font-inter font-medium leading-[18px]">
          Пожалуйста, заполните все формы, указанные ниже, для регистрации.
        </p>
        <form action="submit" className="mt-[22px] w-full space-y-2">
          <InputIcon
            placeholder="Имя и Фамилия"
            value={username}
            onChange={setUsername}
            required={true}
            className="placeholder:opacity-100!"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 6H4C3.73478 6 3.48043 6.10536 3.29289 6.29289C3.10536 6.48043 3 6.73478 3 7V19C3 19.2652 3.10536 19.5196 3.29289 19.7071C3.48043 19.8946 3.73478 20 4 20H20C20.2652 20 20.5196 19.8946 20.7071 19.7071C20.8946 19.5196 21 19.2652 21 19V7C21 6.73478 20.8946 6.48043 20.7071 6.29289C20.5196 6.10536 20.2652 6 20 6H14M14 16H16M14 12H18M7 12H10V16H7V12ZM11 3H13C13.5523 3 14 3.44772 14 4V7C14 7.55228 13.5523 8 13 8H11C10.4477 8 10 7.55228 10 7V4C10 3.44772 10.4477 3 11 3Z"
                  stroke="black"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            iconPosition="left"
          />

          <InputIcon
            placeholder="abbosjanizakov@gmail.com"
            value={email}
            type="email"
            onChange={setEmail}
            required={true}
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 12.0001C16 14.2092 14.2091 16.0001 12 16.0001C9.79086 16.0001 8 14.2092 8 12.0001C8 9.79092 9.79086 8.00006 12 8.00006C14.2091 8.00006 16 9.79092 16 12.0001ZM16 12.0001L16 13.5001C16 14.1631 16.2634 14.799 16.7322 15.2679C17.2011 15.7367 17.837 16.0001 18.5 16.0001C19.163 16.0001 19.7989 15.7367 20.2678 15.2679C20.7366 14.799 21 14.1631 21 13.5001V12.0001C21.0025 10.0662 20.382 8.18293 19.2304 6.62928C18.0788 5.07564 16.4574 3.93424 14.6064 3.37419C12.7554 2.81414 10.7732 2.86521 8.95343 3.51985C7.13371 4.17449 5.57324 5.39787 4.50321 7.00877C3.43317 8.61966 2.91047 10.5324 3.01255 12.4636C3.11463 14.3948 3.83605 16.2417 5.06995 17.7309C6.30385 19.22 7.98459 20.272 9.86319 20.7312C11.7418 21.1903 13.7183 21.0322 15.5 20.2801"
                  stroke="black"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            iconPosition="left"
          />

          <InputIcon
            placeholder="Укажите номер телефона"
            type="phone"
            value={phone}
            onChange={setPhone}
            required={true}
            className="placeholder:opacity-100!"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 7C15.5304 7 16.0391 7.21071 16.4142 7.58579C16.7893 7.96086 17 8.46957 17 9M15 3C16.5913 3 18.1174 3.63214 19.2426 4.75736C20.3679 5.88258 21 7.4087 21 9M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4Z"
                  stroke="black"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            iconPosition="left"
          />

          <div className="region flex flex-row items-center relative">
            <svg
              className="absolute left-2.5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 13.9998C13.6569 13.9998 15 12.6566 15 10.9998C15 9.3429 13.6569 7.99976 12 7.99976C10.3431 7.99976 9 9.3429 9 10.9998C9 12.6566 10.3431 13.9998 12 13.9998Z"
                stroke="black"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.657 16.6567L13.414 20.8997C13.039 21.2743 12.5306 21.4848 12.0005 21.4848C11.4704 21.4848 10.962 21.2743 10.587 20.8997L6.343 16.6567C5.22422 15.5379 4.46234 14.1124 4.15369 12.5606C3.84504 11.0087 4.00349 9.40022 4.60901 7.93844C5.21452 6.47665 6.2399 5.22725 7.55548 4.34821C8.87107 3.46918 10.4178 3 12 3C13.5822 3 15.1289 3.46918 16.4445 4.34821C17.7601 5.22725 18.7855 6.47665 19.391 7.93844C19.9965 9.40022 20.155 11.0087 19.8463 12.5606C19.5377 14.1124 18.7758 15.5379 17.657 16.6567Z"
                stroke="black"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              type="text"
              placeholder="Район, город"
              readOnly
              id="region"
              className="bg-[#FFFFFF] cursor-pointer pl-11 font-inter font-medium text-black text-[15px] leading-[normal] placeholder:text-black placeholder:font-medium border border-[#EEEEEE] rounded-[9px] w-full h-11 outline-none focus:border-[#d4d3d3]"
            />
            <svg
              className="absolute right-3"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 10H12.5M10 7.5V12.5M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                stroke="black"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <GenderSwitch onChange={handleGenderChange} />

          <div className="agree flex flex-row items-start mt-11 ml-5">
            <input
              type="checkbox"
              name="agree"
              id="agreement"
              className="border-[#EEEEEE] bg-[#F6F6F6] mt-0.5"
              required
            />
            <p className="text-[13px] ml-2 max-w-[250px] leading-[normal] text-black underline font-inter font-normal">
              Согласны с условиями использования данных?
            </p>
          </div>

           <Button type={"submit"} text={"Далее"} className={"mt-5"} />
        </form>
      </div>
      <p className="mt-12 max-w-[457px] text-center mx-auto text-xs leading-4 text-black opacity-40 font-inter font-normal">Проект разработан для поддержки пользователей в осознанном движении к своим целям, сокращая путь от идеи до результата.</p>
    </div>
  );
};

export default FillingForm;
