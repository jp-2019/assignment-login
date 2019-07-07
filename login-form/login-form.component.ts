import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }
  from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  form: FormGroup;

  firstName = new FormControl("", Validators.required);
    loginEmail: any;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "loginEmail": this.loginEmail,
      "password": ["", Validators.required]
    });
  }
  onSubmitModelBased() {
    console.log("form submitted");
    console.log(this.form);
  }
}
