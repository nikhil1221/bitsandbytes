import React from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  Button,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
// core components

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
      <div className="page-header" data-parallax={true} ref={pageHeader}>
        <div
          style={{
            height: window.innerHeight,
            backgroundColor: "#fff",
            alignContent: "left",
            width: 100,
            position: "relative",
          }}
        >
          <h1>Hello</h1>
        </div>
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>What's Trending?</h1>
            <h3></h3>
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

// function SectionCarousel() {
//   const [activeIndex, setActiveIndex] = React.useState(0);
//   const [animating, setAnimating] = React.useState(false);
//   const onExiting = () => {
//     setAnimating(true);
//   };
//   const onExited = () => {
//     setAnimating(false);
//   };
//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   };
//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   };
//   const goToIndex = (newIndex) => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   };
//   return (
//     <>
//       <div className="section pt-o" id="carousel">
//         <Container>
//           <Row>
//             <Col className="ml-auto mr-auto" md="8">
//               <Card className="page-carousel">
//                 <Carousel
//                   activeIndex={activeIndex}
//                   next={next}
//                   previous={previous}
//                 >
//                   <CarouselIndicators
//                     items={items}
//                     activeIndex={activeIndex}
//                     onClickHandler={goToIndex}
//                   />
//                   {items.map((item) => {
//                     return (
//                       <CarouselItem
//                         onExiting={onExiting}
//                         onExited={onExited}
//                         key={item.src}
//                       >
//                         <img src={item.src} alt={item.altText} />
//                         <CarouselCaption
//                           captionText={item.caption}
//                           captionHeader=""
//                         />
//                       </CarouselItem>
//                     );
//                   })}
//                   <a
//                     className="left carousel-control carousel-control-prev"
//                     data-slide="prev"
//                     href="#pablo"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       previous();
//                     }}
//                     role="button"
//                   >
//                     <span className="fa fa-angle-left" />
//                     <span className="sr-only">Previous</span>
//                   </a>
//                   <a
//                     className="right carousel-control carousel-control-next"
//                     data-slide="next"
//                     href="#pablo"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       next();
//                     }}
//                     role="button"
//                   >
//                     <span className="fa fa-angle-right" />
//                     <span className="sr-only">Next</span>
//                   </a>
//                 </Carousel>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </div>{" "}
//     </>
//   );
// }

export default LandingPageHeader;
