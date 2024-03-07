import React from "react";

const sizes = {
  "5xl": "text-[19px] font-normal leading-[22px]",
  xs: "text-[9px] font-normal leading-3",
  lg: "text-xs font-normal leading-4",
  s: "text-[10px] font-normal leading-[13px]",
  "2xl": "text-[15px] font-normal leading-[19px]",
  "3xl": "text-base font-normal leading-5",
  "4xl": "text-lg font-normal leading-[23px]",
  xl: "text-sm font-normal leading-[18px]",
  md: "text-[11px] font-normal",
};

const Text = ({ children, className = "", as, size = "4xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-helveticalight ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
