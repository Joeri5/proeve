/**
 * @author Aidan Middel | Amy van Duin
 * @email info@aidanmiddel.nl | amyvanduin@outlook.com
 * @desc In this file you define an object name to be used in pageData.tsx. You need to do this for TypeScript
 */
export interface PageDataProps {
    path: string;
    title: string;
    component: string;
    navClass: string;
    content?: React.ReactNode;
}

export interface SidePageDataProps {
    path: string;
    title: string;
    component: string;
    content?: React.ReactNode;
}

export interface InfoPageDataProps {
    pageTitle: string;
    subtext: string;
    path?: string;
}


