import Styled from 'styled-components';

interface IContainer {
  required: boolean;
  success: boolean;
  width: string;
}

export const Container = Styled.div<IContainer>`
  margin-bottom: 1em;

  label {
    font-size: 1.2em;
    color: var(--grey-primary);
    font-weight: bold;
    input {
      border: 0;
      margin-top: 0.5em;
      padding: 0.7em;
      width: ${(props) => props.width};
      border-bottom: ${({ required, success }) => {
        switch (true) {
          case required:
            return '2px solid var(--red-flourescent)';
          case success:
            return '2px solid var(--green-primary)';
          default:
            return '2px solid var(--grey-primary)';
        }
      }};
      outline: none;
    }
    textarea {
      background: var(--purple-primary);
      border-radius: 3px;
      border: ${({ required, success }) => {
        switch (true) {
          case required:
            return '2px solid var(--red-flourescent)';
          case success:
            return '2px solid var(--green-primary)';
          default:
            return '2px solid var(--purple-primary)';
        }
      }};
      box-sizing: border-box;
      color: white;
      font-size: 16px;
      height: auto;
      line-height: 24px;
      margin-top: 0.5em;
      outline: none;
      overflow: auto;
      padding: 0.7em;
      padding: 8px;
      resize: none;
      width: 100% !important;
      &::placeholder {
        color: white;
      }
    }
  }
`;

export const ShowError = Styled.span<Pick<IContainer, 'required'>>`
  color: red;
  font-size: 0.6em;
  font-weight: 500;
  visibility: ${({ required }) => (required ? 'visible' : 'hidden')} };
`;
