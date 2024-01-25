import React from "react";
import { NavLink, Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-white border border-y ">
      <div className="w-full flex mt-5 flex-wrap flex-col lg:mx-auto max-w-screen-lg">
        
          <div className="border-b-2 pb-6 flex justify-between">
            <div className=" py-5 lg:px-0 ">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                alt="logo"
                className="h-16"
              />
            </div>
            <div className="flex w-auto justify-around lg:gap-28 gap-6 md:ml-0 ml-16">   {/* */}

              <div className="flex flex-col py-1 px-2 text-center">
                <div className="font-bold mb-3">RESOURCE</div>
                <NavLink to={"#"}
                className="hover:text-orange-400 rounded-lg">Home</NavLink>
                <NavLink to={"#"}
                className="hover:text-orange-400 rounded-lg">About</NavLink>
                
              </div>
              <div className="flex flex-col py-1 px-2 text-center">
                <div className="font-bold mb-3">FOLLOW US</div>
                <NavLink to={"#"}
                className="hover:text-orange-400 rounded-lg">Github</NavLink>
                <NavLink to={"#"}
                className="hover:text-orange-400 rounded-lg">Home</NavLink>
                
              </div>
              <div className="flex flex-col py-1 px-2 text-center">
                <div className="font-bold mb-3">LEGAL</div>
                <NavLink to={"#"}
                className="hover:text-orange-400 rounded-lg">Policy</NavLink>
                <NavLink to={"#"}
                className="hover:text-orange-400 rounded-lg">Terms & condition</NavLink>
                
              </div>
            </div>
          
        </div>
        <div className="text-gray-500 text-sm text-center mb-1 py-3 px-4  ">
          @ 2023 MohammadYusufDotCom. All right reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
