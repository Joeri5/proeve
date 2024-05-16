import { PageDataProps } from "./types/pageData.t";
import Link from "next/link";

export const PageData: PageDataProps[] = [
    {
      path: "/",
      title: "Home Page",
      component: "HomePage",
      content: (
        <div>
          testje
        </div>
      )
    },
    {
      path: "/joinglue",
      title: "Join Glue Page",
      component: "JoinGluePage",
      content: (
        <div>
        <h1>sign up / log in</h1>
        <p>GLUE is a community for designers, the general public, architects, brands, labels, showrooms, galleries, academies and other colleagues.This year the design route takes place from 19 – 22 September in 2024.Would you like to be part of the GLUE Community? A Membership is the way to go. During the year, all kind of events where you can meet the industry are organised. Monthly Community Cocktails and the opening party at Paradiso, to mention a few. You can become a member at any time. Want to participate in the GLUE design route of September in addition to becoming a member? Sign up as a participant and you are automatically a GLUE member too. Please subscribe before 1st of May 2024. It is possible to choose to be a GLUE member first, and decide later if you also want to also participate in the route. You can switch to a Participant Membership before 1st of May 2024. (You only pay the difference between a membership and the participation fee.)</p>
        <Link href="https://glue.amsterdam/cms/assets/pdf/GLUE_2024_acbd_lr.pdf">Download Bronchure Here</Link>
        <Link href="/member">Members</Link>
        </div>
      )
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
      component: "login",
      content: (
        <div>
            <h1>
          contentDividderWrapperComponent
          </h1>
        </div>
      )
    },
    {
      path: "/signup",
      title: "sign up page",
      component: "sign up"
    }
]

export const extraPaths: PageDataProps[] = [
  {
    path: "/member",
    title: "Members page",
    component: "Memberspage",
    content: (
      <div>
        kaas
      </div>
    )
  },
  
]
  