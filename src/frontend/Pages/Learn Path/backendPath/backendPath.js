import React from 'react';
import Header from '../../../components/Header/header';
import VerticalHeader from '../../../components/Header/VerticalHeader';
import {back_end_development} from '../../../../backend/data';
import Footer from '../../../components/Footer/footer';

const BackendPath = () => {
    return (
        <>
            <div className="flex flex-row ">
                <Header/>
                <VerticalHeader/>

                <div className="pt-24 lg:pl-40 px-8"> 

                    <p className="font-extrabold text-3xl ">{back_end_development[0].title}</p>
                    <p className="text-gray-600 pt-4 lg::w-3/5">Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là Front-end và Back-end. Front-end là phần giao
                     diện người dùng nhìn thấy và có thể tương tác. Back-end là nơi xử lý dữ liệu và lưu trữ. 
                     Vì vậy, nhiệm vụ của lập trình viên Back-end là phân tích thiết kế dữ liệu, xử lý logic nghiệp vụ của các 
                     chức năng trong ứng dụng.</p>
                    <p className="text-gray-600 pt-4">Tại Việt Nam, lương trung bình cho lập trình viên Back-end vào khoảng 19.000.000đ / tháng.</p>
                    <p className="text-gray-600 pt-4 pb-4">Dưới đây là các khóa học F8 đã tạo ra dành cho bất cứ ai theo đuổi sự nghiệp trở thành một lập trình viên Back-end.</p>

                    <p className="text-gray-500 border-l-4 pl-4 border-orange-600">Các khóa học có thể chưa đầy đủ, F8 vẫn đang nỗ lực hoàn thiện trong thời gian sớm nhất.</p>

                    <div className="pt-10">

                    {back_end_development[0].groups.map((courses,index) => (
                        
                        <>
                        <p key={index} className="font-extrabold text-2xl pt-10">{courses.title}</p>
                        <p className="text-gray-600 pt-4 lg::w-3/5">{courses.description}</p>

                        {courses.courses.map((course,index) => (
                            <>
                            <div className="border-2 rounded-2xl lg:w-3/5 flex flex-col md:flex-row p-4 py-5 gap-6 mt-4">
                                <img className="md:w-[228px] rounded-xl" alt="" src={course.image_url}></img>
                                <div className="flex flex-col gap-2">
                                    <p className="font-bold text-xl">{course.title}</p>
                                    <p className="text-normal text-gray-700 line-clamp-2">{course.description}</p>
                                    <button class="text-white font-semibold bg-orange-600 hover:brightness-110 w-full md:w-fit px-4 py-2 md:py-1 rounded-2xl mt-1">Tiếp tục học</button>
                                </div>
                            </div>
                            </>
                        ))}


                        </>

                    ))}

                </div>


                </div>
            </div>
            <Footer/>
        </>
    );
}

export default BackendPath;
