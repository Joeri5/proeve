'use client'

import React from "react"

import { usePathname } from 'next/navigation'

import { PageData } from "@/data/pageData"
import { PageDataProps } from "@/data/types/pageData.t"

export default function login() {

  const pathname = usePathname();
  console.log(pathname)


  return (
    <body>
      {PageData.map((data: PageDataProps) => (
        <div>
          {data.path === pathname && (
            <>
            {data.test || "no page content"}
            </>
          )}
        </div>
        ))}
    </body>
  );
}