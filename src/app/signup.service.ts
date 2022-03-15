import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buyer } from './buyer.model'

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private usersUrl = 'http://localhost:3000/signup'

  constructor(private http: HttpClient) { }

  get(): Observable<any[]> {
    return this.http.get<any[]>(this.usersUrl)
  }

  create(userData: Buyer): Observable<any> {
     return this.http.post<any[]>(this.usersUrl, { buyer: userData })
  }

  update(userData: Buyer): Observable<any> {
     return this.http.put<any[]>(this.usersUrl, { buyer: userData })
  }
}
