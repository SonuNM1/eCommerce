import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={'Privacy Policy - Shoplyn'} >
      <div className="container policy">
        <h1 className="text-center my-4">🔒 Privacy Policy</h1>
        <p className="text-justify">
          Your privacy is important to us. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website, including any other media form, media channel, mobile website, or mobile application related or connected thereto.
        </p>
        
        <h2>📋 Information We Collect</h2>
        <p>We may collect information about you in a variety of ways, including:</p>
        <ul>
          <li>👤 <strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number.</li>
          <li>🖥️ <strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, browser type, operating system, access times, and the pages you have viewed.</li>
        </ul>

        <h2>📈 Use of Your Information</h2>
        <p>We use the information we collect in various ways, including to:</p>
        <ul>
          <li>🔑 Create and manage your account.</li>
          <li>📦 Process your transactions and send you related information.</li>
          <li>📬 Communicate with you about your account or transactions.</li>
          <li>📣 Send you marketing communications.</li>
        </ul>

        <h2>⚖️ Disclosure of Your Information</h2>
        <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
        <ul>
          <li>📜 By Law or to Protect Rights: If we believe the release of information about you is necessary to respond to legal process, investigate or remedy potential violations of our policies, or protect the rights, property, and safety of others, we will share your information as permitted or required by any applicable law, rule, or regulation.</li>
        </ul>

        <h2>📞 Contact Us</h2>
        <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
        <p>Email: support@ecommerceapp.com</p>
      </div>
    </Layout>
  );
};

export default Policy;
