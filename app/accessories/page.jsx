import Ceache from "@/components/Ceache/Ceache";
import Comida from "@/components/Comida/Comida";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Interesa from "@/components/Interesa/Interesa";
import Navbar from "@/components/Navbar/Navbar";
import Similares from "@/components/Similares/Similares";
import React from "react";

const page = () => {
  return (
    <main>
      <Header></Header>

      <Navbar></Navbar>
      <Ceache></Ceache>

      <Comida></Comida>

      <Interesa></Interesa>

      <div className="overflow-hidden">
        <Similares></Similares>
      </div>

      <Footer></Footer>
    </main>
  );
};

export default page;
