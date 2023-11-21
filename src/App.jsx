import { useState } from "react";
import "./input.css";
import Header from "./Header";
import HeroPage from "./Heropage";
import Form from "./Form";

function App() {
    const toggleModal = () => {
      setIsFormOpen(!isFormOpen);
      console.log(isFormOpen);
    };
  return (
    <div className="background">
      <div className=" app | w-[80vw] min-h-[100vh] py-[2rem]  ">
        <Header toggleModal />
        <HeroPage className = "max-[640px]: flex justify-center flex-col"/>
        <Form toggleModal/>
      </div>
    </div>
  );
}

export default App;
