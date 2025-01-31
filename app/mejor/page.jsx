import Categories from "@/components/Categories/Categories";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import Interesar from "@/components/Interesar/Interesar";
import Mejores from "@/components/Mejores/Mejores";

import Navbar from "@/components/Navbar/Navbar";
import Recomendamos from "@/components/Recomendamos/Recomendamos";
import Similares from "@/components/Similares/Similares";

import React from "react";

const page = () => {
  const title = "SIMILARES";
  return (
    <main>
      <Header></Header>

      <Navbar></Navbar>
      <Mejores></Mejores>

      <Recomendamos></Recomendamos>

      <div className="overflow-hidden">
        <Interesar title={title}></Interesar>
      </div>

      <Footer></Footer>
    </main>
  );
};

export default page;
