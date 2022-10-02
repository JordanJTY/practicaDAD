import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public miToken: number;
  public userName: string | null;

  constructor() {
    this.miToken = 0;
    this.userName = "";
  }

  ngOnInit(): void {
    if (localStorage.getItem('personalToken')) {
      this.miToken = +localStorage.getItem('personalToken')!;
    }
    if (localStorage.getItem('userName')) {
      this.userName = localStorage.getItem('userName');
    }
  }

  public logout(): void {
    if (localStorage.getItem('personalToken')) {
      localStorage.removeItem('personalToken');
    }
    window.location.reload();
  }
}
