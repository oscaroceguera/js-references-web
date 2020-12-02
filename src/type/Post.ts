import { ICategory } from './Category';
import { ITag } from './Tag';

export interface IPost {
  _id?: string;
  title: string;
  content: string;
  category: ICategory;
  tags: ITag[];
}

export interface IPosts {
  posts: IPost[];
}
