import { useState } from "react";
import "./Signup.css";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Utilisation de l'URL du backend depuis les variables d'environnement
  const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || "https://server-eedk.onrender.com";

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(`${API_BASE_URL}/auth/signup`, {
      username,
      email,
      password,
    })
      .then((response) => {
        if (response.data.status) {
          navigate("/login");
        }
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Sign Up</h1>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <button type="submit">Signup</button>
        <p>Avez vous un compte ?</p>
        <Link to="/login">Login</Link>
      </form>
    </>
  );
};

export default Signup;
