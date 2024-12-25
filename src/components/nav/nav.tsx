import Link from "next/link";
import React from "react";

interface IMenu {
  id: number;
  name: string;
  link: string;
}

let menuList: Array<IMenu> = [
  {
    id: 0,
    name: "Home",
    link: "home",
  },
  {
    id: 1,
    name: "Dev",
    link: "dev",
  },
  {
    id: 2,
    name: "Design",
    link: "design",
  },
  {
    id: 3,
    name: "Other",
    link: "other",
  },
];

export default function NavBar() {
  return (
    <>
      <div className="nav-con flex items-center justify-between h-20">
        <p className="logo-wrap ml-10">LOGO</p>
        <ul className="menu-wrap flex absolute left-1/2 -translate-x-1/2">
          {menuList.map((v) => {
            return (
              <li key={v.id}>
                <Link href="/" className="mr-10">{v.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
