import React from 'react';
import Select from 'react-select';

import { CombineCatalog, IOption, ISelectCatalog } from './types';

import { useModal } from '../../hooks';
import Modal from '../Modal';

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

// TODO: Agregar categoria
// TODO: Agregar tags
// TODO: Update categoria
// TODO: Update tags
// TODO: Delete categoria
// TODO: Delete tags

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
    <React.Fragment>
      <h1>CRUD DE TAGS</h1>
    </React.Fragment>
  ) : (
    <div>
      <h1>CRUD DE CATEGORIAS</h1>
    </div>
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
        headerText="TITULO!"
        isShown={isShown}
        hide={toggle}
        modalContent={content}
      />
    </>
  );
};

export default SelectCatalog;
