import React from 'react';
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Schedule from '../../components/Schedule/schedule';
import pic1 from '../../../img/7.png'
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



const Course = () => {
    const navigate=useNavigate();
    return (
       <>
       <div className="flex flex-row">
           <Header/>
           <div className="flex flex-row flex-wrap-reverse md:pl-52 md:pt-14 pl-10 pr-4 pt-20 gap-y-8">
                
                <div className="flex flex-col ">
                
                    <div className="flex flex row cursor-pointer hover:font-bold" onClick={()=>{navigate('/')}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-auto" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Quay lại</div>

                    <h2 className="text-3xl font-bold my-4">Kiến thức nhập môn IT</h2>
                    <p>Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.</p>
                    <p className="text-xl font-bold my-4">Bạn sẽ học được gì?</p>
                    <ul>
                    {
                        learned.map((learn,index)=>(
                            <li key={index} className="flex flex-row my-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-blue-500 mx-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            {learn.text}</li>
                        ))
                    }
                    </ul>

                    <p className="font-bold text-xl mt-8 mb-4">Nội dung khóa học</p>
                    
                    
                    <div className="bg-gray-100 p-3 rounded-xl flex flex-row font-semibold text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2 my-auto fill-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                    </svg>
                    1. Khái niệm kỹ thuật cần biết                    
                    </div>
                        <div className="text-gray-800 ml-12 my-2 leading-6 flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-auto mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                        1. Mô hình Client - Server là gì?</div>
                        <div className="text-gray-800 ml-12 my-2 leading-6 flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-auto mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                        2. Domain là gì? Tên miền là gì?</div>
                    
                        <div className="bg-gray-100 p-3 rounded-xl flex flex-row font-semibold text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2 my-auto fill-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                    </svg>
                    2. Môi trường, con người IT                  
                    </div>
                        <div className="text-gray-800 ml-12 my-2 leading-6 flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-auto mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                        3. Học IT cần tố chất gì? Góc nhìn khác từ chuyên gia định hướng giáo dụ</div>
                        <div className="text-gray-800 ml-12 my-2 leading-6 flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-auto mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                        4. Sinh viên IT đi thực tập tại doanh nghiệp cần biết những gì?</div>

                </div>

                <div className="flex flex-col md:ml-12 mx-auto">
                    <img src={pic1} alt="" className="rounded-xl w-96 "></img>
                    <p className="text-3xl mx-auto mt-4 text-blue-600">Miễn phí</p>
                    <button className="rounded-3xl bg-blue-500 text-white text-lg w-40 mx-auto font-semibold p-2 my-4 hover:bg-blue-700">ĐĂNG KÍ HỌC</button>
                    
                    <p className="text-gray-900 mx-16 flex flex-row my-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                    Trình độ cơ bản</p>

                    <p className="text-gray-900 mx-16 flex flex-row my-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                    </svg>
                    Tổng số 11 bài học</p>

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
            <Schedule/>
       </div>

           <Footer/>
       </>
    );
}

export default Course;
