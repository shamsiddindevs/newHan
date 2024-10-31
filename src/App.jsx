import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import CustomCarousel from "./components/Team";
import InfoCarousel from "./components/Info";
import Cost from "./components/Cost";
import RegistrationPage from "./components/Register";
import GalleryPage from "./components/Galary";
// import Footer from "./components/Footer";
// import Team from "./components/Team";
import qiz from './assets/10.png'
import bola from './assets/1.png'
import { useState } from "react";
import { FaSun } from "react-icons/fa";


const App = () => {
  const [sun,setSun] = useState(["1",'2','3'])
  return (
    <div>
     {/* <Navbar/>
     <Hero/>
     <About/>
     <CustomCarousel/>
     <InfoCarousel/>
     <Cost/>
     <RegistrationPage/>
     <GalleryPage/> */}
     {/* <Footer/> */}
     {/* {ism?<img src={bola} alt="" />:<img src={qiz}/>}
     <button onClick={()=>setIsm(!ism)} className="bg-slate-400 p-5">{ism?"Bola":"Qiz"}</button> */}
    
     {/* {sun && <img onClick={()=>setSun(!sun)} className="w-20 active:rotate-180 transition-all" src="/src/assets/moon.png"/>} 
     {!sun && <img onClick={()=>setSun(!sun)} className="w-20 active:rotate-180 transition-all" src="/src/assets/sun.png"/>}  */}
      {["https://picsum.photos/200/400",'https://picsum.photos/200/300','https://picsum.photos/400/300'].map((v,i)=><div  className="h-20 bg-slate-300 w-20 mb-5">
        <img src={v} alt="" />
      </div>) }
      
    </div>
  );
};

export default App;
