import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userRegisterForm: FormGroup;
  /**
   *
   */
  constructor() {
    this.userRegisterForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
        Validators.pattern('[a-zA-Z0-9]+')

      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,

      ]),
      password: new FormControl('',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ]
      ),
      confirmPassword: new FormControl('',
        [
          Validators.required,
          this.password.bind(this)
        ]
      ),
      Address: new FormGroup({
        city: new FormControl('',
          [
            Validators.required,
            Validators.minLength(3)
          ]
        ),
        street: new FormControl('',
          [
            Validators.required,
            Validators.minLength(3)
          ]
        )
      })
    });
  }
  AddUser() {
    alert("User Added Successfully");
    console.log(this.userRegisterForm.value);
  }
  name() : FormControl {
    return this.userRegisterForm.get('name') as FormControl;
  }
  email(): FormControl {
    return this.userRegisterForm.get('email') as FormControl;
  }
  password(): FormControl {
    return this.userRegisterForm.get('password') as FormControl;
  }
  confirmPassword() : FormControl {
    return this.userRegisterForm.get('confirmPassword') as FormControl;
  }
  city() : FormControl {
    return this.userRegisterForm.get('Address.city') as FormControl;
  }
  street() : FormControl {
    return this.userRegisterForm.get('Address.street') as FormControl;
  }
}
