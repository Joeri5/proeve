/*imports*/
import React from "react";
import Link from "next/link";

/*import Data*/
import {extraPaths} from "@/data/pageData";
import {FilterPathsAbout} from "@/utils/filterNavPathsAbout"

const SidebarNavAboutComponent: React.FC = () =>{
    const FilteredPathsAbout = FilterPathsAbout(extraPaths);
    return(
        <nav>
            {FilteredPathsAbout.map((FilterAbout) => (
                <Link key={FilterAbout.path} href={FilterAbout.path}>
                    <p>{FilterAbout.title}</p>
                </Link>
            ))}
        </nav>
    )
}

export default SidebarNavAboutComponent