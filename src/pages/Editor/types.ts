export interface IInitialState {
  title: string;
  category: string;
  tags?: string[];
  content: string;
}

export interface ISetFieldsPayload {
  field: string;
  value: string | [];
}

export const INITIAL_STATE: IInitialState = {
  title: '',
  category: '',
  tags: [],
  content: '',
};
