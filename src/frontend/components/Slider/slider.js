// import Swiper core and required modules
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import study from '../../../img/study.png'

const Slider = () => {
    return (
        <>
             <div className="max-w-fit hidden md:flex">
            <Swiper
            // install Swiper modules
            modules={[ Pagination,Autoplay]}
            spaceBetween={60}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500,disableOnInteraction: false }}
           
            >

            <SwiperSlide>
                <div className="flex flex-row flex-wrap bg-gradient-to-r from-purple-600 to-blue-400 rounded-xl mt-16 mx-8 h-52 ">
                    <div className="flex flex-col items-center justify-center text-white ml-12">
                    <p className="uppercase font-bold text-2xl">Learn everything free</p>
                    <p className="font-semibold text-xl">Basic to Advance</p>
                    </div>
                    <img alt="" className="flex my-2 ml-48 h-48" src={study}></img>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="flex flex-row flex-wrap bg-gradient-to-r from-purple-600 to-blue-400 rounded-xl mt-16 mx-8 h-52">
                    <div className="flex flex-col items-center justify-center text-white ml-12">
                    <p className="uppercase font-bold text-2xl">Learn everything free</p>
                    <p className="font-semibold text-xl">Basic to Advance</p>
                    </div>
                    <img alt="" className="flex my-2 ml-48 h-48" src={study}></img>
                </div>
            </SwiperSlide>
            
            </Swiper>
            </div>
        </>
    );
}

export default Slider;
