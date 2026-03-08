import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';

import { createPasswordStrengthValidator } from '../validators/password-validator';

@Component({
  selector: 'login',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css'],
  standalone: false,
})
export class LoginReactiveComponent implements OnInit {
  //private readonly fb = inject(FormBuilder);
  private readonly fb = inject(NonNullableFormBuilder); //esto hace que los fields no sean null, cuando haces reset por ejmplo siempre pone los valores por defecto

  /* zEsta es la forma antigua de hacerlo, instanciando directamente el form group
  email = new FormControl('', {
    validators: [Validators.required, Validators.email],
    updateOn: 'blur',
  });

  password = new FormControl('', {
    validators: [Validators.required, Validators.minLength(8), createPasswordStrengthValidator()],
  });

  formInstanciationgFormGroup = new FormGroup({
    email: this.email,
    password: this.password,
  });

  */
  form = this.fb.group({
    email: [
      '',
      {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur',
      },
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(8), createPasswordStrengthValidator()],
    ],
  });

  get email() {
    return this.form.controls.email;
  }

  get password() {
    return this.form.controls.password;
  }

  constructor() {}

  ngOnInit() {}

  reset() {
    this.form.reset();
  }
}
