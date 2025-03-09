import LoginSection from "../LoginSection";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex justify-around p-5 sticky top-0 z-10 bg-my-orange">
      <Navbar />
      <LoginSection />
    </div>
  );
};

export default Header;
