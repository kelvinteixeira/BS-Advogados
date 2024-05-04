import React from "react";
import { Contact } from "../Components/Contact";
import { Header } from "../Components/Header";
import { FirstSection } from "../Components/FirstSection";
import { AboutBS } from "../Components/AboutBS";
import { AboutUs } from "../Components/AboutUs";
import { Footer } from "../Components/Footer";
import { OurServices } from "../Components/OurServices";
import { WhatsAppButton } from "../Components/WhatsAppButton";
import { Element } from "react-scroll";

export function Home() {
  return (
    <>
      <Header />
      <FirstSection />
      <Element id="bs-advogados" name="bs-advogados">
        <AboutBS />
      </Element>
      <Element id="team" name="team">
        <AboutUs />
      </Element>
      <Element id="ourServices" name="ourServices">
        <OurServices />
      </Element>
      <Element id="contact" name="contact">
        <Contact />
      </Element>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
