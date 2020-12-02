import Styled from 'styled-components';

export const Container = Styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  grid-auto-rows: 1fr;
`;

export const Post = Styled.div`
  border: 2px solid;
  padding: 0.5em;
  border-radius: 4px;
  transition: .3s;
  cursor: pointer;
  display: grid;
  grid-template-rows: 3fr 0.5fr;
  grid-template-columns: 1fr 1fr;

  &:hover {
    border: 2px solid var(--grey-secondary);
  }
`;

export const Title = Styled.h2`
  color: black;
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const Category = Styled.div`
  color: var(--blue-primary);
  grid-column-start: 1;
  grid-column-end: 2;
`;

export const Tags = Styled.div`
  display: flex;
  grid-column-start: 2;
  grid-column-end: 3;
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
