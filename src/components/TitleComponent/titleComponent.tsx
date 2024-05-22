import { pageInfo } from "@/data/pageData";
import { InfoPageDataProps } from "@/data/types/pageData.t";

export default function Textcontent() {
  return (
    <section>
      {pageInfo.map((text: InfoPageDataProps) => (
        <h1 key={text.pageTitle}>{text.pageTitle}</h1>
      ))}
    </section>
  );
}
