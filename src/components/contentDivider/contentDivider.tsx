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
    <PageContent pageData={PageData} />
  );
};

const extraPathsWrapper = () => {
  return (
    <PageContent pageData={extraPaths} />
  );
};

export default PageWrapper;

