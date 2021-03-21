import { Component, OnInit } from '@angular/core';
import { UsersService } from '../share/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userservice:UsersService) { }
 user!:string
  ngOnInit(): void {
    this.user=JSON.stringify(this.userservice.getuser());
  }

}
