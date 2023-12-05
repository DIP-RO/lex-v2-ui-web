import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import { useTranslation } from 'react-i18next'

const Carusel = () => {

    const { t } = useTranslation()

    return (
        <div className="carousel w-full sm:hidden ">
            <div id="slide1" className="carousel-item relative w-full">
                <div className=" w-full  bg-[#1d344a] flex ">
                    <div className="w-1/2 justify-center items-center">
                       <div className="justify-center mt-16">
                       <h1 className="text-center text-4xl font-['Open_Sans'] font-bold text-white mt-10 ">{t("Home.Banner.first.title")}</h1>
                        <h1 className="text-center text-3xl font-['Open_Sans'] font-semibold text-white mt-10"> {t("Home.Banner.first.subtitle")}</h1>
                        <button className="btn btn-neutral justify-center lg:ml-40 bg-[#071522] w-[332px]  h-10  text-center rounded-[25px] mt-10" onClick={()=>document.getElementById('my_modal_3').showModal()}>{t("Home.Banner.first.btn")}</button>
                       </div>
                    </div>
                    <div className="w-1/2 justify-center mt-10 ml-10">
                    <img src=" https://i.ibb.co/D1Tkqn4/image.png" alt="" className="w-96" />
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="text-black">❮</a>
                    <a href="#slide2" className="text-black">❯</a>
                </div>
                <Modal></Modal>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <div className=" w-full h-96 bg-[#1d344a] flex ">
                    <div className="w-1/2 justify-center items-center">
                       <div className="justify-center mt-16">
                       <h1 className="text-center text-4xl font-['Open_Sans'] font-bold text-white mt-10 ">{t("Home.Banner.second.title")}</h1>
                        <h1 className="text-center text-3xl font-['Open_Sans'] font-semibold text-white mt-10"> {t("Home.Banner.second.subtitle")}</h1>
                        <Link to="/appointment">
                        <button className="btn btn-neutral justify-center lg:ml-40 bg-[#071522] w-[332px]  h-10  text-center rounded-[25px] mt-10">{t("Home.Banner.second.btn")}</button>
                        </Link>
                       </div>
                    </div>
                    <div className="w-1/2 justify-center mt-20 ml-10">
                    <img src="https://i.ibb.co/Nrng37j/lawyers.png" alt="" className="w-96" />
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="text-black">❮</a>
                    <a href="#slide1" className="text-black">❯</a>
                </div>
            </div>
            

        </div>
    );
};

export default Carusel;