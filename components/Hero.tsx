import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

export default function Hero({ img }: { img: any }) {
  return (
    <section
      id="hero"
      className="container flex flex-col lg:flex-row gap-28 lg:gap-24 mx-auto mb-6 bg-background justify-center lg:justify-between items-center"
    >
      <div className="mx-[30px] lg:mx-0 sm:mx-auto lg:max-w-[50%]">
        <h1 className="font-primary font-bold text-[32px] lg:text-[48px] leading-[40px] lg:leading-[60px] text-primary">
          Hi! <br className="lg:hidden" /> I'm Armen.
        </h1>
        <h2 className="mt-[18px] mb-[38px] font-primary font-medium text-[18px] lg:text-[21px] leading-[27px] lg:leading-[35px] text-[#C3C9D5]">
          An aspiring developer looking to make a name for himself with a
          passion for front-end & mobile development. Currently completing a
          Bachelor of Technology at Seneca College.
        </h2>
        <Button
          to="#projects"
          text="Browse my projects"
          variant="primary"
          shadow={true}
          arrow={false}
          className="w-fit"
        />
      </div>
      <div className="relative w-auto h-auto lg:w-[500px] lg:h-[500px]">
        <Image src={img} alt="Armen" fill={true} className="object-cover rounded-full" />
      </div>
    </section>
  );
}
