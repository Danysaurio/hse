import { Hero } from "@/components/sections/Hero/Hero";
import { AboutStrip } from "@/components/sections/AboutStrip/AboutStrip";
import { MartinBio } from "@/components/sections/MartinBio/MartinBio";
import { ServicesGrid } from "@/components/sections/ServicesGrid/ServicesGrid";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid/IndustriesGrid";
import { IntegralBanner } from "@/components/sections/IntegralBanner/IntegralBanner";
import { ShowcaseGrid } from "@/components/sections/ShowcaseGrid/ShowcaseGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStrip />
      <MartinBio />
      <ServicesGrid />
      <IndustriesGrid />
      <IntegralBanner />
      <ShowcaseGrid />
    </>
  );
}
