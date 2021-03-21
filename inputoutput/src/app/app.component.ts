import { Component,  } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inputoutput';
  inputvariable="Hi User";
  getdata(value: any){
   console.log(value);
  };
}
