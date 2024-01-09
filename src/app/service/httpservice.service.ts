import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  data={
    name:"irkgij",
    body:"rngrn"
  }

  url='http://localhost:3000/comments'
  constructor(private http:HttpClient) { }

  grtUser(){
    return this.http.get(this.url)
  }

  postUser(){
    return this.http.post(this.url,this.data)
  }

}
