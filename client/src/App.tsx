import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] p-4">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
