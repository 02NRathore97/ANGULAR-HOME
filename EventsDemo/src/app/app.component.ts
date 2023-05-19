import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventsDemo';


  // getName(){
  //   alert("This is get Name function .");
  // }



  
  //  getName(name){
  //   alert(name);
  // }


  // YourName="Neeraj Rathore";
  // getName(name){
  //   alert(name);
  // }


// types of events
  // myEvent(evt)
  // {
  //   console.warn(evt)
  // }


  // get textbox value
  // getValue(val){
  //   console.log(val);
  // }


// print get value on html
currentVal="";
  getValue(val){
    console.log(val);
    this.currentVal = val;
  }

}
