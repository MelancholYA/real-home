import React from "react";
import Image from "next/image";

import logoDark from "@/public/logo-dark.png";
import { links } from "../Navbar/NavLinks";
import Link from "next/link";

type Props = {};

const index = (props: Props) => {
  return (
    <footer className="bg-dark text-center text-grey">
      <ul className="p-4 text-center">
        <li>
          <Image
            src={logoDark}
            height={50}
            width={140}
            alt="logo"
            className="m-auto"
          />
        </li>
        <li>
          <ul className="m-auto flex h-[50px] w-[140px] items-center justify-between ">
            {links.social.map((link, i) => (
              <li key={"navlink-" + i} className="mr-2">
                <Link
                  href={link.path}
                  className="grid aspect-square  place-items-center 
                  rounded-full border-[0.5px] border-none bg-grey p-1 text-sm text-dark shadow-lg 
                  transition-all md:mx-2 md:border-grey md:text-dark md:shadow-[gainsboro] md:hover:text-accent md:hover:shadow-accent"
                >
                  <i className={link.icon}></i>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      {links.footer.map((category, i) => (
        <ul key={`category-id-${i}`} className="pb-3">
          <li>
            <h3 className="text-xl font-semibold md:text-2xl md:font-bold">
              {category.title}
            </h3>{" "}
          </li>
          {category.links.map((link, j) => (
            <li key={`category-link-id-${j}`}>
              <Link className="text-sm font-light" href={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </footer>
  );
};

export default index;
