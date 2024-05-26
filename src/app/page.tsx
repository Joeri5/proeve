import Link from "next/link";
import Image from "next/image";

/* import components*/
import Navbar from "../components/navigationbar/Navbar";
import SearchImages from "../../public/images/icons/search.svg";  // Correct import path

/*import styles*/
import "../styles/homepage.css";
import "./globals.css";

export default function Page() {
  return (
    <main className="homepage__layout">
      <section className="homepage__content">
        <Link href="/search" className="homepage__header">
          <Image src={SearchImages} alt="search icon" width={24} height={24} className="searchIcon" />
        </Link>
        <Navbar />
      </section>
      <div className="homepage_background">
        <div className="part part1"></div>
        <div className="part part2"></div>
        <div className="part part3"></div>
        <div className="part part4"></div>
      </div>

    </main>
  );
}
