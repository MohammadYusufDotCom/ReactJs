import React from "react";
import { NavLink, Link } from "react-router-dom";

 function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            
            <nav className="bg-white  px-1 lg:px-6 py-2.5">
                <div className="flex flex-wrap  justify-between items-center mx-auto max-w-screen-xl">
                    <Link to={'/'} >
                        <img 
                        className="h-12"
                        src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" 
                        alt="Logo"  
                        />
                    </Link>
                
                    <div className="flex items-center gap-2  md:order-2">
                        <Link
                        to={"#"}
                        className="bg-orange-600 focus:bg-orange-400 hover:text-gray-800 font-medium rounded-lg text-sm px-2 md:px-4  py-2 lg:py-2.5  focus:outline-none "
                        >
                            Log in
                        </Link>
                        <Link
                        to={"#"}
                        className="bg-orange-600 focus:bg-orange-400 hover:text-gray-800 font-medium rounded-lg text-sm px-2 md:px-4 py-2 lg:py-2.5  focus:outline-none "
                        >
                            Signup
                        </Link>
                    </div>
                    <div className=" justify-between items-center w-full md:w-auto md:flex  md:order-1"
                    >
                        <ul className=" flex  lg:flex-row font-medium space-x-8 md:mx-0  ">
                            <li>
                                <NavLink
                                to='/'
                                className={({isActive})=>
                                `block py-1 pr-4 pl-3 duration-200 ${isActive? "text-orange-700":"text-gray-800"}  border-gray-100 active:bg-gray-100 rounded-lg lg:border-0 hover:text-orange-700 `}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='about'
                                className={({isActive})=>
                                `block py-1 pr-4 pl-2 duration-200 ${isActive? "text-orange-700":"text-gray-800"}  border-gray-100 active:bg-gray-100 rounded-lg lg:border-0 hover:text-orange-700 `}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='Contact'
                                className={({isActive})=>
                                `block py-1 pr-4 pl-2 duration-200 ${isActive? "text-orange-700":"text-gray-800"}  border-gray-100 active:bg-gray-100 rounded-lg lg:border-0 hover:text-orange-700 `}
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to={'/github'}
                                className={({isActive})=>
                                `block py-1 pr-4 pl-2 duration-200 ${isActive? "text-orange-700":"text-gray-800"}  border-gray-100 active:bg-gray-100 rounded-lg lg:border-0 hover:text-orange-700 `}
                                >
                                    Github 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to={'/user'}
                                className={({isActive})=>
                                `block py-1 px-1 duration-200 ${isActive? "text-orange-700":"text-gray-800"}  border-gray-100 active:bg-gray-100 rounded-lg lg:border-0 hover:text-orange-700 `}
                                >
                                    User
                                </NavLink>
                            </li>
                        </ul>
                    </div>
            </div>
            </nav>
        </header>

        
    );
}
  export default Header