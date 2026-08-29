import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>
      <Navbar setSidebarOpen={setSidebarOpen} />

      <Sidebar sidebarOpen={sidebarOpen} />

      <Home/>
    </div>
  );
};

export default App;
