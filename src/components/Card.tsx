import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type Props<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<T>;

function Card<C extends ElementType>({ children, as, className }: Props<C>) {
  const Component = as || "div";
  return <Component className={`${className || ''} card`}>{children}</Component>;
}

export default Card;
