import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import CustomCarousel from "./components/Team";
import InfoCarousel from "./components/Info";
import Cost from "./components/Cost";
import RegistrationPage from "./components/Register";
import GalleryPage from "./components/Galary";
import Footer from "./components/Footer";
import MapComponent from "./components/Map";
// import Team from "./components/Team";


const App = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <About/>
     <CustomCarousel/>
     <InfoCarousel/>
     <Cost/>
     <RegistrationPage/>
     <GalleryPage/>
     {/* <Footer/> */}
     {/* <MapComponent/> */}
    </div>
  );
};

export default App;
