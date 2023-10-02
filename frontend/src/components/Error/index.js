import React from "react";
import { Link } from "react-router-dom";
import "../Error/style.css";

function Error(){
    return (
     <main className="error404">
         <div>
             <h1>404</h1>
             <p>we are sorry, but the page you requested was not found</p>
         </div>
         <Link to='/'>Return to home page</Link>
     </main>

    ) 
 }
export default Error;