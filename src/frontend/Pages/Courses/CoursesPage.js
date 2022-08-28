import { useNavigate } from 'react-router-dom'
import Cards from '../../components/Cards/cards';
import Footer from '../../components/Footer/footer';
import img1 from '../../../img/img1.png'
import VerticalHeader from '../../components/Header/VerticalHeader';
import {frontendCourse} from '../../../backend/data'
import backendCourse from '../../../backend/data'
import Header from '../../components/Header/header';

const Coursespage = () => {
    const navigate=useNavigate();
    return (
        <div>
            <div className="flex flex-row ">
                <Header/>
                <VerticalHeader/>
                <div className="mx-auto md:pt-16 md:ml-32 mt-8">

                    <div className="ml-4 md:ml-8 md:mt-4 mt-16">

                    <h2 className="text-3xl font-extrabold my-4">Khóa học</h2>
                    <p className="text-gray-600">Các khóa học được thiết kế phù hợp cho cả người mới, miễn phí, nội dung dễ hiểu.</p>
                    </div>

                    <div className="flex flex-col max-w-screen-xl">
                        <p className="text-2xl md:text-2xl font-extrabold ml-4 md:ml-8 pt-12 md:pt-24 pb-4 md:pt-8 cursor-pointer" onClick={()=>{navigate('/course')}}>Lộ trình học Front-end</p>
                        <Cards courses ={frontendCourse}/>

                        <p className="text-2xl md:text-2xl font-extrabold ml-4 md:ml-8 py-4 md:pt-8 cursor-pointer" onClick={()=>{navigate('/course')}}>Lộ trình học Back-end</p>
                        <Cards courses ={backendCourse}/>


                    </div>

                    <div className="flex flex-row gap-8 mx-auto md:pl-8 md:pt-14">
                       <div className="mx-auto px-8 md:px-0 md:basis-1/2 flex flex-col">

                        <p className="font-extrabold md:font-bold text-3xl md:text-2xl pt-24 my-4">Bạn đang tìm kiếm lộ trình học cho người mới</p>
                        <p className="text-gray-600 text-lg md:text-base">Các khóa học được thiết kế phù hợp cho người mới, lộ trình học rõ ràng, nội dung dễ hiểu.</p>
                        <button onClick={()=>{navigate('/learning-path')}} className="my-6 ring-2 ring-gray-900 rounded-full w-full md:w-48 p-3 md:p-2 text-xl md:text-base font-semibold hover:bg-black hover:text-white">Xem lộ trình</button>
                        </div>
                        
                        <div className="basis-1/2 flex flex-col hidden md:flex">
                            <img src={img1} className="w-3/4 md:ml-16"></img>
                        </div>
                </div>
                </div>      
            </div>
            <Footer/>
        </div>
    );
}

export default Coursespage;
