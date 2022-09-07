import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { ValuablesService } from '../valuables.service';

@Component({
	selector: 'app-basket',
	templateUrl: './basket.component.html',
	styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

	valuables: any[] = []
	message: any = "Have a nice shop!"

	constructor(
		private valuablesService: ValuablesService,
		private basketService: BasketService
	) { }

	ngOnInit(): void {
		this.loadAllValuables()
	}

	public saveBasket() {
		this.basketService.saveBasket().subscribe(result => {
			debugger
		})
	}

	private loadAllValuables() {
		this.valuables = this.basketService.getValuables()
	}

}
