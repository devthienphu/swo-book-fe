import React from 'react';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import VerticalHeader from '../../components/Header/VerticalHeader';
import { userInfo } from '../../../backend/data';
const UserPage = () => {
    return (
        <>
             <div className="flex flex-row ">
                <Header/>
                <VerticalHeader/>
                <div className="mx-auto relative max-w-xl lg:max-w-5xl">
                    <img className="mt-[68px] rounded-b-2xl relative h-72 bg-cover bg-no-repeat bg-top w-full max-w-screen-lg" 
                    src="https://static.fullstack.edu.vn/static/media/cover-profile.3fb9fed576da4b28386a.png" alt="bg"></img>
                    <div className="absolute bg-white rounded-full">
                        <img className="z-10 w-40 h-40 rounded-full mt-[-100px] ml-10" alt="avatar" src={userInfo[0].avatar}></img>
                        <p className="font-bold text-3xl ml-56 mt-[-50px]">{userInfo[0].full_name}</p>
                    </div>

                    <div className="flex flex-col lg:flex-row pt-24 gap-4 px-2">
                    
                    <div className="basis-2/5 flex flex-col gap-4">
                    
                        <div className="border-2 shadow-sm rounded-xl p-4">
                            <p className="font-bold">Giới thiệu</p>
                            <div className="flex flex-row gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                </svg>
                                <p>Thành viên của F8 - Học lập trình để đi làm từ một năm trước</p>
                            </div>
                        </div>

                        <div className="border-2 shadow-sm rounded-xl p-4">
                            <p className="font-bold">Hoạt động gần đây</p>
                            <p>Chưa có hoạt động gần đây</p>
                        </div>

                     </div>

                     <div className="basis-3/5 flex flex-col p-4 border-2 shadow-sm rounded-xl gap-2">
                        <p className="font-semibold text-lg">Các khóa học đã tham gia</p>

                        {userInfo[0].courses.map((course,index)=>(

                        <div key={index} className="flex flex-col md:flex-row gap-x-6 gap-y-2 border-b-2 py-2">
                            <img className="rounded-xl md:w-60" src={course.image_url} alt="img"/>
                            <div className="flex flex-col">
                                <p className="font-semibold text-lg">{course.title}</p>
                                <p className="font-light line-clamp-4">{course.description}</p>
                            </div>
                        </div>
                        ))}

                     </div>


                    </div>

                </div>

               
             </div>
             <Footer/>
        </>
    );
}

export default UserPage;
