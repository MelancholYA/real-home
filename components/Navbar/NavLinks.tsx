import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

type linksType = {
  nav: { path: string; name: string }[];
  social: { path: string; icon: string }[];
};

const links: linksType = {
  nav: [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/property",
      name: "Property",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ],
  social: [
    {
      path: "/contact",

      icon: "cib-facebook-f",
    },
    {
      path: "/contact",

      icon: "cib-instagram",
    },
    {
      path: "/contact",

      icon: "cib-pinterest-p",
    },
  ],
};

const NavLinks = (props: Props) => {
  const path = usePathname();
  console.log(path);
  return (
    <>
      <nav className="h-[calc(100%-50px)] md:h-auto md:w-full ">
        <ul className="flex h-full flex-col items-center justify-center p-4 md:flex-row md:justify-around ">
          {links.nav.map((link, i) => (
            <li
              key={"navlink-" + i}
              className={`relative my-4 p-2 md:border-b-2  md:transition-colors md:${
                path === link.path ? "border-accent" : "border-light"
              } md:hover:border-dark`}
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <ul className="flex h-[50px] items-center justify-around bg-dark p-4 md:bg-light">
          {links.social.map((link, i) => (
            <li key={"navlink-" + i} className="mr-2 ">
              <Link
                href={link.path}
                className="text-accent transition-all md:mx-2 md:text-dark md:hover:text-accent"
              >
                <i className={link.icon}></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavLinks;
