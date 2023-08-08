export type Annotation = {
  id: string;
  position: string;
  resolved: boolean;
  comments: Comment[];
};

export type Comment = {
  username: string;
  avatar: string;
  text: string;
  createdAt: string;
};
