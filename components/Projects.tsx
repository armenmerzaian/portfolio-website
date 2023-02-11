import React from 'react'
import Card from './Card';
import Subheading from './Subheading';

export default function Projects({data} : any) {

  return (
    <section id="projects" className="container mx-auto">
      <Subheading>Take a look at my projects...</Subheading>
      <div id="cardgroup"className="flex flex-col gap-6 lg:gap-8">
        {data.map((card: any, key: number) => (
          <Card id="card" key={key} {...card} />
        ))}
      </div>
    </section>
  );
}
