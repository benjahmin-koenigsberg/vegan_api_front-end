import Header from "../components/Header/Header";
import Table from "../components/Table/Table";
import AccordionUrlItem from "../components/AccordionUrlItem/AccordionUrlItem";
import AccordionJsonItem from "../components/AccordionJsonItem/AccordionJsonItem";
import { endpoints, JSON_endpoints } from "./endPoints";

function SandboxPage() {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <h2>URLs</h2>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          {endpoints.map((endpoint, index) => (
            <AccordionUrlItem endpoint={endpoint} index={index} />
          ))}
          <h2 className="my-4">JSON</h2>
          {JSON_endpoints.map((endpoint, index) => (
            <AccordionJsonItem endpoint={endpoint} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
export default SandboxPage;
