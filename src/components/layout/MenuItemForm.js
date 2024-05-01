"use client";
import EditableImage from "@/components/layout/EditableImage";
import { useState, useEffect } from "react";
import MenuItemPriceProps from "./MenuItemPriceProps";

export default function MenuItemForm({ onSubmit, menuItem }) {
  const [image, setImage] = useState(menuItem?.image || "");
  const [name, setName] = useState(menuItem?.name || "");
  const [description, setDescription] = useState(menuItem?.description || "");
  const [basePrice, setBasePrice] = useState(menuItem?.basePrice || "");
  const [sizes, setSizes] = useState(menuItem?.sizes || []);
  const [extraIngredientsPrices, setExtraIngredientsPrices] = useState(
    menuItem?.extraIngredientsPrices || []
  );
  const [category, setCategory] = useState(menuItem?.category || "");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/api/categories").then((res) => {
      res.json().then((categories) => setCategories(categories));
    });
  }, []);
  return (
    <div className="flex justify-center items-start h-screen">
      <div className="flex flex-col items-center w-full max-w-2xl">
        <form
          onSubmit={(ev) =>
            onSubmit(ev, {
              image,
              name,
              description,
              basePrice,
              sizes,
              extraIngredientsPrices,
              category,
            })
          }
          className="mt-8 w-full"
        >
          <div
            className="md:grid items-start gap-4"
            style={{ gridTemplateColumns: ".3fr .7fr" }}
          >
            <div>
              <EditableImage link={image} setLink={setImage} />
            </div>
            <div className="flex flex-col justify-center">
              <label className="text-sm text-gray-400">Item Name</label>
              <input
                className="w-full px-4 py-2 rounded-xl bg-gray-200 text-gray-800 shadow-md"
                type="text"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
              />
              <label className="text-sm text-gray-400">Description</label>
              <input
                className="w-full px-4 py-2 rounded-xl bg-gray-200 text-gray-800 shadow-md"
                type="text"
                value={description}
                onChange={(ev) => setDescription(ev.target.value)}
              />
              <label className="text-sm text-gray-400">Categories</label>
              <select
                className="w-full px-3 py-2 rounded-xl bg-gray-200 text-gray-800 shadow-md"
                value={category}
                required={true}
                onChange={(ev) => {
                  setCategory(ev.target.value);
                }}
              >
                <option value="" disabled={true}>
                  Select a category
                </option>
                {categories?.length > 0 &&
                  categories.map((c, i) => (
                    <option key={c._id} value={c._id}>
                      {c.name}
                    </option>
                  ))}
              </select>
              <label className="text-sm text-gray-400">Base Price</label>
              <input
                className="w-full px-4 py-2 rounded-xl bg-gray-200 text-gray-800 shadow-md"
                type="text"
                value={basePrice}
                onChange={(ev) => setBasePrice(ev.target.value)}
              />
              <MenuItemPriceProps
                name={"Sizes"}
                addLabel={"Add Item Size"}
                props={sizes}
                setProps={setSizes}
              />

              <MenuItemPriceProps
                name={"Extra Ingredients"}
                addLabel={"Add Ingredients Prices"}
                props={extraIngredientsPrices}
                setProps={setExtraIngredientsPrices}
              />
              <button className="save-button mt-6" type="submit">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
