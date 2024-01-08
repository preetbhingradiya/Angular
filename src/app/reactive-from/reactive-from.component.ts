import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-from',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-from.component.html',
})
export class ReactiveFromComponent {
  loginForm=new FormGroup({
    user:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })

  loginUser(){
    console.log(this.loginForm.value)
  }

  get userValidation(){
    return this.loginForm.get('user')
  }

  get passwordValidation(){
    return this.loginForm.get('password')
  }
}
