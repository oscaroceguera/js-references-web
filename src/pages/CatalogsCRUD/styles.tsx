import Styled, { css } from 'styled-components';

export const Container = Styled.div`
`;

export const AddSection = Styled.div`
  display: flex;
  align-items: center
`;

export const FieldContainer = Styled.div`
  flex-grow: 1;
`;

interface IAddBtn {
  isVisible: boolean;
}

export const AddBtn = Styled.button<IAddBtn>`
  width: 100px;
  border-radius: 3px;
  padding: .5em;
  border: 0;
  color: white;
  cursor: pointer;
  background: ${(props) =>
    props.isVisible ? 'var(--green-primary)' : 'var(--red-flourescent)'};
  &:hover {
    opacity: 0.8;
  }
`;

export const List = Styled.ul`
  padding: 0;
`;

export const Item = Styled.li`
  margin: .5em 0;
  padding: .5em;
  height: 25px;
  color: var(--purple-C64);
`;

export const InputUpdate = Styled.input`
  border: 0;
  border-bottom: 1px solid var(--blue-primary);
  color: var(--purple-C64);
  font-size: 1em;
`;

const BTN_BASE = css`
  margin: 0 0.5em;
  padding: 0.3em 1em;
  color: white;
  cursor: pointer;
  border: 0;
  border-radius: 3px;
  &:last-child {
    margin: 0 0.5em 0 0;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const UpdateBtn = Styled.button`
  ${BTN_BASE};
  background: var(--purple-secondary);
`;
export const CancelBtn = Styled.button`
  ${BTN_BASE};
  background: var(--red-flourescent);
`;
