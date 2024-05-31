import React from "react"
import Image from 'next/image';
import Link from "next/link";

import ContentDivider from "../mainContentDivider/mainContentDivider"

import "./mainContentDividerWrapperComponent.css"

import letterG from "../../img/GLUE_G.svg"
import letterL from "../../img/GLUE_L.svg"
import letterU from "../../img/GLUE_U.svg"
import letterE from "../../img/GLUE_E.svg"

export default function contentDividderWrapperComponent() {
  return (
    <div className="content">
      <Image src={letterG} alt="letter" className="letter letter_G" />
      <Image src={letterL} alt="letter" className="letter letter_L" />
      <Image src={letterU} alt="letter" className="letter letter_U" />
      <Image src={letterE} alt="letter" className="letter letter_E" />
      <nav className="homeButton">
        <Link href="/">⬅ home</Link>
      </nav>
      <div className="horizontal-line middle"></div>
      <div className="vertical-line top__bottom"></div>
      <ContentDivider />
    </div>
  );
}