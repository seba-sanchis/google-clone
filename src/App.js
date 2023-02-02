import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Router } from "./components/Router";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [text, setText] = useState("");

  const { pathname } = useLocation();

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="flex flex-col dark:bg-[#202124] min-h-screen">
        {pathname !== "/" && (
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} text={text} setText={setText} />
        )}
        <Router text={text} setText={setText} />
        {pathname !== "/" && <Footer />}
      </div>
    </div>
  );
};

export default App;
