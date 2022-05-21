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
  private valublesInBasket: Array<Valuable>
  constructor(
		private http: HttpClient,
    private valuablesService: ValuablesService) { 
      this.valublesInBasket = new Array<Valuable>()
    }

  saveBasket(): Observable<any> {
        this.valublesInBasket = this.valuablesService.valuablesInBasket
        return this.http.put<any[]>(
          this.saveBasketUrl, 
          { 
            valuables: this.valublesInBasket
          }
        )

	}

  getValuablesInBaske(): Array<Valuable> {
    return this.valublesInBasket
  }

}
