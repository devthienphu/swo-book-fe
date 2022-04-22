import React from 'react';
import { useNavigate } from 'react-router-dom'
import {basicCourse} from '../../../backend/data'
import advanceCourse from '../../../backend/data'
const Cards = () => {
    const navigate=useNavigate();
    return (
        <>
            <p className="text-2xl md:text-xl font-semibold ml-8 pt-24 md:pt-8 ">Basic Course</p>
        {/*md basic course */}
        <div className="flex md:flex-row flex-col flex-wrap gap-4 ml-8 pt-4 items-center justify-center hidden md:flex">

            {
                basicCourse.map((course,index)=>(

                <div key={index} onClick={()=>{navigate('/course')}} className="h-36 w-72 rounded-lg items-center p-10 px-16 bg-gradient-to-br from-cyan-400 to-blue-600 text-white cursor-pointer hover:from-indigo-500 hover:to-pink-500">
                    <p className="text-center text-2xl font-semibold">{course.name}</p>
                    <p className="text-center text-md">{course.info}</p>
                </div>
                ))
            }

            
        </div>

         {/*mobile basic course */}
         <div className="section flex md:flex-row flex-col flex-wrap gap-4 ml-8 pt-4 items-center justify-center md:hidden">
            {
                basicCourse.map((course,index)=>(

                <div key={index} onClick={()=>{navigate('/course')}} className="h-36 w-72 rounded-lg items-center p-10 px-16 bg-gradient-to-br from-cyan-400 to-blue-600 text-white cursor-pointer hover:from-indigo-500 hover:to-pink-500">
                    <p className="text-center text-2xl font-semibold">{course.name}</p>
                    <p className="text-center text-md">{course.info}</p>
                </div>
                ))
            }
        </div>

       

         {/*md advance course */}
        <p className="text-2xl md:text-xl font-semibold ml-8 pt-8">Advance Course</p>
            <div className="flex md:flex-row flex-col flex-wrap gap-4 ml-8 pt-4 pb-8 items-center justify-center hidden md:flex">
                {
                    advanceCourse.map((Adcourse,index)=>(

                    <div key={index} onClick={()=>{navigate('/course')}} className="flex items-center justify-center hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105">
                        <img alt="" className="rounded-lg w-72" src={Adcourse.image} ></img>
                    </div>
                    ))
                   
                }
                   
            </div>
        {/*mobile advance course */}
            <div className="section flex md:flex-row flex-col flex-wrap gap-4 ml-8 pt-4 pb-8 items-center justify-center md:hidden">
                {
                    advanceCourse.map((Adcourse,index)=>(

                    <div key={index} onClick={()=>{navigate('/course')}} className="flex items-center justify-center hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105">
                        <img alt="" className="rounded-lg w-72" src={Adcourse.image} ></img>
                    </div>
                    ))
                   
                }
                   
            </div>

        </>
    );
}

export default Cards;
