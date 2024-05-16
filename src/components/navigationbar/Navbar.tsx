import React from "react";
import Link from 'next/link'

import "../../app/globals.css";
import { PageData } from "@/data/pageData";
import { PageDataProps } from "@/data/types/pageData.t";

export default function Navigationbar() {
  return (
    <nav>
      {PageData.map((data: PageDataProps) => (
        <Link key={data.path} href={data.path} className="routes">
          <p>{data.title}</p>
          {data?.content}
        </Link>
      ))}
    </nav>
  );
}
