import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   aim="Your perfect banking partner" //string interpolation (_1)
  
  //  data="Account no" //property binding

  // acno="" //event binding using $event
  // pw=""

  userDetails:any={
    1000:{acno:1000,username:"nivya",password:123,balance:0},
    1001:{acno:1001,username:"amritha",password:123,balance:0},
    1002:{acno:1002,username:"abhay",password:123,balance:0},
    1003:{acno:1003,username:"sree",password:123,balance:0}
  }


  login(){ //event binding
    alert('login clicked')

  }


  //event binding using $event
  // acnoChange(event:any){
  //   this.acno=event.target.value

  // }
  // pwChange(event:any){
  //   this.pw=event.target.value
  // }


}
