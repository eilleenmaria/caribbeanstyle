import { Component } from '@angular/core';

export interface ProductElement {
  src: string;
  title: string;
  price: string;
  cantidad: number;
  total: string
}

const ELEMENT_DATA: ProductElement[] = [
  {src: "../../../assets/image/billeteras/billetera1.jpg", title: 'Billetera Kitty', price: "$20.000", cantidad: 1, total:"$20.000"},
  {src: "../../../assets/image/billeteras/billetera1.jpg", title: 'Billetera Kitty', price: "$20.000", cantidad: 1, total:"$20.000"},

];

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

}
