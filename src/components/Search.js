import React from 'react'

function Search() {
    return (
      <div className="p-8 flex justify-center w-full bg-[#F5F5F5]">
            <div className="flex border-2 px-2 bg-[#FFF] rounded-lg  border-gray-300 
        items-center justify-between py-2 w-2/4">
          <div className="flex flex-1 h-max">
                    <svg
                        fill="#111"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
            </svg>

            <input
              className="bg-transparent flex-1 h-max mx-2"
              placeholder="Search for items or categories"
            />
          </div>
          <button className="bg-[#000] rounded-md text-white px-2 py-1">Search</button>
        </div>
      </div>
    );
}

export default Search
