import React from "react";

type Props = {
  label: string;
  id: string;
} & React.ComponentPropsWithRef<"input">;

const Input = ({ id, label, ref, className, ...props }: Props) => {
  return (
    <p className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <div>
        <input
          id={id}
          name={id}
          {...props}
          ref={ref}
          className={`bg-bg-dim w-full  text-fg p-2  outline-none rounded-md focus:ring-4 focus:ring-green ${className} `}
        />
      </div>
    </p>
  );
};

export default Input;
