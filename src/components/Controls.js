import React from 'react'

function Controls() {
    return (
      <div className="controls-container p-4 flex justify-center">
        <select
          id="small"
          class="block px-4 py-4 text-sm mx-4 text-gray-900 
          bg-gray-50 rounded-xl border border-gray-300
           
            "
        >
          <option selected>By Category</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
        <select
          id="small"
          class="block px-4 py-4 text-sm mx-4 text-gray-900 
          bg-gray-50 rounded-xl border border-gray-300
           
            "
        >
          <option selected>By Brand</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>

        <select
          id="small"
          class="block px-4 py-4 text-sm mx-4 text-gray-900 
          bg-gray-50 rounded-xl border border-gray-300
           
            "
        >
          <option selected>Sort By (Best Seller)</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>

        <select
          id="small"
          class="block px-4 py-4 text-sm mx-4 text-gray-900 
          bg-gray-50 rounded-xl border border-gray-300
           
            "
        >
          <option selected>Num Per Page: (20)</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>

        <button className="px-4 py-4 bg-[#333] rounded-md font-bold text-white mx-2">
          Add Item
        </button>
        <button className="px-4 py-4 bg-[#333] rounded-md text-white font-bold mx-2">
          Delete Item
        </button>
        <button className="px-4 py-4 bg-[#333] rounded-md text-white font-bold mx-2">
          Import
        </button>
        <div className="bg-[#F5F5F5] flex items-center justify-between rounded-md mx-4">
          <div className="w-8 h-8 mx-2 bg-[#333] rounded-md cursor-pointer">
            <svg
              fill="#FFF"
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m10.5 17.25c0-.414.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75h-10c-.414 0-.75-.336-.75-.75zm-1.5-3.55c0-.53-.47-1-1-1h-5c-.53 0-1 .47-1 1v4.3c0 .53.47 1 1 1h5c.53 0 1-.47 1-1zm1.5-1.7c0-.414.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75h-10c-.414 0-.75-.336-.75-.75zm-1.5-6c0-.53-.47-1-1-1h-5c-.53 0-1 .47-1 1v4.3c0 .53.47 1 1 1h5c.53 0 1-.47 1-1zm1.5.75c0-.414.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75h-10c-.414 0-.75-.336-.75-.75z"
                fill-rule="nonzero"
              />
            </svg>
          </div>
          <div className="w-6 h-6 mx-2 cursor-pointer">
            <svg
              fill="#666"
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m14.865 16.6c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm-7.135 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm14.27 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm-7.135-5.8c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm-7.135 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm14.27 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm-7.135-5.8c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm-7.135 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1zm14.27 0c0-.53-.47-1-1-1h-3.73c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.73c.53 0 1-.47 1-1z"
                fill-rule="nonzero"
              />
            </svg>
          </div>
        </div>
      </div>
    );
}

export default Controls
