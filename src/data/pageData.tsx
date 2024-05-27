
/*import data types*/
import { PageDataProps, SidePageDataProps, InfoPageDataProps } from "./types/pageData.t";
import Link from "next/link";
import Image from "next/image";

/*import components*/
import SidebarNavAboutComponent from "../components/sidebarNavAboutComponents/sidebarNavAboutComponent"
import SidebarNavPartnersComponent from "../components/SidebarNavPartnersComponent/SidebarNavPartnersComponent"
import SearchComponent from "../components/searchFunction/searchFunction"
import Carousel from "@/components/carousel/Carousel";

/*import css files*/
import "../app/globals.css";
import "../styles/navbar.css";

// import carousel data
import slides from '../components/carousel/CarouselData.json'
import slides2 from '../components/carousel/CarouselData2.json'
import slides3 from '../components/carousel/CarouselData3.json'



export const PageData: PageDataProps[] = [
  {
    path: "/",
    title: "",
    component: "HomePage",
    navClass: "",
    content: (
      <div >

      </div>
    )
  },
  {
    path: "/joinglue",
    title: "Join Glue 2024",
    component: "JoinGluePage",
    navClass: "joinglue__link",
    content: (
      <div className="pageLayout ">
        <h1 className="grid-black">sign up / log in</h1>
        <div className="grid-black"></div>
        <p className="grid-black">GLUE is a community for designers, the general public, architects, brands, labels, showrooms, galleries, academies and other colleagues. This year the design route takes place from 19 – 22 September in 2024.Would you like to be part of the GLUE Community? A Membership is the way to go. During the year, all kind of events where you can meet the industry are organised. Monthly Community Cocktails and the opening party at Paradiso, to mention a few. You can become a member at any time. Want to participate in the GLUE design route of September in addition to becoming a member? Sign up as a participant and you are automatically a GLUE member too. Please subscribe before 1st of May 2024. It is possible to choose to be a GLUE member first, and decide later if you also want to also participate in the route. You can switch to a Participant Membership before 1st of May 2024. (You only pay the difference between a membership and the participation fee.)
          <br /><br /><Link href="https://glue.amsterdam/cms/assets/pdf/GLUE_2024_acbd_lr.pdf">Download Bronchure Here</Link>
          <br /><br /><Link href="/member">more info about becoming a member and participant</Link>
          <br /><br /><Link href="/login">login</Link>
        </p>
        <div className="grid-yellow"></div>
      </div>
    )
  },
  {
    path: "/about",
    title: "About",
    component: "AboutPage",
    navClass: "about__link",
    content: (
      <div className="pageLayout">
        <h1>About GLUE</h1>
        <nav className="grid-purple">
          <SidebarNavAboutComponent />
        </nav>
        <p>A four days design-route for Amsterdam designers, the general public, architects, brands, labels, showrooms, galleries, academies and other colleagues. GLUE amsterdam connected by design connects all locations and provides a substantive and attractive program for colleagues and the public. Independence is essential, GLUE does not commit to one party, but all of them. Starting designers, knowledge institutes, renowned designers, and large agencies, diverse and ground floor suits Amsterdam, even though we sometimes have to climb a steep staircase. GLUE gives a profile to Amsterdam design and wants to connect the sector better and make it more discoverable. All participants have a dot on the map; we encourage them to organize something sensational and relevant during GLUE amsterdam connected by design.</p>
        <img src="https://glue.amsterdam/cms/assets/img/GLUE%20team.jpg" alt="" className="grid-yellow" />

      </div>
    )
  },
  {
    path: "/visit",
    title: "Visit",
    component: "VisitPage",
    navClass: "visit__link",
    content: (
      <div className="pageLayout">
        <h1 className="grid-purple">visit</h1>
        <div className="grid-yellow "></div>
        <p className="grid-purple">GLUE is a four-day design-route from and for Amsterdam designers, the general public, architects, brands, showrooms, galleries, academies, and other colleagues.
          <br /><br /><Link href="/member">members</Link>
          <br /><br /><Link href="https://members.glue.amsterdam/program">see full program</Link>
          <br /><br /><Link href="https://members.glue.amsterdam/">see all locations</Link>
        </p>
        <div className="grid-yellowdark"></div>
      </div>
    )
  },
  {
    path: "/map",
    title: "Map",
    component: "MappPage",
    navClass: "map__link",
  },

]

