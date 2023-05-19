import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StyleBindingDemo';

  color = "red";


  // style binding with button
  updateColor(){
    this.color = "orange";
  }

// conditional style binding
  err = false;
}
