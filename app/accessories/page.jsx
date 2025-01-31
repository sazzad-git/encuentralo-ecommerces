import Ceache from "@/components/Ceache/Ceache";
import Comida from "@/components/Comida/Comida";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Interesa from "@/components/Interesa/Interesa";
import Interesar from "@/components/Interesar/Interesar";
import Navbar from "@/components/Navbar/Navbar";
import Similares from "@/components/Similares/Similares";
import React from "react";

const page = () => {
  const title = "SIMILARES";
  return (
    <main>
      <Header></Header>

      <Navbar></Navbar>
      <Ceache></Ceache>

      <Comida></Comida>

      <Interesa></Interesa>

      <div className="overflow-hidden">
        <Interesar title={title}></Interesar>
      </div>

      <Footer></Footer>
    </main>
  );
};

export default page;
