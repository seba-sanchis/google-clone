import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./Home";
import { Results } from "./Results";

export const Router = ({ text, setText }) => {

  return (
    <div className="flex grow">
      <Routes>
        <Route path="/" element={<Home text={text} setText={setText} />} />
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
      </Routes>
    </div>
  );
};
