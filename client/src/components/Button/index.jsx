import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-md",
};
const variants = {
  fill: {
    gray_100_01: "bg-gray-100_01 text-black-900",
    white_A700: "bg-white-A700 text-black-900",
    gray_300_01: "bg-gray-300_01 text-black-900",
    indigo_900: "bg-indigo-900 text-white-A700",
  },
  outline: {
    white_A700: "border-white-A700 border border-solid text-white-A700",
  },
};
const sizes = {
  xl: "h-[39px] pl-[21px] pr-[17px] text-lg",
  "2xl": "h-[51px] px-[35px] text-lg",
  lg: "h-[37px] px-[35px] text-xs",
  md: "h-9 pl-[29px] pr-[19px] text-lg",
  xs: "h-[23px] px-[11px] text-xs",
  sm: "h-[26px] px-2 text-[13px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "sm",
  color = "indigo_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xl", "2xl", "lg", "md", "xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["gray_100_01", "white_A700", "gray_300_01", "indigo_900"]),
};

export { Button };
