import React, { useEffect } from "react";
import { useDebounce } from "use-debounce";

import { useResultContext } from "../contexts/ResultContextProvider";

export const Search = ({ text, setText }) => {
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="flex items-center w-[692px] h-[46px] rounded-[24px] ml-[10px] bg-[#fff] shadow-[0_2px_5px_1px_rgba(64,60,67,0.16)] hover:shadow-[0_2px_8px_1px_rgba(64,60,67,0.24)] hover:border-[rgba(223,225,229,0)]">
      <input
        value={text}
        type="text"
        className="w-full h-[39px] py-[5px] pl-[20px] bg-[transparent] outline-none text-[16px] leading-[39px] text-[rgba(0,0,0,.87)]"
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <button type="button" className="px-[12px]" onClick={() => setText("")}>
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
      <span className="h-[65%] border-l-[1px] border-solid border-[#dadce0]"></span>
      <button className="px-[13px]">
        <svg
          className="w-[24px] h-[24px] fill-[#4285f4]"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
      </button>
    </div>
  );
};
