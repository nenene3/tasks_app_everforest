import React, { ComponentPropsWithRef, ReactNode } from "react";
import './ActionButton.css'
type Props = {
  children: ReactNode;
} & ComponentPropsWithRef<"button">;

const ActionButton = ({ children, className, ...props }: Props) => {
  return (
    <button {...props} className={`actionBtn  ${className}`}>
      {children}
    </button>
  );
};

export default ActionButton;
