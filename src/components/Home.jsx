import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo-md.png";

export const Home = ({ text, setText }) => {
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate("/search");
    }
  };

  return (
    <div className="flex flex-col w-[100%]">
      <div className="h-[60px]"></div>
      <div className="flex flex-1 items-end justify-center min-h-[150px] max-h-[290px]">
        <img
          className="max-w-[100%] max-h-[100%] w-[auto] h-[92px] object-contain object-[center_bottom]"
          src={logo}
          alt="logo"
        />
      </div>

      <div className="flex flex-col items-center justify-center p-[20px] w-[100vw]">
        <div className="flex w-full items-center max-w-[584px] h-[46px] rounded-[24px] border border-solid border-[#dfe1e5] mt-[6px] bg-[#fff] hover:shadow-[0_1px_6px_rgba(32,33,36,0.28)] hover:border-[rgba(223,225,229,0)]">
          <span className="mx-[13px] leading-[20px]">
            <svg
              className="w-[20px] h-[20px] fill-[#9aa0a6]"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </span>
          <input
            value={text}
            type="text"
            className="flex w-full h-[34px] pr-[8px] bg-[transparent] outline-none break-words text-[16px] leading-[39px] text-[rgba(0,0,0,.87)]"
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {text && (
            <button
              type="button"
              className="px-[12px]"
              onClick={() => setText("")}
            >
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-[24px] h-[24px] fill-[#70757a]"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </button>
          )}
        </div>
        <div className="h-[70px] pt-[18px]">
          <button
            className="min-w-[54px] h-[36px] text-[14px] text-[#3c4043] text-center leading-[27px] border border-solid px-[16px] my-[11px] mx-[5px] border-[#f8f9fa] rounded-[4px] bg-[#f8f9fa] cursor-pointer select-none hover:border-[#dadce0] hover:text-[#202124] hover:shadow-[0_1px_1px_rgba(0,0,0,.1)]"
            type="button"
            onClick={() => navigate("/search")}
          >
            Google Search
          </button>
          <button
            className="min-w-[54px] h-[36px] text-[14px] text-[#3c4043] text-center leading-[27px] border border-solid px-[16px] my-[11px] mx-[5px] border-[#f8f9fa] rounded-[4px] bg-[#f8f9fa] cursor-pointer select-none hover:border-[#dadce0] hover:text-[#202124] hover:shadow-[0_1px_1px_rgba(0,0,0,.1)]"
            type="button"
          >
            I'm Feeling Lucky
          </button>
        </div>
      </div>
    </div>
  );
};
