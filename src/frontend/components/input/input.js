import {useState} from 'react'

import ChangeButton from '../Buttons/changeButton';

const Input = ({title, des, value}) => {
    const [state,setState]= useState(true);
    return (
    <>
        <div className="flex flex-col lg:flex-row justify-between gap-4 pt-8 pr-8 ">

            <div className="flex flex-col gap-y-4 w-full">
                <p className="font-medium text-lg">{title}</p>
                
            <form>
                <input defaultValue={value} disabled={state}
                    className='lg:w-3/5 w-5/6 appearance-none block w-full bg-white 
                    text-gray-400 border-gray-200 border-b-2 py-2 mt-[-20px]  
                    leading-tight focus:outline-none focus:border-gray-300' type='text' name="name"/>   
                <img className="" src={value} alt="" ></img>
            </form>

            <p className="text-gray-400 lg:w-3/5">{des}</p>
           
            </div>
            
            
            <div className="flex flex-col w-full">
                <ChangeButton state={state} setState={setState}/>
            </div>
            
            
        </div>
    </>
    );
}

export default Input;
