import { PageDataProps, SidePageDataProps, InfoPageDataProps } from "./types/pageData.t";
import Link from "next/link";

/*import components*/
import SidebarNavAboutComponent from "../components/sidebarNavAboutComponents/sidebarNavAboutComponent"


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
        <p>GLUE is a community for designers, the general public, architects, brands, labels, showrooms, galleries, academies and other colleagues. This year the design route takes place from 19 – 22 September in 2024.Would you like to be part of the GLUE Community? A Membership is the way to go. During the year, all kind of events where you can meet the industry are organised. Monthly Community Cocktails and the opening party at Paradiso, to mention a few. You can become a member at any time. Want to participate in the GLUE design route of September in addition to becoming a member? Sign up as a participant and you are automatically a GLUE member too. Please subscribe before 1st of May 2024. It is possible to choose to be a GLUE member first, and decide later if you also want to also participate in the route. You can switch to a Participant Membership before 1st of May 2024. (You only pay the difference between a membership and the participation fee.)</p>
        <Link href="https://glue.amsterdam/cms/assets/pdf/GLUE_2024_acbd_lr.pdf">Download Bronchure Here</Link>
        <Link href="/member">Members</Link>
      </div>
    )
  },
  {
    path: "/about",
    title: "About Page",
    component: "AboutPage",
    content: (
      <div>
        <h1>
          about GLUE
        </h1>
        <p>A four days design-route for Amsterdam designers, the general public, architects, brands, labels, showrooms, galleries, academies and other colleagues. GLUE amsterdam connected by design connects all locations and provides a substantive and attractive program for colleagues and the public. Independence is essential, GLUE does not commit to one party, but all of them. Starting designers, knowledge institutes, renowned designers, and large agencies, diverse and ground floor suits Amsterdam, even though we sometimes have to climb a steep staircase. GLUE gives a profile to Amsterdam design and wants to connect the sector better and make it more discoverable. All participants have a dot on the map; we encourage them to organize something sensational and relevant during GLUE amsterdam connected by design.</p>
        <SidebarNavAboutComponent />
      </div>
    )
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

export const extraPaths: SidePageDataProps[] = [
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
  {
    path: "/meettheteam",
    title: "Meet the team",
    component: "Meettheteampage",
    content: (
      <div>
        <h1>Meet de Team</h1>
        <p>Welcome to GLUE amsterdam connected by design – where
          creativity, collaboration and a large variety of members converge to shape the
          future of the Amsterdam design scene. At the heart of our organisation are the
          visionary minds and dedicated individuals who form the backbone of GLUE. Allow
          us to introduce you to the driving forces behind our success
          </p>
          <SidebarNavAboutComponent />
      </div>
    )
  },
  {
    path: "/glueparticipants2023",
    title: "GLUE participants 2023",
    component: "glue participants 2023 page",
    content: (
      <div>
        <section>
          <h1>GLUE participants 2023</h1>
          <p>Click on the link and see the map of Amsterdam with all participating brands, designers, studio's and academies of GLUE 2023</p>
          <Link href="https://2023.glue.amsterdam/">2023 glue amsterdam</Link>
        </section>
      </div>
    )
  },
  {
    path: "/gluetv",
    title: "GLUE TV page",
    component: "gluetvpage",
    content: (
      <div>
        kaas
      </div>
    )
  },
  {
    path: "/partners",
    title: "Partners 2023 page",
    component: "partnerspage",
    content: (
      <div>
        kaas
      </div>
    )
  },
  {
    path: "/press",
    title: "press",
    component: "presspage",
    content: (
      <div>
        kaas
      </div>
    )
  },
  {
    path: "/curatedstickymembers",
    title: "curated STICKY members page",
    component: "curatedstickymemberspage",
    content: (
      <div>
        kaas
      </div>
    )
  },
  {
    path: "/creativecitizensohhonour",
    title: "creative citizens of honour page",
    component: "creativecitizensfhonourpage",
    content: (
      <div>
        kaas
      </div>
    )
  },
  {
    path: "/missionstatement",
    title: "Mision statement page",
    component: "misionstatementpage",
    content: (
      <div>
        kaas
      </div>
    )
  },
  {
    path: "/gluedallas",
    title: "Glue dallas page",
    component: "gluedallaspage",
    content: (
      <div>
        kaas
      </div>
    )
  },
  {
    path: "/gluefoundation",
    title: "GLUE Foundation",
    component: "gluefoundationpage",
    content: (
      <div>
        kaas
      </div>
    )
  },
]

export const pageInfo: InfoPageDataProps[] = [
  {
    pageTitle: "signup / login",
    subtext: "GLUE is a community for designers, the general public, architects, brands, labels, showrooms, galleries, academies and other colleagues. This year the design route takes place from 19 – 22 September in 2024.Would you like to be part of the GLUE Community? A Membership is the way to go. During the year, all kind of events where you can meet the industry are organised. Monthly Community Cocktails and the opening party at Paradiso, to mention a few. You can become a member at any time. Want to participate in the GLUE design route of September in addition to becoming a member? Sign up as a participant and you are automatically a GLUE member too. Please subscribe before 1st of May 2024. It is possible to choose to be a GLUE member first, and decide later if you also want to also participate in the route. You can switch to a Participant Membership before 1st of May 2024. (You only pay the difference between a membership and the participation fee.)",
  },
  {
    pageTitle: "about GLUE",
    subtext: "A four days design-route for Amsterdam designers, the general public, architects, brands, labels, showrooms, galleries, academies and other colleagues. GLUE amsterdam connected by design connects all locations and provides a substantive and attractive program for colleagues and the public. Independence is essential, GLUE does not commit to one party, but all of them. Starting designers, knowledge institutes, renowned designers, and large agencies, diverse and ground floor suits Amsterdam, even though we sometimes have to climb a steep staircase. GLUE gives a profile to Amsterdam design and wants to connect the sector better and make it more discoverable. All participants have a dot on the map; we encourage them to organize something sensational and relevant during GLUE amsterdam connected by design.",
  },

  {
    pageTitle: "Meet the Team",
    subtext: "Welcome to GLUE amsterdam connected by design – where creativity, collaboration and a large variety of members converge to shape the future of the Amsterdam design scene. At the heart of our organisation are the visionary minds and dedicated individuals who form the backbone of GLUE. Allow us to introduce you to the driving forces behind our success:",
  },
  {
    pageTitle: "GLUE participants 2023",
    subtext: "Click on the link and see the map of Amsterdam with all participating brands, designers, studio's and academies of GLUE 2023",
  },

  {
    pageTitle: "",
    subtext: "",
  },
  {
    pageTitle: "",
    subtext: "",
  },
  {
    pageTitle: "",
    subtext: "",
  },
  {
    pageTitle: "",
    subtext: "",
  },

  {
    pageTitle: "",
    subtext: "",
  },
  {
    pageTitle: "",
    subtext: "",
  },
  {
    pageTitle: "",
    subtext: "",
  },
  {
    pageTitle: "",
    subtext: "",
  },

  {
    pageTitle: "",
    subtext: "",
  },
  {
    pageTitle: "",
    subtext: "",
  },
  {
    pageTitle: "",
    subtext: "",
  },
  {
    pageTitle: "",
    subtext: "",
  },
  {
    pageTitle: "",
    subtext: "",
  },
  {
    pageTitle: "",
    subtext: "",
  },
  {
    pageTitle: "",
    subtext: "",
  },
  {
    pageTitle: "",
    subtext: "",
  },
  {
    pageTitle: "",
    subtext: "",
  },
  {
    pageTitle: "",
    subtext: "",
  },
  {
    pageTitle: "",
    subtext: "",
  },
  {
    pageTitle: "",
    subtext: "",
  },
  {
    pageTitle: "",
    subtext: "",
  },

  {
    pageTitle: "",
    subtext: "",
  },
]
