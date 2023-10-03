import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/authSlice";
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle, faRightFromBracket,faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/img/argentBankLogo.png";

function Navbar() {
  const dispatch = useDispatch();
  //On récupère le token à l'aide de state manager de redux
  const accessToken = useSelector((state) => state.login.token);
  const userName = useSelector((state) => state.userInfo.userName); // Récupère le nom d'utilisateur

  const handleSignOut = () => {
    dispatch(logout());
    localStorage.removeItem("token"); 
  };
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {/* Condition ternaire pour vérifier si accessToken est 'true' */}
        {accessToken ? (
          // Si l'utilisateur est connecté, affiche un lien vers le profil utilisateur
          <Link className="main-nav-item" to="/user">
            <FontAwesomeIcon icon={faUser} />
            {userName}
          </Link>
        ) : (
          // Si l'utilisateur n'est pas connecté, affiche le lien de connexion
          <Link className="main-nav-item" to="/signin">
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </Link>
        )}
        {/* Toujours afficher le lien de déconnexion s'il est connecté */}
        {accessToken && (
          <Link className="main-nav-item" onClick={handleSignOut}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            Sign Out
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
