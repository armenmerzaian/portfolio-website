import Head from 'next/head';
//icons
import { FaAngleDoubleDown } from 'react-icons/fa';
//images
import HeroImg from '@/public/images/memoji.png';
//data
import {cardData} from '@/util/CardData';
import {aboutMeData} from '@/util/AboutMeData';
//components
import Technologies from '@/components/Technologies';
import About from '@/components/About';
import ContactForm from '@/components/ContactForm';
import Projects from '@/components/Projects';
import Hero from '@/components/Hero';



export default function Home() {
  
  return (
    <>
      <Head>
        <title>Armen | Software Developer</title>
        <meta name="description" content="Armen Merzaian's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#333333" />
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
