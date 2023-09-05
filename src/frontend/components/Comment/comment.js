import React from 'react';

const Comment = () => {
    return (
       <>
        <div className="bg-white cursor-pointer flex flex-row gap-2 rounded-full bottom-20 left-5 origin-top-right fixed p-1 px-3 border border-gray-300 shadow-lg drop-shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-orange-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
            <p className="font-bold text-orange-500">Hỏi đáp</p>
        </div>
       </>
    );
}

export default Comment;
