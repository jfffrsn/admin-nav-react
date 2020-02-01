import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  align-content: space-between;
  margin-bottom: ${props => props.theme.space[3]};
`;

const Main = styled.div`
  flex: 1 auto;
  margin-right: ${props => props.theme.space[3]};
`;

const Sidebar = styled.div`
  margin-left: ${props => props.theme.space[3]};
  flex: 0 0 18rem;
`;

const PageGrid = ({ main, sidebar }) => {
  return (
    <Container>
      <Main>{main}</Main>
      <Sidebar>{sidebar}</Sidebar>
    </Container>
  );
};

export default PageGrid;
