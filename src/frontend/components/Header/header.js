
import { useNavigate } from 'react-router-dom'

function Header() {
	const navigate=useNavigate();
	const active =()=>{
        const btn = document.querySelector('.moblie-menu-btn');
        const sidebar = document.querySelector('.sidebar');
        
		sidebar.classList.toggle('-translate-x-full');
    }

    return (
		
       <>
        {/*sideBar */}

		<div className="min-h-screen">       
		<div className="sidebar bg-white max-w-xs p-4 fixed left-0 top-0 rounded-lg transform -translate-x-full transition duration-200 ease-in-out md:translate-x-0 z-10">
			<ul className="flex flex-col w-full">
                <li className="my-px pb-10">
					<a href="#"
					   className="flex items-center h-12 mb-2">
						<span onClick={()=>{navigate('/')}} className="ml-3 text-blue-600 font-bold text-2xl mt-8">E-Learning</span>
					</a>
				</li>
				<li className="my-px" onClick={()=>{navigate('/')}}>
					<div
					   className="cursor-pointer flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 bg-gray-100">
						<span className="flex items-center justify-center text-lg text-gray-400">
							<svg fill="none"
								 strokeLinecap="round"
								 strokeLinejoin="round"
								 strokeWidth="2"
								 viewBox="0 0 24 24"
								 stroke="currentColor"
								 className="h-6 w-6">
								<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
							</svg>
						</span>
						<span className="ml-3">Dashboard</span>
					</div>
				</li>
				<li className="my-px">
					<span className="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">Learning</span>
				</li>
				<li className="my-px" onClick={()=>{navigate('/learning-path')}}>
					<div 
					   className="cursor-pointer flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
						<span className="flex items-center justify-center text-lg text-gray-400">
							<svg fill="none"
								 strokeLinecap="round"
								 strokeLinejoin="round"
								 strokeWidth="2"
								 viewBox="0 0 24 24"
								 stroke="currentColor"
								 className="h-6 w-6">
								<path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
							</svg>
						</span>
						<span className="ml-3">Lộ trình</span>
					</div>
				</li>
				<li className="my-px">
					<div onClick={()=>{navigate('/courses')}}
					   className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
						<span className="flex items-center justify-center text-lg text-gray-400">
							<svg fill="none"
								 strokeLinecap="round"
								 strokeLinejoin="round"
								 strokeWidth="2"
								 viewBox="0 0 24 24"
								 stroke="currentColor"
								 className="h-6 w-6">
								<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
							</svg>
						</span>
						<span className="ml-3">Khóa học</span>
					</div>
				</li>
				<li className="my-px">
					<a href="#"
					   className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
						<span className="flex items-center justify-center text-lg text-green-400">
							<svg fill="none"
								 strokeLinecap="round"
								 strokeLinejoin="round"
								 strokeWidth="2"
								 viewBox="0 0 24 24"
								 stroke="currentColor"
								 className="h-6 w-6">
								<path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
						</span>
						<span className="ml-3">Add notes</span>
					</a>
				</li>
				<li className="my-px">
					<span className="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">Account</span>
				</li>
				<li className="my-px">
					<a href="#"
					   className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
						<span className="flex items-center justify-center text-lg text-gray-400">
							<svg fill="none"
								 strokeLinecap="round"
								 strokeLinejoin="round"
								 strokeWidth="2"
								 viewBox="0 0 24 24"
								 stroke="currentColor"
								 className="h-6 w-6">
								<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
							</svg>
						</span>
						<span className="ml-3">Profile</span>
					</a>
				</li>
				<li className="my-px">
					<a href="#"
					   className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
						<span className="flex items-center justify-center text-lg text-gray-400">
							<svg fill="none"
								 strokeLinecap="round"
								 strokeLinejoin="round"
								 strokeWidth="2"
								 viewBox="0 0 24 24"
								 stroke="currentColor"
								 className="h-6 w-6">
								<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
								<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
							</svg>
						</span>
						<span className="ml-3">Settings</span>
					</a>
				</li>
				<li className="my-px">
					<a href="#"
					   className="flex flex-row items-center h-12 px-4 rounded-lg text-gray-600 hover:bg-gray-100">
						<span className="flex items-center justify-center text-lg text-red-400">
							<svg fill="none"
								 strokeLinecap="round"
								 strokeLinejoin="round"
								 strokeWidth="2"
								 viewBox="0 0 24 24"
								 stroke="currentColor"
								 className="h-6 w-6">
								<path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
							</svg>
						</span>
						<span className="ml-3">Logout</span>
					</a>
				</li>
			</ul>
		</div>
		</div>
		
		
        {/* moblie menu */}
        
        <div className="bg-white flex justify-between md:hidden fixed top-0 right-0 left-0">
         <h1 className="text-blue-600 font-bold text-2xl p-4 ml-4">E-Learning</h1>

         <button className="moblie-menu-btn p-4 focus:outline-none focus:bg-gray-50" onClick={()=>{active()}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
         </button>
        </div>

		
       </>
    );
}

export default Header;
