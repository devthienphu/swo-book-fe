
import { useNavigate } from 'react-router-dom'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { NavLink } from "react-router-dom";


function VerticalHeader() {
	const navigate=useNavigate();

    return (
		
       <>
        {/*sideBar */}

		<div className="min-h-screen">       
		<div className="pt-20 bg-white max-w-xs p-4 fixed left-0 top-0 transform -translate-x-full transition duration-200 ease-in-out lg:translate-x-0 z-10">
			<ul className="flex flex-col w-full h-full">
                <li className="py-4 pt-2 ">
					<Menu as="div" className="relative inline-block text-left px-4	">
						<div>
							<Menu.Button className="inline-flex justify-center w-full items-center bg-blue-600 p-3 rounded-full ">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white hover:scale-125 ease-in-out duration-150" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
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
							<Menu.Items className="origin-top-right absolute p-3 mt-2 w-52 rounded-xl shadow-lg drop-shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ">
							<div className="py-1 divide-y divide-slate-100">
								<Menu.Item>
								{({ active }) => (
								<div className="flex flex-row items-center gap-2">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
										<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
									</svg>
									<p className="text-gray-600">Viết blog</p>
								</div>
								)}
								</Menu.Item>
							
							</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</li>

				<li className="py-1">
					<NavLink to='/' className={({ isActive }) =>
              				isActive ? "flex flex-col items-center p-4 rounded-2xl bg-gray-200": "flex flex-col items-center p-4 px-4 rounded-2xl hover:bg-gray-100"
            }		>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-gray-600" viewBox="0 0 20 20" fill="currentColor">
							<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
						</svg>
						<p className="text-sm font-semibold text-gray-700">Home</p>

					</NavLink>
				</li>

				<li className="py-1">
					<NavLink to='/learning-path' className={({ isActive }) =>
              				isActive ? "flex flex-col items-center p-4 rounded-2xl bg-gray-200": "flex flex-col items-center p-4 px-4 rounded-2xl hover:bg-gray-100"
            }		>
						<svg aria-hidden="true"  focusable="false" data-prefix="fas" data-icon="road" className="h-5 w-5 fill-gray-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M256 96C256 113.7 270.3 128 288 128C305.7 128 320 113.7 320 96V32H394.8C421.9 32 446 49.08 455.1 74.63L572.9 407.2C574.9 413 576 419.2 576 425.4C576 455.5 551.5 480 521.4 480H320V416C320 398.3 305.7 384 288 384C270.3 384 256 398.3 256 416V480H54.61C24.45 480 0 455.5 0 425.4C0 419.2 1.06 413 3.133 407.2L120.9 74.63C129.1 49.08 154.1 32 181.2 32H255.1L256 96zM320 224C320 206.3 305.7 192 288 192C270.3 192 256 206.3 256 224V288C256 305.7 270.3 320 288 320C305.7 320 320 305.7 320 288V224z"></path></svg>
						<p className="text-sm font-semibold">Lộ trình</p>

					</NavLink>			
				</li>

				<li className="py-1">

					<NavLink to='/courses' className={({ isActive }) =>
              				isActive ? "flex flex-col items-center p-4 rounded-2xl bg-gray-200": "flex flex-col items-center p-4 px-4 rounded-2xl hover:bg-gray-100"
            }		>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-gray-600" viewBox="0 0 20 20" fill="currentColor">
							<path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
						</svg>
						<p className="text-sm font-semibold text-gray-700">Học</p>

					</NavLink>		
				</li>		

				<li className="py-1" onClick={()=>{navigate('/')}}>
					<div className="flex flex-col items-center p-4 px-4 rounded-2xl hover:bg-gray-100">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-gray-600" viewBox="0 0 20 20" fill="currentColor">
  						<path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd" />
					</svg>
						<p className="text-sm font-semibold text-gray-700">Blog</p>
					</div>
				</li>		
			
			</ul>
		</div>
		</div>	
       </>
    );
}

export default VerticalHeader;
