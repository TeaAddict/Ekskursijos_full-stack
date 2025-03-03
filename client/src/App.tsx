import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] p-4">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
