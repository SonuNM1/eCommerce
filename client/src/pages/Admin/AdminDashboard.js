import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9"> {/* This ensures the admin info takes most of the width */}
            <div className="card p-4 shadow-sm rounded border-primary" style={{ minHeight: '300px', width: '65%' }}>
              <h2 className="mb-4 text-primary text-center">Admin Dashboard</h2>
              <div className="admin-info">
                <h4 className="mb-3 d-flex align-items-center">
                  <span role="img" aria-label="name" className="me-2">👤</span> 
                  <strong>Name:</strong> {auth?.user?.name || "N/A"}
                </h4>
                <h4 className="mb-3 d-flex align-items-center">
                  <span role="img" aria-label="email" className="me-2">✉️</span> 
                  <strong>Email:</strong> {auth?.user?.email || "N/A"}
                </h4>
                <h4 className="mb-3 d-flex align-items-center">
                  <span role="img" aria-label="contact" className="me-2">📞</span> 
                  <strong>Contact:</strong> {auth?.user?.phone || "N/A"}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card {
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
          transition: all 0.3s ease;
          max-width: 100%; /* Prevents the card from exceeding the container */
        }
        .card:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        .admin-info {
          padding: 15px;
          border-radius: 8px;
          background-color: #f8f9fa;
        }
        h2 {
          font-size: 24px;
          font-weight: bold;
        }
        h4 {
          font-size: 18px;
        }
      `}</style>
    </Layout>
  );
};

export default AdminDashboard;
