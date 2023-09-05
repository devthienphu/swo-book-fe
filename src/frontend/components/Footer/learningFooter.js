import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import LearningMenu from '../Menu/learningMenu';
import {lession_for_newbie} from '../../../backend/data'
import {changeUrl} from '../../VideoSelector/videoSelectorSlice'


const LearningFooter = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(changeUrl({
            title:lession_for_newbie[0].data.course.title,
            video_url:lession_for_newbie[0].data.course.video
        }))
    },[])
    
    return (
       <>
        <div className="flex flex-row gap-4 py-1 bg-gray-100 fixed bottom-0 right-0 left-0 border-t-4 border-solid border-gray-100/75">
            <div className="flex flex-row items-center mx-auto gap-8">

                <div className="flex flex-row items-center hover:brightness-150 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-gray-700" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <p className="uppercase text-sm font-semibold text-gray-700">Bài trước</p>
                </div>

                <div className="flex flex-row items-center hover:brightness-150 cursor-pointer border border-2 px-2 py-1 border-orange-500 rounded-xl">
                    <p className="uppercase text-sm font-semibold text-orange-500">bài tiếp theo</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-orange-500" viewBox="0 0 20 20 " fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>

            <div className="flex flex-row items-center gap-2 px-2" >
                <p className="font-semibold hidden lg:flex">Menu</p>

                <Menu as="div" className="relative inline-block text-left px-2 ">
                    <div>
                        <Menu.Button  className="inline-flex justify-center w-full items-center py-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 p-2 bg-white rounded-full" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                            </svg>
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        // show ={isOpen}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >   
                        
                        <Menu.Items className="src-bar overflow-y-scroll overflow-hidden max-h-[37rem] h-[40rem] origin-top-right absolute p-2 right-0 bottom-14 mt-2 w-96 rounded-xl shadow-lg drop-shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1 divide-y divide-slate-100 ">
                            <div className="flex flex-row justify-between p-2 px-4">
                                <p className="font-medium text-gray-900 text-lg">Nội dung khóa học</p>
                            </div>
                            {
                                lession_for_newbie[0].data.course.tracks.map((track)=>(
                                    <Menu.Item>
                                    <div className="flex flex row items-center w-full ">
                                            <LearningMenu track={track}/>
                                    </div>
                                    </Menu.Item>

                                ))
                            }                          
                        </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div> 
            
        </div>
       </>
    );
}

export default LearningFooter;
