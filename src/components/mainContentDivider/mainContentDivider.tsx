/**
 * @author Aidan Middel
 * @email info@aidanmiddel.nl
 * @desc this component uses the pagedata file to map through all pages and makes sure it displays the correct info provided
 */
'use client';

import React from "react";
import { usePathname } from 'next/navigation';
import { PageData, extraPaths } from "@/data/pageData";
import { PageDataProps } from "@/data/types/pageData.t";

const PageContent = ({ pageData }: { pageData: PageDataProps[] }) => {
  const pathname = usePathname();

  return (
    <div>
      {pageData.map((data) => (
        <div key={data.path}>
          {data.path === pathname && (
            <>
              {data.content || "no page content"}
            </>
          )}
        </div>
      ))}
    </div>
  );
};


const PageWrapper = () => {
  return (
    <>
      <PageContent pageData={PageData} />
    </>
  );
};




export default PageWrapper;

