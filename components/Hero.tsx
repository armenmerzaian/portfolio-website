import Image from "next/image";
import React from "react";
import {LinkButton} from "./Button";

export default function Hero({ img }: { img: any }) {
  return (
    <section
      id="hero"
      className="container flex flex-col lg:flex-row gap-28 lg:gap-24 mx-auto mb-6 bg-background justify-center lg:justify-between items-center"
    >
      <div className="mx-[30px] lg:mx-0 sm:mx-auto lg:max-w-[50%]">
        <h1 className="font-primary font-bold text-[32px] lg:text-[48px] leading-[40px] lg:leading-[60px] text-primary">
          <span className="font-primary">{"Hi! "}</span>
          <br className="lg:hidden" />
          {" I'm Armen."}
        </h1>
        <h2 className="mt-[18px] mb-[38px] font-primary font-medium text-[18px] lg:text-[21px] leading-[27px] lg:leading-[35px] text-[#C3C9D5]">
          {"I'm a software developer specializing in "}
          <span className="text-primary">full stack web</span> and{" "}
          <span className="text-primary">mobile development</span>. I bring a
          unique skillset to deliver stunning, functional, and scalable
          products.{" "}
          <span className="font-secondary block text-primary mt-4 text-2xl">
            {"Let's build something great together!"}
          </span>
          <span className="block mt-4 text-[#C3C9D5]/70 text-base">
            Currently completing a Bachelor of Technology at Seneca College.
          </span>
        </h2>
        <LinkButton
          to="#projects"
          text="Browse my projects"
          variant="primary"
          shadow={true}
          icon={false}
          className="w-fit"
        />
      </div>
      <div className="relative w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] lg:mb-20">
        <Image
          src={img}
          alt="Armen"
          fill={true}
          className="object-cover drop-shadow-2xl border-8 border-surface rounded-full"
        />
      </div>
    </section>
  );
}

// image shadow: rounded-full shadow-2xl shadow-primary/10