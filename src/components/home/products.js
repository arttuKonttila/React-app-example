import "./products.scss";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../features/products/productSlice";
import { addToCart } from "../../features/cart/cartSlice";
import { Spinner, Image, Button } from "react-bootstrap";

export default function Products() {
  const { productItems } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  /* Get products on page load */
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productsAvailable = () => {
    if (productItems === undefined && productItems.length === 0) {
      return false;
    }

    return true;
  };

  const mapProducts = productItems.slice(0, 6).map((product, index) => {
    return (
      <div key={index} className="grid-item rounded">
        <div className="card">
          <div className="image-row">
            <Image src={product.image} />
          </div>
          <div className="details">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <span>€{product.price}</span>
          </div>
        </div>
        <Button
          onClick={() => {
            dispatch(addToCart({ item: product }));
          }}
          className="rounded-bottom"
        >
          Add to cart
        </Button>
      </div>
    );
  });

  return (
    <>
      <div className="main-container">
        <div className="product-section">
          <h2 className="text-center">New</h2>
          <div className="grid-container">{productsAvailable ? mapProducts : <Spinner />}</div>
        </div>
      </div>
    </>
  );
}
