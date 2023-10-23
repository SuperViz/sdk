import { Annotation } from '../../components/comments/types';
import { AnnotationParams, CommentParams, FetchAnnotationsParams } from './types';
export default class ApiService {
    static createUrl(baseUrl: string, path: string, query?: {}): string;
    static validateApiKey(baseUrl: string, apiKey: string): Promise<any>;
    static fetchConfig(baseUrl: string, apiKey: string): Promise<any>;
    static fetchLimits(baseUrl: string, apikey: string): Promise<any>;
    static fetchWaterMark(baseUrl: string, apiKey: string): Promise<any>;
    static createAnnotations(baseUrl: string, apiKey: string, annotations: AnnotationParams): Promise<any>;
    static updateComment(baseUrl: string, apiKey: string, commentId: string, text: string): Promise<any>;
    static createComment(baseUrl: string, apiKey: string, comment: CommentParams): Promise<any>;
    static fetchAnnotation(baseUrl: string, apiKey: string, query: FetchAnnotationsParams): Promise<any>;
    static resolveAnnotation(baseUrl: string, apiKey: string, annotationId: string): Promise<Annotation>;
    static deleteComment(baseUrl: string, apiKey: string, commentId: string): Promise<any>;
    static deleteAnnotation(baseUrl: string, apiKey: string, annotationId: string): Promise<any>;
    static createOrUpdateParticipant(apiKey: string, participant: {
        name: string;
        participantId: string;
    }): Promise<void>;
    static sendActivity(userId: string, groupId: string, groupName: string, product: string): Promise<any>;
}
