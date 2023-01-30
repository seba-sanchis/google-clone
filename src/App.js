import React, { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Router } from "./components/Router";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-[#202124] min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Router />
        <Footer />
      </div>
    </div>
  );
};

export default App;
