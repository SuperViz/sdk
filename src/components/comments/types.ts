export type Annotation = {
  uuid: string;
  position: string;
  resolved: boolean;
  comments: Comment[];
};

export type Comment = {
  uuid: string;
  username: string;
  avatar: string;
  text: string;
  createdAt: string;

  resolvable?: boolean;
  resolved?: boolean;
};
