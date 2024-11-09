import { Container, Navbar, Nav, Button, Offcanvas, NavDropdown, Image } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsCart4, BsReverseListColumnsReverse } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { useSelector } from "react-redux";
import Logo from "../../assets/images/logo-white.png";
import "./navbar.scss";

export default function RootNavBar() {
  const { cartItems } = useSelector((state) => state.cart);
  const [showCanvas, setCanvasShow] = useState(false);
  const navigate = useNavigate();
  const handleCanvasClose = () => setCanvasShow(false);
  const handleCanvasShow = () => setCanvasShow(true);

  return (
    <Navbar fixed="top" expand="lg" className="main-nav">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>
          <Image src={Logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav justify-content-center nav-collapse">
          <Nav className="me-auto">
            <Nav.Item className="mx-2">
              <Nav.Link onClick={() => navigate("/")} eventKey="link 1">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mx-2">
              <Nav.Link onClick={() => navigate("/products")} eventKey="link 1" disabled>
                Products
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mx-2">
              <Nav.Link onClick={() => navigate("/about")} eventKey="link 1">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mx-2">
              <Nav.Link onClick={() => navigate("/help")} eventKey="link 1">
                Help
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <Button type="button" className="canvas-btn" onClick={() => handleCanvasShow()}>
          <BsReverseListColumnsReverse />
        </Button>
        <Button
          type="button"
          className="cart-btn"
          value={cartItems.length}
          onClick={() => navigate("/cart")}
        >
          <BsCart4 />
        </Button>
      </Container>
      <Offcanvas show={showCanvas} onHide={handleCanvasClose} placement="end">
        <Offcanvas.Header>
          <Offcanvas.Title>
            <Button
              type="button"
              className="canvas-cart-btn"
              onClick={() => {
                handleCanvasClose();
                navigate("/cart");
              }}
              value={cartItems.length}
            >
              <BsCart4 />
            </Button>
          </Offcanvas.Title>
          <Offcanvas.Title>
            <Button className="canvas-close-btn" onClick={() => handleCanvasClose()}>
              <IoCloseSharp />
            </Button>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Nav>
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    navigate("/");
                    setCanvasShow(false);
                  }}
                >
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    navigate("/products");
                    setCanvasShow(false);
                  }}
                  disabled
                >
                  Products
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    navigate("/about");
                    setCanvasShow(false);
                  }}
                  eventKey="link 1"
                >
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    navigate("/help");
                    setCanvasShow(false);
                  }}
                  eventKey="link 1"
                >
                  Help
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
}

/* <Navbar>
              <Container>
                <Nav className="me-auto flex-column text-center w-100">
                  <Nav.Item className="my-2">
                    <Nav.Link href="#home" eventKey="link 1">
                      Home
                    </Nav.Link>
                  </Nav.Item>
                  <NavDropdown title="Products" id="basic-nav-dropdown" align="center">
                    <NavDropdown.Item href="#action/3.1">Clothing</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Apparel</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="About" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">FAQ</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Our Staff</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Shipping</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Help" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Contatc Us</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Customer Support</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Container>
            </Navbar> */
