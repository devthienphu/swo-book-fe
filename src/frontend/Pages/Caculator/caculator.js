import React from 'react';
import { useNavigate } from 'react-router-dom'
import {frontendCourse} from '../../../backend/data'
import backendCourse from '../../../backend/data'
import { useState,useEffect } from 'react';
import Header from '../../components/Header/header';
import VerticalHeader from '../../components/Header/VerticalHeader';
import VmsCaculator from '../../components/vmsCaculator';
import StorageCaculator from '../../components/storageCaculator';
import Papa from 'papaparse';
import storageDataSheet from '../../../backend/data/storage.csv'
import vmDataSheet from '../../..//backend/data/azureprice-export.csv'
import img1 from '../../../img/img1.png'

let storagePriceList = []
let vmPriceList= []
const Caculator = () => {
    const navigate=useNavigate();

    useEffect(()=>{
        Papa.parse(vmDataSheet, {
            download: true,
            complete: function (input) {
                vmPriceList= input.data;
                console.log(vmPriceList)
            }
        });

        Papa.parse(storageDataSheet, {
            download: true,
            complete: function (input) {
                storagePriceList= input.data;
                console.log(storagePriceList)
            }
        });
        
    },[])


    const setPriceStorage = (storage)=>{
        for(let i=1;i<storagePriceList.length;i++){
            if(storage.tier === storagePriceList[i][3]){
                if(parseInt(storage.size)<=parseInt(storagePriceList[i][1])){
                    storage.cost = parseFloat(storagePriceList[i][2])
                    return;
                }
            }
               
        }
    }

    const setPriceVm = (vm)=>{
        for(var i=1;i<vmPriceList.length;i++){

            if(vm.core<=parseInt(vmPriceList[i][1])){
                if(vm.ram<= parseFloat(vmPriceList[i][2])){
                    console.log(vmPriceList[i][2])
                    if(vm.ops === 'Windows'){
                        vm.cost = parseFloat(vmPriceList[i][4])*730
                        return;
                    }  
                    else {
                        vm.cost = parseFloat(vmPriceList[i][3])*730
                        return;
                    }
                }
                
            }
            
      
        }
    }

    const [tab,setTab]=useState(true)
    const [refresh, setRefresh] = useState(false)
    const [vmsList, setVmsList]= useState([])
    const [vmsForm, setVmsForm]=useState({
        id:'',
        type:'',
        name:'',
        core:'',    
        ram:'',
        ops:'Windows',
        cost: 32
    })

    const [storageList, setStorageList]= useState([])
    const [storageForm, setStorageForm]=useState({
        id:'',
        type:'',
        size:'',
        tier:'HDD',
        cost: 1.2
    })

    const [totalPrice, setTotalPrice]=useState(0)
    const sumPrice =(data)=>{   
        setTotalPrice((prevPrice) => prevPrice +data.cost)
    }
    const sumCost =()=>{
        var temp =0
        for(var i=0;i<vmsList.length;i++){
            temp += vmsList[i].cost
        }
        for(let i=0;i<storageList.length;i++){
            temp += storageList[i].cost
        }
        setTotalPrice(temp)
    }
    const handleChange = (event) => {
        setVmsForm({
        ...vmsForm,
        [event.target.name]: event.target.value,
        });
        // console.log(vmsForm)
    }

    const handleChangeStorage = (event) => {
        setStorageForm({
        ...storageForm,
        [event.target.name]: event.target.value,
        });
    }
    // const addID =(vmsForm,id)=>{
    //     setVmsForm({
    //         ...vmsForm,
    //         id: vmsList.length+1
    //     });
    // }
    const clearForm =()=>{
        if(tab){
            document.getElementById('name').value = null;
            document.getElementById('core').value = null;
            document.getElementById('ram').value = null;
        }
        else
            document.getElementById('size').value = null;
    }

    function onRemoveVms(product) {
        for(var i=0;i<vmsList.length;i++){
          if(vmsList[i].id ===product.id){
                // setVmsList(vmsList.splice(i,1));
                vmsList.splice(i,1)
                sumCost()
                setRefresh(!refresh)
                return;

          }
        }
      }
    
    function onRemoveStorage(product) {
        for(var i=0;i<storageList.length;i++){
            if(storageList[i].id ===product.id){
                  // setVmsList(vmsList.splice(i,1));
                  storageList.splice(i,1)
                  sumCost()
                  setRefresh(!refresh)
                  return;
  
            }
          }
    }

    return (
       <>
            <div className="flex flex-row ">
            
                <Header/>
                <VerticalHeader/>

                {/* <div className="z-100 flex flex-col fixed top-56 w-fit right-32 p-3 border border-2 shadow shadow-xl rounded-xl bg-white z-20">
                    
                    <p>Total price: 462.82$</p>
                    
                </div> */}

               <div className="md:pl-40 pt-24 pr-4 pt-20 md:gap-y-8 gap-y-4">
                    <div className="flex flex-col px-4 md:basis-1/3">
                        <h2 className="font-extrabold text-3xl my-4">SoftwareOne Caculator</h2>
                        <p className="text-gray-600 ">The Easiest way to estimate your cost</p>
                    </div>

                    <div className="flex flex-col gap-8 pt-20 p-4">
                        {/* Tab  &form*/}
                        <div className="flex flex-col w-1/2 flex-wrap rounded-lg shadow-xl p-4 border border-2 bg-white">
                            {/* Tab */}
                            <div className="flex flex-row flex-wrap justify-between items-center gap-x-4">
                                <div className="flex flex-row flex-wrap gap-x-4">
                                    <button className={
                                        tab ? "rounded-lg bg-black text-white px-2 py-1 hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50": 
                                        "rounded-lg px-2 py-1 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                                    }		
                                    onClick={()=>setTab(!tab)}
                                    >
                                            <p className="">VMware</p>
                                    </button>
                                    <button className={
                                        !tab ? "rounded-lg bg-black text-white px-2 py-1 hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50": 
                                        "rounded-lg px-2 py-1 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                                    }		
                                        onClick={()=>setTab(!tab)}
                                    >
                                            <p className="">Storage</p>
                                    </button>
                                </div>
                                
                                <p className="font-bold text-xl pt-4 float-right">Total price: {totalPrice}$</p>   
                            </div>
                            
                            {
                                tab?
                                <VmsCaculator setPriceVm={setPriceVm} handleChange={handleChange} vmsForm={vmsForm} vmsList={vmsList} setVmsList={setVmsList} sumPrice={sumPrice} clearForm={clearForm} setVmsForm={setVmsForm}/>
                                :
                                <StorageCaculator setPriceStorage={setPriceStorage} handleChangeStorage={handleChangeStorage} storageForm={storageForm} storageList={storageList} setStorageForm={setStorageForm} setStorageList={setStorageList} sumPrice={sumPrice} clearForm={clearForm}/>
                            }

                        </div>
    
                        <div className="flex flex-col flex-wrap gap-x-4 ">
                            <div class="flex flex-col mt-8">
                                <p className="font-bold text-lg text-black">Virtual Machine List</p>
                                <div class="src-bar overflow-x-auto lg:max-w-[1000px] max-w-[300px] md:max-w-[500px] sm:-mx-6 lg:-mx-8 ">
                                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
                                    <div class="overflow-hidden border-2 border border-black rounded-xl ">
                                        <table class="min-w-full text-left text-sm font-light ">
                                        <thead class="border-b font-medium text-black text-center">
                                            <tr>
                                                <th scope="col" class="px-6 py-4">#</th>
                                                <th scope="col" class="px-6 py-4">No</th>
                                                <th scope="col" class="px-6 py-4">Type</th>
                                                <th scope="col" class="px-6 py-4">Name</th>
                                                <th scope="col" class="px-6 py-4">OS</th>
                                                <th scope="col" class="px-6 py-4">CPU</th>
                                                <th scope="col" class="px-6 py-4">Ram</th>
                                                <th scope="col" class="px-6 py-4">Price (Monthly)</th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-center items-center bg-white">

                                            {
                                                vmsList.map((vm,index)=>(
                                                    
                                                    <tr
                                                        class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 items-center" key ={index}>
                                                        <svg  className="w-8 h-8 mx-auto" aria-hidden="false" aria-labelledby="svg-title-VirtualMachinesCustom-4ccb53db-f8bc-4850-89d4-a57752ea7e32" id="svg-VirtualMachinesCustom-4ccb53db-f8bc-4850-89d4-a57752ea7e32" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" data-slug-id="virtual-machines" role="img"><title id="svg-title-VirtualMachinesCustom-4ccb53db-f8bc-4850-89d4-a57752ea7e32">Virtual Machines</title><defs><linearGradient id="svg-gradient1-VirtualMachinesCustom-4ccb53db-f8bc-4850-89d4-a57752ea7e32" x1="8.88" y1="12.21" x2="8.88" y2="0.21" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#0078d4"></stop><stop offset="0.82" stop-color="#5ea0ef"></stop></linearGradient><linearGradient id="svg-gradient2-VirtualMachinesCustom-4ccb53db-f8bc-4850-89d4-a57752ea7e32" x1="8.88" y1="16.84" x2="8.88" y2="12.21" gradientUnits="userSpaceOnUse"><stop offset="0.15" stop-color="#ccc"></stop><stop offset="1" stop-color="#707070"></stop></linearGradient></defs><rect x="-0.12" y="0.21" width="18" height="12" rx="0.6" fill="url(#svg-gradient1-VirtualMachinesCustom-4ccb53db-f8bc-4850-89d4-a57752ea7e32)"></rect><polygon points="11.88 4.46 11.88 7.95 8.88 9.71 8.88 6.21 11.88 4.46" fill="#50e6ff"></polygon><polygon points="11.88 4.46 8.88 6.22 5.88 4.46 8.88 2.71 11.88 4.46" fill="#c3f1ff"></polygon><polygon points="8.88 6.22 8.88 9.71 5.88 7.95 5.88 4.46 8.88 6.22" fill="#9cebff"></polygon><polygon points="5.88 7.95 8.88 6.21 8.88 9.71 5.88 7.95" fill="#c3f1ff"></polygon><polygon points="11.88 7.95 8.88 6.21 8.88 9.71 11.88 7.95" fill="#9cebff"></polygon><path d="M12.49,15.84c-1.78-.28-1.85-1.56-1.85-3.63H7.11c0,2.07-.06,3.35-1.84,3.63a1,1,0,0,0-.89,1h9A1,1,0,0,0,12.49,15.84Z" fill="url(#svg-gradient2-VirtualMachinesCustom-4ccb53db-f8bc-4850-89d4-a57752ea7e32)"></path>
                                                        </svg>
                                                        <td class="whitespace-nowrap px-6 py-4 font-medium">{vm.id}</td>
                                                        <td class="whitespace-nowrap px-6 py-4">Virtual Machine</td>
                                                        <td class="whitespace-nowrap px-6 py-4">{vm.name}</td>
                                                        <td class="whitespace-nowrap px-6 py-4">{vm.ops}</td>
                                                        <td class="whitespace-nowrap px-6 py-4">{vm.core} Cores</td>
                                                        <td class="whitespace-nowrap px-6 py-4">{vm.ram} GB</td>
                                                        <td class="whitespace-nowrap px-6 py-4">{vm.cost}$</td>
                                                        <button onClick={()=>{onRemoveVms(vm)}} className="justify-center whitespace-nowrap px-6 py-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                            </svg>
                                                        </button>
                                                    </tr>
                                                ))
                                        
                                            }

                                        
                                        </tbody>
                                        </table>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col mt-8 ">
                                <p className="font-bold text-lg text-black">Storage List</p>
                                <div class="src-bar overflow-x-auto lg:max-w-[900px] max-w-[300px] md:max-w-[500px] sm:-mx-6 lg:-mx-8 ">
                                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
                                    <div class="overflow-hidden border-2 border border-black rounded-xl ">
                                        <table class="min-w-full text-left text-sm font-light ">
                                        <thead class="border-b font-medium text-black text-center">
                                            <tr>
                                                <th scope="col" class="px-6 py-4">#</th>
                                                <th scope="col" class="px-6 py-4">No</th>
                                                <th scope="col" class="px-6 py-4">Type</th>
                                                <th scope="col" class="px-6 py-4">Size</th>
                                                <th scope="col" class="px-6 py-4">Tier</th>
                                                <th scope="col" class="px-6 py-4">Price (Monthly)</th>
                                            </tr>
                                        </thead>
                                        <tbody class="items-center bg-white text-center">

                                            {
                                                storageList.map((storage,index)=>(
                                                    
                                                    <tr
                                                        class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 items-center" key ={index}>
                                                        <svg className="h-8 w-8 mx-auto" aria-hidden="false" aria-labelledby="svg-title-StorageCustom-17c3e3b9-8eb7-4916-82e9-31581d3ff2f3" id="svg-StorageCustom-17c3e3b9-8eb7-4916-82e9-31581d3ff2f3" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" data-slug-id="storage" role="img"><title id="svg-title-StorageCustom-17c3e3b9-8eb7-4916-82e9-31581d3ff2f3">Storage Accounts</title><defs><linearGradient id="svg-gradient1-StorageCustom-17c3e3b9-8eb7-4916-82e9-31581d3ff2f3" x1="9" y1="15.83" x2="9" y2="5.79" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"></stop><stop offset="0.26" stop-color="#c1c1c1"></stop><stop offset="1" stop-color="#e6e6e6"></stop></linearGradient></defs><path d="M.5,5.79h17a0,0,0,0,1,0,0v9.48a.57.57,0,0,1-.57.57H1.07a.57.57,0,0,1-.57-.57V5.79A0,0,0,0,1,.5,5.79Z" fill="url(#svg-gradient1-StorageCustom-17c3e3b9-8eb7-4916-82e9-31581d3ff2f3)"></path><path d="M1.07,2.17H16.93a.57.57,0,0,1,.57.57V5.79a0,0,0,0,1,0,0H.5a0,0,0,0,1,0,0V2.73A.57.57,0,0,1,1.07,2.17Z" fill="#37c2b1"></path><path d="M2.81,6.89H15.18a.27.27,0,0,1,.26.27v1.4a.27.27,0,0,1-.26.27H2.81a.27.27,0,0,1-.26-.27V7.16A.27.27,0,0,1,2.81,6.89Z" fill="#fff"></path><path d="M2.82,9.68H15.19a.27.27,0,0,1,.26.27v1.41a.27.27,0,0,1-.26.27H2.82a.27.27,0,0,1-.26-.27V10A.27.27,0,0,1,2.82,9.68Z" fill="#37c2b1"></path><path d="M2.82,12.5H15.19a.27.27,0,0,1,.26.27v1.41a.27.27,0,0,1-.26.27H2.82a.27.27,0,0,1-.26-.27V12.77A.27.27,0,0,1,2.82,12.5Z" fill="#258277"></path>
                                                        </svg>
                                                        <td class="whitespace-nowrap px-6 py-4 font-medium">{storage.id}</td>
                                                        <td class="whitespace-nowrap px-6 py-4">Storage</td>
                                                        <td class="whitespace-nowrap px-6 py-4">{storage.size} GB</td>
                                                        <td class="whitespace-nowrap px-6 py-4">{storage.tier}</td>
                                                        <td class="whitespace-nowrap px-6 py-4">{storage.cost}$</td>
                                                        <button onClick={()=>{onRemoveStorage(storage)}} className="justify-center whitespace-nowrap px-6 py-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                            </svg>
                                                        </button>
                                                    </tr>
                                                ))
                                        
                                            }

                                        
                                        </tbody>
                                        </table>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    
                    
                    </div>

                    <div className="flex flex-row gap-8 mx-auto justify-between">
                        <div className="mx-auto px-8 md:px-0 md:basis-1/2 flex flex-col">

                        <p className="font-extrabold text-2xl nd:text-lg pt-24 my-4">Follow us on Facebook</p>
                        <p className="text-gray-600 text-lg md:text-base">Thousands of others are learning the same route as you. Please participate in Q&A, share and support each other.</p>
                        <button className="my-6 ring-2 ring-gray-900 rounded-full w-full md:w-48 p-3 md:p-2 text-xl md:text-base font-semibold hover:bg-black hover:text-white">Follow</button>
                        </div>
                        
                        <div className="basis-1/2 flex flex-col hidden md:flex">
                            <img src={img1} className="w-3/4 md:ml-16"></img>
                        </div>

                    </div> 

                    
               </div>
            </div>
       </>
    );
}

export default Caculator;
