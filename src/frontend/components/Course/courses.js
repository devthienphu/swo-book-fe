import { useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Cards from '../Cards/cards';
import Slide from '../Slider/slide';
import { getItems } from '../../api/appApi';
const temp =[
   {
      "id": 1,
      "category": "Học cụ",
      "item": "Máy Tính Casio Fx-880BTG - Màu Ðen",
      "unit": "Cái",
      "price": 839000,
      "image": "https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/235/4549526613692.jpg"
    }
]

 function Courses () {
   const [itemList,setItemList] = useState([])

   const getItem = async()=>{
      const res = await getItems()
      setItemList(res)
   }

   useEffect(()=>{
      getItem()
    },[])

   return (
      <>
      <div className="mx-auto items-left justify-left lg:ml-28 overflow-hidden">
      <div className="flex flex-col w-full">
      <Slide/>

      <div className="flex flex-row ml-8 pt-24 pb-4 md:pt-8 gap-3">
         <p className="text-xl md:text-2xl font-extrabold cursor-pointer">Danh mục sản phẩm </p>
         <button className="bg-blue-600 h-fit text-white font-semibold uppercase rounded-md text-xs p-1 px-2">Hot 2023</button>
      </div>

      <button className="ml-8 border border-black px-3 py-1 rounded-full w-fit flex flex-row gap-x-2 hover:bg-black hover:text-white">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
         </svg>
         <p>Refresh</p>
      </button>

      <Cards courses ={itemList}/>
      
      
      </div>
      </div>
   
      
      </>
    );
}

export default Courses;
