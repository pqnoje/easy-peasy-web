import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Valuable } from './valuable.model';
import { ValuablesService } from './valuables.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private saveBasketUrl = 'http://localhost:3000/basket'
  private valuables: Array<Valuable>
  constructor(
		private http: HttpClient) { 
      this.valuables = new Array<Valuable>()
    }

  saveBasket(): Observable<any> {
        return this.http.put<any[]>(
          this.saveBasketUrl, 
          { 
            valuables: this.valuables
          }
        )

	}

  getValuables(): Array<Valuable> {
    return this.valuables
  }

  addValuable(valuable: Valuable): void {
    this.valuables.push(valuable)
  }
}
