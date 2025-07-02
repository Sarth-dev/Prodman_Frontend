import Image from "next/image";
import HeroSection from "./Component/HeroSection";
import FeaturesSection from "./Component/FeatureSection";
import PreviewSection from "./Component/PreviewSection";
import CTASection from "./Component/CTA";
import Footer from "./Component/utils/Footer";
import Navbar from "./Component/utils/Navbar";

export default function Home() {
  return (
   <>
   <Navbar/>
    <HeroSection/>
    <FeaturesSection/>
    <PreviewSection/>
    <CTASection/>
    <Footer/>
   </>
  );
}
