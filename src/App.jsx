import { useState } from "react";
import "./input.css";
import Header from "./Header";
import HeroPage from "./Heropage";


function App() {
  return (
    <div className="background">
      <div className=" app | w-[80vw] min-h-[100vh] py-[2rem]  ">
        <Header />
        <HeroPage className = "max-[640px]: flex justify-center flex-col"/>
       
      </div>
    </div>
  );
}

export default App;
