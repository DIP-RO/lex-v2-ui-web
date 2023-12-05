import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Grid, Pagination } from "swiper/modules";


const Slider = () => {

  const testymony = [
    {
      id: 1,
      name: 'stella larson',
      message: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
      image: "https://i.ibb.co/b7z8Z3t/image.png",
    },
    {
      id: 2,
      name: 'Olga jhonso',
      message: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
      image: "https://i.ibb.co/19myfyW/image.png",
    },
    {
      id: 3,
      name: 'Paul Smith',
      message: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
      image: "https://i.ibb.co/BZtx9Gf/image.png",
    },
    {
      id: 4,
      name: 'Nat Reynolds',
      message: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
      image: "https://i.ibb.co/zh2FBcS/image.png",
    }
  ]

  return (
    <div className="min-h-fit flex  items-center flex-col my-10 ">
      <h1 className="text-white text-3xl font-bold border-solid border-4 p-3 rounded-2xl mb-5 sm:m-2">Recent Blog</h1>
      <Swiper

        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          }
        }}
        className="mySwiper mt-10 m-2"
      >

        {testymony.map((testy) => (
          <SwiperSlide key={testy.id} className="w-[200px] h-[350px]  btn bg-[#1d344a] hover:bg-[#1d344a]">
            <div className=" w-full  p-3">

              <div className="flex items-center justify-center">
              <img src={testy.image} alt="Shoes" className="rounded-xl w-20  px-10 pt-10" />
              </div>

              <div className="card-body items-center text-center">
                <h2 className="card-title text-white">{testy.name}</h2>

              </div>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
