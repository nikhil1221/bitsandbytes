import React from "react";

// core components
import { Container } from "reactstrap";

import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
import ProfilePageHeader from "../../components/Headers/ProfilePageHeader";

function TravelPage() {
  return (
    <>
      {/* <h1>Travel Page</h1> */}
      <ExamplesNavbar />
      <ProfilePageHeader />

      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/joe-gardner-2.jpg")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Travel Page <br />
              </h4>
              <h6 className="description">Demo</h6>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default TravelPage;
