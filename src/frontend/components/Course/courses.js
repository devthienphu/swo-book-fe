import { Dialog, Transition } from "@headlessui/react";
import { useState, useEffect, Fragment } from "react";
import Cards from "../Cards/cards";
import Slide from "../Slider/slide";
import { getItems, postItems } from "../../api/appApi";
const temp = [
  {
    id: 1,
    category: "Học cụ",
    item: "Máy Tính Casio Fx-880BTG - Màu Ðen",
    unit: "Cái",
    price: 839000,
    image:
      "https://nhasachphuongnam.com/images/thumbnails/500/500/detailed/235/4549526613692.jpg",
  },
];

function Courses() {
  const [itemList, setItemList] = useState([]);
  let [isOpen, setIsOpen] = useState(false);
  const [itemData, setItemData] = useState({
    id: 0,
    category: "",
    item: "",
    unit: "",
    price: 0,
    image:
      "https://www.softwareone.com/-/media/images/logos/softwareone-logo-blk.svg?iar=0&hash=6A277FF39328B4D79A071F4A9F95F301",
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const getItem = async () => {
    const res = await getItems();
    setItemList(res);
  };

  const handleChangeItemData = (event) => {
   setItemData({
      ...itemData,
      [event.target.name]: event.target.value,
    });
  }

  const createItem = async()=>{
   const createItemRes = await postItems(itemData);
   closeModal()
  }

  useEffect(() => {
    getItem();
  }, []);

  return (
    <>
      <div className="mx-auto items-left justify-left lg:ml-28 overflow-hidden">
        <div className="flex flex-col w-full">
          <Slide />

          <div className="flex flex-row justify-between ml-8 pt-24 pr-16 pb-4 md:pt-8 gap-3 items-center">
            <p className="text-xl md:text-2xl font-extrabold cursor-pointer">
              Danh mục sản phẩm{" "}
            </p>
            <button
              onClick={() => {
                openModal();
              }}
              className="bg-blue-600 h-fit text-white font-semibold uppercase rounded-md p-1 px-3"
            >
              Add item
            </button>
          </div>

          <button className="ml-8 border border-black px-3 py-1 rounded-full w-fit flex flex-row gap-x-2 hover:bg-black hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            <p>Refresh</p>
          </button>

          <Cards courses={itemList} />
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900 text-center"
                      >
                        Add Item
                      </Dialog.Title>
                      <div className="flex flex-col justify-between gap-4 pt-4 w-full">
                        {/* Item */}
                        <div className="flex flex-col gap-y-4 w-full">
                          <lable for="role" className="font-medium text-lg">
                            Item name <b className="text-red-500">(*)</b>
                          </lable>
                          <input
                            className=" appearance-none block w-full bg-white 
                                                border-gray-200 border-b-2 py-2 mt-[-20px]  
                                                leading-tight focus:outline-none focus:border-gray-300"
                            type="text"
                            name="item"
                            placeholder="Item name"
                            id="item"
                            onChange={handleChangeItemData}
                            onKeyDown={(e) => e.stopPropagation()}
                          />
                        </div>

                        {/* Category */}
                        <div className="flex flex-col gap-y-4 w-full">
                          <lable for="category" className="font-medium text-lg">
                            Category <b className="text-red-500">(*)</b>
                          </lable>
                          <input
                            className=" appearance-none block w-full bg-white 
                                                border-gray-200 border-b-2 py-2 mt-[-20px]  
                                                leading-tight focus:outline-none focus:border-gray-300"
                            type="text"
                            name="category"
                            placeholder="Category"
                            id="category"
                            onChange={handleChangeItemData}
                            onKeyDown={(e) => e.stopPropagation()}
                          />
                        </div>

                        {/* Unit */}
                        <div className="flex flex-col gap-y-4 w-full">
                          <lable for="number" className="font-medium text-lg">
                            Unit <b className="text-red-500">(*)</b>
                          </lable>
                          <input
                            className=" appearance-none block w-full bg-white 
                                                border-gray-200 border-b-2 py-2 mt-[-20px]  
                                                leading-tight focus:outline-none focus:border-gray-300"
                            type="text"
                            name="unit"
                            placeholder="Unit"
                            id="unit"
                            onChange={handleChangeItemData}
                            onKeyDown={(e) => e.stopPropagation()}
                          />
                        </div>

                        {/* Price */}
                        <div className="flex flex-col gap-y-4 w-full">
                          <lable for="number" className="font-medium text-lg">
                            Price <b className="text-red-500">(*)</b>
                          </lable>
                          <input
                            className=" appearance-none block w-full bg-white 
                                                border-gray-200 border-b-2 py-2 mt-[-20px]  
                                                leading-tight focus:outline-none focus:border-gray-300"
                            type="number"
                            name="price"
                            placeholder="Price"
                            id="price"
                            onChange={handleChangeItemData}
                            onKeyDown={(e) => e.stopPropagation()}
                          />
                        </div>
                      </div>

                      {/* Action btn */}
                      <div className="flex flex-row flex-wrap items-center gap-4 justify-center">
                        {/* Submit btn*/}
                        <div className="mt-4">
                          <button
                            type="button"
                            disabled={itemData.item.length === 0?true:false}
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={()=>{createItem()}}
                          >
                            Submit
                          </button>
                        </div>
                        {/* Cancel btn*/}
                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={() => {
                              closeModal();
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </>
  );
}

export default Courses;
