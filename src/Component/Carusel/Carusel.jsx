import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Carusel = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
    
  return (
    <div>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
         <SwiperSlide style={{ backgroundImage: `url('https://i.ibb.co/8zmFRc9/360-F-628355502-xbtygoyym2-BKd-QHOZyip-XX03ej-Nekfk-V.jpg')` }}>
          
            <div className="justify-items-center my-20 mb-10 px-10 md:px-20 flex flex-row-reverse  ">
              <div
                className="w-1/2"
                data-aos-duration="10000"
                data-aos="zoom-in-down"
              >
                <img
                  className="w-full h-full"
                  src="https://i.ibb.co/tJLKkp0/IMG-3669-1024x764-removebg-preview.png"
                  alt=""
                />
              </div>
              <div
                data-aos-duration="10000"
                data-aos="zoom-in-left"
                className="text-white w-1/2 md:text-start text-center mt-5 md:mt-20"
              >
                <h1 className="text-6xl  font-bold">Hi There!</h1>
                <h1 className="text-4xl   font-bold">
                  Welcome to Sports Bike zone
                </h1>
                <p className="my-2 text-white font-semibold">
                  Its a biggest sports bike Online selling platform.We have
                  selling bike since 2012.If need any help please feel free to
                  contact.
                </p>

                <Link to="/blogs">
                  <button
                    type="button"
                    className="px-4 mx-auto my-3 py-2 font-semibold rounded  border border-purple-500 hover:border-gray-00 bg-purple-500 hover:bg-white text-white transition  hover:text-purple-500"
                  >
                    Read Our Blogs
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url('https://i.ibb.co/8zmFRc9/360-F-628355502-xbtygoyym2-BKd-QHOZyip-XX03ej-Nekfk-V.jpg')` }}>
            <div className="justify-items-center my-20 mb-10 px-10 md:px-20 flex flex-row-reverse  ">
              <div
                className="w-1/2"
                data-aos-duration="10000"
                data-aos="zoom-in-down"
              >
                <img
                  className="w-full"
                  src="https://i.ibb.co/tJLKkp0/IMG-3669-1024x764-removebg-preview.png"
                  alt=""
                />
              </div>
              <div
                data-aos-duration="10000"
                data-aos="zoom-in-left"
                className="text-white-800 w-1/2 md:text-start text-center mt-5 md:mt-20"
              >
                <h1 className="text-6xl text-white  font-bold">Hi There!</h1>
                <h1 className="text-4xl text-white   font-bold">
                  Welcome to Sports Bike zone
                </h1>
                <p className="my-2 text-gray-600 font-semibold">
                  Its a biggest sports bike Online selling platform.We have
                  selling bike since 2012.If need any help please feel free to
                  contact.
                </p>

                <Link to="/blogs">
                  <button
                    type="button"
                    className="px-4 mx-auto my-3 py-2 font-semibold rounded  border border-purple-500 hover:border-gray-00 bg-purple-500 hover:bg-white text-white transition  hover:text-purple-500"
                  >
                    Read Our Blogs
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide  style={{backgroundImage: `url('https://i.ibb.co/8zmFRc9/360-F-628355502-xbtygoyym2-BKd-QHOZyip-XX03ej-Nekfk-V.jpg')` }}>
            <div className="justify-items-center my-20 mb-10 px-10 md:px-20 flex flex-row-reverse  ">
              <div
                className="w-1/2"
                data-aos-duration="10000"
                data-aos="zoom-in-down"
              >
                <img
                  className="w-full h-96"
                  src="https://i.ibb.co/tJLKkp0/IMG-3669-1024x764-removebg-preview.png"
                  alt=""
                />
              </div>
              <div
                data-aos-duration="10000"
                data-aos="zoom-in-left"
                className="text-white w-1/2 md:text-start text-center mt-5 md:mt-20"
              >
                <h1 className="text-6xl text-white font-bold">Hi There!</h1>
                <h1 className="text-4xl text-white  font-bold">
                  Welcome to Sports Bike zone
                </h1>
                <p className="my-2 text-white font-semibold">
                  Its a biggest sports bike Online selling platform.We have
                  selling bike since 2012.If need any help please feel free to
                  contact.
                </p>

                <Link to="/blogs">
                  <button
                    type="button"
                    className="px-4 mx-auto my-3 py-2 font-semibold rounded  border border-purple-500 hover:border-gray-00 bg-purple-500 hover:bg-white text-white transition  hover:text-purple-500"
                  >
                    Read Our Blogs
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </>
    </div>
  );
};

export default Carusel;
