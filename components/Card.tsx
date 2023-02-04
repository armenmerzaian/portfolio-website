import React from "react";
import Image from "next/image";
import Badge from "./Badge";
import Button from "./Button";

export default function Card({
  img,
  badges,
  title,
  text,
  children,
}: {
  img: any;
  badges: string[];
  title: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-surface w-fit min-w-fit max-w-fit mx-auto lg:h-fit flex flex-col lg:flex-row lg:self-stretch rounded-2xl lg:rounded-3xl">
      <div className="relative w-auto h-[184px] lg:h-auto lg:w-[302px]">
        <Image
          src={img}
          alt="action card"
          fill
          className="object-cover rounded-t-2xl lg:rounded-t-none lg:rounded-l-3xl"
        />
      </div>
      <div className="flex flex-col p-[22px] lg:py-8 lg:px-10 w-fit">
        <div className="flex gap-3 lg:gap-4 mb-[25px] flex-wrap w-[292px] lg:max-w-[1120px]">
          {badges.map((badge, key) => (
            <Badge key={key} text={badge} />
          ))}
        </div>

        <div className="mb-[26px] lg:mb-[34px] space-y-2 w-full">
          <h3 className="font-primary text-white font-bold text-2xl lg:text-[28px] lg:leading-[44px]">
            {title}
          </h3>

          <p className="font-primary text-[#C3C9D5] text-[17px] lg:text-[20px] leading-[24px] lg:leading-[28px] w-[290px] break-normal">
            {text}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-flow-col gap-4 w-fit min-w-max">
          {children}
        </div>
      </div>
    </div>
  );
}
