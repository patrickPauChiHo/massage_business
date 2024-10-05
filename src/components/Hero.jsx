import Filter from "./Filter";
import React from "react";
import Nav from "./Nav";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section className="hero relative md:h-dvh lg:h-dvh">
      <Filter />
      <Nav />
      <HeroContent />
    </section>
  );
};

export default Hero;
