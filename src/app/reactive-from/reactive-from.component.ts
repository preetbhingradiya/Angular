import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-from',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,FormsModule],
  templateUrl: './reactive-from.component.html',
})
export class ReactiveFromComponent {
  username:string='';

  loginForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    bod: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  loginUser() {


    if (this.loginForm.value.firstname.length >= 3) {
      this.username += this.loginForm.value.firstname.slice(0, 3)
    } else {
      this.username += this.loginForm.value.firstname
    }

    if (this.loginForm.value.lastname.length >= 3) {
      this.username += this.loginForm.value.lastname.slice(0, 3)
    } else {
      this.username += this.loginForm.value.lastname
    }

    let bodYear = new Date(this.loginForm.value.bod)
    this.username += bodYear.getFullYear()
    this.username = this.username.toLocaleLowerCase()

    console.log(this.username)
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
