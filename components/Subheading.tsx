import React from 'react'

export default function Subheading({children}: {children: string}) {
  return (
    <h2 className="ml-[30px] lg:ml-0 mb-5 text-primary w-fit font-secondary text-[24px] leading-[35px] lg:text-[32px] lg:leading-[47px] font-semibold">
      {children}
    </h2>
  );
}
