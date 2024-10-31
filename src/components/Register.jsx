import React from "react";

const RegistrationPage = () => {
  return (

    <div className="bg-red-600 min-h-screen flex  flex-col items-center justify-center text-white px-6 py-12">
      <div className=" md:p-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl space-x-4 font-medium mb-4 md:w-[75%] md:mx-auto md:text-center">
          <span className="text-black ">BIRINCHI</span> DARS UCHUN RO'YXATDAN  O'TING
        </h1>
        <p className="mt-10 md:w-4/5 mx-auto md:text-center">
          Biz o'qituvchi bilan qulay tanishish va mos o'quv dasturini tanlash
          uchun ingliz tili kurslari uchun birinchi darsni taklif qilamiz.
          So'rov qoldiring va biz imkon qadar tezroq siz bilan bog'lanamiz!
        </p>
        <form
          action=""
          method="post"
          className="mt-20 justify-center flex-col flex md:flex-row items-end gap-10 ">
         <input
            type="text"
            placeholder="Ismingiz"
            className="  bg-transparent  outline-none border-b-[1px] border-b-white  p-2 w-full max-w-md placeholder:text-white"
          />
          <input
            type="text"
            placeholder="+998 99-999-9999"
            className=" bg-transparent  outline-none border-b-[1px] border-b-white  p-2 w-full max-w-md placeholder:text-white"
          />
          <button className=" w-full bg-red-600 px-10 py-5 rounded-full shadow-md shadow-[#2c2c2c] hover:bg-black transition-colors ">
            Ro'yxatdan o'tish
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
