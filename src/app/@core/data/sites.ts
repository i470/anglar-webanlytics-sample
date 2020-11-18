import { Observable } from 'rxjs';

export interface Site {
  name: string;
  
}


export abstract class SiteData {
  changeSite(siteName: string) {
    throw new Error('Method not implemented.');
  }
  abstract getSites(): Observable<Site[]>;
  abstract onSiteChange(): Observable<Site[]>;
}
