import React from "react";
import styled from "styled-components";

const Item = styled.p`
  color: ${(props) => props.theme.colors.primary};
`;

const DataList = ({ data }) => {
  return data.map((item, i) => <Item key={i}>{item.title}</Item>);
};

export default DataList;
