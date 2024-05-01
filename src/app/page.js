import Chefs from "../components/layout/Chefs";
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import OurLocation from "../components/layout/OurLocation";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <Chefs />
      <OurLocation />
    </>
  );
}
