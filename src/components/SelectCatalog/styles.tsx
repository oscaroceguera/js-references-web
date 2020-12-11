import Styled from 'styled-components';

interface IRequired {
  required: boolean;
}

export const RequiredSelect = Styled.div<IRequired>`
  margin-top: 0.5em;
  color: red;
  font-size: 0.6em;
  font-weight: 500;
  visibility: ${({ required }) => (required ? 'visible' : 'hidden')} };
`;

export const TitleSlc = Styled.label`
  font-size: 1.2em;
  color: var(--grey-primary);
  font-weight: bold;
`;

export const CatalogsContainer = Styled.div`
  margin-top: 1em;
  display: flex;
`;

export const SelectContainer = Styled.div`
  flex-grow: 1;
`;

export const AddCatalogContainer = Styled.div`
  padding-left: 0.5em;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  svg {
    width: 35px;
    height: 35px
  }
`;
