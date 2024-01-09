import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { HttpserviceService } from '../service/httpservice.service';

@Component({
  selector: 'app-http-crud',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './http-crud.component.html',
  providers: [HttpserviceService]
})
export class HttpCrudComponent {
  constructor(private user: HttpserviceService) {
    this.user.grtUser().subscribe((ele) => {
      let data=ele
      console.log(data)
    })

    this.user.postUser().subscribe((ele)=>{
      console.log(ele)
    })
  }



}
