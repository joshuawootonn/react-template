import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  margin:0;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 15em;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Title>Josher</Title>
    </Container>
  );
};

export default App;
