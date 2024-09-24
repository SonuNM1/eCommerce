import React, {useState} from "react";
import Layout from "../../components/Layout/Layout";

const Register = () => {

    const [name, setName] = useState("") ; 
    const [email, setEmail] = useState("") ; 
    const [password, setPassword] = useState("") ; 
    const [phone, setPhone] = useState("") ; 
    const [address, setAddress] = useState("") ; 

  return (
    <Layout title={"Register - ClickNBuy"}>
      <div className="register">
        <h1>Register Page</h1>

        <form>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              placeholder="Enter Your Name"
            />
          </div>
         
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputName"
              placeholder="Enter your email"
            />
          </div>
        
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Password"
            />
        
          </div>
          
          <div className="mb-3">    
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your Contact number"
            />
        
          </div>
          
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter address"
            />
        
          </div>
        
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

      </div>
    </Layout>
  );
};

export default Register;
