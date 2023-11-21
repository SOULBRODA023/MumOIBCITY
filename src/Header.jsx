import "./input.css";
import { useState } from "react";
const Header = ({handleFormOpen}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);






  const toggleMenu =()=>{
    setIsModalOpen(!isModalOpen)
    console.log(isModalOpen)
  }
  return (
    <header className="grid place-items-center w-[100%] ">
      <nav className="flex justify-between w-[100%] place-items-center">
        <div className="left__side__nav |">
          <h3 className="font-semibold">Divinity Studio</h3>
        </div>
       

        <div
          className={`nav__option  sm:static
          }`}
        >
          <ul>
            <li>
              <button className="cursor-pointer " onClick={handleFormOpen}>
                <h3>Free Ticket</h3>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
