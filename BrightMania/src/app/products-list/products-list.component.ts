import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';

import { Products } from '../models/mock-data';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public products: Product[];
  public coverProducts: Product[];

  constructor() { 
    this.products = Products;
  }

  ngOnInit() {
    this.coverProducts = this.products.filter(item => item.cover == true);
  }

  public calculatePoints(likes: number, dislikes: number): number {
    return likes - dislikes;
  }

}