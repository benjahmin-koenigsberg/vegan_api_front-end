function Accordion() {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
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
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> class. This is the
            first item's accordion body.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo">
            Why vegan memes?
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
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
            className="accordion-button collapsed"
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
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> class. This is the
            third item's accordion body. Nothing more exciting happening here in
            terms of content, but just filling up the space to make it look, at
            least at first glance, a bit more representative of how this would
            look in a real-world application.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingFour">
          <button
            className="accordion-button collapsed"
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
            className="accordion-button collapsed"
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
          <div className="accordion-body">
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> class. This is the
            third item's accordion body. Nothing more exciting happening here in
            terms of content, but just filling up the space to make it look, at
            least at first glance, a bit more representative of how this would
            look in a real-world application.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Accordion;
