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
                <a href="" target="_blank">
                  <i className="fa fa-facebook fa-2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/bitsandbytes.in?igshid=f7bhunq9vowl"
                  target="_blank"
                >
                  <i className="fa fa-instagram fa-2x" />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <i className="fa fa-twitter fa-2x" />
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> for You.
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
