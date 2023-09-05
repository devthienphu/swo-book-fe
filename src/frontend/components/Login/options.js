import React from 'react';
import {loginOptions} from '../../Pages/Login/login'
import {registerOptions} from '../../Pages/Register/register'

const Options = ({state,setState}) => {
    return (
        <>
             <div className="flex flex-col flex-wrap gap-y-3">
                <button onClick={()=>{setState(!state)}} className="flex flex-row flex-wrap justify-center items-center border-2 rounded-full p-2  md:min-w-[320px] hover:bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 w-6 h-6 order-first">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <p className="text-normal font-semibold text-gray-800 items-left mx-auto">Sử dụng email / Số điện thoại</p>

                </button>

                <button className="flex flex-row flex-wrap justify-center items-center border-2 rounded-full p-2  md:min-w-[320px] hover:bg-gray-200">
                <img className="ml-2 order-first w-6 h-6" src="https://accounts.fullstack.edu.vn/assets/images/signin/google-18px.svg" alt=""></img>
                    <p className="text-normal font-semibold text-gray-800 items-left mx-auto">Tiếp tục với Google</p>

                </button>

                <button className="flex flex-row flex-wrap justify-center items-center border-2 rounded-full p-2  md:min-w-[320px] hover:bg-gray-200">
                <img className="ml-2 order-first w-6 h-6" src="https://accounts.fullstack.edu.vn/assets/images/signin/facebook-18px.svg" alt=""></img>
                    <p className="text-normal font-semibold text-gray-800 items-left mx-auto">Tiếp tục với Facebook</p>

                </button>

                <button className="flex flex-row flex-wrap justify-center items-center border-2 rounded-full p-2  md:min-w-[320px] hover:bg-gray-200">
                <img className="ml-2 order-first w-6 h-6" src="https://accounts.fullstack.edu.vn/assets/images/signin/github-18px.svg" alt=""></img>
                    <p className="text-normal font-semibold text-gray-800 items-left mx-auto">Tiếp tục với Github</p>

                </button>
            </div>
        </>
    );
}

export default Options;
