import React, { useEffect, useState, useRef, useContext } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { json, useNavigate } from "react-router-dom";
import { cartContext } from '../MyRoutes/MyRoutes'


const LoginForm = ({ onLogin }) => {
    const navigate = useNavigate()
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState();
    const [isError, setIsError] = useState(false)
    const [isShaking, setIsShaking] = useState(false);
    const [userId, setUserId] = useState()
    const { cartItems, addToCart, removeFromCart } = useContext(cartContext)


    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    // const username = useRef(null);
    const handleUserId = async (userId) => {
        await fetch(`http://localhost:8080/getservices/${userId}`, {
            method: "get",
            headers: headers,

            //make sure to serialize your JSON body
        })
            .then((response) =>
                response.text()
            )
            .then(data => {
                // console.log(JSON.parse(data))
                const items = JSON.parse(data)
                for (const cartItem of items) {
                    addToCart(cartItem, "1200", "testing", false)
                }
            }
            )
        console.log(`cart itmes: ${cartItems}`);

    }
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS,GET'
    }

    const handleLogin = async (e) => {

        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);

        await fetch("http://localhost:8080/loginuser", {
            method: "post",
            headers: headers,

            //make sure to serialize your JSON body
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then((response) => {
                return response.json();
            })
            .then(data => {
                console.log("Login successful:", data);
                if (data.isLoggedIn === false) {
                    onLogin(false)
                    setIsError(true)
                    setTimeout(() => {
                        setIsError(false);
                    }, 1000);
                } else {
                    // setUserId(data.userid)
                    handleUserId(data.userid)
                    // console.log(data.userid)
                    onLogin(true)
                    navigate('/getlocation')
                }
            })

    }
    return (
        <div className='login'>

            <div className='wrapper'>
                {isError && <div className='loginerror'>Invalid login Credentials</div>}
                <form action="" onSubmit={handleLogin} >
                    <h1>Login</h1>
                    <div className="input-box">
                        <input ref={emailRef} type="text" placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>

                    <div className="input-box">
                        <input ref={passwordRef} type="password" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>

                    <div className="remember-forget">
                        <label><input type="checkbox" />Remember me</label>
                        <a href=".">Forget password</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="Register-link">
                        <p>Don't have a account? <a href="/signup">Register</a></p>
                    </div>


                </form>

            </div>
        </div>
    )

}
export default LoginForm