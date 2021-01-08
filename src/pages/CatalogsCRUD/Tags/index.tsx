import React from 'react';
import { useQuery, useMutation } from '@apollo/client';

import { Field, Loader, ErrorMsg } from '../../../components';
import ListElementMemo from '../Components/ListElement';

import { ITags, ITag } from '../../../type';
import { GET_TAGS, ADD_TAG, UPDATE_TAG } from '../../../queries';

import { Container, AddSection, FieldContainer, AddBtn, List } from '../styles';

type CallbackType = (...args: any) => void;

// TODO: Loading save
// TODO: Error save
const Tags: React.FC = () => {
  const { loading, data, error } = useQuery<ITags>(GET_TAGS, {
    pollInterval: 1000,
  });

  const [field, setField] = React.useState('');

  const [createTag] = useMutation(ADD_TAG);

  const handleField = React.useCallback<CallbackType>(
    (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      event.preventDefault();
      setField(event.currentTarget.value);
    },
    [],
  );

  const onSave = () => {
    createTag({ variables: { name: field } });
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
                id="tag"
                label="Tag"
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
            {data?.tags.map((tag: ITag) => (
              <ListElementMemo
                key={tag._id}
                itemData={tag}
                updateMutation={UPDATE_TAG}
              />
            ))}
          </List>
        </>
      )}
    </Container>
  );
};

export default Tags;
