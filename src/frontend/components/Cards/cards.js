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
                    <div key={index} className="flex flex-col hover:cursor-pointer w-[20rem]">

                        <div className="relative" title={course.item}>
                             <div className="z-100 absolute flex w-full bg-black-rgba h-full top-0 rounded-xl overflow-hidden opacity-0 hover:opacity-100 ease-in-out duration-300">
                                <button className="items-center m-auto rounded-full px-4 py-1 bg-white font-semibold 
                                hover:-translate-y-1 hover:scale-110 ease-in-out delay-150 duration-300"
                                >Xem khóa học</button>
                             </div>
                            <img alt={course.item} className="rounded-lg block object-cover w-2/3 mx-auto" src={course.image}></img>
                        </div>
                        
                        <p className="font-medium text-lg py-2 truncate">{course.item}</p>
                        <div className="flex flex-row items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <p className="text-red-600 text-xl mx-1 font-semibold">{course.price} VNĐ</p>
                        </div>
                    </div>
                ))
            }

            
        </div>

         {/*mobile basic course */}

         <div className="section flex md:flex-row flex-col flex-wrap mx-4 gap-4 pt-4 items-center justify-center md:hidden">
            {
                courses.map((course,index)=>(

                <div key={index} className="overflow-hidden w-60">
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
