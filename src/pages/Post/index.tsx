import React, { useMemo, useEffect, MouseEvent } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import ReactMarkdown from 'react-markdown';

import { GET_POST } from '../../queries';
import { ITag, IPostRes } from '../../type';
import { getDate } from '../../utils/convertUnixTimestamp';

import { Loader, ErrorMsg } from '../../components';

import {
  Container,
  GoBack,
  Title,
  PostContainer,
  Date,
  Category,
  Tags,
  ContentContainer,
  BtnsContainer,
  BtnEdit,
  BtnDelete,
} from './styles';

interface RouteParams {
  id: string;
}

const Post: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<RouteParams>();
  const [getPost, { error, loading, data }] = useLazyQuery<IPostRes>(GET_POST);

  useEffect(() => {
    getPost({ variables: { id } });
  }, []);

  const goBack = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    history.push('/');
  };

  const isLoading = useMemo<unknown>(() => {
    return loading && !error && !data;
  }, [loading, error, data]);

  const isError = useMemo<unknown>(() => {
    return error && !loading && !data;
  }, [loading, error, data]);

  const showPost = useMemo<unknown>(() => {
    return !loading && !error && data;
  }, [loading, error, data]);

  return (
    <Container>
      <GoBack onClick={goBack}>Back</GoBack>
      {isLoading && <Loader secondary />}
      {isError && <ErrorMsg />}
      {showPost && (
        <PostContainer>
          <Title>{data?.post.title}</Title>
          <Date>{data?.post && getDate(data.post.createdAt)}</Date>
          <Category>{data?.post.category.name}</Category>
          <Tags>
            {data?.post.tags.map((tag: ITag) => (
              <p key={tag._id}>#{tag.name}</p>
            ))}
          </Tags>
          <BtnsContainer>
            <BtnEdit>Edit</BtnEdit>
            <BtnDelete>Delete</BtnDelete>
          </BtnsContainer>
          <ContentContainer>
            {data?.post && <ReactMarkdown source={data.post.content} />}
          </ContentContainer>
        </PostContainer>
      )}
    </Container>
  );
};

export default Post;
