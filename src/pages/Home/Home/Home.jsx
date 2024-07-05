import { useEffect } from "react";
import Banner from "../Banner/Banner";
import ExtraSection1 from "../ExtraSection1/ExtraSection1";
import ExtraSection2 from "../ExtraSection2/ExtraSection2";
import Toys from "../Toys/Toys";
import Aos from "aos";
import 'aos/dist/aos.css';
import Category from "../Category/Category";
import InfoBox from "../InfoBox/InfoBox";
import Offer from "../Offer/Offer";


const Home = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
        
    }, []);

    useEffect(() => {
        document.title = "ToyWarriors | Home";
    }, []);

    return (
        <div data-aos = "fade-right">
            <Banner></Banner>
            <ExtraSection2></ExtraSection2>
            <InfoBox></InfoBox>
            {/* <Category></Category> */}
            <Toys></Toys>
            <Offer></Offer>
            <ExtraSection1></ExtraSection1>
            
        </div>
    );
};

export default Home;