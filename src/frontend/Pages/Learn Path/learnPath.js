import React from 'react';
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Schedule from '../../components/Schedule/schedule';
import img1 from '../../../img/img1.png'
import img2 from '../../../img/img2.png'
import img3 from '../../../img/img3.png'

const Learnpath = () => {
    const navigate=useNavigate();
    return (
       <>
           <div className="flex flex-row ">
               <Header/>

               <div className=" md:pl-52 md:pt-14 pl-10 pr-4 pt-20 gap-y-8">
                    <div className="flex flex row cursor-pointer hover:font-bold" onClick={()=>{navigate('/')}}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-auto" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    Quay lại</div>

                   <h2 className="font-bold text-3xl my-4">Lộ trình học</h2>
                   <p className="text-gray-800">Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. Ví dụ: Để đi làm với vị trí “Lập trình viên<br/> Front-end” bạn nên tập trung vào lộ trình “Front-end”.</p>

                   <div className="flex flex-row flex-wrap flex-wrap gap-8 pt-20">
                       <div className="mx-auto md:mx-0 md:basis-1/3 basis-1/2 flex flex-col flex-wrap ring-1 ring-gray-300 rounded-xl p-6">
                           <p className="font-bold text-xl">Lộ trình học Front-end</p>
                           <p className="my-4">
                           Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.
                           </p>

                           <button className="my-6 text-white bg-blue-600 hover:bg-blue-500 font-semibold p-1 rounded-xl w-36">Xem chi tiết</button>
                       </div>

                       <div className="mx-auto md:mx-0 md:basis-1/3 basis-1/2 flex flex-col flex-wrap ring-1 ring-gray-300 rounded-xl p-6">
                           <p className="font-bold text-xl">Lộ trình học Front-end</p>
                           <p className="my-4">
                           Trái với Front-end thì lập trình viên Back-end là người làm việc với dữ liệu, công việc thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé.
                           </p>

                           <button className="my-6 text-white bg-blue-600 hover:bg-blue-500 font-semibold p-1 rounded-xl w-36">Xem chi tiết</button>
                       </div>
                   </div>

                    <div className="flex flex-row gap-8 mx-auto">
                        <div className="mx-auto basis-1/2 flex flex-col">

                        <p className="font-bold text-2xl pt-24 my-4">Tham gia cộng đồng học viên trên Facebook</p>
                        <p className="text-gray-800">Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé.</p>
                        <button className="my-6 ring-2 ring-gray-900 rounded-2xl w-48 p-2 font-semibold hover:bg-black hover:text-white">Tham gia nhóm</button>
                        </div>
                        
                        <div className="basis-1/2 flex flex-col hidden md:flex">
                            <img src={img1} className="w-3/4 md:ml-16"></img>
                        </div>

                    </div>
               </div>

               <Schedule />
           </div>
               <Footer/>
       </>
    );
}

export default Learnpath;
