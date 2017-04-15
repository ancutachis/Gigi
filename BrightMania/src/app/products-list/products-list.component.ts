import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Product } from '../models/product';

import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

  public products: Product[];
  private errorMessage;

  constructor(private router: Router, private productsService: ProductsService) {
  }

  ngOnInit() {
    this.productsService.getProducts()
                .subscribe(products => this.products = products,
                           error => this.errorMessage = <any>error);
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

  public FBShare(productId: number): void {
    let windowObjectReference = window.open(
      'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('www.brightmania.com/productDetails/' + productId),
      'facebook-share-dialog',
      'width=626, height=436');
  }

  public TwitterShare(productId: number, title: string): void {  
    let url = 'www.brightmania.com/productDetails/' + productId;
    let windowObjectReference = window.open(
      'https://twitter.com/intent/tweet?text=' + title + ' ' + url + '&url=' + encodeURIComponent(url),
      'twitter-share-dialog',
      'width=626, height=436');
  }

  public PinterestShare(productId: number, pictureName: string): void { 
    let url = 'www.brightmania.com/productDetails/' + productId;
    let windowObjectReference = window.open(
      'https://www.pinterest.com/pin/create/button/?url=' + encodeURIComponent('www.brightmania.com/productDetails/' + productId) +
                                                    '&media=' + 'www.brightmania.com/content/' + pictureName,
      'pinterest-share-dialog',
      'width=626, height=436');
  }

}