"use client";

import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { Vortex } from "./ui/Vortex";
import { TextGenerateEffect2 } from "./ui/TextGenerateEffect2";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.01] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
          Hello, I'm Diyara Rashid, a creative and driven developer
          </p>

          <TextGenerateEffect
            words="Welcome to My Portfolio"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <Vortex
            className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            backgroundColor="transparent"
          />

          <TextGenerateEffect2
            words="Passionate about creating impactful and innovative web solutions."
            className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
          />

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
