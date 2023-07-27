import Image from "next/image";
import logo from "@/public/snailbrook-logo.svg";
import volumeHighIcon from "@/public/volume-high-icon.svg";
import categoryIcon from "@/public/category-icon.svg";

type NavbarProps = {};

export default function Navbar({}: NavbarProps) {
  return (
    <header className="mx-5 sm:mx-16 my-6 z-10 absolute top-0 left-0 right-0">
      <div className="flex flex-row items-center justify-between gap-4">
        <a href="./">
          <Image src={logo} alt="website logo" priority />
        </a>
        <nav className="bg-shadow px-6 py-4 rounded-[48px] hidden gap-8 lg:flex relative">
          <a className="font-medium text-white cursor-pointer">About</a>
          <a className="font-medium text-white cursor-pointer">Roadmap</a>
          <a className="font-medium text-white cursor-pointer">Tokenomics</a>
          <a className="font-medium text-white cursor-pointer">Join</a>
          <a className="font-medium text-white cursor-pointer">Platform</a>
          <div className="bg-shadow-light p-1 flex justify-center items-center absolute top-1 right-6 rounded-[48px]">
            <p className="text-[8px] text-white ">SOON</p>
          </div>
        </nav>
        <div className="flex flex-row items-center gap-x-6">
          <button className="bg-shadow p-4 rounded-[48px] hidden sm:flex sm:items-center sm:justify-center">
            <Image src={volumeHighIcon} alt="volumeHighIcon" priority />
          </button>
          <button className="bg-shadow p-4 rounded-[48px] flex items-center justify-center">
            <Image src={categoryIcon} alt="categoryIcon" priority />
          </button>
        </div>
      </div>
    </header>
  );
}
