import Styled from 'styled-components';

export const Container = Styled.div`
  background: var(--purple-primary);
  padding: 0.5em;
  text-align: center;
`;

export const Title = Styled.h1`
  color: var(--white-secondary);

  span {
    color: var(--red-flourescent);
  }
`;
