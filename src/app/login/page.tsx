'use client'

import React from "react"

import { usePathname } from 'next/navigation'

import { PageData } from "@/data/pageData"
import { PageDataProps } from "@/data/types/pageData.t"
import { useState } from "react"

export default function login() {

  const pathname = usePathname();
  console.log(pathname)

  const [pageContent, setPageContent] = useState(0);

  const currentPage = () => {
    setPageContent(pathname)
  }

  return (
    <body>
      {PageData.map((data: PageDataProps) => (
        <div>
          {data.path === pathname && (
            <>
            {data?.test}
            </>
          )}
          
        </div>
        ))}
    </body>
  );
}