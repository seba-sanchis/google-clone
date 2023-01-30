import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    url: "/search",
    text: "All",
    icon: (
      <svg className="w-4 h-4 mr-[5px]" focusable="false" viewBox="0 0 24 24">
        <path d="M16.32 14.88a8.04 8.04 0 1 0-1.44 1.44l5.76 5.76 1.44-1.44-5.76-5.76zm-6.36 1.08c-3.36 0-6-2.64-6-6s2.64-6 6-6 6 2.64 6 6-2.64 6-6 6"></path>
      </svg>
    ),
  },
  {
    url: "/images",
    text: "Images",
    icon: (
      <svg className="w-4 h-4 mr-[5px]" focusable="false" viewBox="0 0 24 24">
        <path d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5"></path>
      </svg>
    ),
  },
  {
    url: "/videos",
    text: "Videos",
    icon: (
      <svg className="w-4 h-4 mr-[5px]" focusable="false" viewBox="0 0 24 24">
        <path d="M10 16.5l6-4.5-6-4.5v9zM5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm14.5 2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2h15.2A2.4 2.4 0 0 1 22 4.4v15.1a2.5 2.5 0 0 1-2.5 2.5"></path>
      </svg>
    ),
  },
  {
    url: "/news",
    text: "News",
    icon: (
      <svg
        className="w-4 h-4 mr-[5px]"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.25-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.64 0 3 1.25 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12zM12 9h6V7h-6v2z"></path>
      </svg>
    ),
  },
];

export const Links = () => {
  return (
    <div className="flex ml-[180px]">
      {links.map(({ url, text, icon }, index) => (
        <NavLink
          to={url}
          key={index}
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-center border-b-[3px] pt-[17px] pr-[12px] pb-[11px] pl-[10px] mt-[16px] text-sm text-[#1a73e8] dark:text-[#8ab4f8] fill-[#1a73e8] dark:fill-[#8ab4f8]"
              : "flex items-center justify-center pt-[17px] pr-[12px] pb-[11px] pl-[10px] mt-[16px] text-sm text-[#5f6368] dark:text-[#969ba1] fill-[#5f6368] dark:fill-[#969ba1]"
          }
        >
          {icon}
          {text}
        </NavLink>
      ))}
    </div>
  );
};
