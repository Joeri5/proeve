'use client'

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchImages from '../../public/images/icons/search.svg';
import Navbar from '../components/navigationbar/Navbar';

export default function Page() {
  return (
    <main className="homepage__layout">
      <section className="titledLines">
        <section className="titledLinesWrapp">
          <div className="line left-rotate"></div>
          <div className="line right-rotate"></div>
        </section>
      </section>
      <section className="homepage__content">
        <Link href="/search" passHref className="homepage__header">
          <Image src={SearchImages} alt="search icon" width={24} height={24} className="searchIcon" />
        </Link>
        <Navbar />
        <div className="horizontal-line top"></div>
        <div className="horizontal-line bottom"></div>
      </section>

      <div className="homepage_background">

        <div className="part part1">
        </div>
        <div className="part part2">
        </div>
        <div className="part part3">
        </div>
        <div className="part part4">
        </div>
      </div>
    </main>
  );
}
