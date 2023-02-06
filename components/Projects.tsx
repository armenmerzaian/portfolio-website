import { IProject } from '@/interface/IProject';
import React from 'react'
import Card from './Card';
import Subheading from './Subheading';

export default function Projects({data} : any) {
  return (
    <section id='projects' className="container flex flex-col gap-8 lg:mx-0 sm:mx-auto">
      <Subheading>
        Take a look at my projects...
      </Subheading>
      {data.map((card: any, key: number) => (
        <Card key={key} {...card} />
      ))}
    </section>
  );
}
