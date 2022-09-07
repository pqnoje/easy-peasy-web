import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { ValuablesService } from '../valuables.service';

@Component({
	selector: 'app-valuable',
	templateUrl: './valuable.component.html',
	styleUrls: ['./valuable.component.css']
})
export class ValuableComponent implements OnInit {
	valuables: any[] = []
	message: any = "Have a nice shop!"
	constructor(
		private valuablesService: ValuablesService,
		private basketService: BasketService,
	) { }

	ngOnInit(): void {
		this.loadAllValuables()
	}

	private loadAllValuables() {
		this.valuablesService.getValuables().subscribe(values => this.valuables = values)
	}

	public save(valuable: any) {
		this.basketService.addValuable(valuable)
	}
}
