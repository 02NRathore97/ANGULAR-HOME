import { Injectable } from '@angular/core';
import { dataType} from './user'


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

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
