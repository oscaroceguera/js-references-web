import React, { MouseEvent, useEffect, useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import { IPosts, ISearchedPosts, ICategories, ITags } from '../../type';
import {
  GET_POSTS,
  SEARCH_POST,
  GET_CATEGORIES,
  GET_TAGS,
} from '../../queries';

import Posts from '../../components/Posts';
import Loader from '../../components/Loader';
import { Container, SearchBar, Input, Select, OptBox, AddPost } from './styles';

interface ISearchPosts {
  search: string;
  category: string;
  tags: string[];
}

const Home: React.FC = () => {
  const history = useHistory();
  const { loading, data, error } = useQuery<IPosts>(GET_POSTS, {
    pollInterval: 1000,
  });
  const {
    loading: loadingCategory,
    data: dataCategory,
    error: errorCategory,
  } = useQuery<ICategories>(GET_CATEGORIES, {
    pollInterval: 2000,
  });
  const {
    loading: loadingTag,
    data: dataTag,
    error: errorTag,
  } = useQuery<ITags>(GET_TAGS, {
    pollInterval: 2000,
  });
  const [
    searchedPosts,
    {
      error: errorSearchedPosts,
      loading: loadingSearchedPosts,
      data: dataSearchedPosts,
    },
  ] = useLazyQuery<ISearchedPosts>(SEARCH_POST);

  const [searching, setSearching] = useState<ISearchPosts>({
    search: '',
    category: '',
    tags: [],
  });

  const hasSearching =
    searching.search || searching.category || searching.tags.length > 0;

  useEffect(() => {
    if (hasSearching) {
      searchedPosts({
        variables: {
          search: searching.search,
          category: searching.category,
          tags: searching.tags,
        },
      });
    }
  }, [searching]);

  const addPost = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    history.push('/editor');
  };

  const onChageCategory = (e: any) => {
    setSearching({ ...searching, category: e.target.value });
  };

  const onChageTag = (e: any) => {
    setSearching({ ...searching, tags: [e.target.value] });
  };

  const isLoading =
    loading || loadingCategory || loadingTag || loadingSearchedPosts;

  const isError = error || errorCategory || errorTag || errorSearchedPosts;

  return (
    <Container>
      <AddPost onClick={addPost}>+</AddPost>
      <SearchBar>
        <Input
          placeholder="Search.."
          onChange={(e) =>
            setSearching({ ...searching, search: e.target.value })
          }
        />
        <Select onChange={onChageCategory}>
          <option value="">Category</option>
          {dataCategory?.categories.map((category) => {
            return (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            );
          })}
        </Select>
        <Select secondary onChange={onChageTag}>
          <option value="">Tags</option>
          {dataTag?.tags.map((tag) => {
            return (
              <option key={tag._id} value={tag._id}>
                {tag.name}
              </option>
            );
          })}
        </Select>
      </SearchBar>
      {isError && <h1>Error!</h1>}
      {isLoading && <Loader secondary />}
      {data && !hasSearching && <Posts posts={data.posts} />}
      {hasSearching && dataSearchedPosts && (
        <Posts posts={dataSearchedPosts.searchPost} />
      )}
    </Container>
  );
};

export default Home;
