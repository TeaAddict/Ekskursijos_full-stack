import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-my-orange text-my-dark">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
