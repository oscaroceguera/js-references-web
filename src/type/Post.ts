import { ICategory } from './Category';
import { ITag } from './Tag';

export interface IPost {
  _id?: string;
  title: string;
  content: string;
  category: ICategory;
  tags: ITag[];
  createdAt: number;
}

export interface IPostRes {
  post: IPost;
}

export interface IPosts {
  posts: IPost[];
}

export interface ISearchedPosts {
  searchPost: IPost[];
}
