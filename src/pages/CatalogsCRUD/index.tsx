import React from 'react';

import Categories from './Categories';
import Tags from './Tags';

interface IProps {
  type: string;
}

const CatalogsCRUD: React.FC<IProps> = ({ type }: IProps) => {
  if (type === 'categories') {
    return <Categories />;
  }
  return <Tags />;
};

export default CatalogsCRUD;
