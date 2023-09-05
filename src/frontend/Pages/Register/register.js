import {useState} from 'react';
import {NavLink } from 'react-router-dom'
import Options from '../../components/Login/options';
import RegisterAccount from '../../components/Login/register';


const Register = () => {
    const [register,setRegister]=useState(false);
    return (
        <>      
            <div style={{ 
                backgroundImage: `url("https://accounts.fullstack.edu.vn/static/media/f8_bg_auth_1920.b517075e98f3051de678.png")` 
            }}
            className="flex flex-col justify-center items-center overflow-hidden h-screen relative md:py-20 object-cover"
            >   
                <div className="relative flex justify-center items-center flex-col flex-wrap gap-y-2 p-4">
                    <div className="bg-white relative flex flex-col flex-wrap justify-center items-center rounded-lg gap-y-12 pb-3 pt-8 md:pt-12 md:px-32 px-8">

                        {/* Backbutton */}
                        {
                            (register)?<button className="absolute items-left left-0 top-0 p-8" onClick={()=>{setRegister(!register)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            :null      
                        }
                        
                        
                        <div className="flex flex-col gap-y-4 items-center">
                            <NavLink to="/">
                                <img className="w-10 rounded-lg h-10 cursor-pointer" src="https://accounts.fullstack.edu.vn/assets/icon/f8_icon.png" alt=""></img>
                            </NavLink>
                            <p className="font-black text-3xl">Đăng kí tài khoản F8</p>
                        </div>

                        {/* login options */}
                        {
                            (register)?<RegisterAccount/>:<Options state={register} setState={setRegister}/>
                        }
                        {/* forgot password */}
                      
                            
                        {/* register?/Forgot password */}
                        <div className="flex flex-col items-center flex-wrap gap-x-1">
                            <div className="flex flex-row flex-wrap items-center justify-center gap-x-1">
                                <p className="text-gray-600 font-thin">Bạn dã có tài khoản?</p>
                                <NavLink to="/login" className="text-orange-600 font-semibold">Đăng nhập</NavLink>
                            </div>

                            {
                                (register)?<NavLink to="/forgot-password" className="text-orange-600 font-semibold">Quên mật khẩu</NavLink>:null
                            }
                            
                        </div>
                        
                        {/* term */}
                        <div className="flex flex-col justify-center items-center ">
                            <p className="text-xs text-gray-400">Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với</p>
                            <button className="text-xs text-gray-400 underline underline-offset-1">Điều khoản sử dụng của chúng tôi</button>
                        </div>
                    </div>

                    <div className="flex flex-row flex-wrap gap-x-1 divide-x-2 text-white justify-center">
                        <p className="font-thin px-1">Giới thiệu về F8</p>
                        <p className="font-thin px-1">F8 trên Youtube</p>
                        <p className="font-thin px-1">F8 trên Facebook</p>

                    </div>
                </div>
            </div> 
            
        </>
    );
}

export default Register;
