import { Component } from '@angular/core';
import { Post } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'transferdata';
  datastored:Post[]=[];
    // datastore is a blank array to store values on pushing with help of below function .
  onAddingData(data:Post){
   this.datastored.push(data)
  }
}
