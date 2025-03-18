import React, { ComponentPropsWithRef, ReactNode } from "react";

type TVariant =
  | "primary"
  | "secondray"
  | "danger"
  | "warning"
  | "dark"
  | "info"
  | "light"
  | "outline-primary"
  | "outline-secondray"
  | "outline-danger"
  | "outline-warning"
  | "outline-dark"
  | "outline-info"
  | "outline-light";

type TSize = "1" | "2" | "3" | "4" | "5" | '0' ;

type TButton = ComponentPropsWithRef<"button"> & {
  variant: TVariant;
  size?: TSize;
};

function Button({ children, variant, size, ...rest }: TButton) {
  console.log(checkVariant(variant));
  
  return (
    <button className={`${checkVariant(variant)} ${checkSize(size as '2')}`} {...rest}>{children}</button>
  )
}

export default Button;

const checkVariant = (variant: TVariant) => {
  if (variant === "danger") {
    return "rounded-full bg-red-800 text-white py-2 px-8";
  } else if (variant === "primary") {
    return "rounded-full bg-blue-800 text-white py-2 px-8";
  } else if (variant === "dark") {
    return "rounded-full bg-neutral-800 text-white py-2 px-8";
  } else if (variant === "secondray") {
    return "rounded-full bg-gray-500 text-white py-2 px-8";
  } else if (variant === "warning") {
    return "rounded-full bg-yellow-300 text-black py-2 px-8";
  } else if (variant === "info") {
    return "rounded-full bg-cyan-300 text-black py-2 px-8";
  } else if (variant === "light") {
    return "rounded-full bg-gray-100 text-black py-2 px-8";
  } else if (variant === "outline-primary") {
    return "rounded-full border border-blue-800 text-blue-800 py-2 px-8";
  } else if (variant === "outline-secondray") {
    return "rounded-full border border-gray-500 text-gray-500 py-2 px-8";
  } else if (variant === "outline-danger") {
    return "rounded-full border border-red-800 text-red-800 py-2 px-8";
  } else if (variant === "outline-warning") {
    return "rounded-full border border-yellow-300 text-yellow-300 py-2 px-8";
  } else if (variant === "outline-info") {
    return "rounded-full border border-cyan-300 text-cyan-300 py-2 px-8";
  } else if (variant === "outline-dark") {
    return "rounded-full border border-neutral-800 text-neutral-800 py-2 px-8";
  } else if (variant === "outline-light") {
    return "rounded-full border border-gray-900 text-gray-900 py-2 px-8";
  }
};

const checkSize = (size: TSize) => {
  if (size === "1") {
    return "py-1 px-6";
  } else if (size === "2") {
    return "py-2 px-8";
  } else if (size === "3") {
    return "py-3 px-10";
  } else if (size === "4") {
    return "py-4 px-12 text-xl";
  } else if (size === "5") {
    return "py-4 px-12 text-2xl";
  } else if (size === "0") {
    return "py-1 px-6 text-sm";
  }
};
