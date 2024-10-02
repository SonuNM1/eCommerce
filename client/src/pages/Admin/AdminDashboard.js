import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <div className="container-fluid m-3 p-3 d-flex justify-content-center">
        <div className="row w-100">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-6"> {/* Reduced width */}
            <div className="card p-4 shadow-sm rounded">
              <h2 className="mb-4 text-primary text-center">Admin Dashboard</h2>
              <div className="admin-info">
                <h4 className="mb-3 d-flex align-items-center">
                  <span role="img" aria-label="name" className="me-2">👤</span> 
                  <strong>Name:</strong> {auth?.user?.name}
                </h4>
                <h4 className="mb-3 d-flex align-items-center">
                  <span role="img" aria-label="email" className="me-2">✉️</span> 
                  <strong>Email:</strong> {auth?.user?.email}
                </h4>
                <h4 className="mb-3 d-flex align-items-center">
                  <span role="img" aria-label="contact" className="me-2">📞</span> 
                  <strong>Contact:</strong> {auth?.user?.phone}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;

// 21-29