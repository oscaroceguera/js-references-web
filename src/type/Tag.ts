export interface ITag {
  _id?: string;
  name: string;
}

export interface ITags {
  getTags: ITag[];
}

export type ITagMutation = {
  addTag: ITag;
};
