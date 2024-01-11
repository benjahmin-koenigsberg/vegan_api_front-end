/** @format */
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Table from "../components/Table/Table";
import Donate from "../components/Donate/Donate";
import { endpoints } from "../assets/endPoints";
import AccordionUrlItem from "../components/AccordionUrlItem/AccordionUrlItem";
import AccordionJsonItem from "../components/AccordionJsonItem/AccordionJsonItem";
import UrlCard from "../components/UrlCard/UrlCard"

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      {/* <div style={{  margin: "auto", padding: '0 1rem' }} > */}
      <div className="container">
        <Donate />
        <h2>URLs</h2>
        <div className="">
          {endpoints.map((endpoint, index) => (
            <UrlCard endpoint={endpoint} index={index}  />
          ))}
        </div>

        {/* <div
          className="accordion accordion-flush border border-2 rounded-3 shadow"
          id="accordionFlushExample">
          {endpoints.map((endpoint, index) => (
            <AccordionUrlItem endpoint={endpoint} index={index} />
          ))}
        </div> */}
        {/* <h2 className="my-4">JSON</h2>
        <div
          className="accordion accordion-flush border border-2 rounded-3 shadow"
          id="accordionFlushExample">
          {JSON_endpoints.map((endpoint, index) => (
            <AccordionJsonItem endpoint={endpoint} index={index} />
          ))}
        </div> */}
        {/* <h2>URLs</h2>
        {endpoints.map((endpoint, index) => (
          <Table url={endpoint.url} type={endpoint.type} key={index} />
        ))}


        <h2>JSON</h2>
        {JSON_endpoints.map((endpoint, index) => (
          <Table url={endpoint.url} type={endpoint.type} key={index} />
        ))} */}
      </div>
    </div>
  );
}
export default HomePage;
