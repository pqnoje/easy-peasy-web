import { Component, OnInit } from '@angular/core';
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
		private valuablesService: ValuablesService
	) { }

	ngOnInit(): void {
		this.loadAllValuables()
	}

	public saveBasket() {
		this.valuablesService.saveBasket().subscribe(result => {
			debugger
		})
	}

	private loadAllValuables() {
		this.valuablesService.getValuablesInBasket().then(values => this.valuables = values)
	}

}
