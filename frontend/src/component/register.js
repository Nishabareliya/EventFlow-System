import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import '../component/register.css'
export default function Register(){

  const [user, setUser] = useState({
    name: "",
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

    const response =  await fetch(`http://localhost:5000/register/api/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify(user),
    });

    if (response.status===200) {
        setUser({
            name: "",
            email: "",
            password: "",
        });
        navigate("/");
    }
    console.log(response);

} catch (error) {
    console.log("register", error);
}
};






return (
    <div className='bgg'>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="login-form" onSubmit={handleSubmit}>

              <h2 className="test" style={{textAlign:"center"}}>Register</h2>


              <div className="mb-3">
                <label htmlFor="exampleInputName1" className="form-label">Name</label>
                <input
                  type="name"
                  className="form-control"
                  id="exampleInputName1"
                  aria-describedby="nameHelp"
                  placeholder="Enter name"
                  name="name"
                  // value={credentials.email}
                  onChange={handleInput}
                />
                <small id="nameHelp" className="form-text text-muted"></small>
              </div>


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
              <button type="submit" className="btn btn-primary" style={{background:"black" , width:"80px"}}>
                Submit
              </button>
              <br></br>
             
              <h4 style={{fontSize:"20px", color:"black"}}>already have an account <a href="/" class="register-button">Login</a></h4>

            </form>
          </div>
        </div>
      </div>
    </div>
);
}