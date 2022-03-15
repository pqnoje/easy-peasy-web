import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'
import { Observable, BehaviorSubject  } from "rxjs";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
	loggedIn: boolean

  	constructor(
		private authenticationService: AuthenticationService) {

		this.loggedIn = false
	}

	public ngOnInit() {
		this.authenticationService.session()
			.subscribe(loggedIn => this.loggedIn = loggedIn)
	}

	public logout() {
		this.authenticationService.removeToken()
	}
}
