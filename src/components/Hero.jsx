import React from 'react';
import backgroundImage from '../assets/chinese-house-night.jpg'

const Hero = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="flex flex-col justify-center items-center h-full bg-opacity-50 bg-black ">
          {/* Overlay and Content */}
          <div className="text-center text-white p-10  bg-white/10 backdrop-blur-lg  rounded-lg">
            <h1 className="text-3xl font-bold my-2">Birinchi darsga yoziling!</h1>
            <p className="my-5">Sizni o'qituvchimiz bilan tanishtiramiz!</p>
            <form className="flex flex-col items-center ">
              <input type="text" placeholder="Ismingiz" className="text-black w-full mb-4 p-3 rounded"/>
              <input type="text" placeholder="+998 99-999-9999" className="text-black w-full mb-4 p-3 rounded"/>
              <button className='bg-red-500 hover:bg-red-700 text-white w-full font-bold py-3 px-4 rounded '>Ro'yxatdan o'tish</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
