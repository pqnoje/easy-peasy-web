import { Component, OnInit } from '@angular/core';
import { Buyer } from '../buyer.model'
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	user: Buyer
	loggedIn: boolean

	constructor(
		private authenticationService: AuthenticationService) {

		this.user = new Buyer('Your Name', 'username', '')
		this.loggedIn = false
	}

	public ngOnInit() {
		this.authenticationService.session()
			.subscribe(loggedIn => this.loggedIn = loggedIn)
	}

	public onSubmit() { 
		this.authenticationService.login(this.user)
			.subscribe((result: any) => this.authenticationService.setUserLoggedIn(result.token))
	}

}
