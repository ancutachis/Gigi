import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Product } from '../models/product';

import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-side-content',
  templateUrl: './side-content.component.html',
  styleUrls: ['./side-content.component.css']
})

export class SideContentComponent implements OnInit {

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

}