import React from 'react';
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'
import Footer from '../../components/Footer/footer';
import Schedule from '../../components/Schedule/schedule';
import pic1 from '../../../img/7.png'
import VerticalHeader from '../../components/Header/VerticalHeader';
import MenuCourse from '../../components/Menu/menuCourse';
import Header from '../../components/Header/header';
import {lession_for_newbie} from '../../../backend/data'
const learned=[
    {
        text:"Các kiến thức cơ bản, nền móng của ngành IT"
    },
    {
        text:"Các mô hình, kiến trúc cơ bản khi triển khai ứng dụng"
    },
    {
        text:"Các khái niệm, thuật ngữ cốt lõi khi triển khai ứng dụng"
    },
    {
        text:"Hiểu hơn về cách internet và máy vi tính hoạt động"
    },
]

let count=0;
{
    lession_for_newbie[0].data.course.tracks.map((tracks)=>(
        tracks.track_steps.map((track)=>(
            count=count+1
        ))
    ))
}

const Course = () => {
    const navigate=useNavigate();
    const [isOpen, setIsOpen] = useState(false)
    return (
       <>
       <div className="flex flex-row">
            <Header/>
            <VerticalHeader/>
           <div className="flex flex-row flex-wrap-reverse justify-between lg:pl-44 md:pt-24 pl-10 pr-4 pt-20 gap-y-8">
                
                <div className="flex flex-col ">
                
                    <h2 className="text-3xl font-bold my-4">{lession_for_newbie[0].data.course.title}</h2>
                    <p>{lession_for_newbie[0].data.course.description}</p>
                    <p className="text-xl font-bold my-4">Bạn sẽ học được gì?</p>
                    <ul>
                    {
                        lession_for_newbie[0].data.course.will_learns.map((learns,index)=>(
                            <li key={index} className="flex flex-row my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-orange-600 mx-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            {learns.content}</li>
                        ))
                    }
                    </ul>
                    

                    <p className="font-bold text-xl mt-8 mb-4">Nội dung khóa học</p>
                    
                    {
                        lession_for_newbie[0].data.course.tracks.map((track,index)=>(
                        <MenuCourse track={track}/>                           
                        ))
                    }
                   
                </div>

                <div className="flex flex-col mx-auto lg:ml-32 ring-1 md:ring-0 ring-gray-200 items-center">
                    <img src={pic1} alt="" className="rounded-xl max-w-sm hidden md:flex"></img>
                    <p className="text-3xl mx-auto mt-4 text-orange-600">Miễn phí</p>
                    <button onClick={()=>{navigate('/learning')}} className="rounded-3xl bg-orange-600 text-white text-lg w-40 mx-auto font-semibold p-2 my-4 hover:bg-orange-500">ĐĂNG KÍ HỌC</button>
                    
                    <div className="flex flex-col">
                        <p className="text-gray-900 mx-16 flex flex-row my-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                       {lession_for_newbie[0].data.course.level.title}</p>

                        <p className="text-gray-900 mx-16 flex flex-row my-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                        </svg>
                       {`Tổng số ${count} bài học`}</p>

                        <p className="text-gray-900 mx-16 flex flex-row my-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clip-rule="evenodd" />
                        </svg>
                        Thời lượng 03 giờ 25 phút</p>

                        <p className="text-gray-900 mx-16 flex flex-row my-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                        Học mọi lúc, mọi nơi</p>
                    </div>
                   
                </div>
           </div>
       </div>

           <Footer/>
       </>
    );
}

export default Course;
