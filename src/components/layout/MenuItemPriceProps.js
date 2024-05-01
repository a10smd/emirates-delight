"use client";
import Trash from "@/components/icons/Trash";
import Plus from "@/components/icons/Plus";
import ChevronDown from "@/components/icons/ChevronDown";
import ChevronUp from "@/components/icons/ChevronUp";
import { useState } from "react";

export default function MenuItemPriceProps({
  name,
  addLabel,
  props,
  setProps,
}) {
  const [isOpen, setIsOpen] = useState(false);
  function addProp() {
    setProps((oldProps) => {
      return [...oldProps, { name: "", price: 0 }];
    });
  }

  function editProp(ev, index, prop) {
    const newValue = ev.target.value;
    setProps((prevSizes) => {
      const newSizes = [...prevSizes];
      newSizes[index][prop] = newValue;
      return newSizes;
    });
  }

  function removeProp(indexToRemove) {
    setProps((prev) => prev.filter((v, index) => index !== indexToRemove));
  }
  return (
    <div className="bg-gray-200 p-2 rounded-xl mt-4">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex gap-1 p-1 border-0 justify-start"
        type="button"
      >
        <span>{name}</span>
        <span>({props?.length})</span>
        {isOpen && <ChevronUp />}
        {!isOpen && <ChevronDown />}
      </button>
      <div className={isOpen ? "block" : "hidden"}>
        {props?.length > 0 &&
          props.map((size, index) => (
            <div className="flex gap-2">
              <div>
                <label className="text-sm text-gray-400">Name</label>
                <input
                  type="text"
                  placeholder="Size Name"
                  value={size.name}
                  onChange={(ev) => editProp(ev, index, "name")}
                  className="w-full px-4 py-2 rounded-xl bg-gray-100 text-gray-800 shadow-md mb-2"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400">Extra Price</label>
                <input
                  type="text"
                  placeholder="Extra Price"
                  value={size.price}
                  onChange={(ev) => editProp(ev, index, "price")}
                  className="w-full px-4 py-2 rounded-xl bg-gray-100 text-gray-800 shadow-md mb-2"
                />
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => removeProp(index)}
                  className="flex w-full justify-center gap-2 text-black font-semibold bg-orange-500 border border-orange-500 rounded-xl py-2 mt-6 px-2"
                >
                  <Trash />
                </button>
              </div>
            </div>
          ))}
        <button
          type="button"
          onClick={addProp}
          className="buttonaddsize items-center"
        >
          <span>{addLabel}</span>
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
