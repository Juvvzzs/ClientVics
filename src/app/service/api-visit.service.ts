import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiVisitService {
 
  // JSONBIN.IO MOCK API ANG NAGAMIT 
  // CHANGE IT INTO LOCALHOST MODIFY GAMAY 

  private binId = '6843bac08561e97a502086bf';
  private apiUrl = `https://api.jsonbin.io/v3/b/${this.binId}`;

  constructor(private http: HttpClient) { }

  // GET all visitors
  getVisitors(): Observable<any> {
    return this.http.get(`${this.apiUrl}/latest`).pipe(
      catchError(this.handleError)
    );
  }

  // POST new visitor (correct implementation)
  saveVisitorInfo(visitorData: any): Observable<any> {
    return this.getVisitors().pipe(
      switchMap((response: any) => {
        const currentVisitors = response.record.Visitors || [];
        const updatedVisitors = [...currentVisitors, visitorData];
        
        return this.http.put(this.apiUrl, 
          { Visitors: updatedVisitors },
          {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          }
        ).pipe(
          catchError(this.handleError)
        );
      })
    );
  }

  private handleError(error: any) {
    console.error('API Error:', error);
    return throwError(() => new Error(
      error.message || 'Server error'
    ));
  }
}