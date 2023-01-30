import React from "react";

export const Footer = () => {
  return (
    <div className="h-[106px] pt-[12px] pb-[12px] bg-[#f2f2f2]">
      <div className="flex h-[40px] items-center border-b border-solid border-[#dadce0]">
        <span className="text-[15px] leading-[40px] text-[#70757a] ml-[205px] pl-[27px]">Argentina</span>
        <div className="flex items-center ml-[13px] pl-[16px] border-l border-solid border-[#dadce0]">
          <span className="flex w-[10px] h-[10px] rounded-full mr-[4px] bg-[#70757a]"></span>
          <span className="flex items-center text-[14px] leading-[40px] font-bold text-[#4d5156]">San Isidro, Buenos Aires Province</span>
        </div>
      </div>
      <div className="flex items-center text-[14px] leading-[22px] text-[#70757a] h-[40px] ml-[205px] pl-[27px]">© 2023 Search engine project from seba-sanchis</div>
    </div>
  );
};
