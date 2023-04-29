"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import logo from "@/public/logo.png";
import NavLinks from "./NavLinks";
import { usePathname, useRouter } from "next/navigation";

type Props = {};

const Index = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  return (
    <header className="sticky top-0 flex h-16 items-center justify-between bg-light px-4  py-2 text-dark lg:px-8 ">
      <Image alt="logo" src={logo} />
      <button
        className={`navToggle ${isOpen ? "openedNavToggle" : ""} md:hidden`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
      </button>
      <div
        className={`absolute  ${
          isOpen ? "h-[calc(100vh-64px)] opacity-100" : "h-0 opacity-0"
        }  left-0 top-16 w-full justify-between bg-grey  transition-all duration-300
        md:static md:flex md:h-full 
        md:w-3/4 md:bg-light md:opacity-100 `}
      >
        <NavLinks />
      </div>
    </header>
  );
};

export default Index;
