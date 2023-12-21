import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule,RouterOutlet,FormsModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
    count:number=5
    image:string="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703030400&semt=sph"
    show:boolean=false
    name:string=""
    qty=signal<number>(0);  //signal propaty use in tempete with ()
    user=[
      {name:"anil",email:"anil@gmail.com",phone:123},
      {name:"shubh",email:"shubh@gmail.com",phone:345}
    ]
    userData:any={}

    OnChangeName(changeName:any){
      return this.name=changeName
    }

    increseQty(){
      return this.qty.update(q=>q+1)
    }
    decresQty(){
      return this.qty.update(q=>q-1)
    }

    getdata(data:any){
      console.log(data)
      this.userData=data
    }
}
