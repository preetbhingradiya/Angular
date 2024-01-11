import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { customValidatin } from './validation/custom.validatio';

@Component({
  selector: 'app-reactive-from',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './reactive-from.component.html',
})
export class ReactiveFromComponent implements OnInit {
  // username: string = '';

  loginForm = new FormGroup({
    firstname: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]+$'), customValidatin.noSpaceAllowed]),
    lastname: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    bod: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    username: new FormControl(null, Validators.required, customValidatin.checkUsername)
  })

  ngOnInit(): void {
    this.loginForm.get('firstname').valueChanges.subscribe((res)=>{
      console.log(res)
    })
    this.loginForm.get('username').statusChanges.subscribe((ele)=>{
      console.log(ele)
    })
  }

  //Username create not use any where noly logic will right
  loginUser() {
    if (this.loginForm.value.firstname.length >= 3) {
      this.loginForm.value.username += this.loginForm.value.firstname.slice(0, 3)
    } else {
      this.loginForm.value.username += this.loginForm.value.firstname
    }

    if (this.loginForm.value.lastname.length >= 3) {
      this.loginForm.value.username += this.loginForm.value.lastname.slice(0, 3)
    } else {
      this.loginForm.value.username += this.loginForm.value.lastname
    }

    let bodYear = new Date(this.loginForm.value.bod)
    this.loginForm.value.username += bodYear.getFullYear()
    this.loginForm.value.username = this.loginForm.value.username.toLocaleLowerCase()

    console.log(this.loginForm.value.username)
  }

  get fnameValidation() {
    return this.loginForm.get('firstname')
  }

  get lnameValidation() {
    return this.loginForm.get('lastname')
  }

  get passwordValidation() {
    return this.loginForm.get('password')
  }
}
