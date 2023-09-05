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
        title:"SoftwareOne Book Store",
        description:"Ưu đãi đặc biệt dành riêng cho hội viên và nhiều hơn thế nữa. Mua Online Giá Rẻ Bất Ngờ.",
        image:"https://bizweb.dktcdn.net/100/313/410/products/15-tbn-tach-nen-min.png?v=1688539511690",
        color:"bg-gradient-to-r from-red-500 to-orange-400",
        btn:"Mua ngay"
    }
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

                            <div className="flex md:basis-1/3 ml-96">
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
