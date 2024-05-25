import React from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import StackOverflow from "../../img/StackOverflow.png";
import eMart from "../../img/eMart.png";
import quicknote from "../../img/quicknote.png";
import WeatherApp from "../../img/WeatherApp.png";
import TextUtils from "../../img/TextUtils.png";
import Keeper from "../../img/Keeper.png";
import "swiper/css";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio">
      {/* Heading  */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* Slider  */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a
            href="https://stack-overflow-by-urvish.netlify.app/"
            target="_blank"
          >
            <img src={StackOverflow} alt="" style={{ width: "350px" }} />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://quicknote-by-urvish.vercel.app/"
            target="_blank"
          >
            <img src={quicknote} alt="" style={{ width: "350px", height:"213px"}} />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://emart-by-urvish.netlify.app/"
            target="_blank"
          >
            <img src={eMart} alt="" style={{ width: "350px", height:"213px" }} />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
