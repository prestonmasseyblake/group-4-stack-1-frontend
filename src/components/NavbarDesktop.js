import React from 'react'
import face from "../assets/face.jpeg"
import "./NavbarDesktop.css"
function NavbarDesktop() {
    return (
      <div className="lg:w-1/6">
        <div className="h-screen lg:w-1/6 bg-[#111] p-4 flex flex-col navbar-main">
          <div className="flex items-center justify-center">
            <svg
              fill="#FFF"
              width="64"
              height="64"
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m21 7.702-8.5 4.62v9.678c1.567-.865 6.379-3.517 7.977-4.399.323-.177.523-.519.523-.891zm-9.5 4.619-8.5-4.722v9.006c0 .37.197.708.514.887 1.59.898 6.416 3.623 7.986 4.508zm-8.079-5.629 8.579 4.763 8.672-4.713s-6.631-3.738-8.186-4.614c-.151-.085-.319-.128-.486-.128-.168 0-.335.043-.486.128-1.555.876-8.093 4.564-8.093 4.564z"
                fill-rule="nonzero"
              />
            </svg>

            <h1 className="text-white font-bold ml-3">LunchBox</h1>
          </div>
          <div className="my-8">
            <ul>
              <li className="text-white my-4 flex items-center cursor-pointer">
                <p className="text-white font-bold ">Inventory</p>
              </li>
              <li className="text-white font-bold my-4">About</li>
              <li className="text-white font-bold my-4">Settings</li>
            </ul>
          </div>

          <div className="flex-1 flex-col items-end ">
            <div className="bg-[#333] p-8 rounded-md text-center">
              <h4 className="text-white font-bold">Upgrade To Pro</h4>
              <p className="text-white text-sm mt-4 font-bold">
                Try the First Year On Us
              </p>
            </div>
            <ul>
              <li className="text-black bg-white my-2 flex p-2 justify-center cursor-pointer rounded-md">
                <svg
                  className="mx-2"
                  fill="#000"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 9v-4l8 7-8 7v-4h-8v-6h8zm2-7v2h12v16h-12v2h14v-20h-14z" />
                </svg>
                <p className="font-bold">Logout</p>
              </li>
            </ul>
            <div className="w-full rounded-full cursor-pointer flex justify-center bg-[#FFF]">
              <img
                className="w-16 h-16 rounded-full cursor-pointer"
                            src={face}
                            alt="face"
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default NavbarDesktop
