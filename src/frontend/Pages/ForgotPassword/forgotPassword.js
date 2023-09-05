import React from 'react';
import {NavLink } from 'react-router-dom'
import Forgot from '../../components/ForgotPassword/forgotPassword';

const ForgotPassword = () => {
    return (
        <div style={{ 
            backgroundImage: `url("https://accounts.fullstack.edu.vn/static/media/f8_bg_auth_1920.b517075e98f3051de678.png")` 
        }}
        className="flex flex-col justify-center items-center overflow-hidden h-screen relative md:py-20 object-cover"
        >   
            <div className="relative flex justify-center items-center flex-col flex-wrap gap-y-2 p-4">
                <div className="bg-white relative flex flex-col flex-wrap justify-center items-center rounded-lg gap-y-12 pb-3 pt-8 md:pt-12 md:px-32 px-8">

                    {/* Backbutton */}
                    
                    <NavLink to="/login" className="absolute items-left left-0 top-0 p-8" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </NavLink>
                                
                    <div className="flex flex-col gap-y-4 items-center">
                        <img className="w-10 rounded-lg h-10 cursor-pointer" src="https://accounts.fullstack.edu.vn/assets/icon/f8_icon.png" alt=""></img>
                        <p className="font-black text-3xl">Lấy lại mật khẩu</p>
                    </div>

                    <Forgot/>
                  
                        
                    {/* register?/Forgot password */}
                    <div className="flex flex-col items-center flex-wrap gap-x-1">
                        <div className="flex flex-row flex-wrap items-center justify-center gap-x-1">
                            <p className="text-gray-600 font-thin">Bạn chưa có tài khoản?</p>
                            <button className="text-orange-600 font-semibold">Đăng ký</button>
                        </div>
                        
                    </div>
                    
                </div>

                <div className="flex flex-row flex-wrap gap-x-1 divide-x-2 text-white justify-center">
                    <p className="font-thin px-1">Giới thiệu về F8</p>
                    <p className="font-thin px-1">F8 trên Youtube</p>
                    <p className="font-thin px-1">F8 trên Facebook</p>

                </div>
            </div>
        </div> 
    );
}

export default ForgotPassword;
