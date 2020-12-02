import Styled from 'styled-components';

export const Container = Styled.div`
  padding: 1em;
`;

export const SearchBar = Styled.div`
  padding: 2em;
  text-align: center;
  margin: 0 auto;
`;

export const Input = Styled.input`
  width: 35%;
  padding: 1em;
  border-radius: 4px;
  border: 1px solid var(--blue-primary);
  margin: 0 0.5em;
`;

interface ISelect {
  secondary?: boolean;
}

export const Select = Styled.select<ISelect>`
  background: ${(props) =>
    props.secondary ? 'var(--purple-secondary)' : 'red'};
  border: 0;
  color: var(--white-secondary);
  padding: 0.5em;
  height: 42px;
  border-radius: 4px;
  margin-right: 0.5em;
  width: 10%;
`;

export const OptBox = Styled.div`
  width: 58%;
  display: flex;
  padding: 1em 0.5em;
  font-size: 14px;
  margin: 0 auto;
  color: var(--grey-primary);

  div {
    margin-right: 0.5em;

    &:nth-child(2) {
      label {
        color: var(--red-flourescent);
      }
    }
    
    label {
      color: var(--blue-primary);
    }
  }
`;
