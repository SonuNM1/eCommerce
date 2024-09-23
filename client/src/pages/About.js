import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row about-section">
        <div className="col-md-6">
          <img
            src="about.png"
            alt="About Me"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <h1 className="bg-dark p-2 text-white text-center">ABOUT ME</h1>
          <p className="mt-2">
            👋 Hi, I'm Sonu, living in Delhi, India. I completed my MCA in 2024.
            I have skills in frontend, backend, REST API development, Java, and
            databases. I love making projects to enhance my skills, practice
            DSA, and stay fit by going to the gym. Currently, I'm searching for
            a job in IT.
          </p>
          <h3 className="mt-3">🌐 Connect with me:</h3>
          <p className="mt-2">
            <span>GitHub: </span>
            <a href="https://github.com/SonuNM1" target="_blank" rel="noopener noreferrer">
              SonuNM1
            </a>
          </p>
          <p className="mt-2">
            <span>Instagram: </span> 
            <a href="https://instagram.com/the_sonu.nm" target="_blank" rel="noopener noreferrer">
              the_sonu.nm
            </a>
          </p>
          <p className="mt-2">
            <span>Email: </span>
            <a href="mailto:sonu.mahto362000@gmail.com">sonu.mahto362000@gmail.com</a>
          </p>
          <p className="mt-2">
            <span>LinkedIn: </span> 
            <a href="https://www.linkedin.com/in/sonunmahto" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
