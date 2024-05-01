import Image from "next/image";
import Right from "../icons/Right";
import Info from "../icons/Info";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold ">
          Savor the passion, &nbsp;{" "}
          <span className="text-orange-600">Taste</span> the innovation.
        </h1>
        <p className="my-6 text-gray-500">
          Discover delight in every bite, <br /> A symphony of flavors, a
          culinary delight.
          <br /> At your doorstep, a feast awaits,
          <br /> A harmony of tastes, tempting your plates.
        </p>
        <div className="flex justify-center gap-4">
          <Link href={"/menu"} className="existing-button flex gap-2">
            Order Food
            <Right />
          </Link>
          <Link href={"/about"} className="existing-button flex gap-2">
            Learn More
            <Info />
          </Link>
        </div>
      </div>
      <div className=" relative ">
        <Image
          src={"/Biryani.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt="Biryani"
        />
      </div>
    </section>
  );
}
