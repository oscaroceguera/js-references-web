import Styled from 'styled-components';

export const Container = Styled.div`
  padding: 0;
  position: relative;
`;

export const SearchBar = Styled.div`
  padding: 2em;
  text-align: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 1em;
  }
`;

export const Input = Styled.input`
  width: 35%;
  padding: 1em;
  border-radius: 4px;
  border: 1px solid var(--blue-primary);
  margin: 0 0.5em;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0;
  }
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
  @media (max-width: 768px) {
    display: none;
  }
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

export const AddPost = Styled.button`
  background: var(--purple-primary);
  display: inline-block;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;  
  border: 0;
  bottom: 0.5em;
  box-shadow: 2px 2px 5px grey;
  color: white;
  cursor: pointer;
  font-size: 40px;
  height: 50px;
  position: fixed;
  right: 0.5em;
  width: 50px;
  &:hover {
    opacity: 0.9;
  }
`;
