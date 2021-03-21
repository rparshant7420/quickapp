import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
// import * as EventEmitter from 'node:events';
import { Post } from '../posts/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data:Post={
    txt:"",
    msg:""
  };
  // now to send data add a decorator i.e., @output() as below..
  @Output() postcreated = new EventEmitter<Post>();
  //  here postcreated is name of our customised event made by help of EventEmitter and <Post> shows that it is
  // of type 'Post' i.e., our model for security purposes.

  onSubmit(form:NgForm){
  //  console.log(form.value);
   const data:Post = {
     txt:form.value.txt,
     msg:form.value.msg
   }
  //  why this const made here ?
  this.postcreated.emit(data);
  // emit here working for pushing data into our array(post)on event falling i.e., poscreated(customised).
  }

}
