import {createContext,useState} from 'react'
import {useSelector } from 'react-redux';
import LearningHeader from '../../components/Header/learningHeader';
import LearningFooter from '../../components/Footer/learningFooter';
import Comment from '../../components/Comment/comment';
import lession_for_newbie from '../../../backend/data'
import Player from '../../components/video player/player';

export const StepContext = createContext();

const Learning = () => {

    const title = useSelector((state) => state.videoSelector.title)
    

    return (
       <>
       {/* <StepContext.Provider value={{step, setStep}}> */}
        <LearningHeader/>
            
            {/* video */}
            <Player />

            <div className="flex flex-col pt-8 lg:px-64 px-8 pb-16 ">
                <div className="flex flex-row lg:gap-x-32 gap-4 flex-wrap">
                    <p className="font-semibold text-3xl">{title}</p>
                </div>
                <p className="text-gray-600 text-sm">Update on June 2023</p>
                <p className="py-14 text-lg text-gray-600">Reference:
                    <a className="flex text-orange-600 text-base underline underline-offset-1" href="https://codepen.io/enxaneta/full/adLPwv/"> https://codepen.io/enxaneta/full/adLPwv/</a>
                </p>

            </div>
            <Comment/>
        <LearningFooter/>
       {/* </StepContext.Provider> */}
      
       </>
    );
}

export default Learning;
