import React from 'react'

/* 
    Children: <ICON className='text-[34px] lg:text-[64px]'/>
    Sizes are tested for responsiveness
*/

export default function LabeledIcon({children, label}: {children: React.ReactNode, label: string}) {
  return (
    <div className="flex justify-center items-center w-fit px-[29px] lg:px-[48px] py-[18px] lg:py-[28px] border border-[#2A303C] rounded-lg lg:rounded-3xl">
      <div className="flex flex-col justify-center items-center gap-3 lg:gap-4 text-[#A5AEC0]">
        {children}
        <div className="font-primary text-[14px] lg:text-lg leading-[18px] lg:leading-[23px]">{label}</div>
      </div>
    </div>
  );
}
