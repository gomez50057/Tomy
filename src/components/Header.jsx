import React, { useState } from "react";
import { motion } from "framer-motion";


import Logo from "../img/logo.png";
import { Link } from "react-router-dom";


const Header = () => {
 


  const [isMenu, setIsMenu] = useState(false);

  
  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <h1 className="text-headingColor text-xl font-bold">Reparaciones & Servicios Tomy</h1>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-24 "
          >
            <li className="text-lg text-textColor hover:text-orange-600 duration-300 transition-all ease-in-out cursor-pointer">
              Inicio 
            </li>
            <li className="text-lg text-textColor hover:text-orange-600 duration-300 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-lg text-textColor hover:text-orange-600 duration-300 transition-all ease-in-out cursor-pointer">
              Sobre nosotros
            </li>
            <li className="text-lg text-textColor hover:text-orange-600 duration-300 transition-all ease-in-out cursor-pointer">
              Servicios
            </li>
          </motion.ul>

          


        </div>
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full ">
       

        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">Reparaciones & Servicios</p>
        </Link>

        <div className="relative">
          
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
            >
             

              <ul className="flex flex-col ">
                <li
                  className="text-base text-textColor hover:text-orange-600 duration-300 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Inicio
                </li>
                <li
                  className="text-base text-textColor hover:text-orange-600 duration-300 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Menu
                </li>
                <li
                  className="text-base text-textColor hover:text-orange-600 duration-300 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Sobre nosotros
                </li>
                <li
                  className="text-base text-textColor hover:text-orange-600 duration-300 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Servicios
                </li>
              </ul>

              
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
