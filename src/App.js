import React from "react";
import styled from "styled-components";

import { Title } from "components/text";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "modules/nav";
import Home from "routes/home";

const inProgress = true;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

const constructionPage = () => {
  return (
    <Center>
      {" "}
      <Title type="h1">Under construction</Title>
    </Center>
  );
};

export default inProgress ? constructionPage : App;
