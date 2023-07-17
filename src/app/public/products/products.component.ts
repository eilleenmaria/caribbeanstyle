import { Component, OnInit} from '@angular/core';

export interface Product{
  src:string;
  title:string;
  price:string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products: Product[]=[
    {src:"../../../assets/image/billeteras/billetera1.jpg", title:"Billetera Kitty", price:"$20.000"},
    {src:"../../../assets/image/billeteras/billetera2.webp", title:"Billetera Kitty", price:"$20.000"},
    {src:"../../../assets/image/billeteras/billetera3.jpg", title:"Billetera Kitty", price:"$20.000"},
    {src:"../../../assets/image/billeteras/billetera4.jpg", title:"Billetera Kitty", price:"$20.000"},
    {src:"../../../assets/image/billeteras/billetera5.jpg", title:"Billetera Kitty", price:"$20.000"},
    {src:"../../../assets/image/billeteras/billetera6.webp", title:"Billetera Kitty", price:"$20.000"},
    {src:"../../../assets/image/billeteras/billetera7.webp", title:"Billetera Kitty", price:"$20.000"},
    {src:"../../../assets/image/billeteras/billetera8.webp", title:"Billetera Kitty", price:"$20.000"},
    {src:"../../../assets/image/billeteras/billetera9.webp", title:"Billetera Kitty", price:"$20.000"},
    {src:"../../../assets/image/billeteras/billetera10.webp", title:"Billetera Kitty", price:"$20.000"},
    {src:"../../../assets/image/billeteras/billetera11.webp", title:"Billetera Kitty", price:"$20.000"},
    {src:"../../../assets/image/billeteras/billetra12.webp", title:"Billetera Kitty", price:"$20.000"},

  ]
  ngOnInit(): void {

  }
}
