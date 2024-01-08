import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styles:['input.ng-invalid.ng-touched {border:2px red solid}','small {color:red;font-weight:bold;font-size:13px}',]
})
export class FormComponent {
  fisrtName:string='';
  lastName:string='';
  Email:string='';

  OnFormSubmitt(data:NgForm){
    console.log(data.value)
  }
}
