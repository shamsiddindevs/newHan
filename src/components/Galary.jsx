import React from "react";
// import GalleryItem from './GalleryItem';

const galleryData = [
  {
    id: 1,
    title: "IELTS PRACTICUM",
    imageUrl: "https://picsum.photos/200/200",

    description: "Details about IELTS Practicum",
  },
  {
    id: 2,
    title: "SUNDAY EVENT",
    imageUrl: "https://picsum.photos/400/300",

    description: "Details about Sunday Event",
  },
  {
    id: 3,
    title: "IELTS RESULTS",
    imageUrl: "https://picsum.photos/200/300",
    description: "Details about IELTS Results",
  },
  {
    id: 4,
    title: "CASH BACK",
    imageUrl: "https://picsum.photos/300/300",

    description: "Details about Cash Back",
  },
];

const GalleryItem = ({item}) => {
  return (
    <div >
      <div className="w-[300px] lg:w-[400px] h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden">
        <img
          className="w-full h-full  object-cover cursor-pointer  hover:scale-110 transition-all"
          src={item.imageUrl}
          alt={item.title}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <p className="text-gray-700 text-base">{item.description}</p>
      </div>
    </div>
  );
};

const GalleryPage = () => {
  return (
    <div className="bg-white text-black px-6  my-10 ">
      <div className="flex flex-col lg:flex-row-reverse items-center ">
        <div className="aside lg:w-[30%]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-right text-gray-800 mb-6">
            GALEREYA
          </h1>
          <p className="text-right mb-6">
            Bizing talabalarining natijalari va barcha tadbirlardan foto-video
            lavhalar
          </p>
        </div>
        <div className="w-full  lg:w-[70%] justify-center flex flex-row gap-10  flex-wrap lg:gap-10">
          {galleryData.map((item) => (
            <GalleryItem
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
