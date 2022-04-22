

import { useNavigate } from 'react-router-dom'
import Slider from '../Slider/slider';
import Cards from '../Cards/cards';

 function Courses () {
   //  const navigate=useNavigate();
    return (
       <>
       <div className="mx-auto md:ml-40">
        <div className="flex flex-col max-w-screen-xl">
        <Slider/>
        <Cards/>
        </div>
       </div>
    
       
       </>
    );
}

export default Courses;
