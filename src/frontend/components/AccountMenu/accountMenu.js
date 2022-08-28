import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'

const AccountMenu = () => {
    const navigate=useNavigate();
    return (
        <>
              <Menu as="div" className="relative inline-block text-left px-4 hidden lg:block">
                    <div>
                        <Menu.Button className="inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100">
                            <img className="h-8 w-8 overflow-hidden rounded-full" alt="icon_account" src="https://graph.facebook.com/1397374847328490/picture?width=400&height=400"/>
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
                        <Menu.Items className="origin-top-right absolute p-2 right-0 mt-2 w-56 rounded-xl shadow-lg drop-shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1 divide-y divide-slate-100">
                            <Menu.Item>
                            {({ active }) => (
                               <div className="flex flex row">
                                    <img className="h-16 w-16 rounded-xl p-4" alt="icon_account" src="https://graph.facebook.com/1397374847328490/picture?width=400&height=400"></img>
                                    <div className="flex flex-col my-auto">
                                        <p className="font-medium">Phú Thiên</p>
                                        <p className="text-gray-900 font-light">@phu-thien-4</p>
                                    </div>
                               </div>
                            )}
                            </Menu.Item>
                            <Menu.Item >
                            {({ active }) => (
                               <div onClick={()=>{navigate('/user')}} className="text-gray-500 p-4 hover:text-gray-900 cursor-pointer">Trang cá nhân</div>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <div className="flex flex-col">

                               <div className="text-gray-500 p-2 pl-4 hover:text-gray-900 cursor-pointer">Viết blog</div>
                               <div className="text-gray-500 p-2 pl-4 hover:text-gray-900 cursor-pointer">Bài viết của tôi</div>

                                </div>  
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                               <div className="text-gray-500 p-4 hover:text-gray-900 cursor-pointer">Bài viết đã lưu</div>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <div className="flex flex-col">

                               <div onClick={()=>{navigate('/settings')}} className="text-gray-500 p-2 pl-4 hover:text-gray-900 cursor-pointer">Cài đặt</div>
                               <div className="text-gray-500 p-2 pl-4 hover:text-gray-900 cursor-pointer">Đăng xuất</div>

                                </div>  
                            )}
                            </Menu.Item>
                           
                        </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
        </>
    );
}

export default AccountMenu;
