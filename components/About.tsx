import { IAboutMe } from "@/interface/IAboutMe";
import React from "react";
import Subheading from "./Subheading";
import Image from "next/image";

export default function About({ data }: { data: IAboutMe }) {
  const imageSource: string =
    "https://images.unsplash.com/photo-1618155530308-c37a780555e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
  return (
    <div
      id="about"
      className="container mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-0 justify-between"
    >
      <div className="md:w-[60%]">
        <Subheading>About me</Subheading>
        <div className="font-primary text-lg leading-[27px] lg:text-[21px] lg:leading-[35px] text-[#C3C9D5] font-medium space-y-6 mx-[30px] lg:mx-0">
          <p>{data.paragraph1}</p>
          <p>{data.paragraph2}</p>
          <p>{data.paragraph3}</p>
        </div>
      </div>
      <div className="w-[300px] h-[500px] relative">
        <Image
          src={imageSource}
          alt="portrait"
          fill
          className="object-cover rounded-2xl lg:rounded-3xl"
        />
      </div>
    </div>
  );
}
