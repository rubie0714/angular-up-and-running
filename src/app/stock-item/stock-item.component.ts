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
  public stockClasses;


  constructor() { }

  ngOnInit(): void {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
    const diff = (this.stock.price / this.stock.previousPrice) - 1;
    const largeChange = Math.abs(diff);
    this.stockClasses = {
      postive: this.stock.isPositiveChange(),
      negative: !this.stock.isPositiveChange(),
      'large-change': largeChange,
      'small-change': !largeChange

    };

  }

  toggleFavorite(event) {
    console.log('we are toggli = ng the favorite state for this stock', event);
    this.stock.favorite = !this.stock.favorite;

  }


}
