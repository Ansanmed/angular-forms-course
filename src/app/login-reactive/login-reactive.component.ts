import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css'],
  standalone: false,
})
export class LoginReactiveComponent implements OnInit {
  email = new FormControl('', {
    validators: [Validators.required, Validators.email],
    updateOn: 'blur',
  });

  password = new FormControl('', {
    validators: [Validators.required, Validators.minLength(8)],
  });

  form = new FormGroup({
    email: this.email,
    password: this.password,
  });

  constructor() {}

  ngOnInit() {}
}
