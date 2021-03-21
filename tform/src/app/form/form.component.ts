import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  enable:boolean=true;
   data:any={
     username:"",useremail:"",location:"",contact:"",profile:""
    //  set default value

   };
  style="display: none;"
  onSubmit(form:NgForm){
    this.data=(form.value);
    this.enable=false;
  // alert(this.data);
 }
  ngOnInit(): void {
  }

}
