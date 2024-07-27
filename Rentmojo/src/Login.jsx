import React, { useEffect, useState } from 'react';
import './LoginSignup.css';
import cathappy from './img/cathappy.svg'; 
import { useNavigate } from 'react-router-dom';



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState([]);
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await fetch("http://localhost:3000/users");
        if (!res.ok) {
          throw new Error('Failed to fetch user data');
        }
        let data = await res.json();
        setFormData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        
      }
    }
    fetchData();
  }, []);

  function check(event) {
    event.preventDefault(); 

    let validationErrors = {};
    let isValid = true;

    if (!email.trim()) {
      isValid = false;
      validationErrors.email = "Email is required";
    }
    if (!password.trim()) {
      isValid = false;
      validationErrors.password = "Password is required";
    }

    
    const user = formData.find(u => u.email === email && u.password === password);
    if (user) {
      alert("Login Successful");
      navigate('/');
    } else {
      isValid = false;
      alert("Invalid email or password")
      validationErrors.general = "";
    }

    setErrors(validationErrors);
    setValid(isValid);
  }

  return (
    <div className="app">
      <div className="login-container">
        <div className="login-image">
          <img src={cathappy} alt="Login Illustration" />
        </div>
        <div className="login-form">
          <h2>Login to your account!</h2>
          {valid ? <></> : <span>{errors.general}</span>}
          <form onSubmit={check}>
            <div className="form-group">
              <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
              {
               valid? <></> :  <span className='msgspan'>
                  {errors.email}
                  </span>
                }
            </div>
            <div className="form-group">
              <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
              {
                 valid? <></> : <span className='msgspan'>
                   {errors.password}
               </span>
              }
            </div>
            <button type="submit">Continue</button>
          </form>
          <p>Don't have an account? <a href="/signup">Create one</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
