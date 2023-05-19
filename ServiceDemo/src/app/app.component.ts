import { Component } from '@angular/core';
import { UsersDataService } from './users-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ServiceDemo';


  name = "";
  age = 0;
  id = 0;
  constructor(private user : UsersDataService){
    console.log(this.user.getData())
    let data = this.user.getData();
  
    this.name = data.name;
    this.age = data.age;
    this.id = data.id;

  }
}
