import React from 'react'
import Blazer from "../assets/blazer.webp"
import "./tables.css"
function Table() {
    return (
      <div className="w-full">
        <div className="flex items-center justify-center  w-full p-4">
          <div className="w-full ">
            <div className="overflow-auto lg:overflow-visible ">
              <table className="table w-full  text-gray-400 border-separate space-y-6 text-sm">
                <thead className=" text-gray-500">
                  <tr>
                    <th className="p-3"></th>
                    <th className="p-3">Name</th>
                    <th className="p-3 text-left">Category</th>
                    <th className="p-3 text-left">Value</th>
                    <th className="p-3 text-left">Insurance Value</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="cursor-pointer  hover:bg-[#F5F5F5]">
                    <td className="p-4 w-4">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      ></input>
                    </td>
                    <td className="p-3">
                      <div className="flex  items-center">
                        <div className="image-container border-2 border-gray-300 rounded-md">
                          <img
                            className=" h-24 w-24  object-cover"
                            src={Blazer}
                            alt="unsplash image"
                          />
                        </div>
                        <div className="ml-3 h-full flex items-center justify-center flex-1">
                          <p className="text-center">Nike Blazer Mid</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">Footwear</td>
                    <td className="p-3 font-bold">200.00$</td>
                    <td className="p-3 font-bold">200.00$</td>
                    <td className="p-3">
                      <span className="bg-green-400 text-gray-50 font-bold py-1 rounded-md px-2">
                        In stock
                      </span>
                    </td>
                    <td className="p-3   ">
                      <i className="material-icons-round text-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                        </svg>
                      </i>
                    </td>
                  </tr>

                  <tr className="cursor-pointer  hover:bg-[#F5F5F5]">
                    <td className="p-4 w-4">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      ></input>
                    </td>
                    <td className="p-3">
                      <div className="flex  items-center">
                        <div className="image-container border-2 border-gray-300 rounded-md">
                          <img
                            className=" h-24 w-24  object-cover"
                            src={Blazer}
                            alt="unsplash image"
                          />
                        </div>
                        <div className="ml-3 h-full flex items-center justify-center flex-1">
                          <p className="text-center">Nike Blazer Mid</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">Footwear</td>
                    <td className="p-3 font-bold">200.00$</td>
                    <td className="p-3 font-bold">200.00$</td>
                    <td className="p-3">
                      <span className="bg-green-400 text-gray-50 font-bold py-1 rounded-md px-2">
                        In stock
                      </span>
                    </td>
                    <td className="p-3   ">
                      <i className="material-icons-round text-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                        </svg>
                      </i>
                    </td>
                  </tr>

                  <tr className="cursor-pointer  hover:bg-[#F5F5F5]">
                    <td className="p-4 w-4">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      ></input>
                    </td>
                    <td className="p-3">
                      <div className="flex  items-center">
                        <div className="image-container border-2 border-gray-300 rounded-md">
                          <img
                            className=" h-24 w-24  object-cover"
                            src={Blazer}
                            alt="unsplash image"
                          />
                        </div>
                        <div className="ml-3 h-full flex items-center justify-center flex-1">
                          <p className="text-center">Nike Blazer Mid</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">Footwear</td>
                    <td className="p-3 font-bold">200.00$</td>
                    <td className="p-3 font-bold">200.00$</td>
                    <td className="p-3">
                      <span className="bg-green-400 text-gray-50 font-bold py-1 rounded-md px-2">
                        In stock
                      </span>
                    </td>
                    <td className="p-3   ">
                      <i className="material-icons-round text-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                        </svg>
                      </i>
                    </td>
                  </tr>

                  <tr className="cursor-pointer  hover:bg-[#F5F5F5]">
                    <td className="p-4 w-4">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      ></input>
                    </td>
                    <td className="p-3">
                      <div className="flex  items-center">
                        <div className="image-container border-2 border-gray-300 rounded-md">
                          <img
                            className=" h-24 w-24  object-cover"
                            src={Blazer}
                            alt="unsplash image"
                          />
                        </div>
                        <div className="ml-3 h-full flex items-center justify-center flex-1">
                          <p className="text-center">Nike Blazer Mid</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">Footwear</td>
                    <td className="p-3 font-bold">200.00$</td>
                    <td className="p-3 font-bold">200.00$</td>
                    <td className="p-3">
                      <span className="bg-green-400 text-gray-50 font-bold py-1 rounded-md px-2">
                        In stock
                      </span>
                    </td>
                    <td className="p-3   ">
                      <i className="material-icons-round text-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                        </svg>
                      </i>
                    </td>
                  </tr>

                  <tr className="cursor-pointer  hover:bg-[#F5F5F5]">
                    <td className="p-4 w-4">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      ></input>
                    </td>
                    <td className="p-3">
                      <div className="flex  items-center">
                        <div className="image-container border-2 border-gray-300 rounded-md">
                          <img
                            className=" h-24 w-24  object-cover"
                            src={Blazer}
                            alt="unsplash image"
                          />
                        </div>
                        <div className="ml-3 h-full flex items-center justify-center flex-1">
                          <p className="text-center">Nike Blazer Mid</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">Footwear</td>
                    <td className="p-3 font-bold">200.00$</td>
                    <td className="p-3 font-bold">200.00$</td>
                    <td className="p-3">
                      <span className="bg-green-400 text-gray-50 font-bold py-1 rounded-md px-2">
                        In stock
                      </span>
                    </td>
                    <td className="p-3   ">
                      <i className="material-icons-round text-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                        </svg>
                      </i>
                    </td>
                  </tr>

                  <tr className="cursor-pointer  hover:bg-[#F5F5F5]">
                    <td className="p-4 w-4">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      ></input>
                    </td>
                    <td className="p-3">
                      <div className="flex  items-center">
                        <div className="image-container border-2 border-gray-300 rounded-md">
                          <img
                            className=" h-24 w-24  object-cover"
                            src={Blazer}
                            alt="unsplash image"
                          />
                        </div>
                        <div className="ml-3 h-full flex items-center justify-center flex-1">
                          <p className="text-center">Nike Blazer Mid</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">Footwear</td>
                    <td className="p-3 font-bold">200.00$</td>
                    <td className="p-3 font-bold">200.00$</td>
                    <td className="p-3">
                      <span className="bg-green-400 text-gray-50 font-bold py-1 rounded-md px-2">
                        In stock
                      </span>
                    </td>
                    <td className="p-3   ">
                      <i className="material-icons-round text-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                        </svg>
                      </i>
                    </td>
                  </tr>

                  <tr className="cursor-pointer  hover:bg-[#F5F5F5]">
                    <td className="p-4 w-4">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      ></input>
                    </td>
                    <td className="p-3">
                      <div className="flex  items-center">
                        <div className="image-container border-2 border-gray-300 rounded-md">
                          <img
                            className=" h-24 w-24  object-cover"
                            src={Blazer}
                            alt="unsplash image"
                          />
                        </div>
                        <div className="ml-3 h-full flex items-center justify-center flex-1">
                          <p className="text-center">Nike Blazer Mid</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">Footwear</td>
                    <td className="p-3 font-bold">200.00$</td>
                    <td className="p-3 font-bold">200.00$</td>
                    <td className="p-3">
                      <span className="bg-green-400 text-gray-50 font-bold py-1 rounded-md px-2">
                        In stock
                      </span>
                    </td>
                    <td className="p-3   ">
                      <i className="material-icons-round text-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                        </svg>
                      </i>
                    </td>
                  </tr>
                  <tr className="cursor-pointer  hover:bg-[#F5F5F5]">
                    <td className="p-4 w-4">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      ></input>
                    </td>
                    <td className="p-3">
                      <div className="flex  items-center">
                        <div className="image-container border-2 border-gray-300 rounded-md">
                          <img
                            className=" h-24 w-24  object-cover"
                            src={Blazer}
                            alt="unsplash image"
                          />
                        </div>
                        <div className="ml-3 h-full flex items-center justify-center flex-1">
                          <p className="text-center">Nike Blazer Mid</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">Footwear</td>
                    <td className="p-3 font-bold">200.00$</td>
                    <td className="p-3 font-bold">200.00$</td>
                    <td className="p-3">
                      <span className="bg-green-400 text-gray-50 font-bold py-1 rounded-md px-2">
                        In stock
                      </span>
                    </td>
                    <td className="p-3   ">
                      <i className="material-icons-round text-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                        </svg>
                      </i>
                    </td>
                  </tr>
                  <tr className="cursor-pointer  hover:bg-[#F5F5F5]">
                    <td className="p-4 w-4">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      ></input>
                    </td>
                    <td className="p-3">
                      <div className="flex  items-center">
                        <div className="image-container border-2 border-gray-300 rounded-md">
                          <img
                            className=" h-24 w-24  object-cover"
                            src={Blazer}
                            alt="unsplash image"
                          />
                        </div>
                        <div className="ml-3 h-full flex items-center justify-center flex-1">
                          <p className="text-center">Nike Blazer Mid</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">Footwear</td>
                    <td className="p-3 font-bold">200.00$</td>
                    <td className="p-3 font-bold">200.00$</td>
                    <td className="p-3">
                      <span className="bg-green-400 text-gray-50 font-bold py-1 rounded-md px-2">
                        In stock
                      </span>
                    </td>
                    <td className="p-3   ">
                      <i className="material-icons-round text-base">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                        </svg>
                      </i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Table
