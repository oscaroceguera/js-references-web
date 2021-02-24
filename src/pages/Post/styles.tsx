import Styled, { css } from 'styled-components';

export const Container = Styled.div`
  padding: 1em;
  @media (max-width: 768px) {
    padding: 0.5em;
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

export const PostContainer = Styled.form`
  width: 50%;
  margin: 0 auto;
  padding: 1em;
  @media (max-width: 768px) {
    width: 95%;
    padding: 0.5em;
    margin: 0;
  }
`;

export const Title = Styled.h1`
  text-align: center;
`;

export const Date = Styled.div`
  text-align: right;
`;

export const Category = Styled.div`
  color: var(--blue-primary);
  font-size: 14px;
  font-weight: bold;
  margin: 0.5em 0;
  text-align: right;
`;

export const Tags = Styled.div`
  color: var(--red-flourescent);
  font-size: 14px;
  font-weight: bold;
  text-align: right;
  p {
    margin: .5em 0;
  }
  label {
    margin-right: 0.5em;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const BtnsContainer = Styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ContentContainer = Styled.div`
  margin-top: 5em;
`;

export const BTN_BASE = css`
  border: 0;
  background: white;
  cursor: pointer;
  font-weight: bold;
`;

export const BtnEdit = Styled.button`
  ${BTN_BASE};
  margin-right: 0.5em;
  color: var(--purple-C64);
  &:hover {
    background: var(--purple-C64);
    color: white;
  }
`;

export const BtnDelete = Styled.button`
  ${BTN_BASE};
  color: var(--orange);
  &:hover {
    background: var(--orange);
    color: white;
  }
`;
