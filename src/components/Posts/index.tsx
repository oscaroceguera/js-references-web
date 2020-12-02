import React from 'react';
import { Post, Container, Title, Category, Tags } from './styles';

import { IPost } from '../../type/Post';
import { ITag } from '../../type/Tag';

interface Props {
  posts: IPost[];
}

const Posts: React.FC<Props> = ({ posts }: Props) => {
  return (
    <Container>
      {posts.map((item: IPost) => (
        <Post key={item._id}>
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
