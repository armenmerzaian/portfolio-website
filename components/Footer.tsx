import Link from 'next/link';
import React from 'react'

export default function Footer() {
  return (
    <div className="bottom-0 w-full bg-primary-gradient h-16 flex justify-center items-center">
      🧑🏽‍💻 <Link href="/projects/portfolio"className="hover:text-surface ml-1">Developed</Link> <span className="ml-1">by Armen Merzaian | © 2023</span>
    </div>
  );
}
