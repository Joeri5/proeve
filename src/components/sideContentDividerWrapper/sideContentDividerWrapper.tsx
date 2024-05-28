'use client'
import React from "react"
import Image from 'next/image';
import Link from "next/link";

import SideContentDivider from "../sideContentDivider/sideContentDividerComponents"

import "../mainContentDividerWrapperComponent/mainContentDividerWrapperComponent"

import letterG from "../../img/GLUE_G.svg"
import letterL from "../../img/GLUE_L.svg"
import letterU from "../../img/GLUE_U.svg"
import letterE from "../../img/GLUE_E.svg"

export default function sideContentDividderWrapperComponent() {

    const goBack = () => {
      window.history.back();
    };

  return (
    <div>
      <Image src={letterG} alt="letter" className="letter letter_G" />
      <Image src={letterL} alt="letter" className="letter letter_L" />
      <Image src={letterU} alt="letter" className="letter letter_U" />
      <Image src={letterE} alt="letter" className="letter letter_E" />
      <nav className="homeButton">
        <a onClick={goBack}>⬅ back</a>
      </nav>
      <div className="horizontal-line middle"></div>
      <div className="vertical-line top__bottom"></div>
      <SideContentDivider />
    </div>
  );
}