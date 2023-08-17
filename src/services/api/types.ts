export type AnnotationDto = {
  roomId: string;
  url: string;
  position: string;
  userId: string;
}

export type CommentDto = {
  annotationId: string;
  userId: string;
  text: string;
}

export type FetchAnnotationsDto = {
  roomId: string;
  url: string;
}

export type Annotation = {
  //
}
