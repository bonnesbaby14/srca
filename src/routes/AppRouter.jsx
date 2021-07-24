import { React, Suspense } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Clients from "../components/Clients";

import Navbar from "../components/Navbar";
import Proyects from "../components/Proyects";
import Settings from "../components/Settings";
import Tickets from "../components/Tickets";
import Dashboard from "../components/Dashboard";
// const WomanScreen = lazy(() => import("../pages/WomanScreen"));

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<h1 className="text-center">Loading...</h1>}>
        <Switch>
          <Route exact path="/">
            <Dashboard></Dashboard>
          </Route>
          <Route exact path="/settings">
            <Settings></Settings>
          </Route>
          <Route exact path="/clients">
            <Clients></Clients>
          </Route>
          <Route exact path="/proyects">
            <Proyects></Proyects>
          </Route>
          <Route exact path="/tickets">
            <Tickets></Tickets>
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default AppRouter;
