import React from 'react';
import { Container, SearchBar, Input, Select, OptBox } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <SearchBar>
        <Input placeholder="Search.." />
        <Select>
          <option>Categories</option>
          <option>Category Category</option>
          <option>Category Category Category</option>
          <option>Category</option>
          <option>CategoryCategory</option>
        </Select>
        <Select secondary>
          <option>tags</option>
        </Select>
        <OptBox>
          <div>
            Category: <label>JAvascript</label>
          </div>
          <div>
            Tag: <label>arrays</label>
          </div>
        </OptBox>
      </SearchBar>
    </Container>
  );
};

export default Home;
