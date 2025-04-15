import React, { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
  header: string;
};

const Modal = ({ children, isOpen, onClose, header }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: globalThis.MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="absolute overflow-hidden inset-0 flex min-h-screen items-center justify-center bg-bg-dim/40"
      ref={modalRef}
    >
      <div className="">
        <div className="w-full bg-bg-dim flex h-9 items-center justify-between rounded-t-lg">
          <header className="pl-3 font-bold  font-mono  select-none">
          {header}
          </header>
          <div className="flex px-2 gap-2 ">
            <div className="size-4 bg-yellow rounded group flex items-center justify-center">
              <span className="hidden group-hover:block text-black font-extrabold select-none ">
                -
              </span>
            </div>
            <div className="size-4 bg-green rounded group flex items-center justify-center">
              <span className=" hidden group-hover:block text-black font-extrabold select-none ">
                #
              </span>
            </div>
            <div
              className="size-4 bg-red rounded group flex items-center justify-center"
              onClick={onClose}
            >
              <span className="hidden  group-hover:block  text-black font-extrabold select-none ">
                x
              </span>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>,
    document.body!
  );
};

export default Modal;
