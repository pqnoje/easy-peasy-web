import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValuablesService {
	public valuablesInBasket: any[] = []
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

	getValuablesInBasket(): Promise<any[]> {
		return new Promise((resolve, reject) => resolve(this.valuablesInBasket))
	}

	addValuableToBasket(valuable: any): Promise<boolean> {
		return new Promise((resolve, reject) => {
			this.valuablesInBasket.push(valuable)
			resolve(true)
		})
	}
}
