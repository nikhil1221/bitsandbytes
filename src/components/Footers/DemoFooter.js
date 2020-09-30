import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav ">
            <ul>
              <li>
                <a href="mailto:bitsandbytes.in@gmail.com" target="_blank">
                  <i className="fa fa-envelope-o fa-2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/bitsandbytes.in/"
                  target="_blank"
                >
                  <i className="fa fa-instagram fa-2x" />
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span>
              © {new Date().getFullYear()}, by Bits & Bytes with{" "}
              <i className="fa fa-heart heart" /> for You.
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
