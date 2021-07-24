import { React, Suspense, lazy } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Navbar from "../components/Navbar";

// const WomanScreen = lazy(() => import("../pages/WomanScreen"));
const Clients = lazy(() => import("../components/Clients"));
const Proyects = lazy(() => import("../components/Proyects"));
const Settings = lazy(() => import("../components/Settings"));
const Tickets = lazy(() => import("../components/Tickets"));
const Dashboard = lazy(() => import("../components/Dashboard"));

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
