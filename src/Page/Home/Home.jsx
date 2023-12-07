import MakeAppointment from "../../Component/MakeAppointment/MakeAppointment";
import Carusel from "../../Component/Carusel/Carusel";
import Whylex from "../../Component/Whylex/Whylex";
import Facility from "../../Component/Facility/Facility";
import Packages from "../../Component/Packages/Packages";
import Stats from "../../Component/Stats/Stats";
import Subscribe from "../../Component/Subscribe/Subscribe";
import Moto from "../../Component/Moto/Moto";
import Testymony from "../../Component/Testymony/Testymony";
import Lawyer from "../../Component/Lawyer/Lawyer";
import Service from "../../Component/Service/Service";

import Question from "../../Component/Question/Question";
import LexSearch from "./LexSearch/LexSearch";
import Introducing from "./Introducing/Introducing";
import Loading from "../../Component/Loading/Loading";
import Case from "../../Component/Case/Case";


const Home = () => {
    <Loading />
    return (
        <div className="sm:max-w-sm">
            <LexSearch></LexSearch>
            <Introducing></Introducing>
            <Carusel ></Carusel>
            <Moto></Moto>
            {/* <FacebookMsg></FacebookMsg> */}
            <Whylex></Whylex>
            <Service></Service>
            <Stats></Stats>
            <Packages></Packages>
            <div className=" mt-10 flex flex-col justify-center sm:mt-3  sm:w-3/4 sm:p-5 h-20 shrink-0 items-center rounded-[35px]">
                <div className="text-4xl font-bold text-center mt-5">
                 Our Popular Case Studies.
                </div>
            </div>
            <Case></Case>
            <Lawyer></Lawyer>
            <MakeAppointment></MakeAppointment>
            <Testymony></Testymony>
            <Facility></Facility>
            <Question></Question>
            <Subscribe></Subscribe>

        </div>
    );
};

export default Home;