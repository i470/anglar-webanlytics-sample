import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

declare const ga: any;

@Injectable()
export class SiteService {
  private enabled: boolean;
  public currentSite:string;
  public sites:[];

  constructor(private location: Location, private router: Router) {
    this.enabled = false;
  }

  

  onThemeChange(): void {
    
    
  }

}
