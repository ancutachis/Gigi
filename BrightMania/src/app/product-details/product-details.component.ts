import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Product } from '../models/product';

import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  config: Object = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30
        };

  public product: Product;

  public images: string[];

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.product = this.productsService.getProductOld(1);
    this.images = this.productsService.getProductImages(1);
   // this.route.params
     //   .switchMap((params: Params) => this.productsService.getProduct(+params['id']))
     //   .subscribe(product => this.product = product);
  }

  public calculatePoints(likes: number, dislikes: number): number {
    return likes - dislikes;
  }

  public navigatePrev(): void {

  }

  public navigateNext(): void {

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