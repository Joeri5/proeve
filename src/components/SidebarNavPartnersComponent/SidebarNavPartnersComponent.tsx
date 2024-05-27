/*imports*/
import React from "react";
import Link from "next/link";

/*import Data*/
import {extraPaths} from "@/data/pageData";
import {FilterPathsPartners} from "@/utils/filterPartnersPaths"

const SidebarNavPartnersComponent: React.FC = () =>{
    const FilteredPathsAbout = FilterPathsPartners(extraPaths);
    return(
        <nav>
            {FilteredPathsAbout.map((filterPartners) => (
                <Link key={filterPartners.path} href={filterPartners.path}>
                    <p>{filterPartners.title}</p>
                </Link>
            ))}
        </nav>
    )
}

export default SidebarNavPartnersComponent