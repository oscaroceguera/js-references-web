import React from 'react';
import { useQuery } from '@apollo/client';

import { Field, Loader, ErrorMsg } from '../../../components';

import { ICategories, ICategory } from '../../../type';
import { GET_CATEGORIES } from '../../../queries';

import {
  Container,
  AddSection,
  FieldContainer,
  AddBtn,
  List,
  Item,
  InputUpdate,
  CancelBtn,
  UpdateBtn,
} from './styles';

type CallbackType = (...args: any) => void;

interface IPropsListElement {
  name: string;
}

const ListElement: React.FC<IPropsListElement> = ({
  name,
}: IPropsListElement) => {
  const [showField, setShowField] = React.useState(false);

  const handleShowField = React.useCallback<CallbackType>(
    (event: React.MouseEvent<HTMLLIElement | HTMLButtonElement>): void => {
      event.preventDefault();
      setShowField(!showField);
    },
    [showField],
  );

  return (
    <Item>
      {!showField ? (
        <div onClick={handleShowField}>{name}</div>
      ) : (
        <>
          <InputUpdate value={name} />
          <UpdateBtn>Update</UpdateBtn>
          <CancelBtn onClick={handleShowField}>Cancel</CancelBtn>
        </>
      )}
    </Item>
  );
};

const ListElementMemo = React.memo(ListElement);
// TODO: ADD category
// TODO: Update: category
// TODO: Loading save
// TODO: Error save
const Categories: React.FC = () => {
  const { loading, data, error } = useQuery<ICategories>(GET_CATEGORIES, {
    pollInterval: 200,
  });
  const [field, setField] = React.useState('');

  const handleField = React.useCallback<CallbackType>(
    (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      event.preventDefault();
      setField(event.currentTarget.value);
    },
    [],
  );

  const isVisible = React.useMemo<boolean>(() => {
    return !!field;
  }, [field]);

  return (
    <Container>
      {loading && !error && <Loader secondary />}
      {error && !loading && <ErrorMsg />}
      {!loading && !error && (
        <>
          <AddSection>
            <FieldContainer>
              <Field
                id="category"
                label="Category"
                width="90%"
                value={field}
                required
                onChange={handleField}
              />
            </FieldContainer>
            <AddBtn disabled={!isVisible} isVisible={isVisible}>
              Add
            </AddBtn>
          </AddSection>
          <List>
            {data?.categories.map((category: ICategory) => (
              <ListElementMemo key={category._id} name={category.name} />
            ))}
          </List>
        </>
      )}
    </Container>
  );
};

export default Categories;
