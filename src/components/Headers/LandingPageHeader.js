import React from "react";

// reactstrap components
import { Container, Button } from "reactstrap";
// core component
import img from "assets/img/bruno-abatti.jpg";
const items = [
  {
    src: require("assets/img/soroush-karimi.jpg"),
    altText: "Somewhere",
    caption: "Somewhere",
  },
  {
    src: require("assets/img/federico-beccari.jpg"),
    altText: "Somewhere else",
    caption: "Somewhere else",
  },
  {
    src: require("assets/img/joshua-stannard.jpg"),
    altText: "Here it is",
    caption: "Here it is",
  },
];

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="filter" />
        <Container>
          {/* <UncontrolledCarousel items={items} /> */}
          <div className="motto text-center">
            <h1>Bits & Bytes.</h1>
            <h3>
              Trying to motivate and inspire everyone we come across, by
              presenting some of the real influencers among us.
            </h3>
            <br />
            {/* <Button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Watch video
            </Button> */}
            <Button
              // implement scroll to next div
              onClick={window.scrollBy(0, 500)}
              className="btn-round"
              style={{
                borderRadius: "50%",
                width: 50,
                height: 50,
                alignItems: "center",
              }}
              color="neutral"
              type="button"
              outline
            >
              <div>
                <i className="nc-icon nc-minimal-down" size="4x" />
              </div>
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
