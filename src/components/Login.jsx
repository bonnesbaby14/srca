import { React, useContext } from "react";
import "./Login.css";
import { UserContext } from "../context/contexts";

const Login = (props) => {
  const { log, setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React POST Request Example" }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUser({ type: "login", authKey: data.token });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="login">
      <div className="main">
        <div className="title">
          <h1>Login</h1>
        </div>
        <form action="#" className="form">
          <div className="user">
            <input type="text" placeholder="Usuario" />
          </div>
          <div className="password">
            <input type="password" placeholder="Contraseña" />
          </div>

          <div className="boton">
            <button onClick={handleSubmit}>Inicia Sesión</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
