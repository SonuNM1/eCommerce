import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const APP_URL = process.env.REACT_APP_API ; 

const Products = () => {

  const [products, setProducts] = useState([]);

  // Get all products

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${APP_URL}/api/v1/product/get-product`);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // Lifecycle method

  useEffect(() => {
    getAllProducts();
  }, []);

  // Inline styles

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%', // Ensure the card expands to the full height
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
  };

  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Products List</h1>

          {/* Product Grid */}

          <div className="row">
            {products?.map((p) => (
              <div key={p._id} className="col-md-3 mb-4">
                <Link
                  to={`${APP_URL}/dashboard/admin/product/${p.slug}`}
                  className="text-decoration-none"
                >
                  <div className="card" style={cardStyle}>
                    <img
                      src={`${APP_URL}/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                      style={imgStyle}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">
                        {p.description.substring(0, 60)}...
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
