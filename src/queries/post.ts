import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query getPosts {
    posts {
      _id
      title
      category {
        name
      }
      tags {
        _id
        name
      }
    }
  }
`;
