import React from "react";
import { Container } from "reactstrap";

// core components
// import ProfilePageHeader from "../../components/Headers/ProfilePageHeader";
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";

function ArtPage() {
  return (
    <>
      <ExamplesNavbar />
      {/* <ProfilePageHeader /> */}
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/Category-Header-Images/Art.jpg") + ")",
        }}
        className="page-header page-header-xs"
        data-parallax={true}
        // ref={pageHeader}
      >
        <div className="filter" />
      </div>

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
                Art Page <br />
              </h4>
              <h6 className="description">Demo</h6>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ArtPage;
