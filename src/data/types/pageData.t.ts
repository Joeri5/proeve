/* In deze file defineer je  een object naam die wordt gebruikt in pageData.tsx. Dit moet ej doen voor Nextjs*/
export interface PageDataProps {
    path: string;
    title: string;
    component: string;
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
