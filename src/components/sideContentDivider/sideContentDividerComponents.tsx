'use client';

import React from "react";
import { usePathname } from 'next/navigation';
import { PageData, extraPaths } from "@/data/pageData";
import { PageDataProps } from "@/data/types/pageData.t";


const SidePageContent = ({ extraPaths }: { extraPaths: PageDataProps[] }) => {
  const sidePathname = usePathname();

  return (
    <div>
      {extraPaths.map((extraData) => (
        <div key={extraData.path}>
          {extraData.path === sidePathname && (
            <>
              {extraData.content || "no page content"}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

const sidePageContentWrapper = () => {
  return (
    <>
      <SidePageContent extraPaths={extraPaths} />
    </>
  );
};




export default sidePageContentWrapper;
