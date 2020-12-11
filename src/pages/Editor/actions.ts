import { ISetFieldsPayload } from './types';

export const SET_FIELDS = 'SET_FIELDS';

export interface ISetFields {
  type: typeof SET_FIELDS;
  payload: ISetFieldsPayload;
}

export type IEditorActions = ISetFields;

export const setFields = (payload: ISetFieldsPayload): ISetFields => ({
  type: SET_FIELDS,
  payload,
});
