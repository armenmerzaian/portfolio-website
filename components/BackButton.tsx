import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

export default function BackButton() {
  return (
    <Link
      href="/"
      className="ml-[20px] sm:ml-0 w-fit flex items-center gap-[15px] pr-3 py-2.5 text-primary"
    >
      <FaArrowLeft size={24}/>
      <span className="font-bold text-[17px]">Go back</span>
    </Link>
  );
}
