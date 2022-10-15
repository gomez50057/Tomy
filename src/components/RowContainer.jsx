import React, { useEffect, useRef } from "react";
import { MdSearch } from "react-icons/md";
import { motion } from "framer-motion";

import { materials } from "../utils/data";


const RowContainer = ({ flag, scrollValue }) => {
  const rowContainer = useRef();

  

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

 
  return (


    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3  my-12 scroll-smooth  ${flag
        ? "overflow-x-scroll scrollbar-none"
        : "overflow-x-hidden flex-wrap justify-center"
        }`}
    >

      {materials &&
        materials.map((n) => (
          <div
            key={n.id}
            className="w-275 h-[250px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-3 px-2 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.3 }}
              >
                <img
                  src={n.image}
                  alt=""
                  className="w-full h-full object-contain rounded-2xl"
                />
              </motion.div>

              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
              >
                <MdSearch className="text-white" />
              </motion.div>
            </div>

           

            <div className="w-full flex flex-col items-end justify-end -mt-1">
              <p className="text-textColor font-normal text-base md:text-lg">
                {n?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
              Marca: {n?.Marca}
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">$</span> {n?.price}
                </p>
              </div>
            </div>
          </div>
        ))}


    </div>
  );
};

export default RowContainer;
