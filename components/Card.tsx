import React from "react";
import Image from "next/image";
import Badge from "./Badge";
import {LinkButton} from "./Button";

export default function Card({
  img,
  imgPos,
  badges,
  title,
  text,
  github,
  learnMore,
  launch
}: {
  img: any;
  imgPos: string;
  badges: string[];
  title: string;
  text: string;
  github: string;
  learnMore: string;
  launch: string;
}) {
  return (
    <div className="bg-surface container w-fit lg:w-full mx-auto lg:h-fit flex flex-col lg:flex-row lg:self-stretch rounded-2xl lg:rounded-3xl">
      <div className="relative w-auto h-[184px] lg:h-auto lg:w-[302px] lg:min-w-[302px]">
        <Image
          src={img}
          alt="action card"
          fill={true}
          className={`object-cover rounded-t-2xl lg:rounded-t-none lg:rounded-l-3xl ${imgPos}`}
        />
      </div>
      <div className="flex flex-col p-[22px] lg:py-8 lg:px-10 w-full">
        <div className="flex gap-3 lg:gap-4 mb-[25px] flex-wrap w-[292px] lg:w-full lg:max-w-[1120px]">
          {badges.map((badge, key) => (
            <Badge key={key} text={badge} />
          ))}
        </div>

        <div className="mb-[26px] lg:mb-[34px] space-y-2 w-full">
          <h3 className="font-primary text-white font-bold text-2xl lg:text-[28px] lg:leading-[44px] break-normal w-[290px] lg:w-full">
            {title}
          </h3>

          <p className="font-primary text-[#C3C9D5] text-[17px] lg:text-[20px] leading-[24px] lg:leading-[28px] w-[290px] lg:w-full break-normal">
            {text}
          </p>
        </div>

        <div
          className={`grid grid-cols-2 w-full lg:grid-flow-row ${launch ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-4`}
        >
          <LinkButton
            to={learnMore}
            className="col-span-2 lg:col-span-1"
            text="Learn More"
            variant="primary"
            icon={true}
            shadow={true}
          />
          <LinkButton
            to={github}
            className={`${launch ? "" : "col-span-2"} lg:col-span-1`}
            text="GitHub"
            variant="secondary"
            icon={true}
            shadow={false}
            external
          />
          {launch ? (
            <LinkButton
              to={launch}
              className="lg:col-span-1"
              text="Launch"
              variant="tertiary"
              icon={true}
              shadow={false}
              external
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
