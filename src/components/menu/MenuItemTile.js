import Image from "next/image";
import ShoppingCart from "../icons/ShoppingCart";
import AddToCartButton from "./AddToCartButton";

export default function MenuItemTile({ onAddToCart, ...item }) {
  const { image, name, description, basePrice, sizes, extraIngredientsPrices } =
    item;

  const hasSizesOrExtras =
    sizes?.length > 0 || extraIngredientsPrices.length > 0;
  return (
    <div className="bg-gray-200 p-4 rounded-xl text-center group hover:bg-orange-200 hover:shadow-md hover:shadow-black/25 transition-all">
      <div>
        <Image
          src={image}
          width={300}
          height={300}
          className=" max-h-full h-60 block mx-auto border rounded-xl"
          alt="Image"
        />
      </div>
      <h4 className="font-semibold my-1.5 text-black">{name}</h4>
      <p className="text-gray-500 text-sm mb-4 line-clamp-2">{description}</p>
      <AddToCartButton
        image={image}
        hasSizesOrExtras={hasSizesOrExtras}
        onClick={onAddToCart}
        basePrice={basePrice}
      />
    </div>
  );
}
