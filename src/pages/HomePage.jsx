
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Table from '../components/Table/Table'
import Donate from "../components/Donate/Donate";
import { endpoints, JSON_endpoints } from "./endPoints";

function HomePage() {


  return (
    <div>
      <Header />
      <Hero />
      <div style={{  margin: "auto", padding: '0 1rem' }}>
        <Donate />
        <h2>URLs</h2>
        {endpoints.map((endpoint, index) => (
          <Table url={endpoint.url} type={endpoint.type} key={index} />
        ))}
        <h2>JSON</h2>
        {JSON_endpoints.map((endpoint, index) => (
          <Table url={endpoint.url} type={endpoint.type} key={index} />
        ))}
      </div>
    </div>
  );
}
export default HomePage
