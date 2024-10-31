import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h5 className="text-xl font-bold">Company Name</h5>
          <p>Address, City</p>
          <p>More info here</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="h-[460px] mt-10 mb-16 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13044.305524121615!2d69.22257488393805!3d41.31916884309184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bcd3b798b93%3A0x8012ce8c311c2666!2sHanyuban%20o%CA%BBquv%20markazi!5e0!3m2!1sen!2s!4v1724894763853!5m2!1sen!2s"
              height="460"
              style="border:0;"
              allowfullscreen=""
              className="w-full"
              loading="lazy"></iframe>
          </div>
          <img
            src="map-placeholder.png"
            alt="Map"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};


export default Footer;
