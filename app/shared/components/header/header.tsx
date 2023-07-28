"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/snailbrook-logo.svg";
import volumeHighIcon from "@/public/volume-high-icon.svg";
import categoryIcon from "@/public/category-icon.svg";
import { usePathname } from "next/navigation";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  const pathname = usePathname();
  const showNav = pathname === "/" ?? false;

  return (
    <header className="w-full px-5 sm:px-16 py-6 fixed z-40">
      <div className="flex flex-row items-center justify-between gap-4">
        <Link href="/">
          <Image src={logo} alt="website logo" priority />
        </Link>
        {showNav ? (
          <nav className="hidden lg:flex gap-8 px-6 py-4 bg-shadow-medium  rounded-[48px] relative">
            <Link href="/about" className="font-medium text-white">
              About
            </Link>
            <Link
              href="/roadmap"
              className="font-medium text-white cursor-pointer"
            >
              Roadmap
            </Link>
            <Link
              href="/tokenmics"
              className="font-medium text-white cursor-pointer"
            >
              Tokenomics
            </Link>
            <Link
              href="/join"
              className="font-medium text-white cursor-pointer"
            >
              Join
            </Link>
            <Link href="/" className="font-medium text-white cursor-pointer">
              Platform
            </Link>
            <div className="bg-shadow-medium-light p-1 flex justify-center items-center absolute top-1 right-6 rounded-[48px]">
              <p className="text-[8px] text-white">SOON</p>
            </div>
          </nav>
        ) : null}
        <div className="flex flex-row items-center gap-x-6">
          <button className="bg-shadow-medium p-4 rounded-[48px] hidden sm:flex sm:items-center sm:justify-center">
            <Image src={volumeHighIcon} alt="volumeHighIcon" priority />
          </button>
          <button className="bg-shadow-medium p-4 rounded-[48px] flex items-center justify-center">
            <Image src={categoryIcon} alt="categoryIcon" priority />
          </button>
        </div>
      </div>
    </header>
  );
}
