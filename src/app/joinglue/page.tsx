import informationglue from "../../classes/information--joinglue--classes";

export default function Joinglue() {
  const joinglueinformation = informationglue.slice(0, 1).map((joinglueinformation, index) => (
    <section>
      <h1 key={index}>{joinglueinformation.title}</h1>
      <p>{joinglueinformation.subheading}</p>
    </section>
  ));

  return (
    <body>
      <section>
        {joinglueinformation}
      
      </section>
    </body>
  );
}

