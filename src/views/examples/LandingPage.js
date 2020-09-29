import React from "react";

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
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
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
            <br />
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
                      src={require("assets/teamImages/Sahib Singh.jpg")}
                    />
                  </div>
                  <CardBody>
                    <div className="author">
                      <CardTitle tag="h4">Sahib Singh</CardTitle>
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
                      href="mailto: ekas10000@gmail.com"
                    >
                      <i className="fa fa-envelope-o" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
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
