import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {

  const [auth] = useAuth();
  
  return (
    <Layout title={"Dashboard - Shoplyn"}>
      <div className="container-flui m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>

          <div className="col-md-9">
            <div className="container mt-5">
              <div className="card w-75 mx-auto shadow-lg rounded">
                <div className="card-body">
                  <h2 className="text-center mb-4">User Dashboard</h2>
                  <div className="mb-3">
                    <h5>
                      <strong>Username:</strong> {auth?.user?.name}
                    </h5>
                  </div>
                  <div className="mb-3">
                    <h5>
                      <strong>Email:</strong> {auth?.user?.email}
                    </h5>
                  </div>
                  <div className="mb-3">
                    <h5>
                      <strong>Address:</strong> {auth?.user?.address}
                    </h5>
                  </div>
                  <div className="mb-3">
                    <a className="text-center"
                    href="https://shoplyn.netlify.app/dashboard/user/profile"

                    >Update Profile</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
