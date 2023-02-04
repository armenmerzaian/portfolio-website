import React from 'react'

export default function Badge({text}: {text: string}) {
  
    let smallStyle =
      "font-other font-bold text-[#C3C9D5] text-xs leading-4 px-1 bg-[#3F485A] rounded-sm";
    let largeStyle = "font-other font-bold text-[#C3C9D5] text-base leading-4 p-1 bg-[#3F485A] rounded-sm";

    return (
      <label className="font-other font-bold text-[#C3C9D5] text-xs lg:text-base leading-4 px-1 lg:p-1 bg-[#3F485A] rounded-sm h-fit">
        {text}
      </label>
    );
}
