import React from 'react';
import { IInitialState } from './types';
import { IEditorActions, SET_FIELDS } from './actions';

const reducer: React.Reducer<IInitialState, IEditorActions> = (
  state,
  action,
) => {
  switch (action.type) {
    case SET_FIELDS:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    default:
      return state;
  }
};

export default reducer;
