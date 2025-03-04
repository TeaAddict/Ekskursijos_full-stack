import LoginSection from "../LoginSection";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex justify-around p-5 border-b-[1px]">
      <Navbar />
      <LoginSection />
    </div>
  );
};

export default Header;
