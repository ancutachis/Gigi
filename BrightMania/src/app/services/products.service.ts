import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/mergeMap';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Product } from '../models/product';

@Injectable()
export class ProductsService {
  private _productsUrl = 'https://bright-mania.herokuapp.com/products';

  private products: Product[] = [
          new Product(1, new Date(2017, 3, 27), 'Avoid Sandwich Theft Bag', 'Tired of having your food stolen by sticky-fingered co-workers or roommates?  Bullies taking your kid\'s lunch?  Well\, if so\, worry no more!  The sandwich bags that have green splotches printed on both sides\, making your freshly prepared lunch look spoiled. Don\'t suffer the injustice of having your sandwich stolen again! Protect your lunch with anti-theft sandwich bags!', 'sandwichtheftbag.jpg', 'Lifestyle', 'Admin', 5, 3, 1, 'Amazon', 'https://www.amazon.com/exec/obidos/ASIN/B00JLSVDYO/om-btm-20/?ie=UTF8', true, 1),
          new Product(2, new Date(2017, 3, 27), 'Avoid Sandwich Theft Bag', 'Tired of having your food stolen by sticky-fingered co-workers or roommates?  Bullies taking your kid\'s lunch?  Well\, if so\, worry no more!  The sandwich bags that have green splotches printed on both sides\, making your freshly prepared lunch look spoiled. Don\'t suffer the injustice of having your sandwich stolen again! Protect your lunch with anti-theft sandwich bags!', 'sandwichtheftbag2.jpg', 'Lifestyle', 'Admin', 5, 3, 1, 'Amazon', 'https://www.amazon.com/exec/obidos/ASIN/B00JLSVDYO/om-btm-20/?ie=UTF8', false, 1),
          new Product(3, new Date(2017, 3, 28), 'Baby Mop', 'Teach your baby a strong work ethic early on in their life. Baby will get a nice workout, burn off energy, and do muscle toning. And sleep better too! These baby mops are super soft and comfortable. The mop is made using ultra absorbent materials and engineered to clean and shine your floor.', 'babymop.jpg', 'Fashion', 'Admin', 8, 2, 5, 'Better than Pants', 'http://www.betterthanpants.com/baby-mop.html', true, 2),
          new Product(4, new Date(2017, 3, 28), 'Baby Mop', 'Teach your baby a strong work ethic early on in their life. Baby will get a nice workout, burn off energy, and do muscle toning. And sleep better too! These baby mops are super soft and comfortable. The mop is made using ultra absorbent materials and engineered to clean and shine your floor.', 'babymop2.jpg', 'Fashion', 'Admin', 8, 2, 5, 'Better than Pants', 'http://www.betterthanpants.com/baby-mop.html', false, 2),
          new Product(5, new Date(2017, 3, 26), 'Beard Hat', 'Can\'t grow a beard? Your face gets painfully cold in the winter? Then Beardo beard hat is your answer! Beard hats are ideal for use for any outdoor activity and makes a great gift! They are also becoming popular Hockey fan beards and a great way to support your favorite NHL Hockey team!', 'beardhat.jpg', 'Fashion', 'Admin', 6, 2, 2, 'Beardo Wear', 'https://www.beardowear.com/collections/beard-hat/products/beard-hat-black', true, 3),
          new Product(6, new Date(2017, 3, 26), 'Beard Hat', 'Can\'t grow a beard? Your face gets painfully cold in the winter? Then Beardo beard hat is your answer! Beard hats are ideal for use for any outdoor activity and makes a great gift! They are also becoming popular Hockey fan beards and a great way to support your favorite NHL Hockey team!', 'beardhat2.jpg', 'Fashion', 'Admin', 6, 2, 2, 'Beardo Wear', 'https://www.beardowear.com/collections/beard-hat/products/beard-hat-black', false, 3),
          new Product(7, new Date(2017, 3, 26), 'Beard Hat', 'Can\'t grow a beard? Your face gets painfully cold in the winter? Then Beardo beard hat is your answer! Beard hats are ideal for use for any outdoor activity and makes a great gift! They are also becoming popular Hockey fan beards and a great way to support your favorite NHL Hockey team!', 'beardhat3.jpg', 'Fashion', 'Admin', 6, 2, 2, 'Beardo Wear', 'https://www.beardowear.com/collections/beard-hat/products/beard-hat-black', false, 3),
          new Product(8, new Date(2017, 3, 26), 'Beard Hat', 'Can\'t grow a beard? Your face gets painfully cold in the winter? Then Beardo beard hat is your answer! Beard hats are ideal for use for any outdoor activity and makes a great gift! They are also becoming popular Hockey fan beards and a great way to support your favorite NHL Hockey team!', 'beardhat4.jpg', 'Fashion', 'Admin', 6, 2, 2, 'Beardo Wear', 'https://www.beardowear.com/collections/beard-hat/products/beard-hat-black', false, 3),
          new Product(9, new Date(2017, 3, 27), 'Dine Pen Cap', 'Here are the essential multitasking office tools you have been waiting for: a set of ordinary stick pens that does double duty as handy dining utensils. They are food-safe and even better, they are reusable! Bon appetite, cubicle captive, eat away as you scribble and write with brilliance!', 'dinepen.jpg', 'Office', 'Admin', 2, 6, 0, 'Amazon', 'https://www.amazon.com/dp/B004QY5VA0/ref=as_li_ss_til?tag=bp09b-20&camp=0&creative=0&linkCode=as4&creativeASIN=B004QY5VA0&adid=1VX618KPEHDDSZTZ7CPJ&', true, 4),
          new Product(10, new Date(2017, 3, 27), 'Dine Pen Cap', 'Here are the essential multitasking office tools you have been waiting for: a set of ordinary stick pens that does double duty as handy dining utensils. They are food-safe and even better, they are reusable! Bon appetite, cubicle captive, eat away as you scribble and write with brilliance!', 'dinepen2.jpg', 'Office', 'Admin', 2, 6, 0, 'Amazon', 'https://www.amazon.com/dp/B004QY5VA0/ref=as_li_ss_til?tag=bp09b-20&camp=0&creative=0&linkCode=as4&creativeASIN=B004QY5VA0&adid=1VX618KPEHDDSZTZ7CPJ&', false, 4),
          new Product(11, new Date(2017, 3, 27), 'Dine Pen Cap', 'Here are the essential multitasking office tools you have been waiting for: a set of ordinary stick pens that does double duty as handy dining utensils. They are food-safe and even better, they are reusable! Bon appetite, cubicle captive, eat away as you scribble and write with brilliance!', 'dinepen3.jpg', 'Office', 'Admin', 5, 6, 0, 'Amazon', 'https://www.amazon.com/dp/B004QY5VA0/ref=as_li_ss_til?tag=bp09b-20&camp=0&creative=0&linkCode=as4&creativeASIN=B004QY5VA0&adid=1VX618KPEHDDSZTZ7CPJ&', false, 4),
          new Product(12, new Date(2017, 3, 26), 'Dog Umbrella', 'No more wet dog shaking itself in the house! Keep your pet happy and dry in rain, sleet or snow! Clear umbrella body allows for full view of your pet while walking. Now you can protect your pet from the harsh elements with a uniquely designed umbrella especially made for pets. Simply attach the built-in leash to the collar or harness, push umbrella into position to form a dome shape over your pet and begin walking.', 'dogumbrella.jpg', 'Pets', 'Admin', 3, 5, 0, 'Amazon', 'https://www.amazon.com/Umbrella-Keeps-your-Comfortable-Rain/dp/B005ESZL2A/ref=sr_1_2?s=pet-supplies&ie=UTF8&qid=1373474942&sr=1-2&keywords=dog+umbrella', true, 5),
          new Product(13, new Date(2017, 3, 26), 'Dog Umbrella', 'No more wet dog shaking itself in the house! Keep your pet happy and dry in rain, sleet or snow! Clear umbrella body allows for full view of your pet while walking. Now you can protect your pet from the harsh elements with a uniquely designed umbrella especially made for pets. Simply attach the built-in leash to the collar or harness, push umbrella into position to form a dome shape over your pet and begin walking.', 'dogumbrella2.jpg', 'Pets', 'Admin', 3, 5, 0, 'Amazon', 'https://www.amazon.com/Umbrella-Keeps-your-Comfortable-Rain/dp/B005ESZL2A/ref=sr_1_2?s=pet-supplies&ie=UTF8&qid=1373474942&sr=1-2&keywords=dog+umbrella', false, 5),
  ];

