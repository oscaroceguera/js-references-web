import React from 'react';
import Select from 'react-select';

import { CombineCatalog, IOption, ISelectCatalog } from './types';

import { useModal } from '../../hooks';
import Modal from '../Modal';
import CatalogsCRUD from '../../pages/CatalogsCRUD';

import { capitalizeFirstWord } from '../../utils/capitalizeFirstWord';
import { ReactComponent as AddIcon } from './add-file.svg';
import {
  RequiredSelect,
  CatalogsContainer,
  SelectContainer,
  AddCatalogContainer,
  TitleSlc,
} from './styles';

const convertToSelectValues = (
  items: CombineCatalog[],
  name: string,
): IOption[] => {
  const result: IOption[] = items.map((item: CombineCatalog) => ({
    label: capitalizeFirstWord(item.name),
    value: item._id,
    name,
  }));

  return result;
};

const SelectCatalog: React.FC<ISelectCatalog> = ({
  data,
  field,
  onChange,
  required = false,
  isMulti = false,
}: ISelectCatalog) => {
  const { isShown, toggle } = useModal();
  const className = isMulti ? 'basic-multi-select' : 'basic-single';

  const content = isMulti ? (
    <CatalogsCRUD type="tags" />
  ) : (
    <CatalogsCRUD type="categories" />
  );

  return (
    <>
      <TitleSlc>{capitalizeFirstWord(field)}</TitleSlc>
      <CatalogsContainer>
        <SelectContainer>
          <Select
            className={className}
            classNamePrefix="select"
            isMulti={isMulti}
            name={field}
            options={data ? convertToSelectValues(data, field) : []}
            onChange={onChange}
          />
          <RequiredSelect required={required}>* Required</RequiredSelect>
        </SelectContainer>
        <AddCatalogContainer onClick={toggle}>
          <AddIcon />
        </AddCatalogContainer>
      </CatalogsContainer>
      <Modal
        headerText={isMulti ? 'CRUD: TAGS' : 'CRUD: CATEGORIES'}
        isShown={isShown}
        hide={toggle}
        modalContent={content}
      />
    </>
  );
};

export default SelectCatalog;
