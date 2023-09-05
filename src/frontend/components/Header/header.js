import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {useState} from 'react'
import { useNavigate,NavLink } from 'react-router-dom'

import Notifycation from '../Notifycation/notifycation';
import AccountMenu from '../AccountMenu/accountMenu';
import MainTitle from '../MainTitleHeader/mainTitle';
import BackTitle from '../BackHome/backTitle';

const Header = () => {

    return (
       <>

        <div className="z-100 flex flex-row justify-between fixed top-0 w-full right-0 left-0 p-3 border-b-2 bg-white z-20">
            
            <NavLink to='/' className="my-auto hidden lg:flex">
                    {({isActive})=> isActive ? <MainTitle/> : <BackTitle/>}

			</NavLink>
           
            {/*mobile menu button */}
            
            <Menu as="div" className="relative inline-block text-left px-2 my-auto lg:hidden">
                    <div>
                        <Menu.Button className="inline-flex justify-center w-full items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7   fill-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                            </svg>
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="min-h-screen origin-top-right absolute p-2 mt-2 rounded-xl pr-8 shadow-lg drop-shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1 divide-y divide-slate-100 w-96 pr-4">
                            <Menu.Item>
                            {({ active }) => (
                               <div className="flex flex row">
                                    <img className="h-20 w-20 rounded-xl p-4" alt="icon_account" src="https://graph.facebook.com/1397374847328490/picture?width=400&height=400"></img>
                                    <div className="flex flex-col my-auto">
                                        <p className="font-medium text-lg">Phú Thiên</p>
                                        <p className="text-gray-900 font-light text-lg">@phu-thien-4</p>
                                    </div>
                               </div>
                            )}
                            </Menu.Item>
                            <Menu.Item >
                            {({ active }) => (
                                <div className="flex flex-row p-4 gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto fill-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                                    </svg>
                                    <div className="text-gray-600 text-lg hover:text-gray-900 cursor-pointer">Khóa học của tôi</div>

                                </div>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <div className="flex flex-col">
                                <div className="flex flex-row gap-4 p-2 pl-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>
                                    <div className="text-gray-500 text-lg hover:text-gray-900 cursor-pointer">Trang chủ</div>
                                </div>
                                
                                <div className="flex flex-row gap-4 p-2 pl-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd" />
                                    </svg>
                                    <div className="text-gray-500 text-lg hover:text-gray-900 cursor-pointer">Lộ trình</div>
                                </div>

                                <div className="flex flex-row gap-4 p-2 pl-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                                    </svg>
                                    <div className="text-gray-500 text-lg hover:text-gray-900 cursor-pointer">Khóa học</div>
                                </div>

                                <div className="flex flex-row gap-4 p-2 pl-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd" />
                                    </svg>
                                    <div className="text-gray-500 text-lg hover:text-gray-900 cursor-pointer">Blog</div>
                                </div>


                                </div>  
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <div className="flex flex-row p-4 gap-4 my-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                    </svg>
                                    <div className="text-gray-500 text-lg hover:text-gray-900 cursor-pointer">Bài viết đã lưu</div>
                                </div>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <div className="flex flex-col">
                                
                                <div className="flex flex-row gap-4 p-2 pl-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                                    </svg>
                                    <div className="text-gray-500 text-lg hover:text-gray-900 cursor-pointer">Giới thiệu</div>
                                </div>

                                <div className="flex flex-row gap-4 p-2 pl-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                    </svg>
                                    <div className="text-gray-500 text-lg hover:text-gray-900 cursor-pointer">Cơ hội việc làm</div>
                                </div>

                                </div>  
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <div className="flex flex-col">
                                
                                <div className="flex flex-row gap-4 p-2 pl-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                    <div className="text-gray-500 text-lg hover:text-gray-900 cursor-pointer">Cài đặt</div>
                                </div>

                                <div className="flex flex-row gap-4 p-2 pl-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    <div className="text-gray-500 text-lg hover:text-gray-900 cursor-pointer">Đăng xuất</div>
                                </div>


                                </div>  
                            )}
                            </Menu.Item>
                           
                        </div>
                        </Menu.Items>
                    </Transition>
            </Menu>


            {/*search bar */}
            <form className="flex items-center hidden md:flex">   
                <label for="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="simple-search" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-gray-900 focus:border-blue-500 block w-full pl-10 p-2.5 mr-48" placeholder="Tìm kiếm sách" required=""/>
                </div>
            </form>

        
            {/*User */}
            <div className="flex items-center">
              

                {/* notifycation */}

               <Notifycation/>

                {/* account settings */}

               <AccountMenu/>
                
            </div>

        </div>

       </>
    );
}

export default Header;
