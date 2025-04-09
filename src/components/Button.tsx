import React, { ComponentPropsWithoutRef } from "react";

type Props = {
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"button">;

const Button = ({ children, ...props }: Props) => {
  return <button {...props}>{children}</button>;
};

export default Button;
