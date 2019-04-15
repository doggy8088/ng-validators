import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pw: string;
  pw2: string;
  constructor() {}
  ngOnInit(): void {
  }
}
