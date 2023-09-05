import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {useState,useContext,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import videoSelectorSlice from '../../VideoSelector/videoSelectorSlice'
import {StepContext} from '../../Pages/learning/learning'
import { changeUrl } from '../../VideoSelector/videoSelectorSlice'


const LearningMenu = ({track}) => {

    const dispatch = useDispatch();

    return (
       <>
         <Menu as="div" className="relative inline-block text-left py-1 w-full z-50">    
                <div>
                    <Menu.Button  className="inline-flex justify-between items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-lg font-medium bg-gray-100 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100">
                    {track.title}
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
                    <Menu.Items className="origin-top-right right-0 my-1 focus:outline-none">
                    <div className="py-1">
                        {
                            track.track_steps.map((track_step,index)=>(
                                <Menu.Item>
                                <button key={index} onClick={()=>{ dispatch(changeUrl(track_step.step))}} className="my-2 px-2 flex flex-row hover:bg-gray-100 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto mx-1 fill-orange-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                    </svg>
                                    <p className="text-gray-800 text-left">{track_step.step.title}</p>
                               </button>
                                </Menu.Item>

                            ))
                        }                   
                    </div>
                    </Menu.Items>
                </Transition>
        </Menu>
       </>
    );
}

export default LearningMenu;
