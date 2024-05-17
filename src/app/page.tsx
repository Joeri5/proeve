import "./globals.css";
import Link from "next/link"

import Navbar from "../components/navigationbar/Navbar"
import ContentDividerWrapper from "../components/mainContentDividerWrapperComponent/mainContentDividerWrapperComponent"

export default function Page() {

  const test = () => {
    console.log(ContentDividerWrapper);
  }

  test()

  return (
    <>
      <Navbar/>
    </>
  )
}