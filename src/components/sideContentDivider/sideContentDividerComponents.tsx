/**
 * @author Aidan Middel
 * @email info@aidanmiddel.nl
 * @desc this component uses the pagedata file to map through all pages and makes sure it displays the correct info provided
 */

'use client';

import React from "react";
import { usePathname } from 'next/navigation';
import { extraPaths } from "@/data/pageData";
import { SidePageDataProps } from "@/data/types/pageData.t";


const SidePageContent = ({ extraPaths }: { extraPaths: SidePageDataProps[] }) => {
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

