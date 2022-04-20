import React from "react";
import { About } from "../Components/About/About";
import { Contact } from "../Components/Contact/Contact";
import { Lawyers } from "../Components/Lawyers/Lawyers";

export function Home() {
  return (
    <>
      <About />
      <Lawyers />
      <Contact />
    </>
  );
}
