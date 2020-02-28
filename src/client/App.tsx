import React from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
import styled from "styled-components";

import Routes from "../routes";

const Header = Loadable({
  loader: () => import("./components/Header"),
  loading: () => <h1>Loading ...</h1>
});

const App = () => {
  return (
    <>
      <Header />
      <Test>Test</Test>
      <Switch>
        {Routes.map((_route, index) => (
          <Route
            key={index}
            path={_route.url}
            exact
            component={_route.component}
          />
        ))}
      </Switch>
    </>
  );
};

export default App;

const Test = styled.div`
  color: red;
`;