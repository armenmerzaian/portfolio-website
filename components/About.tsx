import { IAboutMe } from "@/interface/IAboutMe";
import React from "react";
import Subheading from "./Subheading";
import Image from "next/image";
import Link from "next/link";
import portrait from "/public/armen_portrait.png"
import {HiDocumentText} from "react-icons/hi"

export default function About({ data }: { data: IAboutMe }) {
  return (
    <div
      id="about"
      className="container mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-0 justify-between"
    >
      <div className="md:w-[55%]">
        <Subheading>About me</Subheading>
        <div className="font-primary text-lg leading-[27px] lg:text-[21px] lg:leading-[35px] text-[#C3C9D5] font-medium space-y-6 mx-[30px] lg:mx-0">
          <p>{data.paragraph1}</p>
          <p>{data.paragraph2}</p>
          <p>{data.paragraph3}</p>
          <p>{data.paragraph4}</p>
          <Link href={data.resume} target="_blank" className="text-base lg:text-lg font-normal hover:underline flex justify-start gap-2 lg:gap-4 items-center text-white">
            <HiDocumentText />
            Resume
          </Link>
        </div>
      </div>
      <div className="w-[300px] h-[500px] lg:w-[400px] lg:h-[600px] relative">
        <Image
          src={portrait}
          alt="portrait"
          fill
          className="object-cover rounded-2xl lg:rounded-3xl"
        />
      </div>
    </div>
  );
}
