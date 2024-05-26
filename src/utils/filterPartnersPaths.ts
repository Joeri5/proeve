/*deze import */
import {SidePageDataProps} from  "../data/types/pageData.t"

const AllowRoutingsPathsPartners = [
    "/culturalpartners",
    "/foundingpartners",
    "/communitypartners",
    "/mobilitypartners",
    "/fundingpartners",
    "/broadcastingpartners",


];

export const FilterPathsPartners = (path: SidePageDataProps[]): SidePageDataProps[] => {
    return path.filter(path => AllowRoutingsPathsPartners.includes(path.path));
};