export const extraPaths: SidePageDataProps[] = [
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
  },
  {
    path: "/member",
    title: "Members page",
    component: "Memberspage",
    content: (
      <div className="pageLayout">
        <h1 className="grid-purple">members</h1>
        <div className="grid-yellow "></div>
        <p className="grid-purple">Loading...</p>
        <div className="grid-yellowdark"></div>
      </div>
    )
  },
  {
    path: "/meettheteam",
    title: "Meet the team",
    component: "Meettheteampage",
    content: (
      <div className="pageLayout">
        <h1>Meet the Team</h1>
        <nav className="grid-purple">
          <SidebarNavAboutComponent />
        </nav>

        <p>Welcome to GLUE amsterdam connected by design – where
          creativity, collaboration and a large variety of members converge to shape the
          future of the Amsterdam design scene. At the heart of our organisation are the
          visionary minds and dedicated individuals who form the backbone of GLUE. Allow
          us to introduce you to the driving forces behind our success
        </p>
        <img className="grid-yellow" src="https://glue.amsterdam/cms/assets/img/GLUE%20team.jpg" alt="" />

      </div>
    )
  },
  {
    path: "/glueparticipants2023",
    title: "GLUE participants 2023",
    component: "glue participants 2023 page",
    content: (
      <div className="pageLayout">
        <h1>GLUE participants 2023</h1>
        <nav className="grid-purple">
          <SidebarNavAboutComponent />
        </nav>
        <p>Click on the link and see the map of Amsterdam with all participating brands, designers, studio's and academies of GLUE 2023

          <br /><br /><Link href="https://2023.glue.amsterdam/">2023 glue amsterdam</Link>
        </p>
        <img src="https://glue.amsterdam/cms/assets/img/GLUE%20team.jpg" alt="" />
      </div>
    )
  },
  {
    path: "/gluetv",
    title: "GLUE TV page",
    component: "gluetvpage",
    content: (
      <div className="pageLayout">
        <h1>GLUE TV</h1>
        <nav className="grid-purple">
          <SidebarNavAboutComponent />
        </nav>
        <p>GLUE TV



          The third edition of GLUE TV was recorded in the studio of Pakhuis de Zwijger, the platform for social innovation & creation in Amsterdam. GLUE TV focussed this year on members that were invited to explore the definition of design, and stretch its limits a bit; the so called STICKY members. But we used the platform also to interview GLUE’s Creative Citizens of Honour: Wouter Valkenier, Marian Duff and Janine Toussaint. Due to the storm Poly some interviews took place online.



          As part of the ‘Stretching the Definition of Design’ theme, Rubiah Balsem, Jeroen Junte, Gabrielle Kennedy, and Marsha Simon interviewed, amongst them: Georgie Frankel, Yamuna Forzani, Shahar Livne, Chen Yu Wang and Rink Schelling. Bas de Groot was in charge of editing. In the run-up to the design route in September, you can watch them via SALTO TV.



          Get inspired and check out all interviews on Youtube or SALTO TV.</p>
          <div className="grid-yellow "></div>
      </div>
    )
  },
  {
    path: "/partners",
    title: "Partners 2023",
    component: "partnerspage",
    content: (
      <div className="pageLayout">
        <h1>partners 2023</h1>
        <nav className="grid-purple">
          <SidebarNavAboutComponent />
        </nav>
        <nav>
        <p>
          GLUE amsterdam connected by design is made possible by the support of our Founding and Cultural Partners. Their businesses are strongly tied with the culture and economy of Amsterdam. Who are they?
        </p><br />
        <SidebarNavPartnersComponent />
        </nav>
        <div className="grid-yellow"></div>
      </div>
    )
  },
  {
    path: "/press",
    title: "press",
    component: "presspage",
    content: (
      <div className="pageLayout">
        <h1>press</h1>
        <nav className="grid-purple">
          <SidebarNavAboutComponent />
        </nav>
        <p>Please contact Karin Dijksman for the most recent press release,
          high-res images and other press enquires. <br /><br />

          Dijksman Communicatie <br /><br />

          Westerstraat 187 (2nd floor), Amsterdam <br /> <br />

          Karin Dijksman <br /><br />

          karin@dijksmancommunicatie.nl <br /><br />

          06 3100 6880</p>
          <div className="grid-yellow"></div>
      </div>
    )
  },
  {
    path: "/curatedstickymembers",
    title: "curated STICKY members",
    component: "curatedstickymemberspage",
    content: (
      <div className="pageLayout">
        <h1>curated STICKY members</h1>
        <nav className="grid-purple">
          <SidebarNavAboutComponent />
        </nav>
        <p>GLUE embraces the creative city even more warmly than before. Designers who contribute to broadening the field of design, making it more accessible, playful, and inspiring can be selected to become a curated STICKY member. Curated STICKY members receive the same "package" as normal STICKY members, but they participate free of charge. This group of members is selected by a panel of curators; it is nog possible to apply for a curated membership. The selection for 2023 was done by Rubiah Balsem, founder of Studio Balsem, and David Heldt, co-founder of GLUE. A new panel of curators will make a selection for GLUE 2024.

          ‘By opening up the conversation about what design is, we also explore the boundaries between art, fashion, and design. Sometimes creatives don’t feel comfortable in one box and like to experiment with different concepts. And at the edge of the field is where it becomes interesting. It is a fragment of time that says something about the direction in which our society is moving,’ says Rubiah Balsem.</p>
          <div className="grid-yellow"></div>
      </div>
    )
  },
  {
    path: "/creativecitizensohhonour",
    title: "creative citizens of honour",
    component: "creativecitizensfhonourpage",
    content: (
      <div className="pageLayout">
        <h1>creative citizens of honour</h1>
        <nav className="grid-purple">
          <SidebarNavAboutComponent />
        </nav>
        <p>
          Three creative industry leaders have been chosen each year for their outstanding contribution to the city's social cohesion. Discover who they are!
          <br /><br /><Link href="/2023">2023</Link>
          <br /><br /><Link href="/2022">2022</Link>
          <br /><br /><Link href="/2021">2021</Link>
        </p>
        <div className="grid-yellow"></div>
      </div>
    )
  },
  {
    path: "/missionstatement",
    title: "Mision statement",
    component: "misionstatementpage",
    content: (
      <div className="pageLayout">
        <h1>mission statement</h1>
        <nav className="grid-purple">
          <SidebarNavAboutComponent />
        </nav>
        <p>The power of local, connecting & inspiring
          GLUEs primary mission is to connect the local design community, consisting of designers, creatives, architects, brands, showrooms, galleries, academies, and other colleagues by providing spaces to meet and moments to share and connect. Secondary mission is to connect the general public with the design community, which happens during the three days of the design-route.

          GLUE connects the members the whole year round, and opens the doors to the public each year in mid-September for a four days design route through Amsterdam. The three-day design route connects all GLUE locations and provides a substantive and attractive program for colleagues and the public.
          GLUE includes the whole scene; starting designers as well as renowned designers, small and big showrooms, hidden gems agencies and educational institutes. Smaller brands and individual creatives get exhibition space at a larger enterprise or hotel, these so called GLUE HUBS create new business relations for the members and make the program more challenging and diverse.

          GLUE aspires diversity and inclusivity, has an eye for sustainability and has a focus on wellbeing. GLUE gives profile to the Amsterdam design community, and wants to connect the sector better and makes it more discoverable.
          All members have a spot on the GLUE stage; we encourage them to organise something sensational and relevant during the four days GLUE amsterdam connected by design. GLUE organises community drinks in the months towards the design route at various different venues of the GLUE members.
          GLUE brings the sector together to meet and exchange ideas, and connect creativity, inclusivity and well-being to accomplish a future-proof and better-connected design sector for Amsterdam.</p>
          <div className="grid-yellow"></div>
      </div>
    )
  },
  {
    path: "/gluedallas",
    title: "Glue dallas",
    component: "gluedallaspage",
    content: (
      <div className="pageLayout">
        <h1>GLUE Dallas</h1>
        <nav className="grid-purple">
          <SidebarNavAboutComponent />
        </nav>
        <p>GLUE founders were inspired by Amsterdam’s vibrant activity to bring the creative sector together, now in its fourth edition the desire to expand the concept has reached the United States, with its Dallas edition set for April 3-5, 2024.



          GLUE dallas connected by design, will keep the essence of a three-day design-route that connects designers, architects, brands, showrooms, makers, artists, galleries, colleges and universities, and cultural organizations, with the aim of better connecting these creative fields.



          Dallas is the premiere market for this inaugural GLUE activation in the U.S. because of its historic civic history supporting design innovation. At GLUE dallas connected by design, designers will find opportunities to further build relevant connections, obtain contextual insight, and expand their network – all important reasons to launch in a design-forward city like Dallas. Being part of this dynamic expansion provides a unique opportunity to highlight and elevate the business of design throughout this vibrant and diverse city.

          For more information email: info@gluedallas.com

          Follow their news on Instagram: glue.dallas

          Coming soon: www.gluedallas.com</p>
        <img src="https://glue.amsterdam/cms/assets/img/Dallas.jpg" alt="" />
      </div>
    )
  },
  {
    path: "/gluefoundation",
    title: "GLUE Foundation",
    component: "gluefoundationpage",
    content: (
      <div className="pageLayout">
        <h1>GLUE Foundation</h1>
        <nav className="grid-purple">
          <SidebarNavAboutComponent />
        </nav>
        <p>GLUE Foundation is set up to realise a cultural program for GLUE. The Foundation is responsible, among other programs, for the yearly nomination and ceremony celebrating the Creative Citizens of Honor in Paradiso, the curated STICKY members, and GLUE TV.



          Chair: Sheryl Leysner
          Treasurer: Henk Kwant
          Secretary: Anne Pieterse



          Stichting GLUE Foundation

          IBAN: NL72RABO0363145710

          Chamber or Commerce nr.: KVK85781398

          RSIN nr. 863739763</p>
          <div className="grid-yellow"></div>
      </div>
    )
  },
  {
    path: "/culturalpartners",
    title: "Cultural Partners",
    component: "culturalpartnerspage",
    content: (
      <div className="pageLayout">

      </div>
    )
  },
  {
    path: "/foundingpartners",
    title: "Founding partners",
    component: "Foundingpartnerspage",
    content: (
      <div className="pageLayout">

      </div>
    )
  },
  {
    path: "/communitypartners",
    title: "Community Partners",
    component: "communitypartnerspage",
    content: (
      <div className="pageLayout">

      </div>
    )
  },
  {
    path: "/mobilitypartners",
    title: "mobility Partners",
    component: "mobilitypartnerspage",
    content: (
      <div className="pageLayout">

      </div>
    )
  },
  {
    path: "/fundingpartners",
    title: "funding Partners",
    component: "fundingpartnerspage",
    content: (
      <div className="pageLayout">

      </div>
    )
  },
  {
    path: "/broadcastingpartners",
    title: "broadcasting Partners",
    component: "broadcastingpartnerspage",
    content: (
      <div className="pageLayout">

      </div>
    )
  },
  {
    path: "/search",
    title: "search page",
    component: "search",
    content: (
      <div className="pageLayout">

      </div>
    )
  },
  {
    path: "/2023",
    title: "2023",
    component: "2023",
    content: (
      <div>
        <Carousel data={slides} />
      </div>
    )
  },
  {
    path: "/2022",
    title: "2022",
    component: "2022",
    content: (
      <div>
        <Carousel data={slides2} />
      </div>
    )
  },
  {
    path: "/2021",
    title: "2021",
    component: "2021",
    content: (
      <div>
        <Carousel data={slides3} />
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
    pageTitle: "GLUE TV",
    subtext: "The third edition of GLUE TV was recorded in the studio of Pakhuis de Zwijger, the platform for social innovation & creation in Amsterdam. GLUE TV focussed this year on members that were invited to explore the definition of design, and stretch its limits a bit; the so called STICKY members. But we used the platform also to interview GLUE’s Creative Citizens of Honour: Wouter Valkenier, Marian Duff and Janine Toussaint. Due to the storm Poly some interviews took place online. As part of the ‘Stretching the Definition of Design’ theme, Rubiah Balsem, Jeroen Junte, Gabrielle Kennedy, and Marsha Simon interviewed, amongst them: Georgie Frankel, Yamuna Forzani, Shahar Livne, Chen Yu Wang and Rink Schelling. Bas de Groot was in charge of editing. In the run-up to the design route in September, you can watch them via SALTO TV. Get inspired and check out all interviews on Youtube or SALTO TV.",
  },
  {
    pageTitle: "Partners 2023",
    subtext: "GLUE amsterdam connected by design is made possible by the support of our Founding and Cultural Partners. Their businesses are strongly tied with the culture and economy of Amsterdam. Who are they?",
  },
  {
    pageTitle: "Press",
    subtext: "Please contact Karin Dijksman for the most recent press release, high-res images and other press enquires.",
  },
  {
    pageTitle: "Curated STICKY members",
    subtext: "GLUE embraces the creative city even more warmly than before. Designers who contribute to broadening the field of design, making it more accessible, playful, and inspiring can be selected to become a curated STICKY member. Curated STICKY members receive the same package as normal STICKY members, but they participate free of charge. This group of members is selected by a panel of curators; it is nog possible to apply for a curated membership. The selection for 2023 was done by Rubiah Balsem, founder of Studio Balsem, and David Heldt, co-founder of GLUE. A new panel of curators will make a selection for GLUE 2024. By opening up the conversation about what design is, we also explore the boundaries between art, fashion, and design. Sometimes creatives don’t feel comfortable in one box and like to experiment with different concepts. And at the edge of the field is where it becomes interesting. It is a fragment of time that says something about the direction in which our society is moving, says Rubiah Balsem.",
  },

  {
    pageTitle: "Creative citizens of honour",
    subtext: "GLUE embraces the creative city even more warmly than before. Designers who contribute to broadening the field of design, making it more accessible, playful, and inspiring can be selected to become a curated STICKY member. Curated STICKY members receive the same package as normal STICKY members, but they participate free of charge. This group of members is selected by a panel of curators; it is nog possible to apply for a curated membership. The selection for 2023 was done by Rubiah Balsem, founder of Studio Balsem, and David Heldt, co-founder of GLUE. A new panel of curators will make a selection for GLUE 2024. ‘By opening up the conversation about what design is, we also explore the boundaries between art, fashion, and design. Sometimes creatives don’t feel comfortable in one box and like to experiment with different concepts. And at the edge of the field is where it becomes interesting. It is a fragment of time that says something about the direction in which our society is moving,’ says Rubiah Balsem. Three creative industry leaders have been chosen each year for their outstanding contribution to the city's social cohesion. Discover who they are!",
  },
  {
    pageTitle: "mission statement",
    subtext: "The power of local, connecting & inspiring GLUE’s primary mission is to connect the local design community, consisting of designers, creatives, architects, brands, showrooms, galleries, academies, and other colleagues by providing spaces to meet and moments to share and connect. Secondary mission is to connect the general public with the design community, which happens during the three days of the design-route. GLUE connects the members the whole year round, and opens the doors to the public each year in mid-September for a four days design route through Amsterdam. The three-day design route connects all GLUE locations and provides a substantive and attractive program for colleagues and the public. GLUE includes the whole scene; starting designers as well as renowned designers, small and big showrooms, hidden gems agencies and educational institutes. Smaller brands and individual creatives get exhibition space at a larger enterprise or hotel, these so called GLUE HUBS create new business relations for the members and make the program more challenging and diverse. GLUE aspires diversity and inclusivity, has an eye for sustainability and has a focus on wellbeing. GLUE gives profile to the Amsterdam design community, and wants to connect the sector better and makes it more discoverable. All members have a spot on the GLUE stage; we encourage them to organise something sensational and relevant during the four days GLUE amsterdam connected by design. GLUE organises community drinks in the months towards the design route at various different venues of the GLUE members. GLUE brings the sector together to meet and exchange ideas, and connect creativity, inclusivity and well-being to accomplish a future-proof and better-connected design sector for Amsterdam.",
  },
  {
    pageTitle: "Glue Dallas",
    subtext: "GLUE founders were inspired by Amsterdam’s vibrant activity to bring the creative sector together, now in its fourth edition the desire to expand the concept has reached the United States, with its Dallas edition set for April 3-5, 2024. GLUE dallas connected by design, will keep the essence of a three-day design-route that connects designers, architects, brands, showrooms, makers, artists, galleries, colleges and universities, and cultural organizations, with the aim of better connecting these creative fields. Dallas is the premiere market for this inaugural GLUE activation in the U.S. because of its historic civic history supporting design innovation. At GLUE dallas connected by design, designers will find opportunities to further build relevant connections, obtain contextual insight, and expand their network – all important reasons to launch in a design-forward city like Dallas. Being part of this dynamic expansion provides a unique opportunity to highlight and elevate the business of design throughout this vibrant and diverse city.",
  },
  {
    pageTitle: "Glue Foundation",
    subtext: "GLUE Foundation is set up to realise a cultural program for GLUE. The Foundation is responsible, among other programs, for the yearly nomination and ceremony celebrating the Creative Citizens of Honor in Paradiso, the curated STICKY members, and GLUE TV.",
  },

  {
    pageTitle: "",
    subtext: "",
  },

]
