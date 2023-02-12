import BackButton from '@/components/BackButton'
import React from 'react'
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router'
import { cardData } from '@/util/CardData';
import Badge from '@/components/Badge';
import Subheading from '@/components/Subheading';
import { LinkButton } from '@/components/Button';

export default function LearnMore() {

  const router = useRouter();
  
  return (
    <>
      <div className="container mx-auto pt-[36px] mb-8 lg:mb-10">
        <section className="px-8 lg:px-0 lg:max-w-[544px] mx-auto flex flex-col items-center mt-[36px] lg:mt-[54px]">
          {cardData.map((project) => {
            if (project.query === router.query.project) {
              return (
                <div key={project.query} className="max-w-[544px]">
                  <div className="max-w-[544px] h-[250px] md:h-[300px] lg:h-[350px] relative rounded-2xl lg:rounded-3xl">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className={`object-cover rounded-2xl lg:rounded-3xl ${project.imgPos}`}
                    />
                  </div>
                  <div className="mt-[22px] lg:mt-[32px]">
                    <div className="flex gap-3 lg:gap-4 flex-wrap w-full lg:max-w-[1120px]">
                      {project.badges.map((badge, key) => (
                        <Badge key={key} text={badge} />
                      ))}
                    </div>
                    <h1 className="mt-[23px] font-mulish font-bold text-[32px] leading-[40px] lg:text-[36px] lg:leading-[48px] text-white break-normal">
                      {project.title}
                    </h1>
                    <div className="mt-[17px] lg:mt-[12px]">
                      {project.desc_block_1 &&
                        project.desc_block_1.map((parag, key) => (
                          <p
                            className="font-mulish font-normal text-[18px] leading-[27px] lg:text-[21px] lg:leading-[35px] text-[#C3C9D5] break-normal mb-[35px] lg:mb-[51px] last-of-type:mb-0"
                            key={key}
                          >
                            {parag}
                          </p>
                        ))}
                    </div>
                    <div className="relative max-w-[544px] h-[250px] md:h-[300px] lg:h-[350px] mt-[38px] lg:mt-[41px]">
                      <Image
                        src={project.images[0]}
                        alt=""
                        fill
                        className="object-cover rounded-2xl lg:rounded-3xl object-center lg:object-left-top"
                      />
                    </div>
                    <div className="mt-[25px] lg:mt-[38px]">
                      {project.desc_block_2 &&
                        project.desc_block_2.map((parag, key) => (
                          <p
                            className="font-mulish font-normal text-[18px] leading-[27px] lg:text-[21px] lg:leading-[35px] text-[#C3C9D5] break-normal mb-[35px] lg:mb-[51px] last-of-type:mb-0"
                            key={key}
                          >
                            {parag}
                          </p>
                        ))}
                    </div>
                    <DescImages context={project.images} />
                  </div>
                  <div className="mt-[33px] lg:mt-[75px]">
                    <Subheading className="!ml-0 lg:mb-6">
                      Explore project further...
                    </Subheading>
                    <div
                      className={`grid grid-cols-2 w-full lg:grid-flow-row ${
                        project.launch ? "" : "lg:grid-cols-1"
                      } gap-4`}
                    >
                      <LinkButton
                        to={project.github}
                        className={`${
                          project.launch ? "" : "col-span-2"
                        } lg:col-span-1`}
                        text="GitHub"
                        variant="secondary"
                        icon={true}
                        shadow={false}
                        external
                      />
                      {project.launch ? (
                        <LinkButton
                          to={project.launch}
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
          })}
        </section>
      </div>
    </>
  );
}

function DescImages({context}: {context: string[] | StaticImageData[]}) {
  let images;
  if(context.length > 1){
    images = context.slice(1);
  } else {
    return;
  }
  return images.map((image, key) => (
    <div
      key={key}
      className="relative max-w-[544px] h-[250px] md:h-[300px] lg:h-[350px] mt-[41px] lg:mt-[51px]"
    >
      <Image
        src={image}
        alt=""
        fill
        className="object-cover rounded-2xl lg:rounded-3xl object-center lg:object-left-top"
      />
    </div>
  ));
}

/*
* Back Button Component
<div className="w-full z-10 bg-background pb-2 sm:px-6 lg:px-[193px]">
        <div className="container mx-auto mt-6 flex">
          <BackButton />
        </div>
/div>
*/