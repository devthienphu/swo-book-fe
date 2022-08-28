import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

const Notifycation = () => {
    return (
       <>
         <Menu as="div" className="relative inline-block text-left px-2">
                    <div>
                        <Menu.Button className="inline-flex justify-center w-full items-center py-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
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
                        <Menu.Items className="origin-top-right absolute p-2 right-0 mt-2 w-96 rounded-xl shadow-lg drop-shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1 divide-y divide-slate-100">
                            <div className="flex flex-row justify-between p-2 px-4">
                                <p className="font-medium text-gray-900 text-lg">Thông báo</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                            </div>
                            <Menu.Item>
                            {({ active }) => (
                               <div className="flex flex row items-center ">
                                    <img className="h-20 w-20 rounded-xl p-4" alt="icon_account" src="https://graph.facebook.com/1397374847328490/picture?width=400&height=400"></img>
                                    <div className="flex flex-col my-auto gap-y-2 py-4 ">
                                        <p className="">Chào mừng Phú Thiên đã gia nhập F8. Hãy luôn đam mê, kiên trì và theo đuổi mục tiêu tới cùng bạn nhé.</p>
                                        <p className="text-gray-900 text-orange-600">một năm trước</p>
                                    </div>
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

export default Notifycation;
