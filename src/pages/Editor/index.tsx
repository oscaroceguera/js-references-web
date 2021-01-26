import React, {
  MouseEvent,
  FormEvent,
  useCallback,
  useMemo,
  SyntheticEvent,
  useEffect,
} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery, useMutation, useLazyQuery } from '@apollo/client';

import { Field, Loader, ErrorMsg, SelectCatalog } from '../../components';
import { IOption } from '../../components/SelectCatalog/types';

import { ICategories, ITags, IPostRes } from '../../type';
import {
  GET_CATEGORIES,
  GET_TAGS,
  ADD_POST,
  GET_POST,
  UPDATE_POST,
} from '../../queries';

import { setFields, updateFields } from './actions';
import { INITIAL_STATE, IUpdateFieldsPayload } from './types';
import reducer from './reducer';

import { Container, GoBack, EditorContainer, Title, BtnSave } from './styles';

type CallbackType = (...args: any) => void;

interface RouteParams {
  id: string;
}

const Editor: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<RouteParams>();

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
  const [updatePost] = useMutation(UPDATE_POST);

  const [
    getPost,
    { error: errorGetPost, loading: loadingGetPost, data: dataPost },
  ] = useLazyQuery<IPostRes>(GET_POST);

  useEffect(() => {
    if (id) {
      getPost({ variables: { id } });
    }
  }, [id]);

  useEffect(() => {
    if (dataPost && dataPost.post._id && dataPost.post.category._id) {
      const newData: IUpdateFieldsPayload = {
        _id: dataPost.post._id,
        title: dataPost.post.title,
        category: dataPost.post.category._id,
        tags: dataPost.post.tags.map((tag) => tag._id),
        content: dataPost.post.content,
      };
      dispatch(updateFields(newData));
    }
  }, [dataPost]);

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
    if (id) {
      updatePost({ variables: { id, title, category, content, tags } });
    } else {
      createPost({ variables: { title, category, content, tags } });
    }
    history.push('/');
  };

  const isVisible = useMemo<boolean>(() => {
    const { title, tags, category, content } = state;
    const isTagsEmpty = typeof tags !== 'undefined' && tags.length > 0;
    return !!title && !!category && !!content && isTagsEmpty;
  }, [state]);

  const isLoading = useMemo<boolean>(() => {
    return loadingCategory || loadingTag || loadingGetPost;
  }, [loadingTag, loadingCategory, loadingGetPost]);

  const isError = useMemo<unknown>(() => {
    return errorCategory || errorTag || errorGetPost;
  }, [errorCategory, errorTag, errorGetPost]);

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
              value={state.category}
            />
            <br />
            <SelectCatalog
              data={dataTag ? dataTag.tags : undefined}
              field="tags"
              isMulti
              required={state.tags?.length === 0}
              onChange={onChangeTags}
              value={state.tags}
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
              value={id ? 'Update' : 'Save'}
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
