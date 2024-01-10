
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Table from '../components/Table/Table'
import Donate from "../components/Donate/Donate";

function HomePage() {




  return (
    <div>
      <Header />
      <Hero />
      <div style={{ width: "90%", margin: "auto" }}>
        <Donate />
        <h2>URLs</h2>
        <Table
          url={"http://localhost:8080/api/v1/random"}
        />
      </div>
    </div>
  );
}
export default HomePage
