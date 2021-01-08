import React, { MouseEvent } from 'react';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import { IPosts } from '../../type/Post';
import { GET_POSTS } from '../../queries/post';

import Posts from '../../components/Posts';
import Loader from '../../components/Loader';
import { Container, SearchBar, Input, Select, OptBox, AddPost } from './styles';

// TODO: Error
// TODO: Zero posts
const Home: React.FC = () => {
  const { loading, data, error } = useQuery<IPosts>(GET_POSTS, {
    pollInterval: 1000,
  });
  console.log('🚀 ~ file: index.tsx ~ line 16 ~ error', error);
  const history = useHistory();

  const addPost = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    history.push('/Editor');
  };

  return (
    <Container>
      <AddPost onClick={addPost}>+</AddPost>
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
    </Container>
  );
};

export default Home;
