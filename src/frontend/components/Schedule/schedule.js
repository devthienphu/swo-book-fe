import Calendar from 'react-calendar';
import {useState} from 'react'
import 'react-calendar/dist/Calendar.css';
import '../Schedule/calendar.css'
import '../Schedule/schedule.css'


function Schedule (){
    const active =()=>{
        const show_btn = document.querySelector('.show_btn');
        const scheduler = document.querySelector('.scheduler');
        scheduler.classList.toggle('translate-x-full');  

    }
    const active_btn =()=>{
        const show_btn = document.querySelector('.show_btn');
        
        show_btn.classList.toggle('translate-x-[-25rem]');   
    }
    return (
       <>
        <div className="hidden lg:flex show_btn bg-blue-200 fixed right-0 rounded-3xl mt-96 hover:scale-125 ease-in-out duration-150 cursor-pointer
        transform -translate-x-full transition duration-200 ease-in-out"
         onClick={()=>{
            active();
            active_btn();
             }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 m-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
        </div>

        <div className="scheduler fixed top-0 right-0 z-10 transform translate-x-full transition duration-200 ease-in-out">

        <div className="min-h-screen rounded-xl background"> 
            <div className="flex flex-col">

            <div className="flex flex-row items-center space-x-4 pt-8 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>

                <div className="flex flex-col leading-4">
                    <p className="font-semibold ">Hà Phan Thiên Phú</p>
                    <p className="text-gray-700 text-center">member</p>
                </div>

                <img className="rounded-3xl h-10 w-10"
                src="https://cdn.dribbble.com/users/2041249/avatars/normal/21e8aa2ca148a05d381093395670cfbd.jpg?1580848849&compress=1&resize=80x80"></img>
           
            </div>

            <div className='p-4 pt-12'>
                <div className='calendar-container'>
                    <Calendar/>
                </div>
            </div>

            <div className='bg-green-100 rounded-lg mx-6 mb-4 pb-4 overflow-auto relative '>
                <p className="font-semibold p-2 text-xl ml-4 mt-2">Your Task</p>

                <div className="overflow-auto section h-60 relative rounded-xl flex flex-col space-y-3">

                    <div className="shadow-md flex justify-between bg-white rounded-lg mx-2 p-2 items-center">
                        <div className="flex flex-col">
                            <p className="font-medium"> UX/UI Design</p>
                            <p className=""> 18 course</p>
                        </div>
                        <div className="bg-purple-100 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 stroke-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                        </div>
                        
                    </div>

                    <div className="shadow-md flex justify-between bg-white rounded-lg mx-2 p-2 items-center">
                        <div className="flex flex-col">
                            <p className="font-medium"> UX/UI Design</p>
                            <p className=""> 18 course</p>
                        </div>
                        <div className="bg-purple-100 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 stroke-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                        </div>
                        
                    </div>

                    <div className="shadow-md flex justify-between bg-white rounded-lg mx-2 p-2 items-center">
                        <div className="flex flex-col">
                            <p className="font-medium"> UX/UI Design</p>
                            <p className=""> 18 course</p>
                        </div>
                        <div className="bg-purple-100 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 stroke-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                        </div>
                        
                    </div>
                    

                </div>
  
            </div>

            </div>
        </div>

        </div>
       </>
    );
}

export default Schedule;
