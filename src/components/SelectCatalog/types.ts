import { ICategory } from '../../type/Category';
import { ITag } from '../../type/Tag';

export interface IOption {
  label: string;
  name: string;
  value?: string;
}

export type CombineCatalog = ICategory | ITag;

export interface ISelectCatalog {
  data?: CombineCatalog[];
  field: string;
  required?: boolean;
  onChange: (e: any) => void;
  isMulti?: boolean;
}
