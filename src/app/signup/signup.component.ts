import { Component, OnInit } from '@angular/core'
import { Buyer } from '../buyer.model'
import { SignupService } from '../signup.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
	private signupService: SignupService) { }

  ngOnInit(): void {
  }

  model = new Buyer('pqnoje3', 'username3', 'password3');

  submitted = false;

  onSubmit() { 
	this.submitted = true; 
	this.signupService.create(this.model).subscribe(result => {
		debugger
	})
  }
}
