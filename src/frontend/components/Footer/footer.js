import React from 'react';

const Footer = () => {
    return (
      <>

        <footer className="bottom-0 left-0 right-0 px-4 divide-y text-white bg-black mt-24">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                {/* logo */}
                {/* <div className="lg:w-1/4">
                <span className="self-center text-3xl font-bold text-white">SofwareOne VietNam</span>
                    <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <img className="h-48 w-48" src="https://www.softwareone.com/-/media/images/logos/softwareone-logo-rev.svg?iar=0&hash=F962AD86994A2CEF201EAF9C74632C5A" alt="logo"></img>
                        
                    </a>
                </div> */}
                {/* link */}
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 sm:grid-cols-4 px-4">

                    <div className="space-y-3">
                        <div className="flex flex-col gap-y-4 px-4">
                            <p className="font-bold text-lg">Liên hệ</p>
                            <div>
                                <p className="font-light text-sm">Công ty TNHH SoftwareOne ViệtNam</p>
                                <p className="font-light text-sm"> Tầng 5, tòa nhà TTC 254 Hoàng Văn Thụ, Quận Tân Bình, TP.Hồ Chí Minh</p>
                                <div className='flex flex-row flex-wrap gap-x-2 items-center pt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>

                                    <p className="text-sm">(+84) 835 406 090</p>
                                </div>
                            </div>
                            <div className='flex flex-row flex-wrap gap-x-2 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <button className='hover:text-[#3e00ff]' onClick={() => window.location = 'mailto:info.vn@softwareone.com'}>info.vn@softwareone.com</button>
                                {/* <p>info.vn@softwareone.com</p> */}
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-3">
                        <h3 className="tracking-wide font-semibold text-lg">Doanh nghiệp</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="https://www.softwareone.com/vi-vn/" className='font-medidum hover:text-[#3e00ff]'>Website chính thức</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="https://www.softwareone.com/vi-vn/privacy-statement" className='font-medidum hover:text-[#3e00ff]'>Điều khoản dịch vụ</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="space-y-3">
                        <div className="dark:text-coolGray-50 font-semibold text-lg">Mạng xã hội</div>
                        <div className="flex justify-start space-x-3">
                            <a rel="noopener noreferrer" href="https://www.facebook.com/softwareonevietnam" title="Facebook" className="flex items-center p-1 shadow-lg rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                                </svg>
                            </a>
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/company/softwareone-vietnam/" title="Linkedin" className="flex items-center p-1 shadow-lg rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 ">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30"  className="w-6 h-6 fill-current">
                                    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                                </svg>
                            </a>
                            
                        </div>
                    </div>

                    <div className="space-y-3">
                        {/* <div className=" font-semibold text-lg">Social media</div> */}
                        <div className="flex flex-col gap-y-2">
                            <img className="w-32" src="https://www.softwareone.com/-/media/images/logos/softwareone-logo-rev.svg?iar=0&hash=F962AD86994A2CEF201EAF9C74632C5A" alt="logo"></img>
                           <p>SoftwareOne đang từng bước xác định lại cách các doanh nghiệp xây dựng, mua và quản lý mọi thứ trên đám mây. Bằng cách giúp khách hàng di chuyển, hiện đại hóa khối lượng công việc cũng như ứng dụng của họ, đồng thời điều hướng và tối ưu hóa các thay đổi của phần mềm và đám mây, SoftwareOne giúp khách hàng mở khóa giá trị công nghệ. </p>
                        </div>
                    </div>
                </div>
            </div>

	        <div className="py-6 text-sm text-center dark:text-coolGray-400">© 2023 SoftwareOne. All rights reserved.</div>
		</footer>
      </>
    );
}

export default Footer;
