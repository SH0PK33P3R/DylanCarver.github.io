import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Body } from "components/text";
import { Grid, Row, Col } from "components/layout";

const Ul = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;

  a {
    text-decoration: none;
  }

  li {
    margin-right: 15px;
  }
`;

const Nav = () => (
  <Grid>
    <Row>
      <Col>
        <Ul>
          <li>
            <Link to="/">
              <Body>Home</Body>
            </Link>
          </li>
        </Ul>
      </Col>
    </Row>
  </Grid>
);

export default Nav;
