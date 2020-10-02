import React from "react";

import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  Row,
} from "reactstrap";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "Travel & Places",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80",
    link: "/travel-places",
  },
  {
    id: 2,
    name: "Fashion & Style",
    image:
      "https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1061&q=80",
    link: "/fashion-style",
  },
  {
    id: 3,
    name: "Art",
    image:
      "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1115&q=80",
    link: "/art",
  },
  {
    id: 4,
    name: "Entertainment",
    image:
      "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80",
    link: "/entertainment",
  },
  {
    id: 5,
    name: "Current Affairs",
    image:
      "https://images.unsplash.com/photo-1515443423862-b79d32c1b8f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=978&q=80",
    link: "/current-affairs",
  },

  {
    id: 6,
    name: "Health & Fitness",
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    link: "/health-fitness",
  },
];

function Categories() {
  return (
    <>
      <div
        className="section section-dark text-center"
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fade top>
          <h1 style={{ color: "#fff" }}>Categories</h1>
        </Fade>
        <Row className="justify-content-md-center">
          {data.map((data, key) => {
            return (
              <div
                style={{
                  margin: "0.5%",
                  width: "30%",
                  height: "100%",
                  objectFit: "none",
                }}
              >
                <Fade left>
                  <div key={key}>
                    <Link to={data.link}>
                      <Card>
                        <CardImg
                          src={data.image}
                          style={{
                            width: 600,
                            height: 350,
                            borderRadius: 8,
                          }}
                        ></CardImg>
                        {/* <CardBody>
                        <CardText >{data.name}</CardText>
                      </CardBody> */}
                        <CardImgOverlay
                          style={{
                            color: "#fff",
                            textDecorationStyle: "double",
                            alignContent: "flex-end",
                            objectFit: "cover",
                            margin: 0,
                          }}
                        >
                          <CardText>{data.name}</CardText>
                        </CardImgOverlay>
                      </Card>
                    </Link>
                  </div>
                </Fade>
              </div>
            );
          })}
        </Row>
      </div>
    </>
  );
}

export default Categories;
