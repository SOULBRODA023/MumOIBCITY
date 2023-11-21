import { useState } from "react";
import "./input.css";
import Header from "./Header";
import HeroPage from "./Heropage";
import Form from "./Form";


function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const handleFormOpen  =  ()=>{
    setIsFormOpen(true)
    console.log(isFormOpen)
  }

  return (
    <div className="background">
      <div className=" app | w-[80vw] min-h-[100vh] py-[2rem]  ">
        <Header handleFormOpen={handleFormOpen}/>
        <HeroPage className = "max-[640px]: flex justify-center flex-col"/>
        <Form handleFormOpen ={handleFormOpen} state={isFormOpen} myState= {setIsFormOpen} />
      </div>
    </div>
  );
}

export default App;
