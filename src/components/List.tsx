import React from "react";

type Props<T> = {
  items: T[];
  render: (item: T, index?: number) => React.ReactNode;
};

function List<T>({ items, render }: Props<T>) {
  return (
    <>
    {items.map(render)}
    </>
  );
}

export default List;
