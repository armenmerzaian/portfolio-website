import React from 'react'

/* 
    Children: <ICON className='text-[34px] lg:text-[64px]'/>
    Sizes are tested for responsiveness
*/

export default function LabeledIcon({children, label, className}: {children: React.ReactNode, label: string, className?: string}) {
  return (
    <div className="flex justify-center items-center w-[98px] h-[98px] lg:w-[160px] lg:h-[160px] px-[29px] lg:px-[48px] py-[18px] lg:py-[28px] border border-[#2A303C] rounded-lg lg:rounded-3xl">
      <div className={`flex flex-col justify-center items-center gap-3 lg:gap-4 text-[#A5AEC0] ${className}`}>
        {children}
        <div className="font-primary text-[14px] lg:text-lg leading-[18px] lg:leading-[23px]">{label}</div>
      </div>
    </div>
  );
}
