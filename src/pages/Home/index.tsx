import React from 'react';
import { useQuery } from '@apollo/client';

import { IPosts } from '../../type/Post';
import { GET_POSTS } from '../../queries/post';

import Posts from '../../components/Posts';
import Loader from '../../components/Loader';
import { Container, SearchBar, Input, Select, OptBox } from './styles';

// TODO: Error
// TODO: Zero posts
const Home: React.FC = () => {
  const { loading, data, error } = useQuery<IPosts>(GET_POSTS);
  console.log('🚀 ~ file: index.tsx ~ line 18 ~ error', error);
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
            Tags: <label>arrays</label>
          </div>
        </OptBox>
      </SearchBar>
      {loading && <Loader secondary />}
      {data ? <Posts posts={data.posts} /> : null}
      {data ? <Posts posts={data.posts} /> : null}
    </Container>
  );
};

export default Home;
