import React from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { Field, Loader, ErrorMsg } from '../../../components';
import ListElementMemo from '../Components/ListElement';

import { ICategories, ICategory } from '../../../type';
import {
  GET_CATEGORIES,
  ADD_CATEGORY,
  UPDATE_CATEGORY,
} from '../../../queries';

import { Container, AddSection, FieldContainer, AddBtn, List } from '../styles';

type CallbackType = (...args: any) => void;

// TODO: Loading save
// TODO: Error save
const Categories: React.FC = () => {
  const { loading, data, error } = useQuery<ICategories>(GET_CATEGORIES, {
    pollInterval: 1000,
  });

  const [field, setField] = React.useState('');

  const [createCategory] = useMutation(ADD_CATEGORY);

  const handleField = React.useCallback<CallbackType>(
    (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      event.preventDefault();
      setField(event.currentTarget.value);
    },
    [],
  );

  const onSave = () => {
    createCategory({ variables: { name: field } });
    setField('');
  };

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
            <AddBtn
              disabled={!isVisible}
              isVisible={isVisible}
              onClick={onSave}
            >
              Add
            </AddBtn>
          </AddSection>
          <List>
            {data?.categories.map((category: ICategory) => (
              <ListElementMemo
                key={category._id}
                itemData={category}
                updateMutation={UPDATE_CATEGORY}
              />
            ))}
          </List>
        </>
      )}
    </Container>
  );
};

export default Categories;
