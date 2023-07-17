import { Component } from '@angular/core';
export interface Item{
  src: string;
  alt: string;
  cols: number;
  rows: number;
}
@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent {
  items: Item[]=[
    {cols:1, rows:2, src:"../../../assets/image/acerca/chica-con-bolso-moda1.jpg", alt:"imagen chica con un bolso"},
    {cols:1, rows:2, src:"../../../assets/image/acerca/chica-con-bolso-moda2.jpg", alt:"imagen chica con un bolso"},
    {cols:1, rows:2, src:"../../../assets/image/acerca/chica-con-bolso-moda3.jpg", alt:"imagen chica con un bolso"},
  ]
}
