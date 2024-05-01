import Image from "next/image";

export default function ChefsDetail() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg hover:bg-orange-200 hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="flex items-center">
        <div className="w-1/3">
          <Image
            src="/Chef1.png"
            className="h-60 mx-auto"
            alt="Order Biryani"
          />
        </div>
        <div className="w-2/3 pl-4 text-left">
          <h4 className="font-bold text-lg text-center my-1.5 text-black">
            Chef Gordon
          </h4>
          <p className="text-gray-500 mb-4">
            Chef Gordon, a creative culinary wizard, has
            <span className="text-orange-500 font-bold">
              {" "}
              15 Michelin Stars
            </span>
            , thanks to his unique and delicious dishes. His imaginative
            approach to cooking, blending different flavors, has earned him
            recognition in the culinary world. Gordons commitment to making
            extraordinary food has made him a rising star with a well-deserved
            Michelin star.
          </p>
          {/* <button className="shadow__btn">See More</button> */}
        </div>
      </div>
    </div>
  );
}
