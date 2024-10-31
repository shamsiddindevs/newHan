import React, {useState} from "react";
import cost1 from "../assets/cost1.webp";
const Cost = () => {
  let cost = [
    {
      id: 1,
      name: "Beginner",
      info: [
        "Guruhda 13 (±1) o'quvchi",
        "Bizning Students’ App va 1 kitob (Students’ book)",
        "Brendlangan Grammar daftar",
        "Academic Support xizmati",
        "Har bir dars uchun video Arsenal",
        "Speaking Club va Master-class",
      ],
      cost: "666 000 UZS",
      img: "https://picsum.photos/700/500",
    },
    {
      id: 1,
      name: "HSK",
      info: [
        "Guruhda 13 (±1) o'quvchi",
        "Bizning Students’ App va 1 kitob (Students’ book)",
        "Brendlangan Grammar daftar",
        "Academic Support xizmati",
        "Har bir dars uchun video Arsenal",
        "Har hafta Mock IELTS",
      ],
      cost: "866 000 UZS",
      img: "https://picsum.photos/600/400",
    },
    {
      id: 1,
      name: "Individual",
      info: [
        "Xodimlar soni cheklanmagan",
        "2 ta kitob (Students' book va Homebook)",
        "Brendlangan Grammar daftar",
        "Academic Support xizmati",
        "O'qituvchi sizga barcha jihozlar bilan keladi",
      ],
      cost: "996 000 UZS",
      img: "https://picsum.photos/500/300",
    },
  ];
  const [click, setClick] = useState(cost[0]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#555] ">Narxlar</h2>
      <div className="border mt-10 p-1 md:p-[60px]  ">
        <div className="flex flex-col gap-2 md:flex-row justify-between ">
          {cost.map((v, i) => (
            <button
              onClick={() => setClick(cost[i])}
              className="w-full md:w-[32%] p-3 hover:bg-slate-950 hover:text-white shadow-lg transition-all bg-slate-500">
              {v.name}
            </button>
          ))}
        </div>
        {
          <div className=" my-10 ">
            <div className="flex flex-col md:flex-row justify-between items-start md:h-[400px] gap-5">
              <div className="md:w-[35%] md:p-e-[40px] h-full">
                <ul className="list-disc pl-5 space-y-2">
                  {click?.info.map((v) => (
                    <li>{v}</li>
                  ))}
                </ul>
                <p className="text-lg font-bold">{click.cost}</p>
                <button className="mt-4 bg-red-600 text-black font-normal py-2 px-4 rounded hover:bg-red-700">
                  Register
                </button>
              </div>
              <div className="hidden md:block w-[65%] h-full">
                <img
                  src={click.img}
                  alt="Interior"
                  className="rounded-lg w-full h-full object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Cost;
