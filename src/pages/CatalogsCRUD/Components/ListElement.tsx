import React from 'react';
import { useMutation } from '@apollo/client';

import { Item, InputUpdate, CancelBtn, UpdateBtn } from '../styles';

type CallbackType = (...args: any) => void;

interface IPropsListElement {
  itemData: {
    name?: string;
    _id?: string;
  };
  updateMutation: any;
}

const ListElement: React.FC<IPropsListElement> = ({
  itemData,
  updateMutation,
}: IPropsListElement) => {
  const [showField, setShowField] = React.useState<boolean>(false);
  const [field, setField] = React.useState<string | undefined>('');

  const [updateTagMut] = useMutation(updateMutation);

  const handleShowField = React.useCallback<CallbackType>(
    (event: React.MouseEvent<HTMLLIElement | HTMLButtonElement>): void => {
      event.preventDefault();
      setShowField(!showField);
      setField(itemData.name);
    },
    [showField],
  );

  const handleField = React.useCallback<CallbackType>(
    (event: React.FormEvent<HTMLInputElement>) => {
      event.preventDefault();
      setField(event.currentTarget.value);
    },
    [],
  );

  const handleUpdate = () => {
    updateTagMut({ variables: { id: itemData._id, name: field } });
    setShowField(!showField);
  };

  return (
    <Item>
      {!showField ? (
        <div onClick={handleShowField}>{itemData.name}</div>
      ) : (
        <>
          <InputUpdate value={field} onChange={handleField} />
          <UpdateBtn onClick={handleUpdate}>Update</UpdateBtn>
          <CancelBtn onClick={handleShowField}>Cancel</CancelBtn>
        </>
      )}
    </Item>
  );
};

const ListElementMemo = React.memo(ListElement);

export default ListElementMemo;
