import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  imports: [FormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {
  username : string = 'Ahmed';

  handleSubmitForm(form : NgForm){
    console.log(form)
    console.log(form.value)
  }
}


// TS => import FormsModule 
// HTML => <form #formRef="ngForm" (ngSubmit)="handleSubmit(formRef)">
// HTML => <field name="fieldName" ngModel #fieldName="ngModel"></field>
// HTML => VALIDATIONS => fieldName.invalid && fieldName.touched => fieldName.hasError()