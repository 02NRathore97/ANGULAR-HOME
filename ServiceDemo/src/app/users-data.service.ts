import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor() { }

  getData(){
    return{
      name : 'Neeraj',
      age : 30,
      id : 10
    }
  }
}
