import { React, useContext } from "react";
import "./Login.css";
import { UserContext } from "../context/contexts";

const Login = (props) => {
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ type: "login" });
  };

  return (
    <div className="login">
      <div>
        <div>
          <span>
            <h2>
              <span />
            </h2>
          </span>
          <h4>Your Company Logo</h4>
        </div>
        <div>
          <div>
            <div>
              <h2>Log In</h2>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                  />
                </div>
                <div>
                  {/* <span class="fa fa-lock"></span> */}
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <input type="checkbox" name="remember_me" id="remember_me" />
                  <label htmlFor="remember_me">Remember Me!</label>
                </div>
                <div>
                  <input type="submit" defaultValue="Submit" />
                </div>
              </form>
            </div>
            <div>
              <p>Don't have an account?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;