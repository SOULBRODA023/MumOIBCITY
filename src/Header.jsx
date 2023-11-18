import "./input.css";
const Header = () => {
  return (
    <header className="grid place-items-center w-[100%] ">
      <nav className="flex justify-between w-[100%] place-items-center">
        <div className="left__side__nav |">
          <h3 className="font-semibold">Filmone Studio</h3>
        </div>
        <div className="right__side__nav | flex gap-[3rem] place-items-center md-[720px]:flex sm-[320px]: hidden ">
          <h3 className="font-semibold cursor-pointer">Gallery</h3>
          <h3 className="font-semibold cursor-pointer">Free Ticket</h3>
        </div>
      </nav>
    </header>
  );
};

export default Header;
