export class Post {
  post: SubPost[]
}
export interface SubPost {
  userId: number;
  id: number;
  title: string;
  body: string
}
