export type AnnotationParams = {
    roomId: string;
    url: string;
    position: string;
    userId: string;
};
export type CommentParams = {
    annotationId: string;
    userId: string;
    text: string;
};
export type FetchAnnotationsParams = {
    roomId: string;
    url: string;
};