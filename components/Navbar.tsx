import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    if (mobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileNav]);

  return (
    <nav className=".nav bg-background sticky top-0 left-0 px-6 lg:px-[193px] pb-2.5 pt-10 z-20 w-full">
      <div className="container flex flex-wrap items-center justify-between mx-auto h-fit lg:h-12">
        <Link href="/" target="_self" className="" scroll={false}>
          <h1 className="text-[30px] leading-[32px] lg:text-4xl font-[1000] text-primary font-primary lg:text-3">
            <div className="hidden"><span className="font-other">{"< "}</span>AM<span className="font-other">{" />"}</span></div>
            <span>AM</span>
          </h1>
        </Link>
        <ul className="hidden lg:flex flex-wrap items-center justify-between lg:flex-row lg:gap-10 text-lg font-primary font-semibold text-primary">
          <li>
            <Link href="/#projects" scroll={false}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/#about" scroll={false}>
              About
            </Link>
          </li>
          <li>
            <Link href="/#contact" scroll={false}>
              Contact
            </Link>
          </li>
        </ul>
        <FaBars
          className="text-4xl text-primary lg:hidden cursor-pointer"
          onClick={toggleMobileNav}
        />
      </div>
      <div
        id="mobile-nav"
        className={`${
          mobileNav ? "fixed" : " hidden "
        } lg:hidden top-0 left-0 w-full h-screen bg-background ease-in duration-500`}
      >
        <CgClose
          size={44}
          className="mt-9 ml-auto mr-5 stroke-1 text-primary cursor-pointer"
          onClick={toggleMobileNav}
        />
        <div className="mx-auto my-[50%] w-fit h-fit">
          <ul className="flex flex-col items-center gap-12 font-primary font-semibold text-2xl text-primary">
            <li>
              <Link
                href="/#projects"
                className="hover:font-bold"
                onClick={toggleMobileNav}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="hover:font-bold"
                onClick={toggleMobileNav}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="hover:font-bold"
                onClick={toggleMobileNav}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
