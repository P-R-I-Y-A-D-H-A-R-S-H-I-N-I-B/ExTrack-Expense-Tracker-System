import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private baseUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  getDocuments(email: string, pname: string): Observable<any> {
    const url = `${this.baseUrl}/documents/${email}/${pname}`;
    return this.http.get(url);
  }
}