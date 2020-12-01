import React from 'react';
import Container from './styles';

interface ILoader {
  secondary?: boolean;
}

const Loader: React.FC<ILoader> = ({ secondary = false }) => (
  <Container secondary={secondary}>
    <div className="loader">Loading...</div>
  </Container>
);

export default Loader;
