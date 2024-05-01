import Image from "next/image";
import SectionHeaders from "./SectionHeaders";
import ChefsDetail from "../ChefsDetail/ChefsDetail";

export default function Chefs() {
  return (
    <section>
      <div>
        <div className="absolute left-0 right-0 w-full justify-start">
          <div className="absolute left-0 -top-[-120px] text-left -z-10 lg:block hidden">
            <Image
              src={"/Design2.png"}
              width={150}
              height={250}
              alt={"Design1"}
            />
          </div>
          <div className="absolute -top-[140px] right-0 -z-10 lg:block hidden">
            <Image
              src={"/Design1.png"}
              width={150}
              height={250}
              alt={"Design2"}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="relative left-0 right-0 w-full justify-start">
          <div className="absolute left-0 -top-[40px] -z-10">
            <Image
              src={"/MichelinStar.png"}
              width={80}
              height={150}
              alt={"MichelinStar1"}
            />
          </div>
          <div className="absolute -top-[40px] right-0 -z-10">
            <Image
              src={"/MichelinStar.png"}
              width={80}
              height={150}
              alt={"MichelinStar2"}
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-14">
        <SectionHeaders subHeader={"Our"} mainHeader={"Michelin Chef"} />
      </div>
      <div className="grid  gap-4 ">
        <ChefsDetail />
      </div>
    </section>
  );
}
