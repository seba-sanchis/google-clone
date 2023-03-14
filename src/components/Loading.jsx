import React from "react";
import { Puff } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="m-auto flex justify-center items-center">
      <Puff color="#1a73e8" height={50} width={50} />
    </div>
  );
};
