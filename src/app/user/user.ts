import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  username:string;
  password:string;
  // isdisabled=true;
  isloggedin:boolean=false;
  role:string=""
  login(){
    if(this.username=="admin" && this.password=="admin@123"){
      // this.isdisabled=false
      this.role="admin"
      alert("Succesfull Login!");
      this.isloggedin=true;
    }
    else if(this.username=="user" && this.password==="user@123"){
      this.role="normaluser"
      alert("Succesfull Login!");
      this.isloggedin=true;
    }else if(this.username=="guest" && this.password==="guest@123"){
      this.role="guest"
      alert("Succesfull Login!");
      this.isloggedin=true;
    }
    else{
      alert("check your credentials!")
    }
  }

  logout(){
    this.isloggedin=false
    this.role=""
    // this.isdisabled=true
    this.username=""
    this.password=""
  }
}
