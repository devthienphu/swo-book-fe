import React from 'react';
import { useNavigate } from 'react-router-dom'
const Cards = ({courses}) => {
    const navigate=useNavigate();
    return (
        <>
        {/*md basic course */}
        <div className="flex md:flex-row flex-col flex-wrap gap-6 ml-8 pr-4 pt-4 items-center hidden md:flex w-full">
            {
                courses.map((course,index)=>(
                    <div key={index} className="flex flex-col hover:cursor-pointer w-[20rem]" onClick={()=>{navigate('/course')}}>

                        <div className="relative" title={course.title}>
                             <div className="z-100 absolute flex w-full bg-black-rgba h-full top-0 rounded-xl overflow-hidden opacity-0 hover:opacity-100 ease-in-out duration-300">
                                <button className="items-center m-auto rounded-full px-4 py-1 bg-white font-semibold 
                                hover:-translate-y-1 hover:scale-110 ease-in-out delay-150 duration-300"
                                >Xem khóa học</button>
                             </div>
                            <img alt={course.title} className="rounded-lg block object-cover w-full h-44" src={course.image}></img>
                        </div>
                        
                        <p className="font-medium text-lg py-2 truncate">{course.title}</p>
                        <div className="flex flex-row items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                            <p className="text-gray-600 text-sm mx-1">{course.view}</p>
                        </div>
                    </div>
                ))
            }

            
        </div>

         {/*mobile basic course */}

         <div className="section flex md:flex-row flex-col flex-wrap mx-4 gap-4 pt-4 items-center justify-center md:hidden">
            {
                courses.map((course,index)=>(

                <div key={index} onClick={()=>{navigate('/course')}} className="overflow-hidden w-60">
                    <img alt={course.title} className="rounded-xl object-cover h-32 w-60" src={course.image}></img>       
                    <p className="text-md font-semibold line-clamp-1 break-all">{course.title}</p>
                </div>
                ))
            }
            <div className="p-4 rounded-full shadow-xl ring-1 ring-gray-300 mt-14">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>

        </>
    );
}

export default Cards;
