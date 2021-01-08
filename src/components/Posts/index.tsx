import React, { MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Post, Container, Title, Category, Tags } from './styles';

import { IPost } from '../../type/Post';
import { ITag } from '../../type/Tag';

interface Props {
  posts: IPost[];
}

const Posts: React.FC<Props> = ({ posts }: Props) => {
  const history = useHistory();

  const handleDetail = (id?: string) => (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    history.push(`/detail/${id}`);
  };

  return (
    <Container>
      {posts.map((item: IPost) => (
        <Post key={item._id} onClick={handleDetail(item._id)}>
          <Title>{item.title}</Title>
          <Category>{item.category.name}</Category>
          <Tags>
            {item.tags.map((tag: ITag) => (
              <span key={tag._id}>{tag.name}</span>
            ))}
          </Tags>
        </Post>
      ))}
    </Container>
  );
};
export default Posts;
