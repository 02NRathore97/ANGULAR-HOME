import { Interpolation } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InterpolationDemo';

  //interpolation with variables
  name = 'Neeraj';






   //interpolation with function
   getName(){
    return 'Neeraj Rathore';
   }
 //  ...............................
   surname = 'Rathore';
   getSurname(){
    return this.surname;
   }






//interpolation  with object
obj={
  name:"Neeraj",
  age:25
}





// Interpolation with Array
arr=['Neeraj', 'Rathore']





// arithmatic operation with interpolation
a = 100;
b = 200;





//get window url using interpolation
siteUrl = window.location.href; 


}



