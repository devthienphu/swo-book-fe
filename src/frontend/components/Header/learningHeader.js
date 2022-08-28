import React from 'react';
import { useNavigate } from 'react-router-dom'

const LearningHeader = () => {
    const navigate=useNavigate();
    return (
        <>
            <div className="flex fixed top-0 right-0 left-0 w-full bg-[#29303b] justify-between items-center z-10">
                <div className="flex flex-row gap-4 items-center py-3 ">
                    <svg onClick={()=>{navigate('/')}} xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 fill-white mx-4 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <img onClick={()=>{navigate('/')}} className="w-7 h-7 rounded-lg cursor-pointer md:flex hidden" src="https://static.fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png" alt="icon"></img>
                    <p className="text-white font-bold text-sm truncate">HTML, CSS từ Zero đến Hero</p>
                </div>

                <div className="flex flex-row gap-5 px-8 items-center">
                    <p className="hidden lg:flex text-white text-sm font-semibold">64/166 bài học</p>
                    <div className="flex flex-row gap-1 cursor-pointer items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-slate-200 hover:fill-slate-50" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                        </svg>
                        <p className="font-semibold text-sm text-slate-200 hover:text-slate-50 hidden lg:flex">Ghi chú</p>
                    </div>
                    <div className="text-sm lg:flex hidden flex-row gap-1 cursor-pointer items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-slate-200 hover:fill-slate-50" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                        </svg>
                        <p className="font-semibold text-slate-200 hover:text-slate-50">Hướng dẫn</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LearningHeader;
