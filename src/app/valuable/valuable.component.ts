import { Component, OnInit } from '@angular/core';
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
		private valuablesService: ValuablesService
	) { }

	ngOnInit(): void {
		this.loadAllValuables()
	}

	private loadAllValuables() {
		this.valuablesService.getValuables().subscribe(values => this.valuables = values)
	}

	public save(valuable: any) {
		this.valuablesService.verifyValuableDisponibility(valuable.id).subscribe(alreadyInShop => {
			debugger
			if (!alreadyInShop) {
				this.valuablesService.addValuableToBasket(valuable).then(result => {
					debugger
				})
			}
		})
	}
}
