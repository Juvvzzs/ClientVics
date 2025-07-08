import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiVisitService {
 

  private apiUrl = 'https://localhost:7105/api/v1/VisitorLogs';

  constructor(private http: HttpClient) { }

  // GET all visitors
  getVisitors(): Observable<any> {
    return this.http.get(`${this.apiUrl}/latest`).pipe(
      catchError(this.handleError)
    );
  }

  // POST new visitor (correct implementation)
  saveVisitorInfo(visitorData: any): Observable<any> {
     const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJEQVJXRVlST0lFIiwidW5pcXVlX25hbWUiOiJhZG1pbiIsInJvbGUiOiJBZG1pbiIsIm5iZiI6MTc1MTkzOTc3NSwiZXhwIjoxNzUxOTQzMzc1LCJpYXQiOjE3NTE5Mzk3NzUsImlzcyI6IlRpY2tldGluZ1N5c3RlbSIsImF1ZCI6IlRpY2tldGluZ0NsaWVudHMifQ.ezZ6G0bXXFxEWm8AEiz_vAccmW5NTxK68BIIDRz2C3Y';
     const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    
    return this.http.post(this.apiUrl, visitorData, { headers })
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