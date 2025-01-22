import Categories from "@/components/Categories/Categories";
import Destacados from "@/components/Destacados/Destacados";
import SimpleSlider from "@/components/Explora/Explora";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import Interesar from "@/components/Interesar/Interesar";
import Navbar from "@/components/Navbar/Navbar";
import SmallInteresar from "@/components/SmallInteresar/SmallInteresar";
import Trendencla from "@/components/Trendencla/Trendencla";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Categories></Categories>

      <Destacados></Destacados>
      <SmallInteresar></SmallInteresar>
      <Interesar></Interesar>
      <Trendencla></Trendencla>
      <SimpleSlider></SimpleSlider>
      <Footer></Footer>
    </main>
  );
}
