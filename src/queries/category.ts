import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      _id
      name
    }
  }
`;

export const ADD_CATEGORY = gql`
  mutation createCategory($name: String!) {
    addCategory(CategoryInput: { name: $name }) {
      name
      _id
    }
  }
`;

export const UPDATE_CATEGORY = gql`
  mutation updateCategoryMut($id: ID!, $name: String!) {
    updateCategory(_id: $id, CategoryInput: { name: $name }) {
      name
      _id
    }
  }
`;
