import { ToDoService } from './../../services/to-do.service';
import { Component, OnInit } from '@angular/core';
import { Services } from '@angular/core/src/view';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private toDoService: ToDoService) { }

  ngOnInit() {
  }
    AddItems(name: HTMLInputElement, surname: HTMLInputElement) {
        const obj = {
            name: name,
            surname: surname
        );
}
}
