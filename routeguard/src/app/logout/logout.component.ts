import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../share/users.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public userService:UsersService,
    private router:Router) { }

  ngOnInit(): void {
    this.userService.removeUser()
    this.router.navigateByUrl("")
    // now we will make a auth guard to restrict opening of profile page without login as,
    //  ng g guard share/auth
  }

}
