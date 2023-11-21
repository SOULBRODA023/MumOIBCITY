import "./input.css";
import { useState } from "react";
const Header = ({toggleModal}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);




  const toggleMenu =()=>{
    setIsModalOpen(!isModalOpen)
    console.log(isModalOpen)
  }
  return (
    <header className="grid place-items-center w-[100%] ">
      <nav className="flex justify-between w-[100%] place-items-center">
        <div className="left__side__nav |">
          <h3 className="font-semibold">Filmone Studio</h3>
        </div>
        <button>
          <img
            src={!isModalOpen ? "icon-hamburger.svg" : "icon-close.svg"}
            alt=""
            className="lg:hidden"
            onClick={toggleMenu}
          />
        </button>

        <div
          className={`nav__option  sm:fixed  lg:static ${
            isModalOpen ? "open" : "close"
          }`}
        >
          <ul>
            <li>
              <button className="cursor-pointer">
                <h3>Gallery</h3>
              </button>
            </li>
            <li>
              <button className="cursor-pointer " onClick={toggleModal}>
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
