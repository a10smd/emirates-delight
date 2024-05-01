import ShoppingCart from "../icons/ShoppingCart";

export default function AddToCartButton({
  hasSizesOrExtras,
  onClick,
  basePrice,
  image,
}) {
  return (
    <div className="button-container">
      <button className="custom-button" type="button" onClick={onClick}>
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <ShoppingCart />
          </div>
        </div>
        <span>
          {hasSizesOrExtras
            ? `Add to Cart (from $${basePrice})`
            : `Add to Cart $${basePrice}`}
        </span>
      </button>
    </div>
  );
}
