import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../component/login.css'
export default function Login(){

    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    
    const navigate = useNavigate();
    
    const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    
    setUser({
        ...user,
        [name]: value,
    });
    };
    const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(user);
    try {
    
        const response =  await fetch(`http://localhost:5000/register/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
    
        if (response.status===200) {
            alert("login successfully!")
            navigate("/home");
        }else{
          alert("Not login");
        }
        console.log(response);
    
    } catch (error) {
        console.log("login", error);
    }
    };
    // Define the button styles
const buttonStyle = {
  fontSize: "20px",
  color: "black",
  backgroundColor: "#f9eded",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};



    return (
      <div className='bgg'>
        <div className='container'>
          <div className="row justify-content-center">
          
            <div className="col-md-6">
              <form className="login-form" onSubmit={handleSubmit}>
             
              
                <h2 className="test" style={{textAlign:"center"}}>LogIn</h2>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="email"
                    // value={credentials.email}
                    onChange={handleInput}
                  />
                  <small id="emailHelp" className="form-text text-muted"></small>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name="password"
                    // value={credentials.password}
                    onChange={handleInput}
                  />
                  <small id="passwordHelp" className="form-text text-muted"></small>
                </div>
                <button type="submit" className="btn btn-primary" style={{background:"black", width:"80px",}}>
                  Submit
                </button>
                {/* <Link to="/createuser" className='m-3 btn btn-danger'>
                  Don't have an Account
                </Link> */}
                  
                  <br></br>
                {/* <h4>or Create account <a href="/register" style={{color:"Green", fontSize:"20px"}} >Register</a></h4> */}
                   
                <h4 style={{fontSize:"20px", color:"black"}}>or create account <a href="/register" class="register-button">Register</a></h4>

                <button style={buttonStyle}>Login as Admin <a href="/regis" className="register-button">Admin Login</a></button>

              </form>
            </div>
          </div>
        </div>
      </div>
  );
}