import { computeHeadingLevel } from '@testing-library/react';
import React from 'react'
import { useRef } from 'react'
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmpasswordRef = useRef(null)
  const usernameRef = useRef(null)
  const genderRef = useRef(null)
  const ageRef = useRef(null)
  const phoneRef = useRef(null)
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
  }
  const handleSignup = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmpassword = confirmpasswordRef.current.value
    const age = ageRef.current.value
    const phone = phoneRef.current.value
    const gender = genderRef.current.value
    const username = usernameRef.current.value
    console.log(email, password);
    fetch("http://localhost:8080/postuser", {
      method: "post",
      headers: headers,

      //make sure to serialize your JSON body
      body: JSON.stringify({
        email: email,
        password: password,
        name: username,
        age: age,
        gender: gender,
        confirmPassword: confirmpassword,
        contactNumber: phone

      })
    })

      .then((response) => {
        return response.json();
      })
      .then(data => {
        // console.log("Login successful:", data);
        if (data === false) {
          // onLogin(false)
          console.log("signup failed");
        } else {
          // onLogin(true)
          console.log("signup successful");
          localStorage.setItem("isLoggedIn", true)
          navigate("/login");
        }
      })
  }


  return (
    <div className="signup">
      <div className='wrapper'>
        <form action="" onSubmit={handleSignup}>
          <h1>Signup</h1>
          <div className="input-box">
            <input ref={emailRef} type="text" placeholder='Username' required />
            <FaUser className='icon' />
          </div>

          <div className="input-box">
            <input ref={passwordRef} type="password" placeholder='Password' required />
            <FaLock className='icon' />
          </div>
          <div className="input-box">
            <input ref={confirmpasswordRef} type="password" placeholder='confirmPassword' required />
            <FaLock className='icon' />
          </div>
          <div className="input-box">
            <input ref={usernameRef} type="text" placeholder='username' required />
            <FaLock className='icon' />
          </div>
          <div className="input-box">
            <input ref={phoneRef} type="text" placeholder='phone' required />
          </div>
          <div className="input-box">
            <input ref={ageRef} type="number" placeholder='age' required />
          </div>
          <div className="input-box">
            <input ref={genderRef} type="text" placeholder='gender' required />
          </div>
          <div className="remember-forget">
            <label><input type="checkbox" />Remember me</label>
            <a href=".">Forget password</a>
          </div>

          <button type="submit">Signup</button>

          <div className="Login-link">
            <p>Have an account? <a href="/login">Login</a></p>
          </div>


        </form>

      </div>
    </div>
  )

}

export default Signup