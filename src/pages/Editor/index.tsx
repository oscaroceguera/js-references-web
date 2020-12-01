import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
  padding: 1em;
`;

const Editor: React.FC = () => {
  return (
    <Container>
      <h1>Editor</h1>
    </Container>
  );
};

export default Editor;
