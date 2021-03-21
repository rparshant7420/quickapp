import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
Registerform!:FormGroup
  constructor(private formbuilder:FormBuilder) { }
  submitted=false
  ngOnInit() {
    this.Registerform=this.formbuilder.group({
      username:['',Validators.required],
      email:['',Validators.required],
      profile:['',Validators.required],
      address:['',Validators.required],
      contact:['',Validators.required],
      confirmpassword:['',Validators.required],
      location:['',Validators.required],
      terms:['',Validators.required],
      gender:['',Validators.required],
    },
    {
      Validator: mustmatch('password','confirmpassword')
    }
    )
  }

  get f(){
    return this.Registerform.controls;
  }
  onSubmit(){
    this.submitted=true;
    if(this.Registerform.invalid)
    return
  }
}
function mustmatch(arg0: string, arg1: string): any {
  throw new Error('Function not implemented.');
}

