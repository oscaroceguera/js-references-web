import { gql } from '@apollo/client';

export const GET_TAGS = gql`
  query getTags {
    tags {
      _id
      name
    }
  }
`;

export const ADD_TAG = gql`
  mutation createTag($name: String!) {
    addTag(name: $name) {
      name
    }
  }
`;

export const UPDATE_TAG = gql`
  mutation updateTagMut($id: ID!, $name: String!) {
    updateTag(_id: $id, name: $name) {
      name
      _id
    }
  }
`;
