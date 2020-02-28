import React from "react";
import { Switch, Route } from "react-router-dom";

import Routes from "../routes";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        {Routes.map((_route, index) => (
          <Route key={index} path={_route.url} exact component={_route.component} />
        ))}
      </Switch>
    </>
  );
};

export default App;
