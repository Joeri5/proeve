import React from "react";
import Link from "next/link";
import routenames from "../../classes/routenames-classes";

import "../../app/globals.css";

export default function Navigationbar() {
  return (
    <nav>
      {routenames.map(route => (
        <Link key={route.path} href={route.path} className="routes">
          <p>{route.name}</p>
        </Link>
      ))}
    </nav>
  );
}
