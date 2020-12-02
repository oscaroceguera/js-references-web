import { ITag } from './Tag';

export interface ICategory {
  _id?: string;
  name: string;
  tags: ITag['_id'][];
}

export interface ICategories {
  getCategories: ICategory[];
}

export type ICategoryMutation = {
  addTag: ICategory;
};
