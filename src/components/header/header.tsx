"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import snailbrookLogo from "@/../public/snailbrook-logo.svg";
import volumeHighIcon from "@/../public/volume-high-icon.svg";
import categoryIcon from "@/../public/category-icon.svg";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const showNav = pathname === "/home" ?? false;

  return (
    <header className="w-full px-5 sm:px-16 py-6 fixed z-30">
      <div className="flex flex-row items-center justify-between gap-4">
        <Link href="/home">
          <Image
            src={snailbrookLogo}
            alt="website logo"
            width={164}
            height={44}
            priority
          />
        </Link>
        {showNav ? (
          <nav className="hidden lg:flex gap-8 px-6 py-4 relative rounded-[48px] bg-gray-gradient-dark">
            <Link href="/about" className="font-medium text-white">
              <span>About</span>
            </Link>
            <Link href="/roadmap" className="font-medium text-white">
              <span>Roadmap</span>
            </Link>
            <Link href="/tokenomics" className="font-medium text-white">
              <span>Tokenomics</span>
            </Link>
            <Link href="/join" className="font-medium text-white">
              <span>Join</span>
            </Link>
            <Link href="/faq" className="font-medium text-white">
              <span>Faq</span>
            </Link>
            <Link href="/home" className="font-medium text-white">
              <span>Platform</span>
            </Link>
            <div className="flex justify-center items-center p-1 absolute top-1 right-6 rounded-[48px] bg-gray-gradient-normal">
              <span className="text-[8px] text-white">SOON</span>
            </div>
          </nav>
        ) : null}
        <div className="flex flex-row items-center gap-x-6">
          <button className="hidden sm:flex sm:items-center sm:justify-center p-4 rounded-[48px] bg-gray-gradient-dark dark:bg-gray-gradient-base">
            <Image src={volumeHighIcon} alt="volumeHighIcon" />
          </button>
          <button
            onClick={() => router.push(`?menu-modal=true`)}
            className="flex items-center justify-center p-4 rounded-[48px] bg-gray-gradient-dark dark:bg-gray-gradient-base"
          >
            <Image src={categoryIcon} alt="categoryIcon" />
          </button>
        </div>
      </div>
    </header>
  );
}
