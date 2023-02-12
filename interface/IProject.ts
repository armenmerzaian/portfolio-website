import { StaticImageData } from "next/image";

export interface IProject {
    query: string;
    title: string;
    badges: string[];
    text: string;
    img: string | StaticImageData;
    imgPos: string;
    github: string;
    learnMore: string;
    launch?: string;
    images: string[] | StaticImageData[];
    desc_block_1: string[],
    desc_block_2: string[],
}