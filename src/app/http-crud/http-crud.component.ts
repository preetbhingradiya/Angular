import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { HttpserviceService } from '../service/httpservice.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-http-crud',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './http-crud.component.html',
  providers:[]
})
export class HttpCrudComponent implements OnInit {

  user:HttpserviceService=inject(HttpserviceService)
  userData: any[] = [];
  updateData: boolean = false;

  userName: string;
  email: string;
  password: string
  userId: number;
  currentId: any;

  // constructor(private user: HttpserviceService,) { }

  ngOnInit(): void {
    this.getAllUser()
  }

  getAllUser() {
    this.user.grtUser().subscribe((ele) => {
      this.userData = ele as any[];
    });
  }

  onSubmit() {
    let newUser = {
      // id:this.userData.length,
      user: this.userName,
      email: this.email,
      password: this.password,
    }

    this.user.postUser(newUser).subscribe((ele) => {
      this.getAllUser();
    });

  }

  deleteuser(id: string) {
    console.log(id);
    this.user.deleteUser(id).subscribe((res) => {
      this.getAllUser();
      console.log("'User deleted successfully", res);
    });
  }

  Edituser(user: any) {
    this.updateData = true
    this.userId = user.id
    this.userName = user.user
    this.email = user.email
    this.password = user.password
    this.currentId = user.id
  }

  onEditUser() {
    let edit = {
      id: this.userId,
      user: this.userName,
      email: this.email,
      password: this.password,
    }
    console.log(edit)
    this.user.editUser(this.currentId, edit).subscribe((ele) => {
      this.getAllUser()
      console.log(ele)
    })
    this.updateData = false
  }

}
