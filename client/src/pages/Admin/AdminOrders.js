import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Select } from "antd";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const { Option } = Select;

const AdminOrders = () => {
  const [status] = useState([
    "Not Processed",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
  ]);
  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/all-orders");
      console.log(data); // Log the response data
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      await axios.put(`/api/v1/auth/order-status/${orderId}`, {
        status: value,
      });
      getOrders(); // Refresh orders after status change
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"All Orders Data"}>
      <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>

        <div className="col-md-9">
          <h1 className="text-center">All Orders</h1>
          {orders.length === 0 ? (
            <p>No orders available.</p>
          ) : (
            orders.map((o, i) => (
              <div className="border shadow mb-4" key={o._id}>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Status</th>
                      <th scope="col">Buyer</th>
                      <th scope="col">Date</th>
                      <th scope="col">Payment</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{i + 1}</td>
                      <td>
                        <Select
                          bordered={false}
                          onChange={(value) => handleChange(o._id, value)}
                          defaultValue={o?.status}
                        >
                          {status.map((s, i) => (
                            <Option key={i} value={s}>
                              {s}
                            </Option>
                          ))}
                        </Select>
                      </td>
                      <td>{o?.buyer?.name}</td>
                      <td>{moment(o?.createdAt).fromNow()}</td>
                      <td>{o?.payment?.success ? "Success" : "Failed"}</td>
                      <td>{o?.products?.length}</td>
                    </tr>
                  </tbody>
                </table>
                
                <div className="container">
                  {o?.products?.map((p) => (
                    <div
                      className="row mb-2 p-3 card flex-row"
                      key={p._id}
                      style={{ width: "100%", maxWidth: "500px" }}
                    >
                      <div className="col-md-4">
                        <img
                          src={`/api/v1/product/product-photo/${p._id}`}
                          className="card-img-top"
                          alt={p.name}
                          style={{ width: "100%", height: "auto" }} 
                        />
                      </div>
                      <div className="col-md-8 d-flex flex-column justify-content-between">
                        <div>
                          <p className="mb-1">
                            <strong>{p.name}</strong>
                          </p>
                          <p className="mb-1">
                            {p.description.substring(0, 30)}...
                          </p>{" "}
                        </div>
                        <p className="mb-0">Price: ₹{p.price}</p>{" "}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AdminOrders;
