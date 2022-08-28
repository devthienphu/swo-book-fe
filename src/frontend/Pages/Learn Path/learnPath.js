import React from 'react';
import { useNavigate } from 'react-router-dom'

import Footer from '../../components/Footer/footer';
import img1 from '../../../img/img1.png'
import {frontendCourse} from '../../../backend/data'
import backendCourse from '../../../backend/data'
import VerticalHeader from '../../components/Header/VerticalHeader';
import Header from '../../components/Header/header';

const Learnpath = () => {
    const navigate=useNavigate();
    return (
       <>
           <div className="flex flex-row ">
                <Header/>
               <VerticalHeader/>

               <div className="md:pl-40 pt-24 pr-4 pt-20 md:gap-y-8 gap-y-4">

                    <div className="flex flex-col px-4 md:basis-1/3">
                        <h2 className="font-extrabold text-3xl my-4">Lộ trình học</h2>
                        <p className="text-gray-600 ">Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. Ví dụ: Để đi làm với vị trí “Lập trình viên Front-end” bạn nên tập trung vào lộ trình “Front-end”.</p>
                    </div>
                   
                   {/*path */}
                   <div className="flex flex-row flex-wrap gap-8 pt-20 p-4">
                        {/*frontend */}
                       <div className="justify-between mx-auto md:mx-0 md:max-w-lg w-full lg:basis-1/2 flex flex-col flex-wrap ring-1 ring-gray-300 rounded-xl p-6 pr-2">
                            <div className="flex flex-col">
                                <p className="md:font-extrabold text-2xl font-bold md:text-xl">Lộ trình học Front-end</p>

                                <div className="flex flex-row gap-4">
                                    <p className="md:basis-2/3 my-4 text-gray-600 text-xl md:text-base">
                                    Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.
                                    </p>

                                    <div className="hidden md:flex w-28 h-28 ring-[5px] ring-orange-600 overflow-hidden rounded-full p-2">
                                        <img onClick={()=>{navigate('front-end-development')}} className="object-cover rounded-full cursor-pointer" alt="Lộ trình học Front-end" src="https://files.fullstack.edu.vn/f8-prod/learning-paths/2/61a0439062b82.png" />
                                    </div>
                                

                                </div>
                            </div>
                           

                           <div className="flex flex-col">

                                {/*course */}
                            <div className="hidden md:flex flex-row gap-3 ">
                                {frontendCourse.map((course,index)=>(
                                    <div key={index} className="ring-2 ring-orange-600 rounded-full p-1.5 hover:bg-gray-200 ease-in-out duration-200" title={course.title}>
                                        <img className="w-6 h-6" alt={course.title} src={course.icon}/>
                                    </div>
                                ))}
                            </div>

                           <button onClick={()=>{navigate('front-end-development')}} className="my-6 text-white bg-orange-600 hover:bg-orange-500 font-semibold text-lg md:text-base md:p-1.5 p-3 rounded-full md:w-32 w-full">Xem chi tiết</button>
                           </div>
                            
                            
                       </div>

                        {/*backend */}             
                       <div className="justify-between mx-auto md:mx-0 md:max-w-lg w-full lg:basis-1/2 flex flex-col flex-wrap ring-1 ring-gray-300 rounded-xl p-6 pr-2">
                           
                           <div className="flex flex-col">
                                <p className="md:font-extrabold text-2xl font-bold md:text-xl">Lộ trình học Back-end</p>

                                <div className="flex flex-row gap-4">
                                    <p className="md:basis-2/3 my-4 text-gray-600 text-xl text-lg md:text-base">
                                    Trái với Front-end thì lập trình viên Back-end là người làm việc với dữ liệu, công việc thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé.
                                    </p>
                                    
                                    <div className="hidden md:flex w-28 h-28 ring-[5px] ring-orange-600 overflow-hidden rounded-full p-2">
                                        <img onClick={()=>{navigate('back-end-development')}} className="cursor-pointer object-cover rounded-full" alt="Lộ trình học Front-end" src="https://files.fullstack.edu.vn/f8-prod/learning-paths/3/61a0439cc779b.png" />
                                    </div>
                                
                                    
                                
                                </div>
                           </div>
                          
                          <div className="flex flex-col">
                            {/*course */}
                            <div className="hidden md:flex flex-row gap-3 ">
                                    {backendCourse.map((course,index)=>(
                                        <div key={index} className="ring-2 ring-orange-600 rounded-full p-1.5 hover:bg-gray-200 ease-in-out duration-200" title={course.title}>
                                            <img className="w-6 h-6" alt={course.title} src={course.icon}/>
                                        </div>
                                    ))}
                            </div>


                            <button onClick={()=>{navigate('back-end-development')}} className="my-6 text-white bg-orange-600 hover:bg-orange-500 font-semibold text-lg md:text-base md:p-1.5 p-3 rounded-full md:w-32 w-full">Xem chi tiết</button>
                          </div>

                           
                       </div>
                   </div>

                    <div className="flex flex-row gap-8 mx-auto justify-between">
                        <div className="mx-auto px-8 md:px-0 md:basis-1/2 flex flex-col">

                        <p className="font-extrabold text-2xl nd:text-lg pt-24 my-4">Tham gia cộng đồng học viên trên Facebook</p>
                        <p className="text-gray-600 text-lg md:text-base">Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé.</p>
                        <button className="my-6 ring-2 ring-gray-900 rounded-full w-full md:w-48 p-3 md:p-2 text-xl md:text-base font-semibold hover:bg-black hover:text-white">Tham gia nhóm</button>
                        </div>
                        
                        <div className="basis-1/2 flex flex-col hidden md:flex">
                            <img src={img1} className="w-3/4 md:ml-16"></img>
                        </div>

                    </div>
               </div>

           </div>
               <Footer/>
       </>
    );
}

export default Learnpath;
