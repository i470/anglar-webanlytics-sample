import { of as observableOf,  Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Content, ContentData } from '../data/content-data';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SitecontentService extends ContentData {


   private serviceUrl = 'https://hvdkxs7ewd.execute-api.us-east-1.amazonaws.com/dev/site/1/';  // URL to web api

   httpOptions = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   };

   
   constructor(private http: HttpClient) {
     super();
   }

  getContentData(): Observable<Content[]> {

    return this.http.get<Content[]>(this.serviceUrl,this.httpOptions)
    .pipe(
      tap(_ => console.info('loaded content data')),
      catchError(this.handleError<Content[]>('getContentData', []))
    );
  }


 /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  
}
