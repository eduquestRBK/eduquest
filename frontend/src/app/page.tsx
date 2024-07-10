import Image from "next/image";
import HeroSection from "./component/HeroSection"
import CyclicImage from "./component/CyclicImage";
import ButtonSection from "./component/ButtomSection";
import Footer from './component/Footer'
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <CyclicImage/>
      <ButtonSection/>
      <Footer/>
    </div>
  );
}
