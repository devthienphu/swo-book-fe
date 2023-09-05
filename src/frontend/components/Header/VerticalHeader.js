
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

			
			</ul>
		</div>
		</div>	
       </>
    );
}

export default VerticalHeader;
