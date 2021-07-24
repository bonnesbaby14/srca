import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { UserContext } from "../context/contexts";

import AppRouter from "./AppRouter";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import Login from "../components/Login";

const LoginRouter = () => {
  const { log } = useContext(UserContext);

  return (
    <Router>
      <Switch>
        <PublicRouter path="/login" auth={log} component={Login} />
        <PrivateRouter path="/" auth={log} component={AppRouter} />
      </Switch>
    </Router>
  );
};

export default LoginRouter;
