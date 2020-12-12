import React from 'react';
import { Container } from './styles';

import Categories from './Categories';

interface IProps {
  type: string;
}

const CatalogsCRUD: React.FC<IProps> = ({ type }: IProps) => {
  if (type === 'categories') {
    return <Categories />;
  }
  return <Container>CATALOGOS CRUD TAGS</Container>;
};

export default CatalogsCRUD;
