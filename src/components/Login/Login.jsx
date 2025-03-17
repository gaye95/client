import { useState } from "react";
import "./Login.css";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Utilisation de l'URL du backend depuis les variables d'environnement
  const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "https://server-eedk.onrender.com";

  Axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page
    Axios.post(`${API_BASE_URL}/auth/login`, {
      email,
      password,
    })
      .then((response) => {
        if (response.data.status) {
          navigate("/home");
        }
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Connexion</h1>
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signin</button>
        <Link to="/forgotPassword">
          <p>Mot de passe oublié</p>
        </Link>
        <p>Vous navez pas de compte ?</p>
        <Link to="/signup">Signup</Link>
      </form>
    </>
  );
};

export default Login;
