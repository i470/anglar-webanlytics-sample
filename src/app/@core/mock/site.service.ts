import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Site,  SiteData } from '../data/sites';

@Injectable()
export class SiteService extends SiteData {
    
  onSiteChange(): Observable<Site[]> {
      throw new Error('Method not implemented.');
  }

  private time: Date = new Date;

 
  private sites: Site[] = [
    { name:"shopstop.net" },
    { name:"amazon.com" },
    { name:"nytimes.com" },
    { name:"deleteme.com" }
  ];
 
  getSites(): Observable<Site[]> {
    return observableOf(this.sites);
  }

  
}
