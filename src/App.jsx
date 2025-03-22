import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Game from "./pages/Game";

const App = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <Game />
      <Footer />
    </div>
  );
};

export default App;
