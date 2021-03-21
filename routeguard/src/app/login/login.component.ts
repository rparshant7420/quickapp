import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../share/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public userservice:UsersService,
    private router:Router
    // 'private' means not any class can use it but in 'publi'c other classes can use it and third one is
    // 'protected' that means only parent or child can usse it (Inheritance)

// to use any class we have to make its object we made it above as "usersservice" to use it to get
// value on submit "onSubmit()"
  ) { }

  onSubmit(form:NgForm){
   this.userservice.setUser(form.value.name)
  //  we stored username here on submit button click
   this.router.navigateByUrl('/profile');
  //  we used routing here so that it can navigate to profile page automatically on button click(submit)
  }


  data:any=[];
  ngOnInit(): void {
  }

}
