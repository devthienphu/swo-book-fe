import React from 'react';
import ChangeButton from '../../components/Buttons/changeButton';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Input from '../../components/input/input';
import {settings} from '../../../backend/data'
const Setting = () => {
    return (
        <>
            <Header/>
            <div className="lg:pl-60 pl-12 pt-32">

                <p className="text-3xl font-semibold text-gray-800 ">Cài đặt</p>
                <div className="flex flex-col gap-4 pt-4 divide-solid divide-y divide-slate-200 lg:w-3/5">
                    <p className="text-xl font-semibold text-gray-800 border-b-2 py-2">Thông tin cá nhân</p>
                </div>

               <Input title={"Họ tên"} des={settings[0].fullname_des} value={settings[0].full_name}/>
               <Input title={"Bio"} des={settings[0].bio_des} value={(settings[0].bio)?settings[0].bio:"Thêm giới thiệu"}/>
               <Input title={"Avatar"} des={settings[0].avatar_des} value={settings[0].avatar}/>
               <Input title={"Email"} des={null} value={settings[0].email}/>
               <Input title={"User Name"} des={settings[0].username_des} value={settings[0].username}/>
               <Input title={"Số điện thoại"} des={settings[0].phone_des} value={(settings[0].phone)?settings[0].phone:"Thêm số điện thoại"}/>

               <div className="flex flex-col gap-4 pt-4 divide-solid divide-y divide-slate-200 w-3/5">
                    <p className="text-xl font-semibold text-gray-800 border-b-2 py-2">Mạng xã hội</p>
                </div>
               <Input title={"Facebook"} des={null} value={(settings[0].facebook_url)?settings[0].facebook_url:"Eg http://www.facebook.com/f8"}/>
               <Input title={"Youtube"} des={null} value={(settings[0].youtube_url)?settings[0].youtube_url:"Eg http://www.youtube.com/f8"}/>
               <Input title={"Linkedin"} des={null} value={(settings[0].linkedin_url)?settings[0].linkedin_url:"Eg http://www.linkedin.com/f8"}/>
               

            </div>
            <Footer/>
        </>
    );
}

export default Setting;
