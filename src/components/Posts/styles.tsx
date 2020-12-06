import Styled from 'styled-components';

export const Container = Styled.div`
  display: grid;
  gap: 1em;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  width: 90%;
`;

export const Post = Styled.div`

  border-radius: 4px;
  border: 2px solid;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3fr 0.5fr;
  padding: 0.5em;
  &:hover {
    border: 2px solid var(--grey-secondary);
  }
`;

export const Title = Styled.h2`
  color: black;
  grid-column-end: 3;
  grid-column-start: 1;
`;

export const Category = Styled.div`
  color: var(--blue-primary);
  grid-column-end: 2;
  grid-column-start: 1;
`;

export const Tags = Styled.div`
  display: flex;
  grid-column-end: 3;
  grid-column-start: 2;
  justify-self: end;
  span {
    color: var(--red-flourescent);
    display: inline-block;
  }
  span:not(:last-of-type):after {
    content: ", ";
  }
  span:nth-last-of-type(2):before {
    content: none;
  }
  .span:nth-last-of-type(2):after {
    content: "  ";
  }
`;
