import "./ForgotPassword.css";
import { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Utilisation de l'URL du backend depuis les variables d'environnement
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://server-eedk.onrender.com";

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(`${API_BASE_URL}/auth/forgot-password`, {
      email,
    })
      .then((response) => {
        if (response.data.status) {
          alert("Vérifiez votre mail");
          navigate("/login");
        }
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Mot de passe oublié
      </h1>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Envoyer</button>
        <p>Avez-vous un compte ?</p>
        <Link to="/login">Login</Link>
      </form>
    </>
  );
};

export default ForgotPassword;
