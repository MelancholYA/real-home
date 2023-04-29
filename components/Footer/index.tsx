import React from "react";
import Image from "next/image";

import logoDark from "@/public/logo-dark.png";
import { links } from "../Navbar/NavLinks";
import Link from "next/link";

type Props = {};

const index = (props: Props) => {
  return (
    <footer className="bg-dark p-2 text-center text-grey md:flex md:items-start md:justify-around md:p-8 md:text-left">
      <ul className="pb-4 text-center ">
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
              <li key={"navlink-" + i}>
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
            <h3 className="mb-2 text-2xl font-light md:text-3xl ">
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
      <ul>
        <li>
          <h3 className="mb-2 text-2xl font-light md:text-3xl">Contact us</h3>{" "}
        </li>
        <li className="text-sm font-light">
          <p>240 Central Park, London OR 10019</p>
        </li>
        <li>
          <Link className="text-sm font-light" href="tel:+18005596580">
            Freephone: +1 800 559 6580
          </Link>
        </li>
        <li>
          <Link className="text-sm font-light" href="tel:+19596036035">
            Telephone: +1 959 603 6035
          </Link>
        </li>
        <li>
          <Link className="text-sm font-light" href="tel:+18005596580">
            FAX: +1 800 559 6580
          </Link>
        </li>
        <li className="mt-2">
          <Link
            className="mt-2 text-sm font-light text-accent "
            href="mailto:info@realhome.com"
          >
            info@realhome.com
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default index;
