import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  url='http://localhost:3000/comments'
  constructor(private http:HttpClient) { }

  grtUser(){
    return this.http.get(this.url);
  }

  postUser(data:any){
    return this.http.post(this.url,data);
  }

  deleteUser(id:string):Observable<any>{
    let deleteUrl=`${this.url}/${id}`;
    return this.http.delete(deleteUrl);
  }

  editUser(id:any,data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }
}
