import React, { ReactNode } from "react";

type Props = {
  label?: string;
  id: string;
  icon?:ReactNode
} & React.ComponentPropsWithRef<"input">;




const Input = ({ id, label, ref, className,icon, ...props }: Props) => {
  return (
    <div className="">
      {label && <label htmlFor={id}>{label}</label>}
      <div className={`flex gap-2 bg-bg-dim w-full p-2 group  transition duration-200 outline-none rounded-md focus-within:ring-4 focus-within:ring-green ${className}`}>
        {icon}
        <input
          id={id}
          name={id}
          {...props}
          ref={ref}
          className={`bg-transparent outline-none w-full`}
        />
      </div>
    </div>
  );
};

export default Input;
