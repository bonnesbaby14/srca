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
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/proyects" component={Proyects} />
          <Route exact path="/tickets" component={Tickets} />
        </Switch>
      </Suspense>
    </>
  );
};

export default AppRouter;
