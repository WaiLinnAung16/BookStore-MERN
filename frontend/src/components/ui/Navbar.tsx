import { NavLink } from "react-router-dom";
import { TbBooks } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="z-50 fixed right-0 h-full p-5 flex flex-col justify-between items-center bg-secondary text-primary">
      {/* nav menus */}
      <div className="flex items-center gap-3">
        <NavLink to={"/"} className="navMenu">
          Home
        </NavLink>
        <NavLink to={"/books"} className="navMenu">
          Books
        </NavLink>
      </div>
      {/* logo */}
      <h1 className="font-bold text-9xl"><TbBooks/></h1>
    </nav>
  );
};

export default Navbar;
