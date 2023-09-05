import {useContext} from 'react'
import {StepContext} from '../../Pages/learning/learning'
import { useSelector } from 'react-redux'

const defautLink="https://www.youtube.com/embed/CbUjGxnJiVo?autoplay=1&mute=0&controls=1&origin=https%3A%2F%2Ffullstack.edu.vn&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1"
const Player = () => {
    
    const url = useSelector((state) => state.videoSelector.video_url)
    // const {step,setStep} =useContext(StepContext)
    
    return (
       <>
        <div className="w-full relative bg-black mt-12">
            <div className="lg:w-5/6 mx-auto items-center lg:px-[8.5%] overflow-hidden box-border">

            <div className="relative pt-[56.25%] overflow-hidden my-2 rounded-sm">
                <iframe className="absolute top-0 left-0 right-0" frameborder="0" allowFullScreen="1"  width="100%" 
                    height="100%"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    src={`https://www.youtube.com/embed/${url}?autoplay=1&mute=0&controls=1&origin=https%3A%2F%2Ffullstack.edu.vn&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1`
                    }></iframe>
            </div>
            </div>
        </div>
       </>
    );
}

export default Player;
