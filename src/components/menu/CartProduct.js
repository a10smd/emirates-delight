import Image from "next/image";
import Trash from "../icons/Trash";
import { cartProductPrice } from "../AppContext";

export default function CartProduct({ product, index = 0, onRemove }) {
  return (
    <div className="flex items-center justify-between gap-4  border-b py-2">
      <div className="flex-shrink-0 w-24 h-24">
        <Image
          className="rounded-xl object-cover"
          width={96}
          height={96}
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col grow justify-center">
        <h3 className="font-semibold">{product.name}</h3>
        {product.size && (
          <div className="text-sm">Size: {product.size.name}</div>
        )}
        {product.extras?.length > 0 && (
          <div className="text-sm text-gray-500">
            {product.extras.map((extra, index) => (
              <div key={index}>
                {extra.name} ${extra.price}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="text-lg font-semibold">${cartProductPrice(product)}</div>
      {!!onRemove && (
        <div className="flex items-center justify-center ml-2">
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="text-black font-semibold bg-orange-500 border border-orange-500 rounded-xl py-2 px-2 p-2"
          >
            <Trash />
          </button>
        </div>
      )}
    </div>
  );
}
