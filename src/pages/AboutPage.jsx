/** @format */

import Header from "../components/Header/Header";
import Accordion from "../components/Accordion/Accordion";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <div>
      <Header />
      <main className="container mt-5 ">
        <h2>About</h2>
        <section className="container mt-5">
          <Accordion />
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default AboutPage;
