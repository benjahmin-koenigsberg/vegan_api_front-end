/** @format */

function Accordion() {
  return (
    <div
      className="accordion accordion-flush lh-lg border rounded shadow"
      id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header " id="flush-headingOne">
          <button
            className="accordion-button collapsed mt-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne">
            What is a meme?
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            A meme is an idea, behavior, or style that spreads by means of
            imitation from person to person within a culture and often carries
            symbolic meaning representing a particular phenomenon or theme.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button collapsed mt-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseJson"
            aria-expanded="false"
            aria-controls="flush-collapseJson">
            Why memes?
          </button>
        </h2>
        <div
          id="flush-collapseJson"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            On the surface, internet memes are a ubiquitous source of light
            entertainment – a way for people to express themselves through
            cleverly remixed templates of text, images and videos. But memes
            also have a serious side, according to researchers looking at modern
            forms of communication. They are a language in themselves, with a
            capacity to transcend cultures and construct collective identities
            between people. These sharable visual jokes can also be powerful
            tools for self-expression, connection, social influence and even
            political subversion.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className="accordion-button collapsed mt-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree">
            Why vegen memes?
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThreer"
          data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            Memes help the world’s growing community of vegans (it’s estimated
            there are roughly 8 million globally) to bond and spread
            information, but also call out some of the world’s destructive
            industries, while still maintaining an air of humor
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingFour">
          <button
            className="accordion-button collapsed mt-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour">
            Why a public API
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            Public APIs speed up the development process of web applications and
            also enable integration between different systems. You can use
            public APIs to create integrations between different applications
            and services. This can improve the user experience by making it
            easier to use different products together seamlessly. Improved
            efficiency Public APIs can help developers create applications more
            efficiently by allowing them to focus on the specific functionality
            they want to build, rather than having to worry about the underlying
            technology. Increased functionality By using public APIs, developers
            can add new functionality to their applications without having to
            build it themselves. This can enable them to create more complex and
            innovative applications.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingFive">
          <button
            className="accordion-button collapsed mt-0  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFive"
            aria-expanded="false"
            aria-controls="flush-collapseFive">
            About Benjahmmin
          </button>
        </h2>
        <div
          id="flush-collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFive"
          data-bs-parent="#accordionFlushExample">
          <div className="accordion-body d-flex flex-column  align-items-center justify-content-center gap-4">
            <div
              className="text-center d-flex  justify-content-center align-items-center  flex-column"
              id="profile">
              <img
                style={{ height: "15rem" }}
                src="https://benjahminkoenigsberg.com/images/my-avatar.png"
                className="m-2"
              />
              <div className=" px-4">
                I’m a Full Stack Developer with a passion for problem-solving
                and creating memorable, accessible and efficient web
                applications. I have experience developing web applications
                using modern JavaScript technologies such as React, CSS
                libraries and Node. I also have over 12 years of experience as a
                massage therapist, helping elite athletes to get and stay out of
                pain. This background has helped me grow as a reliable and
                results-driven team player that delivers with a growth mindset,
                effective communication, problem solving and commitment to
                success. I am always eager to learn new skills and technologies
                while delivering solutions that exceed expectations.
              </div>
            </div>

            <div className="d-flex flex-row gap-5  mt-2">
              <a
                href="https://github.com/benjahmin-koenigsberg"
                target="_blank">
                <button className="btn-sm">github 💻</button>
              </a>
              <a href="https://benjahminkoenigsberg.com/">
                <button className="btn-sm">portfolio 🌎</button>
              </a>
              <a href="mailto:benjahmin.lakin@gmail.com">
                <button className="btn-sm">email 📧</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Accordion;
