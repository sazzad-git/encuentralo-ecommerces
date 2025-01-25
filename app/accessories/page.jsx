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

      <Interesa></Interesa>

      <Similares></Similares>

      <Footer></Footer>
    </main>
  );
};

export default page;
