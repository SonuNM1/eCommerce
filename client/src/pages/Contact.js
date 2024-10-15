import React from "react";
import Layout from "./../components/Layout/Layout";


const Contact = () => {
  return (
    <Layout title={'Contact Us - Shoplyn'} >
      <div className="container contactus">
        <div className="row align-items-center mt-5">
          <div className="col-md-6">
            <img
              src="/contactus.jpg"
              alt="contactus"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h1 className="bg-dark p-3 text-white text-center rounded">CONTACT US</h1>
            <p className="text-justify mt-3">
              Any query or info about products? Feel free to call anytime. We are available 24/7!
            </p>
            <div className="contact-info mt-4">
              <p>
                <span role="img" aria-label="email">✉️</span>: sonu.mahto362000@gmail.com
              </p>
              <p>
                <span role="img" aria-label="phone">📞</span>: +91-7903648044
              </p>
              <p>
                <span role="img" aria-label="support">🎧</span>: 1800-0000-0000 (toll-free)
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
