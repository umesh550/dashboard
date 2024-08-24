import React from "react";
import { IoMdClose } from "react-icons/io";

interface WidgetProps {
  id: number;
  title: string;
  children: React.ReactNode;
  onRemove: () => void;
}

const Widget: React.FC<WidgetProps> = ({ title, children, onRemove }) => {
  return (
    <div className="relative max-w-96 p-6 bg-white rounded-2xl shadow-md">
      <p className="font-bold mb-2">{title}</p>
      <div className="mb-4">{children}</div>
      <button
        onClick={onRemove}
        className="text-neutral-400 hover:text-black absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center focus:outline-none rounded-full"
      >
        <IoMdClose />
      </button>
    </div>
  );
};

export default Widget;
