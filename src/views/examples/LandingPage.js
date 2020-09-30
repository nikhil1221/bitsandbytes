import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const [expand, setExpand] = useState(false);

  const allMembers = () => {
    setExpand(!expand);
  };
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            {/* <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">What is Bits & Bytes ?</h2>
                <h5 className="description">
                  A fortnightly magazine startup by a group of youngsters,
                  trying to motivate and inspire everyone we come across by
                  presenting some of the real influencers among us, who have
                  followed their hesitant dreams and ideas ridiculed by others
                  to be where they are today.
                </h5>
                <br />
              </Col>
            </Row>
            <br />
            <br /> */}
            <Row>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-book-bookmark" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Blogs</h4>
                    <p className="description">
                      Spend your time reading our informative blogs about fields
                      of your choice.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">New Ideas</h4>
                    <p>
                      Aware yourself with new ideas presented by some of the
                      real influencers among us.
                    </p>
                  </div>
                </div>
              </Col>

              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bag-16" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">E- Magazine</h4>
                    <p>
                      Get access to our unique and creatively designed
                      E-magazine issues.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Our Team Section */}
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Our Team</h2>
            <Row>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <img
                      alt="..."
                      src={require("assets/teamImages/Nasreen.jpg")}
                    />
                  </div>
                  <CardBody>
                    <div className="author">
                      <CardTitle tag="h4">Nasreen Chahal</CardTitle>
                      <h6 className="card-category">Founder & Editor</h6>
                    </div>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://www.instagram.com/nasreenchahal/"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="mailto:chahalnasreen11@gmail.com"
                    >
                      <i className="fa fa-envelope-o" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <img
                      alt="..."
                      src={require("assets/teamImages/Sahib.jpg")}
                    />
                  </div>
                  <CardBody>
                    <div className="author">
                      <CardTitle tag="h4">Sahib Singh Arora</CardTitle>
                      <h6 className="card-category">
                        Design Editor & Graphic Designer
                      </h6>
                    </div>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://www.instagram.com/sahibsingh0019/"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="mailto:sahibarora97@gmail.com"
                    >
                      <i className="fa fa-envelope-o" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <img
                      alt="..."
                      src={require("assets/teamImages/Ekas.jpg")}
                    />
                  </div>
                  <CardBody>
                    <div className="author">
                      <CardTitle tag="h4">Ekas</CardTitle>
                      <h6 className="card-category">Marketing Head</h6>
                    </div>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://www.instagram.com/ekas2212/"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="mailto: ekas10000@gmail.com"
                    >
                      <i className="fa fa-envelope-o" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <img
                      alt="..."
                      src={require("assets/teamImages/YODHIN.jpg")}
                    />
                  </div>
                  <CardBody>
                    <div className="author">
                      <CardTitle tag="h4">Yodhin</CardTitle>
                      <h6 className="card-category">Creative Director</h6>
                    </div>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="https://www.instagram.com/ghostofdavinci/"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="mailto: Yodhinaggarwal@gmail.com"
                    >
                      <i className="fa fa-envelope-o" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>

            {/* Row2 */}
            {expand ? (
              <Row>
                <Col md="3">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <img
                        alt="..."
                        src={require("assets/teamImages/Vanshika.jpg")}
                      />
                    </div>
                    <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Vanshika Bajwa</CardTitle>
                        <h6 className="card-category">Sales Manager</h6>
                      </div>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href="https://www.instagram.com/vanshikabajwa_/"
                      >
                        <i className="fa fa-instagram" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <img
                        alt="..."
                        src={require("assets/teamImages/AseesPreet.jpg")}
                      />
                    </div>
                    <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Aseespreet Singh</CardTitle>
                        <h6 className="card-category">Graphic Designer</h6>
                      </div>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href="https://www.instagram.com/asees66/"
                      >
                        <i className="fa fa-instagram" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <img
                        alt="..."
                        src={require("assets/teamImages/Deepanshi.jpg")}
                      />
                    </div>
                    <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Deepanshi Sharma</CardTitle>
                        <h6 className="card-category">Content Writer</h6>
                      </div>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href="https://www.instagram.com/deepanshi._.sharma/"
                      >
                        <i className="fa fa-instagram" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <img
                        alt="..."
                        src={require("assets/teamImages/Srijana.jpg")}
                      />
                    </div>
                    <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Sirjana Virk</CardTitle>
                        <h6 className="card-category">Content Writer</h6>
                      </div>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href="https://www.instagram.com/_sirjana_virk_/"
                      >
                        <i className="fa fa-instagram" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>

                {/* Row 3 */}
                <Col md="3">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <img
                        alt="..."
                        src={require("assets/teamImages/Simran.jpg")}
                      />
                    </div>
                    <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Simran Sohi</CardTitle>
                        <h6 className="card-category">Content Writer</h6>
                      </div>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href="https://www.instagram.com/sylhet.xo/"
                      >
                        <i className="fa fa-instagram" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <img
                        alt="..."
                        src={require("assets/teamImages/Sahil Mittal.jpg")}
                      />
                    </div>
                    <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Sahil Mittal</CardTitle>
                        <h6 className="card-category">Content Writer</h6>
                      </div>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href="https://www.instagram.com/sahil.121/"
                      >
                        <i className="fa fa-instagram" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <img
                        alt="..."
                        src={require("assets/teamImages/Ayushi Lakhanpal.jpg")}
                      />
                    </div>
                    <CardBody>
                      <div className="author">
                        <CardTitle tag="h4">Ayushi Lakhanpal</CardTitle>
                        <h6 className="card-category">Content Creator</h6>
                      </div>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href="https://www.instagram.com/ayushi_lakhanpal/"
                      >
                        <i className="fa fa-instagram" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            ) : null}

            {/* Button to expand the div */}
            {expand ? (
              <Button
                onClick={allMembers}
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
                  <i className="nc-icon nc-minimal-up" size="4x" />
                </div>
              </Button>
            ) : (
              <Button
                className="btn-fill"
                color="danger"
                size="md"
                onClick={allMembers}
              >
                See all
                <span>{"   "}</span>
                <i className="nc-icon nc-minimal-down" size="4x" />
              </Button>
            )}
          </Container>
        </div>

        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
