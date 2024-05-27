import React from "react";
import Link from 'next/link';


import "../../app/globals.css";
import { PageData } from "@/data/pageData";
import { PageDataProps } from "@/data/types/pageData.t";

import "../../app/globals.css";
import "../../styles/homepage.css"

export default function Navigationbar() {
  return (
    <nav className="navbar">
      {PageData.map((data: PageDataProps) => (
        <Link key={data.path} href={data.path} className="routes">
          <p className="routes__title">{data.title}</p>
        </Link>
      ))}
    </nav>
  );
}
