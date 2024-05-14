import { PageDataProps } from "./types/pageData.t";

export const PageData: PageDataProps[] = [
    {
      path: "/",
      title: "Home Page",
      component: "HomePage",
      test: (
        <div>
          testje
        </div>
      )
    },
    {
      path: "/joinglue",
      title: "Join Glue Page",
      component: "JoinGluePage"
    },
    {
      path: "/about",
      title: "About Page",
      component: "AboutPage"
    },
    {
      path: "/visit",
      title: "Visit Page",
      component: "VisitPage"
    },
    {
      path: "/map",
      title: "Map Page",
      component: "MapPage"
    },
    {
      path: "/login",
      title: "login page",
      component: "login"
    },
    {
      path: "/signup",
      title: "sign up page",
      component: "sign up"
    }
]
  