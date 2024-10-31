import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import info1 from '../assets/1.png'
import info2 from '../assets/2.png'
import info6 from '../assets/6.png'
import info10 from '../assets/10.png'

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
  {name: "Academic support", image: info1},
  {name: "Qulay vaqt", image:info2},
  {name: "Sifatli talim", image: info6},
  {name: "Hamyonbop narx", image: info10},
];

const ProfileCard = ({image, name}) => {
  return (
    <div className="flex flex-col items-center text-black ">
      <img
        src={image}
        alt={name}
        className=" mb-10 "
      />
      <h2 className="text-md    text-white bg-gray-800  w-4/5 p-3">{name}</h2>
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
