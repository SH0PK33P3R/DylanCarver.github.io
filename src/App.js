import React from "react";
import styled from "styled-components";

import Card from "components/card";
import { Title, Body } from "components/text";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "routes/home";

const inProgress = true;

const Center = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

const StyledCard = styled(Card)`
  display: flex;
  margin: 25px;
  flex-direction: column;
  padding: 35px 50px;
  align-items: center;
`;

const constructionPage = () => {
  return (
    <Center>
      <StyledCard>
        <div style={{ fontSize: 50 }}>🚧</div>
        <Title type="h1">Under construction...</Title>
        <Body>DylanCarver.github.io</Body>
      </StyledCard>
    </Center>
  );
};

export default inProgress ? constructionPage : App;
