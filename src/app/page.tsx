import "./globals.css";
import Link from "next/link";
import Image from "next/image";  // Import the Image component from next/image
import Navbar from "../components/navigationbar/Navbar";
import SearchImages from "../../public/images/icons/search.png";  // Correct import path

export default function Page() {
  return (
    <>
      <Link href="/search">
       
          <Image src={SearchImages} alt="search icon" width={24} height={24} className="searchIcon"/>
      
      </Link>
      <Navbar />
    </>
  );
}
