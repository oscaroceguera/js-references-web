import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
  margin-top: 1em;
  h1 {
    text-align: center;
    color: var(--red-flourescent);
  }
`;

const ErrorMsg: React.FC = () => (
  <Container>
    <h1>:( ha ocurrido un error, intenta mas tarde!</h1>
  </Container>
);

export default ErrorMsg;
