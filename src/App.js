import React from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header, MainContainer } from "./components";
import { Footer } from "./components/Footer";


const App = () => {

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </AnimatePresence>
    
  );
  
};

export default App;
