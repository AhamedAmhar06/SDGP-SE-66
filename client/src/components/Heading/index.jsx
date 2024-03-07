import React from "react";

const sizes = {
  "2xl": "text-4xl font-bold leading-[34px]",
  xl: "text-3xl font-bold leading-[35px]",
  s: "text-[13px] font-bold leading-[15px]",
  md: "text-[15px] font-bold leading-[18px]",
  xs: "text-xs font-bold leading-[14px]",
  lg: "text-xl font-bold leading-[23px]",
};

const Heading = ({ children, className = "", size = "2xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-indigo-900 font-helvetica ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
