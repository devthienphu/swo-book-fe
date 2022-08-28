import {createContext,useState} from 'react'
import LearningHeader from '../../components/Header/learningHeader';
import LearningFooter from '../../components/Footer/learningFooter';
import Comment from '../../components/Comment/comment';
import lession_for_newbie from '../../../backend/data'
import Player from '../../components/video player/player';

export const StepContext = createContext();

const Learning = () => {

    const[step,setStep]= useState(null);
    
    return (
       <>
       <StepContext.Provider value={{step, setStep}}>
        <LearningHeader/>
            
            {/* video */}
            <Player />

            <div className="flex flex-col pt-8 lg:px-64 px-8 pb-16 ">
                <div className="flex flex-row lg:gap-x-32 gap-4 flex-wrap">
                    <p className="font-semibold text-3xl">Để học Flexbox tốt hơn bạn nên xem video này</p>
                    <div className="flex flew-row bg-gray-200 gap-x-1 items-center p-2 rounded-lg cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                        </svg>
                        <p className="text-normal">Thêm ghi chú tại</p>
                        <p className="font-semibold">02:52</p>
                    </div>
                </div>
                <p className="text-gray-600 text-sm">Cập nhật tháng 3 năm 2022</p>
                <p className="py-14 text-lg text-gray-600">Trang web tham khảo:
                    <a className="flex text-orange-600 text-base underline underline-offset-1" href="https://codepen.io/enxaneta/full/adLPwv/"> https://codepen.io/enxaneta/full/adLPwv/</a>
                </p>

            </div>
            <Comment/>
        <LearningFooter/>
       </StepContext.Provider>
      
       </>
    );
}

export default Learning;
