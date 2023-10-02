import React, { useState } from "react";
// import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setUsername, setPassword } from "../redux/features/formSlice";
import { loginSuccess } from "../redux/features/authSlice";


//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import loginUser from "../Service/callAPI";

export function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.formulaire.username);
  const password = useSelector((state) => state.formulaire.password);
  const [rememberMe, setRememberMe] = useState(false);
  // const [error, setError] = useState(false);

//Changement dans les entrées du formulaire
  const handleUsernameChange = (event) => {
    dispatch(setUsername(event.target.value));
    console.log(userName);
  };

  const handlePasswordChange = (event) => {
    dispatch(setPassword(event.target.value));
    console.log(password);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };
  
//Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userName.trim() || !password.trim()) {
      alert("Username and password cannot be empty");
      return;
    }
    
    let infos = {
      userName: userName,
      password: password,
    };
    
    const response = await loginUser(infos);
    console.log(response);
    
    if (response.status === 200) {
      if (rememberMe) {
        localStorage.setItem("token", response.body.token);
      } else {
        localStorage.removeItem("token");
      }
      dispatch(loginSuccess(response.body.token));
      navigate("/user");
    }
    // const request = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email: userName, password }),
    // };
    
    // try {
    //   const response = await fetch(
    //     "http://localhost:3001/api/v1/user/login",
    //     request
    //   );
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }
    
    //   const data = await response.json();
    //   // console.log(data.body.token);
    //   dispatch(loginSuccess(data.body.token));
    //   navigate("/user");
    // } catch (error) {
    //   console.error("There was an error!", error);
    // }  
  };
    // Si l'utilisateur est déjà connecté
    useEffect(() => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        dispatch(loginSuccess(storedToken));
        navigate("/user");
      }
    }, [dispatch, navigate]);
    
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={userName}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" 
            id="remember-me"
            checked={rememberMe}
            onChange={handleRememberMeChange} 
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;
