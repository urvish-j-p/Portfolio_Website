import React from "react";
import "./Certificate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import WebDevelopment from "../../img/WebDevelopment.jpg";
import C from "../../img/C.png";
import Cpp from "../../img/Cpp.png";

const Testimonials = () => {
  const clients = [
    {
      img: WebDevelopment,
    },
    {
      img: C,
    },
    {
      img: Cpp,
    },
  ];

  return (
    <div className="t-wrapper">
      <div className="t-heading">
        {/* <span>My academic </span> */}
        <span>Certificates</span>
        {/* <span>from me</span> */}
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      {/* Slider  */}

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
