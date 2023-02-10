import React from 'react'
import {
  FaHtml5,
  FaJsSquare,
  FaCss3Alt,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiFlutter,
  SiCplusplus,
  SiFirebase,
  SiVercel,
  SiHeroku,
} from "react-icons/si";
import LabeledIcon from './LabeledIcon';
import Subheading from './Subheading';

export default function Technologies() {
  return (
    <div id="technologies" className="container mx-auto">
      <Subheading>Technologies I work with...</Subheading>
      <div className="flex flex-wrap mx-4 lg:mx-0 justify-center gap-4">
        <LabeledIcon label="TypeScript">
          <SiTypescript className="text-[28px] lg:text-[58px]" />
        </LabeledIcon>
        <LabeledIcon label="JavaScript">
          <FaJsSquare className="text-[34px] lg:text-[64px]" />
        </LabeledIcon>
        <LabeledIcon label="HTML5">
          <FaHtml5 className="text-[34px] lg:text-[64px]" />
        </LabeledIcon>
        <LabeledIcon label="CSS3">
          <FaCss3Alt className="text-[34px] lg:text-[64px]" />
        </LabeledIcon>
        <LabeledIcon label="React">
          <FaReact className="text-[34px] lg:text-[64px]" />
        </LabeledIcon>
        <LabeledIcon label="Angular">
          <FaAngular className="text-[34px] lg:text-[64px]" />
        </LabeledIcon>
        <LabeledIcon label="NodeJS">
          <FaNodeJs className="text-[34px] lg:text-[64px]" />
        </LabeledIcon>
        <LabeledIcon label="Flutter">
          <SiFlutter className="text-[34px] lg:text-[64px]" />
        </LabeledIcon>
        <LabeledIcon label="Java">
          <FaJava className="text-[34px] lg:text-[64px]" />
        </LabeledIcon>
        <LabeledIcon label="C++">
          <SiCplusplus className="text-[34px] lg:text-[64px]" />
        </LabeledIcon>
        <LabeledIcon label="Firebase">
          <SiFirebase className="text-[34px] lg:text-[64px]" />
        </LabeledIcon>
        <LabeledIcon label="Vercel">
          <SiVercel className="text-[34px] lg:text-[64px]" />
        </LabeledIcon>
        <LabeledIcon label="Heroku">
          <SiHeroku className="text-[34px] lg:text-[64px]" />
        </LabeledIcon>
        <LabeledIcon label="GitHub">
          <FaGithub className="text-[34px] lg:text-[64px]" />
        </LabeledIcon>
      </div>
    </div>
  );
}