import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"All Categories"}>
      <div className="container my-5">
        <div className="row">
          {categories.map((c) => (
            <div
              className="col-md-4 d-flex justify-content-center align-items-center mb-4"
              key={c._id}
            >
              <Link
                to={`/category/${c.slug}`}
                className="btn btn-primary w-100 p-3 text-decoration-none"
                style={{
                  fontSize: "1.5rem",
                  textAlign: "center",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
