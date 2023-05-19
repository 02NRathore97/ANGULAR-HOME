import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrefilledFormDemo';

  userData={
    email:"test@email.com",
    password:"123@abc",
    address:"Indore",
    mobile:"9999999999"
  }
}
