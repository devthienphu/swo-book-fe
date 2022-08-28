import { useNavigate } from 'react-router-dom'
import Cards from '../Cards/cards';
import Slide from '../Slider/slide';
import {frontendCourse,hotPost,hotVideo} from '../../../backend/data'
import backendCourse from '../../../backend/data'


 function Courses () {
    const navigate=useNavigate();
    return (
       <>
       <div className="mx-auto items-left justify-left lg:ml-28 overflow-hidden">
        <div className="flex flex-col w-full">
         <Slide/>
         <div onClick={()=>{navigate('/learning-path/front-end-development')}} className="flex flex-row ml-8 pt-24 pb-4 md:pt-8 gap-3">
            <p className="text-xl md:text-2xl font-extrabold cursor-pointer" >Lộ trình học Front-end</p>
            <button className="bg-blue-600 h-fit text-white font-semibold uppercase rounded-md text-xs p-1 px-2">Mới</button>
         </div>

         <Cards courses ={frontendCourse}/>
         
         <div onClick={()=>{navigate('/learning-path/back-end-development')}} className="flex flex-row ml-8 pt-24 pb-4 md:pt-8 gap-3">
            <p className="text-xl md:text-2xl font-extrabold cursor-pointer" >Lộ trình học Back-end</p>
            <button className="bg-blue-600 h-fit text-white font-semibold uppercase rounded-md text-xs p-1 px-2">Mới</button>
         </div>
        <Cards courses ={backendCourse}/>

        <p className="text-2xl md:text-2xl font-extrabold ml-8 py-4 md:pt-8 cursor-pointer" onClick={()=>{navigate('/course')}}>Bài viết nổi bật</p>
        <Cards courses ={hotPost}/>

        <p className="text-2xl md:text-2xl font-extrabold ml-8 py-4 md:pt-8 cursor-pointer" onClick={()=>{navigate('/course')}}>Video nổi bật</p>
        <Cards courses ={hotVideo}/>

        </div>
       </div>
    
       
       </>
    );
}

export default Courses;
