import { Container, Navbar, Nav } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaYoutubeSquare, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import "./footer.scss";

export default function Footer() {
  return (
    <Navbar fixed="bottom" expand="lg" className="main-nav">
      <div className="col p-4">
        <Container className="footer-nav row w-100">
          <div className="row w-100 m-0">
            <Nav className="col-4 flex-column m-0">
              <h3>Products</h3>
              <hr className="solid"></hr>
              <Nav.Item>
                <Nav.Link href="#home" eventKey="link 1">
                  Clothing
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#home" eventKey="link 1">
                  Apparel
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#home" eventKey="link 1">
                  Accessories
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav className="col-4 flex-column m-0">
              <h3>About</h3>
              <hr className="solid"></hr>
              <Nav.Item>
                <Nav.Link href="#home" eventKey="link 1">
                  FAQ
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#home" eventKey="link 1">
                  Our Staff
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#home" eventKey="link 1">
                  Contact Us
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav className="col-4 justify-content-start flex-column m-0">
              <h3>Help</h3>
              <hr className="solid"></hr>
              <Nav.Item>
                <Nav.Link href="#home" eventKey="link 1">
                  Shipping
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#home" eventKey="link 1">
                  Customer support
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </Container>

        <Container className="justify-content-center align-items-center my-2 row w-100 m-0">
          <div className="row w-100 m-0 text-center align-items-center justify-content-center">
            <h3>Find us here</h3>
            <hr class="solid"></hr>
          </div>
          <div className="row w-100 m-0 justify-content-center">
            <IconContext.Provider value={{ size: "1em" }}>
              <Nav className="col-1 mx-1 justify-content-center align-items-center p-0">
                <Nav.Link href="http://www.youtube.com" target="_blank" className="w-100">
                  <FaYoutubeSquare className="footer-logo" style={{ color: "#FF0000" }} />
                </Nav.Link>
              </Nav>
              <Nav className="col-1 mx-1 justify-content-center align-items-center p-0">
                <Nav.Link href="http://www.twitter.com" target="_black" className="w-100">
                  <FaTwitterSquare className="footer-logo" style={{ color: "#1DA1F2" }} />
                </Nav.Link>
              </Nav>
              <Nav className="col-1 mx-1 justify-content-center align-items-center p-0">
                <Nav.Link href="http://www.facebook.com" target="_blank" className="w-100">
                  <FaFacebookSquare className="footer-logo" style={{ color: "#316FF6" }} />
                </Nav.Link>
              </Nav>
            </IconContext.Provider>
          </div>
        </Container>
      </div>
    </Navbar>
  );
}
