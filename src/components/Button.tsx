import React, { ComponentPropsWithoutRef } from "react";

type Props = {
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"button">;

const Button = ({ children,className, ...props }: Props) => {
  return <button {...props} className={` bg-bg-dim font-bold active:bg-green active:text-bg0 text-3xl transition duration-200 hover:bg-bg3 h-16 rounded-md ${className}`}>{children}</button>;
};

export default Button;
