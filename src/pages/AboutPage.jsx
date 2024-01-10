import Header from "../components/Header/Header";
import Accordion from "../components/Accordion/Accordion";

function AboutPage() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h2>About</h2>
        <div className="container mt-5">
          <Accordion />
        </div>
      </div>
    </div>
  );
}
export default AboutPage
