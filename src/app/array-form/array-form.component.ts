import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-array-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './array-form.component.html',
})
export class ArrayFormComponent implements OnInit {

  arryForm: FormGroup

  store: [{ name: string }] = [{ name: '' }]
  show:boolean=false

  constructor(private fromBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.arryForm = this.fromBuilder.group({
      username: this.fromBuilder.array([])
    })
  }

  get daynamicArray() {
    return (this.arryForm.get('username') as FormArray).controls
  }

  submitArry() {
    let control = this.fromBuilder.group({
      name: ['', Validators.required],
    })

    return (this.arryForm.get('username') as FormArray).push(control)
  }

  onSubmitData(index: any) {
    // let name = this.arryForm.get('username').value[index] //only one value can show
    let name = this.arryForm.get('username').value  //all the array value is show
    this.store = name
    this.show=true
  }
}
