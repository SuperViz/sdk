export type AnnotationOptions = {
  resolvable?: boolean;
  resolved?: boolean;
}

export enum CommentDropdownOptions {
  EDIT = 'EDIT',
  DELETE = 'DELETE',
}

export enum CommentMode {
  EDITABLE = 'editable',
  READONLY = 'readonly',
}

export enum AnnotationFilter {
  ALL = 'all',
  RESOLVED = 'resolved',
}