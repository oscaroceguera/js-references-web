import { TypeOfTag } from 'typescript';
import { ISetFieldsPayload, IUpdateFieldsPayload } from './types';

export const SET_FIELDS = 'SET_FIELDS';
export const UPDATE_FIELDS = 'UPDATE_FIELDS';

export interface ISetFields {
  type: typeof SET_FIELDS;
  payload: ISetFieldsPayload;
}

export interface IUpdateFields {
  type: typeof UPDATE_FIELDS;
  payload: IUpdateFieldsPayload;
}

export type IEditorActions = ISetFields | IUpdateFields;

export const setFields = (payload: ISetFieldsPayload): IEditorActions => ({
  type: SET_FIELDS,
  payload,
});

export const updateFields = (
  payload: IUpdateFieldsPayload,
): IEditorActions => ({
  type: UPDATE_FIELDS,
  payload,
});
