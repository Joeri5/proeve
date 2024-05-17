import {SidePageDataProps} from  "../data/types/pageData.t"

const AllowRoutingsPathsAbout = [
    "/meettheteam",
    "/glueparticipants2023",
    "/gluetv",
    "/partners",
    "/press",
    "/curatedstickymembers",
    "/creativecitizensohhonour",
    "/missionstatement",
    "/gluedallas",
    "/gluefoundation",

];

export const FilterPathsAbout = (path: SidePageDataProps[]): SidePageDataProps[] => {
    return path.filter(path => AllowRoutingsPathsAbout.includes(path.path));
};
