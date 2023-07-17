import { Component, OnInit} from '@angular/core';
export interface Tile {
  src: string;
  alt: string;
  cols: number;
  rows: number;
  text: string;
  href: string;
  title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  tiles: Tile[] = [
    {title:'Billetera',text: '12 productos', cols: 1, rows: 2, src: '../../../assets/image/billetera-category.webp', alt:'imagen categoria billeteras', href:''},
    {title:'Bolsos',text: '12 productos', cols: 1, rows: 2, src: '../../../assets/image/bolsos-category.webp', alt:'imagen categoria bolsos', href:''},

    {title:'Pañoletas', text: '12 productos', cols: 1, rows: 1, src: '../../../assets/image/pañoletas-category.webp', alt:'imagen categoria pañoletas', href:''},
    {title:'Correas', text: '12 productos', cols: 1, rows: 1, src: '../../../assets/image/correas-category.webp', alt:'imagen categoria correas', href:''},
  ];
  constructor(){}
  ngOnInit(): void {

  }

}
