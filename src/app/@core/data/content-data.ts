import { Observable } from 'rxjs';

export interface Content {
  url: string;
  views: string;
  time: string;
  deltaUp:boolean;
}




export abstract class ContentData {
  abstract getContentData(): Observable<Content[]>;
  
}
