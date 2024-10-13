import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import moment from "moment";
import { Select } from "antd";
const { Option } = Select;

const AdminOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
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
      await axios.put(`/api/v1/auth/order-status/${orderId}`, { status: value });
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };

  // Inline styles
  const styles = {
    card: {
      display: "flex",
      alignItems: "center",
      marginBottom: "1rem",
      border: "1px solid #dee2e6",
      borderRadius: "5px",
      padding: "10px",
      // Ensure consistent padding
    },
    img: {
      width: "100px",
      height: "100px",
      objectFit: "cover", // Maintain aspect ratio
    },
    productInfo: {
      marginLeft: "15px", // Space between image and text
      flex: 1, // Allow the text to take remaining space
    },
    productName: {
      fontWeight: "bold",
      fontSize: "16px", // Increase font size for product name
    },
    productDescription: {
      color: "#555",
      margin: "5px 0", // Space between description and price
    },
    productPrice: {
      fontWeight: "bold",
      color: "#000",
    },
  };

  return (
    <Layout title={"All Orders Data"}>
      <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Orders</h1>
          {orders?.map((o, i) => (
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
                        {status.map((s, index) => (
                          <Option key={index} value={s}>
                            {s}
                          </Option>
                        ))}
                      </Select>
                    </td>
                    <td>{o?.buyer?.name}</td>
                    <td>{moment(o?.createAt).fromNow()}</td>
                    <td>{o?.payment.success ? "Success" : "Failed"}</td>
                    <td>{o?.products?.length}</td>
                  </tr>
                </tbody>
              </table>
              <div className="container">
                {o?.products?.map((p) => (
                  <div className="row" style={styles.card} key={p._id}>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                      <img
                        src={`/api/v1/product/product-photo/${p._id}`}
                        style={styles.img}
                        alt={p.name}
                      />
                    </div>
                    <div className="col-md-8" style={styles.productInfo}>
                      <p style={styles.productName}>{p.name}</p>
                      <p style={styles.productDescription}>{p.description.substring(0, 30)}...</p>
                      <p style={styles.productPrice}>Price: ₹{p.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AdminOrders;
