import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
   @Input() myinput:string | undefined;

   @Output() myoutput=new EventEmitter<String>();
  constructor() { }

  outputstring="Hi Parent"
  senddata(){
    this.myoutput.emit(this.outputstring)
  };
  ngOnInit(): void {
    console.log(this.myinput);
  }

}