  constructor(private _http: Http) { }

  getProducts(): Observable<Product[]> {
    return this._http.get(this._productsUrl)
      .map((response: Response) => <Product[]> response.json())
      .do(data => console.log('All: ' +  JSON.stringify(data)))
      .catch(this.handleError);
  }

  getProduct(id: number): Observable<Product> {
    return this._http.get(`${this._productsUrl}/${id}`)
      .map((response: Response) => <Product> response.json())
      .do(data => console.log('Product by id: ' +  JSON.stringify(data)))
      .catch(this.handleError);
  }

  getProductOld(productId: number): Product {
    return this.products.filter(x => x.id == productId)[0];
  }

  getProductImages(productId: number): string[] {
    let images: string[] = [];
    let galleryId = this.products.filter(x => x.id == productId)[0].galleryId;
    for (let entry of this.products.filter(x => x.galleryId == galleryId)) {
      images.push(entry.imagePath);
    }
    return images;
  }

  public voteUp(productId: number): void {

    const url = `${this._productsUrl}/${productId}`;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this._http.get(url)
      .map((response: Response) => <Product> response.json())
      .subscribe(
        (data) => {
            data.likes += 1;
            this._http
            .put(url, JSON.stringify(data), {headers: headers})
            .subscribe( (d) => {
              
            })
          }
        );
  }


  public voteDown(productId: number): void {

    const url = `${this._productsUrl}/${productId}`;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this._http.get(url)
      .map((response: Response) => <Product> response.json())
      .subscribe(
        (data) => {
            data.dislikes += 1;
            this._http
            .put(url, JSON.stringify(data), {headers: headers})
            .subscribe( (d) => {
            })
          }
        );
  }

public addToWishlist(productId: number): void {

    const url = `${this._productsUrl}/${productId}`;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this._http.get(url)
      .map((response: Response) => <Product> response.json())
      .subscribe(
        (data) => {
            data.wished += 1;
            this._http
            .put(url, JSON.stringify(data), {headers: headers})
            .subscribe( (d) => {
            })
          }
        );
  }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}