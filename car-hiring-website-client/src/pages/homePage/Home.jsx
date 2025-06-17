import Banner from "./Banner";
// import Sub_banner from "./Sub_banner";
// import Review from "./Review";
import Cars from "./Cars";
import Sub_banner from "./Sub_banner";
import About_car from "./About_car";
import Services from "./Services";
import FaQ from "./FaQ";
import Bike from "./Bike";
import Slider from "./Slider";

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <Cars />
            <Slider/>
            <Bike/>
            <Sub_banner />
            <About_car />
            <Services />
            <FaQ />
        </div>
    );
};

export default Home;