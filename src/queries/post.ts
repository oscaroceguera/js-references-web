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

export const GET_POST = gql`
  query getPost($id: ID!) {
    post(_id: $id) {
      _id
      title
      content
      category {
        name
      }
      tags {
        _id
        name
      }
      createdAt
    }
  }
`;

export const ADD_POST = gql`
  mutation createPost(
    $title: String!
    $content: String!
    $category: ID!
    $tags: [ID!]
  ) {
    addPost(
      PostInput: {
        title: $title
        content: $content
        category: $category
        tags: $tags
      }
    ) {
      title
      _id
    }
  }
`;
