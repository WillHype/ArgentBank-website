import React, {useState} from "react";

const Formulaire = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    
    const handleUsernameChange = (event) =>{
        setUsername(event.target.value);
        console.log(username);
    }
    const handleSubmit = async (e) => {
        e.prevendDefault();

        if (username.trim() === '' || password.trim() === '') {
            setError(true);
          } else {
            // Effectue la requête vers le serveur local
            const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(username, password),
            };
            
            try {
            const response = await fetch('http://localhost:3001/api/v1/user/login', request);
    
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Si la réponse est OK, traite la réponse ici
            const data = await response.json();
            // Appelle l'action Redux "login" avec les données du formulaire
            login(data); } catch (error) {
            console.error('Erreur lors de la requête:', error);
            // login({ username, password });
          }
        }
    };

    return(
    <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input 
            type="text" 
            id="username"
            value={username}
            onChange={handleUsernameChange} required />
        </div>
        <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
        </div>
        {error ?(
            <p className="error">
                Error : Email and password cannot be empty
            </p>
        ) : (
            ""
        )}
        <button type="submit" className="sign-in-button">Sign In</button>
    </form>
)};

export default Formulaire;