// import Swiper core and requir,ed modules
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom'
import {useState,useRef} from 'react'
import Slider from "react-slick";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';



import study from '../../../img/study.png'

const slidesData =[
    {
        title:"F8 trên Youtube",
        description:"F8 được nhắc đến ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình và F8 sẽ ở đó",
        image:"https://files.fullstack.edu.vn/f8-prod/banners/Banner_03_youtube.png",
        color:"bg-gradient-to-r from-red-500 to-orange-400",
        btn:"Truy cập kênh"
    },
    {
        title:"Thành quả của học viên",
        description:"Để đạt được kết quả tốt trong công việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không ngoại lệ",
        image:"https://files.fullstack.edu.vn/f8-prod/banners/Banner_01_2.png",
        color:"bg-gradient-to-r from-violet-600 to-blue-500",
        btn:"Xem thành quả"
    },
    {
        title:"F8 trên facebook",
        description:"F8 được nhắc đến ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình và F8 sẽ ở đó",
        image:"https://files.fullstack.edu.vn/f8-prod/banners/Banner_04_2.png",
        color:"bg-gradient-to-r from-blue-600 to-sky-400",
        btn:"Truy cập nhóm"
    },
    {
        title:"Học ReactJS miễn phí",
        description:"Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.",
        image:"https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png",
        color:"bg-gradient-to-r from-blue-600 to-purple-700",
        btn:"Đăng kí ngay"
    },
]

const Slide = () => {
    return (
        <>
            <div className="flex w-full md:pr-8 px-4 pt-4">
            <Swiper
            // install Swiper modules
            modules={[ Pagination,Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500,disableOnInteraction: false }}    
            >

            {
                slidesData.map((slide)=>(
                <SwiperSlide >
                    <div className={`flex flex-row flex-wrap ${slide.color} rounded-xl mt-16 h-64 `}>
                        <div className="flex flex-row text-white ml-12 ">
                        
                            <div className="flex flex-col my-auto md:basis-2/3">
                                <p className="font-bold text-3xl py-4">{slide.title}</p>                   
                                <p className="text-md line-clamp-2">{slide.description}</p>
                                <div className="my-4 border-2 border-white rounded-2xl font-bold py-1 px-3 mr-auto hover:cursor-pointer hover:bg-white hover:text-black ">{slide.btn}</div>
                            </div>

                            <div className="flex md:basis-1/3 ml-20">
                                <img alt="" className="absolute h-4/5" src={slide.image}></img>
                            </div>
                        
                        </div>
                    </div>
                </SwiperSlide>
                ))
            }
            

            
            
            </Swiper>
            </div>

           
        </>
    );
}

export default Slide;
