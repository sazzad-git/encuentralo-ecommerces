import Categories from "@/components/Categories/Categories";
import Destacados from "@/components/Destacados/Destacados";
import SimpleSlider from "@/components/Explora/Explora";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import Interesar from "@/components/Interesar/Interesar";

import Smiler from "@/components/Interesar/Interesar";
import Navbar from "@/components/Navbar/Navbar";
import SmallInteresar from "@/components/SmallInteresar/SmallInteresar";
import Trendencla from "@/components/Trendencla/Trendencla";

export default function Home() {
  const title = "TE PODRIA INTERESAR";
  return (
    <main>
      <Header></Header>
      <Navbar></Navbar>
      <div class="overflow-hidden">
        <HeroSection></HeroSection>
      </div>
      <Categories></Categories>
      <Destacados></Destacados>
      <Interesar title={title}></Interesar>
      <Trendencla></Trendencla>
      <SimpleSlider></SimpleSlider>
      <Footer></Footer>
    </main>
  );
}
