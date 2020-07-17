import React from "react";
import styled from "styled-components";

import Card from "components/card";
import { Title, Body } from "components/text";

const Center = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  margin: 25px;
  display: flex;
  padding: 35px 50px;
  align-items: center;
  flex-direction: column;
`;

const UnderConstruction = () => {
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

export default UnderConstruction;
