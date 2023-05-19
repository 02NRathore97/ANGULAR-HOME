import { Component } from '@angular/core';
import {dataType} from './user'
    // or
// interface dataType{
//   name:string,
//   id:number,
//   indian:boolean,
//   address:any

// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ModelDemo';

  getData(){
    const data : dataType = {
      name : 'Neeraj Rathore',
      id : 100,
      indian : true,
      address: "341, Indore"
    }
    return data;
  }
}
