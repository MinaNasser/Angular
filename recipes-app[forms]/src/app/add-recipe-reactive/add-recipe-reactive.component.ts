import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-recipe-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './add-recipe-reactive.component.html',
  styleUrl: './add-recipe-reactive.component.css',
})
export class AddRecipeReactiveComponent {
  recipeForm: FormGroup;
  fb = inject(FormBuilder);
  constructor() {
    // this.recipeForm = new FormGroup({
    //   recipeName: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(3),
    //   ]),
    //   description: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(10),
    //     Validators.maxLength(200),
    //   ]),
    // });

    this.recipeForm = this.fb.group({
      recipeName: ['', [Validators.required, Validators.minLength(3)]],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(200),
        ],
      ],
    });
  }

  get formControls() {
    return this.recipeForm.controls;
  }

  handleSubmitForm() {
    console.log(this.recipeForm);
    console.log(this.recipeForm.value);
  }
}

// TS => import ReactiveFormsModule
// TS => Init. Form => formName: FormGroup => new FormGroup({  control1: new FormControl('', [Validators])  })
// HTML => <form [formGroup]="formName" (ngSubmit)="handleSubmitForm()">
// HTML => <field formControlName="control1">
