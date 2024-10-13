import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetailsStyles.css";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const [cart, setCart] = useCart();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  // Fetch product details

  useEffect(() => {
    if (params?.slug) {
      getProduct();
    }
  }, [params?.slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/get-product/${params.slug}`);
      setProduct(data?.product);
      getSimilarProducts(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch similar products

 const getSimilarProducts = async (pid, cid) => {
  try {
    const { data } = await axios.get(`/api/v1/product/related-product/${pid}/${cid}`);
    setRelatedProducts(data?.products);
  } catch (error) {
    console.log(error);
  }
};


  // Function to add product to the cart

  const addToCart = () => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Item added to cart");
  };

  return (
    <Layout>
      <div className="container my-5">
        <div className="row product-details">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src={`/api/v1/product/product-photo/${product._id}`}
              className="img-fluid rounded"
              alt={product.name}
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6">
            <div className="product-details-info p-4 rounded bg-light shadow-sm">
              <h2 className="text-center mb-4">{product.name}</h2>
              <hr />
              <p>
                <strong>Description:</strong> {product.description}
              </p>
              <p>
                <strong>Price:</strong>{" "}
                {product?.price?.toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                })}
              </p>
              <p>
                <strong>Category:</strong> {product?.category?.name}
              </p>

              <button className="btn btn-dark ms-1" onClick={addToCart}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        <div className="row similar-products">
          <h4 className="text-center mb-4">Similar Products ➡️</h4>
          {relatedProducts.length < 1 && (
            <p className="text-center">No Similar Products found</p>
          )}
          <div className="d-flex flex-wrap justify-content-center">
            {relatedProducts.map((p) => (
              <div className="card m-2 shadow-sm" key={p._id} style={{ width: "18rem" }}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top img-fluid"
                  alt={p.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <h6 className="card-title text-primary">
                    {p.price.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                    })}
                  </h6>
                  <p className="card-text">{p.description.substring(0, 60)}...</p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-info" onClick={() => navigate(`/product/${p.slug}`)}>
                      More Details
                    </button>
                    <button
                      className="btn btn-dark"
                      onClick={() => {
                        const updatedCart = [...cart, p];
                        setCart(updatedCart);
                        localStorage.setItem("cart", JSON.stringify(updatedCart));
                        toast.success("Item Added to cart");
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
