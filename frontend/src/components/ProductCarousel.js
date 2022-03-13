import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div
          className="left-carousel"
          style={{ width: "20%", backgroundColor: "white", color: "black" }}
        ></div>
        <Carousel
          pause="hover"
          style={{ width: "50%", backgroundColor: "white", color: "black" }}
        >
          {products.map((product) => (
            <Carousel.Item key={product._id}>
              <Link to={`/product/${product._id}`}>
                <Image src={product.image} alt={product.name} fluid />
                <Carousel.Caption className="carousel-caption">
                  {/* <h2>
                    {product.name} (${product.price})
                  </h2> */}
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
        <div
          className="left-carousel"
          style={{ width: "20%", backgroundColor: "white", color: "black" }}
        ></div>
      </div>
      <div className="gift-section">
        <div className="gift-item">
          <i className="fa fa-gift"></i>
          Official store
        </div>
        <div className="gift-item">
          <i className="fa fa-gift"></i>
          Official store
        </div>
        <div className="gift-item">
          <i className="fa fa-gift"></i>
          Official store
        </div>
        <div className="gift-item">
          <i className="fa fa-gift"></i>
          Official store
        </div>
      </div>
    </>
  );
};

export default ProductCarousel;
