import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-10">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `hover:text-white ${isActive ? "text-white" : ""}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `hover:text-white ${isActive ? "text-white" : ""}`
        }
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
