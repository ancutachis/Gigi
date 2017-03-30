import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../models/product';

import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

  public products: Product[];

  constructor(private router: Router, private productsService: ProductsService) {
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

  public goToProductDetails(productId: number): void {
    this.router.navigate(['/productDetails', productId]);
  }

  public FBShare(productId: number): void {
    let windowObjectReference = window.open(
      'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('www.brightmania.com/productDetails/' + productId),
      'facebook-share-dialog',
      'idth=626,height=436');
  }

}