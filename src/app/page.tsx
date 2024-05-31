import React from "react";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Networking from "@/components/home/Networking";
import Services from "@/components/home/Service";
import Clients from "@/components/home/Clients";

export default function Home() {
  return (
    <React.Fragment>
      <main>
        <Hero />
        <div id="below-hero"/>
        <Services />
        <Networking />
        <Clients />
      </main>
      <Footer />
    </React.Fragment>
  );
}
