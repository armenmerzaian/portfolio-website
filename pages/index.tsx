import Head from 'next/head';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

import { FaAngleDoubleDown } from 'react-icons/fa';

import HeroImg from '/public/placeholder-hero.jpg';
import {cardData} from '../util/CardData';
import {aboutMeData} from '../util/AboutMeData';
import Technologies from '@/components/Technologies';
import About from '@/components/About';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Armen | Software Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <main>
        <div className="w-full h-[70px] lg:h-[228px]" />

        <Hero img={HeroImg} />
        <FaAngleDoubleDown className="w-10 h-10 lg:w-12 lg:h-12 text-primary mx-auto mt-36 sm:mt-64 animate-[bounce_2s_infinite]" />

        <div className="w-full h-[70px] lg:h-[228px]" />

        <Projects data={cardData} />

        <div className="w-full h-[70px] lg:h-[228px]" />

        <Technologies />

        <div className="w-full h-[70px] lg:h-[228px]" />

        <About data={aboutMeData} />

        <div className="w-full h-[70px] lg:h-[228px]" />

        <ContactForm />

        <div className="w-full h-[70px] lg:h-[228px]" />
      </main>
    </>
  );
}
