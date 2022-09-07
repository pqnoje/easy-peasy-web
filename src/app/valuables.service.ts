import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValuablesService {
  	private valuablesUrl = 'http://localhost:3000/valuables'
  	private verifyValuableDisponibilityUrl = 'http://localhost:3000/valuables/verify'
	
	constructor(
		private http: HttpClient) { }

	getValuables(): Observable<any[]> {
		return this.http.get<any[]>(this.valuablesUrl)
	}

	verifyValuableDisponibility(valuableId: number): Observable<any> {
		return this.http.get<any[]>(`${this.verifyValuableDisponibilityUrl}/${valuableId}`)	
	}
}
