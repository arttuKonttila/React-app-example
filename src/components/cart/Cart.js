import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Image, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { removeFromCart } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { IoClose } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import "./Cart.scss";

export default function Cart({ show, onHide }) {
  const { cartItems } = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0.0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let total = 0;
    cartItems.forEach((cartItem) => {
      total += cartItem.price;
    });
    setTotal(total);
  }, [cartItems]);

  const cartElements = cartItems?.map((product, index) => {
    return (
      <div class="card mb-3 mb-lg-0">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-row align-items-center">
              <div>
                <Image
                  src={product.image}
                  class="img-fluid rounded-3"
                  alt="Shopping item"
                  style={{ width: "65px" }}
                />
              </div>
              <div class="ms-3 cart-text">
                <h5>{product.title}</h5>
                <p class="small mb-0">{product.category}</p>
              </div>
            </div>
            <div class="d-flex flex-row align-items-center">
              <div style={{ width: "50px" }}>
                <h5 class="fw-normal mb-0">1</h5>
              </div>
              <div style={{ width: "80px" }}>
                <h5 class="mb-0">${product.price}</h5>
              </div>
              <div>
                <Button onClick={() => dispatch(removeFromCart({ key: index }))}>
                  <IoClose className="p-1 cart-remove-btn" />
                </Button>
              </div>
              <a href="#!" style={{ color: "#cecece" }}>
                <i class="fas fa-trash-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <section class="cartContainer" style={{ background: "#eee" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
              <div class="card">
                <div class="card-body p-4">
                  <div class="row">
                    <div class="col-lg-12">
                      <Nav>
                        <Nav.Item>
                          <Nav.Link onClick={() => navigate("/")}>
                            <FaArrowLeft className="cart-arrow-icon" />
                            Continue shopping
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <hr />

                      <div class="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p class="mb-1">Shopping cart</p>
                          <p class="mb-0">You have {cartItems.length} items in your cart</p>
                        </div>
                        <div>
                          <p class="mb-0">
                            <span class="text-muted">Sort by:</span>{" "}
                            <a href="#!" class="text-body">
                              price <i class="fas fa-angle-down mt-1"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                      {cartElements}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
