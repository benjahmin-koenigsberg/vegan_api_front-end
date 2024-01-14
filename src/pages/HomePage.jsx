/** @format */
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Donate from "../components/Donate/Donate";
import { endpoints } from "../assets/endPoints";
import UrlCard from "../components/UrlCard/UrlCard";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import veganMemeSchema from "../../../back_end/mongoDb/models/veganMeme";
import AccordionJsonItem from "../components/AccordionJsonItem/AccordionJsonItem";


function HomePage() {

  return (
    <div className="">
      <Header />
      <Hero />
      {/* <div style={{  margin: "auto", padding: '0 1rem' }} > */}
      <div className="container">
        <Donate />
        <h2>URLs</h2>
        <div  >
          {endpoints.map((endpoint, index) => (
            <UrlCard endpoint={endpoint} index={index} />
          ))

          }
          <AccordionJsonItem />

        </div>
      </div>
    </div>
  );
}
export default HomePage;
