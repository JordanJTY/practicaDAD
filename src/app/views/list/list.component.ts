import { Component, OnInit } from '@angular/core';
import { EntreeService } from 'src/app/shared/services/entree.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public entryList: any;

  constructor(private entreeService: EntreeService) {
    // this.retrieveEntry = [];
  }

  ngOnInit(): void {
    this.retrieveEntry();
  }

  private retrieveEntry(): void {
    this.entreeService.retrieveEntry().subscribe(
      (data) => {
        this.entryList = data;
      },
      (error: Error) => {
        console.log('Error: ', error);
      },
      () => {
        console.log('Petición realizada correctamente');
      }
    );
  }

  public showTitle(title: string): void {
    alert(`Entrada seleccionada: ${title}.`);
  }
}
