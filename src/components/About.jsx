import React from 'react';

const About = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center my-14'>
      <div className="w-full  md:w-1/2 text-center p-8">
        <iframe 
          width="100%" 
          height="315" 
          src="https://www.youtube.com/embed/QOpQf3fi2N4?si=H8xyzqRcvlO2S9w-" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          
        ></iframe>
      </div>
      <div className="w-full md:w-1/2 px-8 py-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#555] mb-6">XITOY TILI MARKAZIMIZ HAQIDA</h2>
        <p className="mb-6 text-md md:text-xl font-extralight">
          Ta'lim Oksford universiteti (Oxford University Press) tomonidan
          ishlab chiqilgan maxsus dastur bo'yicha olib boriladi, bu eng
          yaxshilardan biri hisoblanadi! Bizning o'quv markazimiz O'zbekistonda
          birinchi bo'lib ushbu dasturdan litsenziyalangan formatda foydalanadi.
        </p>
        <a href="#" className="text-red-500 hover:underline">Ko'proq →</a>
      </div>
    </div>
  );
}

export default About;
