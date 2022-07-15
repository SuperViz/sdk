export type Language = 'pt' | 'en' | 'zh';

export interface ICommunicatorTypes {
  apiKey: string;
  debug?: boolean;
  language?: Language;
  roomId: string;
  externalUserId: string;
}
