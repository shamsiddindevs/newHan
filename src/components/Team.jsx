import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import carousel1 from '../assets/carusel1.png'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {max: 4000, min: 3000},
    items: 5,
  },
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 3,
  },
  tablet: {
    breakpoint: {max: 1024, min: 464},
    items: 2,
  },
  mobile: {
    breakpoint: {max: 464, min: 0},
    items: 1,
  },
};

const profiles = [
  {name: "Mr.Dilshod", image: carousel1},
  {name: "Mr.Otabek", image:carousel1},
  {name: "Mr.Olimjon", image: carousel1},
  {name: "Mr.Timur", image: carousel1},
];

const ProfileCard = ({image, name}) => {
  return (
    <div className="flex flex-col items-center  text-black ">
      <img
        src={image}
        alt={name}
        className="w-64 h-80  mb-10 object-cover"
      />
      <h2 className="text-xl font-bold border-s-4 border-red-600 ps-2 ">{name}</h2>
    </div>
  );
};

const Team = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <Carousel responsive={responsive}>
        {profiles.map((v) => (
          <ProfileCard
            image={v.image}
            name={v.name}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Team;
