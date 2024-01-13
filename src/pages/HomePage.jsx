/** @format */
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Donate from "../components/Donate/Donate";
import { endpoints } from "../assets/endPoints";
import UrlCard from "../components/UrlCard/UrlCard";
// import { style } from "react-syntax-highlighter/dist/esm/styles/{hljs|prism}";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const veganMeme = `{
  created_by: { type: String, required: false },
  date: { type: String, required: false },
  meme_url: { type: String, required: false },
  file_name: { type: String, required: false },
  tag: { type: String, required: false },
}`

function HomePage() {

  return (
    <div>
      <Header />
      <Hero />
      {/* <div style={{  margin: "auto", padding: '0 1rem' }} > */}
      <div className="container">
        <Donate />
        <h2>URLs</h2>
        <div >
          {endpoints.map((endpoint, index) => (
            <UrlCard endpoint={endpoint} index={index} />
          ))}
          <p className="m-0 font-monospace">MongoDB Meme Schema </p>
          <table className="table bg-light border rounded shadow">
            <tbody>
              <tr>
                <th scope="row" className="table-text ">
                  <SyntaxHighlighter
                    lineProps={{
                      style: {
                        wordBreak: "break-all",
                        whiteSpace: "pre-wrap",
                        textAlign: "center",
                        fontSize: ".75rem",
                        margin: "auto",
                      },
                    }}
                    wrapLines={true}
                    language="mongodb"
                    style={dark}
                    veganMeme={veganMeme}>
                    {veganMeme}
                  </SyntaxHighlighter>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
