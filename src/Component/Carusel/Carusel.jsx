import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import { useTranslation } from 'react-i18next'

const Carusel = () => {

    const { t } = useTranslation()

    return (
        <div className="carousel w-full sm:hidden  ">
            <div id="slide1" className="carousel-item relative hero w-full">
                <div className="hero min-h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/RjJRc8x/1.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className=" w-full   flex gap-20">
                        <div className="w-1/2 flex justify-center items-center">
                            <div className="flex flex-col items-center justify-center mt-16">
                                <h1 className="text-center text-4xl font-['Open_Sans'] font-bold text-white mt-10 ">{t("Home.Banner.first.title")}</h1>
                                <h1 className="text-center text-3xl font-['Open_Sans'] font-semibold text-white mt-10 "> {t("Home.Banner.first.subtitle")}</h1>
                                <Link to="/Lex-Ai">
                                    <button className="btn btn-neutral justify-center  bg-[#b69d7485]   hover:bg-[#b69d74] border border-white w-[332px]  h-10  text-center rounded-[25px] mt-10" >{t("Home.Banner.first.btn")}</button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-1/2 justify-center mt-32 ">
                            <img src=" https://i.ibb.co/0qrd7ZB/carousel-image-1.png" alt="" className="w-96" />
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="text-white text-3xl bg-[#b69d7485]   hover:bg-[#b69d74] w-10 h-10 rounded-full text-center">❮</a>
                    <a href="#slide2" className="text-white text-3xl bg-[#b69d7485]   hover:bg-[#b69d74] w-10 h-10 rounded-full text-center">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative hero w-full">
                <div className="hero min-h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/RjJRc8x/1.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className=" w-full h-96  flex ">
                    
                    <div className="w-1/2 flex justify-center items-center">
                        <div className="flex flex-col items-center justify-center mt-16">
                            <h1 className="text-center text-4xl font-['Open_Sans'] font-bold text-white mt-10 ">{t("Home.Banner.second.title")}</h1>
                            <h1 className="text-center text-3xl font-['Open_Sans'] font-semibold text-white mt-10 "> {t("Home.Banner.second.subtitle")}</h1>
                            <Link to="/appointment">
                                <button className="btn btn-neutral justify-center border border-white bg-[#b69d7485]   hover:bg-[#b69d74] w-[332px]  h-10  text-center rounded-[25px] mt-10">{t("Home.Banner.second.btn")}</button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-1/2 justify-center mt-20 ml-10">
                        <img src=" https://i.ibb.co/0qrd7ZB/carousel-image-1.png" alt="" className="w-96" />
                    </div>
                </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="text-white text-3xl bg-[#b69d7485]   hover:bg-[#b69d74] w-10 h-10 rounded-full text-center">❮</a>
                    <a href="#slide1" className="text-white text-3xl bg-[#b69d7485]   hover:bg-[#b69d74] w-10 h-10 rounded-full text-center">❯</a>
                </div>
            </div>
            


        </div>
    );
};

export default Carusel;