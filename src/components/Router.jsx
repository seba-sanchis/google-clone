import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Results } from "./Results";

export const Router = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Navigate from="/" to="/search" />} />
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
      </Routes>
    </div>
  );
};
