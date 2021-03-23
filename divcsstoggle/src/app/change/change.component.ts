import { stringify } from '@angular/compiler/src/util';
import { Component, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {

  constructor( private el:ElementRef, private renderer:Renderer2) { }
  //  myStyles = {
  //    background: ''
  //  }
  //  @Input() myInput:string | undefined;
  //  changeStyles(){
  //   this.myStyles['background']= 'red'
  //  }
  color!:string;


   ngOnInit(): void {
  //   console.log(this.myInput)


   // another experiments on task


   }

}


