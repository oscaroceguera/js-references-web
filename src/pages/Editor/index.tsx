import React, {
  MouseEvent,
  FormEvent,
  useCallback,
  useMemo,
  SyntheticEvent,
} from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import { Field, Loader, ErrorMsg, SelectCatalog } from '../../components';
import { IOption } from '../../components/SelectCatalog/types';

import { ICategories, ITags } from '../../type';
import { GET_CATEGORIES, GET_TAGS, ADD_POST } from '../../queries';

import { setFields } from './actions';
import { INITIAL_STATE } from './types';
import reducer from './reducer';

import { Container, GoBack, EditorContainer, Title, BtnSave } from './styles';

type CallbackType = (...args: any) => void;

const Editor: React.FC = () => {
  const history = useHistory();
  const {
    loading: loadingCategory,
    data: dataCategory,
    error: errorCategory,
  } = useQuery<ICategories>(GET_CATEGORIES, {
    pollInterval: 2000,
  });

  const {
    loading: loadingTag,
    data: dataTag,
    error: errorTag,
  } = useQuery<ITags>(GET_TAGS, {
    pollInterval: 2000,
  });

  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);

  const [createPost] = useMutation(ADD_POST);

  const goBack = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    history.push('/');
  };

  const handleField = useCallback<CallbackType>(
    (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      event.preventDefault();

      const payload = {
        field: event.currentTarget.id,
        value: event.currentTarget.value,
      };

      dispatch(setFields(payload));
    },
    [],
  );

  const onChangeSelect = useCallback<CallbackType>((e: any) => {
    const payload = {
      field: e.name,
      value: e.value,
    };

    dispatch(setFields(payload));
  }, []);

  const onChangeTags = useCallback<CallbackType>((e: any) => {
    const payload = {
      field: 'tags',
      value: e ? e.map((item: IOption) => item.value) : [],
    };

    dispatch(setFields(payload));
  }, []);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const { title, category, content, tags } = state;
    createPost({ variables: { title, category, content, tags } });
    history.push('/');
  };

  const isVisible = useMemo<boolean>(() => {
    const { title, tags, category, content } = state;
    const isTagsEmpty = typeof tags !== 'undefined' && tags.length > 0;
    return !!title && !!category && !!content && isTagsEmpty;
  }, [state]);

  const isLoading = useMemo<boolean>(() => {
    return loadingCategory || loadingTag;
  }, [loadingTag, loadingCategory]);

  const isError = useMemo<unknown>(() => {
    return errorCategory || errorTag;
  }, [errorCategory, errorTag]);

  return (
    <Container onSubmit={handleSubmit}>
      <GoBack onClick={goBack}>Back</GoBack>
      {isLoading && !isError && <Loader secondary />}
      {isError && !isLoading && <ErrorMsg />}
      {!isLoading && !isError && (
        <>
          <Title>Editor</Title>
          <EditorContainer>
            <Field
              id="title"
              label="Title"
              value={state.title}
              required
              onChange={handleField}
            />
            <SelectCatalog
              data={dataCategory ? dataCategory.categories : undefined}
              field="category"
              required={!state.category}
              onChange={onChangeSelect}
            />
            <br />
            <SelectCatalog
              data={dataTag ? dataTag.tags : undefined}
              field="tags"
              isMulti
              required={state.tags?.length === 0}
              onChange={onChangeTags}
            />
            <br />
            <Field
              id="content"
              label="Content"
              kind="textarea"
              placeholder="MD content..."
              value={state.content}
              required
              onChange={handleField}
            />
            <br />
            <BtnSave
              type="submit"
              value="Save"
              disabled={!isVisible}
              isVisible={isVisible}
            />
          </EditorContainer>
        </>
      )}
    </Container>
  );
};

export default Editor;
