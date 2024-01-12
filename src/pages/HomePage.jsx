/** @format */
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Table from "../components/Table/Table";
import Donate from "../components/Donate/Donate";
import { endpoints } from "../assets/endPoints";
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
      </div>
    </div>
  );
}
export default HomePage;
