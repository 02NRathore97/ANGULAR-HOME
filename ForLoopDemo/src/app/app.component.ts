import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ForLoopDemo';

  // simple array
  // data = ['Neeraj','Amit', 'Vinod']


  // complex array
  data = [
    {
      name : 'Neeraj',
      age : 25
    },
    {
      name : 'Amit',
      age : 30
    },
    {

      name : 'Vinod',
      age : 24
    },
  ]
}
