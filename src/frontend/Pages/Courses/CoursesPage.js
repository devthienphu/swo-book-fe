import { useNavigate } from 'react-router-dom'
import Cards from '../../components/Cards/cards';
import Courses from '../../components/Course/courses';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Schedule from '../../components/Schedule/schedule';
import img1 from '../../../img/img1.png'
const Coursespage = () => {
    const navigate=useNavigate();
    
    return (
        <div>
            <div className="flex flex-row ">
                <Header/>
                <Schedule/>
                <div className="mx-auto md:ml-40 mt-8">

                    <div className="ml-8 pb-8 md:mt-4 mt-16">

                    <div className="flex flex row cursor-pointer hover:font-bold" onClick={()=>{navigate('/')}}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-auto" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    Quay lại</div>

                    <h2 className="text-3xl font-bold my-4">Khóa học</h2>
                    <p>Các khóa học được thiết kế phù hợp cho cả người mới, miễn phí, nội dung dễ hiểu.</p>
                    </div>

                    <div className="flex flex-col max-w-screen-xl">
                        <Cards/>
                    </div>
                    <div className="flex flex-row gap-8 mx-auto md:pl-8 md:pt-14 pl-10 pr-4 pt-20">
                        <div className="mx-auto basis-1/2 flex flex-col">

                        <p className="font-bold text-2xl pt-24 my-4">Bạn đang tìm kiếm lộ trình học cho người mới?</p>
                        <p className="text-gray-800">Các khóa học được thiết kế phù hợp cho người mới, lộ trình học rõ ràng, nội dung dễ hiểu.</p>
                        <button onClick={()=>{navigate('/learning-path')}} className="my-6 ring-2 ring-gray-900 rounded-2xl w-48 p-2 font-semibold hover:bg-black hover:text-white">Xem lộ trình</button>
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
