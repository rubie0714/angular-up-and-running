import { Component, OnInit } from '@angular/core';
import { Stock } from '../model/stock';
import { constants } from 'buffer';
@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  public stock: Stock;
  public stockStyle;


  constructor() { }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
    const diff = (this.stock.price / this.stock.previousPrice) - 1;
    const largeChange = Math.abs(diff);
    this.stockStyle = {
      'color': this.stock.isPositiveChange() ? 'green' : 'red',
      'font-size': largeChange ? '1.2rem' : '0.8rem'
    };

  }

  toggleFavorite(event) {
    console.log('we are toggli = ng the favorite state for this stock', event);
    this.stock.favorite = !this.stock.favorite;

  }


}
