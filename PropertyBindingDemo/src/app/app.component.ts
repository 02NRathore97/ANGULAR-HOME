import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PropertyBindingDemo';


  // property binding
  name = "Neeraj";




disabledBox = true;
  enableTextBox(){
    this.disabledBox = false;
  }
}
