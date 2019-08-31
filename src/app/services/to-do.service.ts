import { Person } from './../models/person';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

    MyData: Person [] = [
        {
           
            name: 'Nazim',
            surname: 'Reshidov'
        }
    ];
    AddData(name: HTMLInputElement, surname: HTMLInputElement) {
        const obj = {
            name: name.value,
            surname: surname.value
        };
        this.MyData.push(obj);
        name.value = '';
        surname.value = '';
    }
    Delete(data) {
        const index = this.MyData.indexOf(data);
        this.MyData.splice(index, 1);
    }
  constructor() { }
}
