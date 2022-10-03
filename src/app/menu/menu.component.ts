import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

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
  // fin de pregunta estas seguro?

  public logout(): void {
    if (localStorage.getItem('personalToken')) {
      Swal.fire({
        title: '¿Estas seguro?',
        text: '¿Quieres cerrar sesión?',
        icon: 'warning',
        confirmButtonText: 'CONFIRMAR',
        cancelButtonText: 'Cancelar. No cerrar.',
      }).then(respuesta => {
        if (respuesta.isConfirmed) {
          if (localStorage.getItem('personalToken')) {
            localStorage.removeItem('personalToken');
          }
          Swal.fire('Proceso terminado. Logout OK').then(respuesta => {
            window.location.reload();
          });
        }
      })
    }
    
  }
}
