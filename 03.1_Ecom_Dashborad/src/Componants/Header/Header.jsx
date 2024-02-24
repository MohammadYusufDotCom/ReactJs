import { useState } from "react";
import { NavLink, Link, useNavigate, json } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("login"); //auto re-rander the page. fix the problem of login and logout problem remain there
  };
  const auth = localStorage.getItem("user");

  return (
    <header className="sticky top-0 w-full h-20 backdrop-blur-sm bg-opacity-35 bg-green-900 ">
      <nav className=" h-full flex items-center w-auto justify-between mx-36 ">
        <div className=" ">
          <Link
            to={"/"}
            className={`font-extrabold text-3xl font-sans cursor-pointer text-blue-50`}
          >
            <p className="text-green-500 inline">MY</p> LOGO
          </Link>
        </div>

        <div className="order-3 flex gap-4 ">
          {auth ? 
            <div className="flex gap-2 items-center">
              <Link to={"login"} className="bg-green-900 text-white px-3 h-9 w-9 flex justify-center items-center rounded-full font-bold">
                {JSON.parse(auth).name[0].toUpperCase()}
              </Link>
              
              <Link to={"login"} onClick={logout}>
                Logout
              </Link>
            </div>
            : 
            <div className="flex gap-4">
              <Link to={"Register"} className="bg-green-500 p-3 rounded-2xl ">
                Sign up
              </Link>
              <Link to={"login"} className="bg-green-500  p-3 rounded-2xl">
                Login
              </Link>
            </div>
          }

        </div>
        {auth ? (
          <ul className=" flex order-2 lg:gap-11 sm:gap-7 text-white">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `px-2 py-0.5 ${isActive ? "text-green-500 " : "text-white"}`
                }
              >
                Home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"product"}
                className={({ isActive }) =>
                  `px-2 py-0.5 ${isActive ? "text-green-500 " : "text-white"}`
                }
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"profile"}
                className={({ isActive }) =>
                  `px-2 py-0.5 ${isActive ? "text-green-500 " : "text-white"}`
                }
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"about"}
                className={({ isActive }) =>
                  `px-2 py-0.5 ${isActive ? "text-green-500 " : "text-white"}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"cart"}
                className={({ isActive }) =>
                  `px-2 py-0.5 ${isActive ? "text-green-500 " : "text-white"}`
                }
              >
                Cart
              </NavLink>
            </li>
          </ul>
        ) : (
          <></>
        )}
      </nav>
    </header>
  );
}

export default Header;
