export type AnnotationOptions = {
    resolvable?: boolean;
    resolved?: boolean;
};
export declare enum CommentDropdownOptions {
    EDIT = "EDIT",
    DELETE = "DELETE"
}
export declare enum CommentMode {
    EDITABLE = "editable",
    READONLY = "readonly"
}
export declare enum PinMode {
    ADD = "add",
    SHOW = "show"
}
export declare enum AnnotationFilter {
    ALL = "all",
    RESOLVED = "resolved"
}
export type HorizontalSide = 'left' | 'right';
export interface Sides {
    left: number;
    right: number;
    top: number;
    bottom: number;
}
