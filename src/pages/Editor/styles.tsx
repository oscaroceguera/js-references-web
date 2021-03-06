import Styled from 'styled-components';

export const Container = Styled.div`
  padding: 1em;
  @media (max-width: 768px) {
    padding: 0.7em;
  }
`;

export const GoBack = Styled.button`
  background: var(--purple-primary);
  border-radius: 4px;
  border: 0;
  box-shadow: 2px 2px 5px grey;
  color: white;
  cursor: pointer;
  padding: 1em;
  width: 70px;
  &:hover {
    opacity: 0.9;
  }
`;

export const Title = Styled.h1`
  text-align: center;
  color: var(--grey-primary);
`;

export const EditorContainer = Styled.form`
  width: 50%;
  margin: 0 auto;
  padding: 1em;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

interface IBtnSave {
  isVisible: boolean;
}

export const BtnSave = Styled.input<IBtnSave>`
  width: 100%;
  border-radius: 3px;
  padding: 1em;
  border: 0;
  color: white;
  background: ${(props) =>
    props.isVisible ? 'var(--green-primary)' : 'var(--red-flourescent)'};
  &:hover {
    opacity: 0.8;
  }
`;
