export interface ITag {
  _id?: string;
  name: string;
}

export interface ITags {
  tags: ITag[];
}

export type ITagMutation = {
  addTag: ITag;
};
