import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular-todo';
  name: string = 'Caetlyn'

  changeName(name:string):void {
    this.name = name
  }
}
