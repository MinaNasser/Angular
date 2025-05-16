
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
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
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,

      ]),
      Address: new FormGroup({
        city: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        street: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ])
      }),
      phoneNumbers: new FormArray(
        [
          new FormControl('', [
            Validators.required,
            Validators.minLength(11),
            Validators.maxLength(11),
            Validators.pattern('[0-9]+')
          ])
        ]
      )

    }, { validators: this.matchPasswordsValidator });


  }
  ngOnInit(): void {
    this.userRegisterForm.patchValue({
      name: 'Ahmed',
      email: 'ahmed@gmail.com',
      password: 'Asd@2030asd',
      confirmPassword: 'Asd@2030asd',
      Address: {
        city: 'Cairo',
        street: '10th of Ramadan'
      }
    })
  }
  AddUser() {
    alert("User Added Successfully");
    console.log(this.userRegisterForm.value);
  }
  get name() {
    return this.userRegisterForm.get('name');
  }
  get email() {
    return this.userRegisterForm.get('email');
  }
  get password() {
    return this.userRegisterForm.get('password');
  }
  get confirmPassword() {
    return this.userRegisterForm.get('confirmPassword');
  }

  get city() {
    return this.userRegisterForm.get('Address.city');
  }
  get street() {
    return this.userRegisterForm.get('Address.street');
  }
  get phoneNumbers() {
    return this.userRegisterForm.get('phoneNumbers') as FormArray;
  }


  matchPasswordsValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  }
  addPhoneNumber() {
    const phoneNumbers = this.phoneNumbers;
    phoneNumbers.push(new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
      Validators.pattern('[0-9]+')
    ]));
  }
  removePhoneNumber(index: number) {

    const phoneNumbers = this.phoneNumbers;
    if (phoneNumbers.length > 1) {
      phoneNumbers.removeAt(index);
    }

    // phoneNumbers.removeAt(index);
  }

}
