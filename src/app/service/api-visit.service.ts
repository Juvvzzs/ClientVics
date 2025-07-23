import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiVisitService {
 

  private apiUrl = environment.apiUrl; // Use the environment variable for API URL

  constructor(private http: HttpClient) { }

  // GET all visitors
  getVisitors(): Observable<any> {
    return this.http.get(`${this.apiUrl}/latest`).pipe(
      catchError(this.handleError)
    );
  }

  // POST new visitor (correct implementation)
  saveVisitorInfo(visitorData: any): Observable<any> {
   
    return this.http.post(`${this.apiUrl}/v1/VisitorLogs`, visitorData, )
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('API Error:', error);
    return throwError(() => new Error(
      error.message || 'Server error'
    ));
  }
}