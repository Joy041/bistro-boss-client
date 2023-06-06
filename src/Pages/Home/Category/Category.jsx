import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <div className="mx-2 mt-16 md:mx-0">
            <SectionTitle
              heading={'ORDER ONLINE'}
              subHeading={'From 11:00am to 10:00pm'}
            >
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper max-w-screen-xl mx-auto mt-10"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className=" text-4xl font-thin text-white -mt-10 text-center uppercase">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className=" text-4xl font-thin text-white -mt-10 text-center uppercase ">pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className=" text-4xl font-thin text-white -mt-10 text-center uppercase ">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className=" text-4xl font-thin text-white -mt-10 text-center uppercase ">desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className=" text-4xl font-thin text-white -mt-10 text-center uppercase ">Salads</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;