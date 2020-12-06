import React, {
  MouseEvent,
  FormEvent,
  useState,
  useCallback,
  useMemo,
} from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';

import Field from '../../components/Form/Field';
import {
  Container,
  GoBack,
  EditorContainer,
  Title,
  RequiredSelect,
  BtnSave,
} from './styles';

interface IInitialState {
  title: string;
  category: string;
  tags?: string[];
  content: string;
}

const CATEGORY_OPT = [
  { label: 'Apple', value: '123', name: 'category' },
  { label: 'Mango', value: '321', name: 'category' },
];
const TAGS_OPT = [
  { label: 'Javascript', value: '939392', name: 'tags' },
  { label: 'Vue', value: '09234', name: 'tags' },
  { label: 'React', value: '888', name: 'tags' },
];

interface IOption {
  label: string;
  name: string;
  value: string;
}

const INITIAL_STATE = {
  title: '',
  category: '',
  tags: [],
  content: '',
};

// TODO: usar useReducer para que no se haga mucho render
const Editor: React.FC = () => {
  console.log('---EDITOR RENDER---');
  const history = useHistory();
  const [fields, setFields] = useState<IInitialState>(INITIAL_STATE);

  const goBack = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    history.push('/');
  };

  const handleField = useCallback(
    (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      event.preventDefault();
      setFields({
        ...fields,
        [event.currentTarget.id]: event.currentTarget.value,
      });
    },
    [fields],
  );

  const onChangeSelect = useCallback(
    (e: any) => {
      setFields({
        ...fields,
        [e.name]: e.value,
      });
    },
    [fields],
  );

  const onChangeTags = useCallback(
    (e: any) => {
      setFields({
        ...fields,
        tags: e ? e.map((item: IOption) => item.value) : [],
      });
    },
    [fields],
  );

  const handleSubmit = () => {
    console.log('handleSubmit');
  };

  const isVisible = useMemo(() => {
    const { title, tags, category, content } = fields;
    const isTagsEmpty = typeof tags !== 'undefined' && tags.length > 0;
    return !!title && !!category && !!content && isTagsEmpty;
  }, [fields]);

  return (
    <Container onSubmit={handleSubmit}>
      <GoBack onClick={goBack}>Back</GoBack>
      <Title>Editor</Title>
      <EditorContainer>
        <Field
          id="title"
          label="Title"
          value={fields.title}
          required
          onChange={handleField}
        />
        <Select
          className="basic-single"
          classNamePrefix="select"
          name="category"
          options={CATEGORY_OPT}
          onChange={onChangeSelect}
        />
        <RequiredSelect required={!fields.category}>* Required</RequiredSelect>
        <br />
        <Select
          className="basic-multi-select"
          classNamePrefix="select"
          isMulti
          name="tags"
          options={TAGS_OPT}
          onChange={onChangeTags}
        />
        <RequiredSelect required={fields.tags?.length === 0}>
          * Required
        </RequiredSelect>
        <br />
        <Field
          id="content"
          label="Content"
          kind="textarea"
          placeholder="MD content..."
          value={fields.content}
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
    </Container>
  );
};

export default Editor;
