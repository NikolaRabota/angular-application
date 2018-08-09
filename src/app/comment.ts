export class Comment {
  comment: ISubComment[]
}

export interface ISubComment {
  postId: number;
  id: number;
  email: string;
  name: string;
  body: string
}
