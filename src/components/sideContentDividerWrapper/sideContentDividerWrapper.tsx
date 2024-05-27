import React from "react"
import Image from 'next/image';

import SideContentDivider from "../sideContentDivider/sideContentDividerComponents"

import "../mainContentDividerWrapperComponent/mainContentDividerWrapperComponent"

import letterG from "../../img/GLUE_G.svg"
import letterL from "../../img/GLUE_L.svg"
import letterU from "../../img/GLUE_U.svg"
import letterE from "../../img/GLUE_E.svg"

export default function sideContentDividderWrapperComponent() {
  return (
    <div>
      <Image src={letterG} className="letter letter_G" alt=""/>
      <Image src={letterL} className="letter letter_L" alt=""/>
      <Image src={letterU} className="letter letter_U" alt=""/>
      <Image src={letterE} className="letter letter_E" alt=""/>
      <SideContentDivider />
    </div>
  );
}