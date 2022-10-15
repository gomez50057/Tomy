import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full " id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-400 px-4 py-1 rounded-full mt-3">
          <h2 className="text-base  font-semibold">
            Tomas
          </h2>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <h2 className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          Los mejores
          <span className="text-teal-500 text-[3rem] lg:text-[5rem]">
            de Pachuca
          </span>
        </h2>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit
          eaque fugit distinctio est nam voluptatum architecto, porro iusto
          deserunt recusandae ipsa minus eos sunt, dolores illo repellat facere
          suscipit!
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">
          Revisa los Nuevos Productos
        </button>
      </div>
       {/* BG */}
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-15 xl:px-20 py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 sx:w-10 -mt-10 lg:-mt-20 rounded-3xl"
                  alt="Hero imagenes"
                />
                <h3 className="text-base lg:text-xl font-semibold text-textColor mt-5 lg:mt-5 z-40">
                  {n.name}
                </h3>

              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
