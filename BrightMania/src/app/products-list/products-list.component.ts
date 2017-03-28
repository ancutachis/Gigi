import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';

import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

  public products: Product[];

  constructor(private productsService: ProductsService) {
    this.products = this.productsService.getProducts();
  }

  ngOnInit() {
  }

  public calculatePoints(likes: number, dislikes: number): number {
    return likes - dislikes;
  }

  public voteUp(productId: number): void {
    this.productsService.voteUp(productId);
  }

  public voteDown(productId: number): void {
    this.productsService.voteDown(productId);
  }

  public addToWishlist(productId: number): void {
    this.productsService.addToWishlist(productId);
  }

}