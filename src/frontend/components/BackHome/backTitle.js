import React from 'react';

const BackTitle = () => {
    return (
        <>
            <div className="flex items-center hidden lg:flex">
                <img className="ml-4 h-9 w-9 rounded-lg" alt="icon" src="https://static.fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"></img>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-gray-400 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <p className="font-bold text-xs text-gray-400 uppercase hover:text-gray-600">Quay lại</p>
            </div>
        </>
    );
}

export default BackTitle;
