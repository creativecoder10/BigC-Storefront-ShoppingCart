/**
 * This is the main service to manage all product related data requests like 
 * 1. Adding , delete a product to the cart
 * 2. Modify Product details 
 * 
 */
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription, Observable, Subject } from 'rxjs';

import * as moment from 'moment';
import { resolve, reject } from 'q';

const APP_NAME = 'ACA_APP';
const RESERVED_KEYS = ['route', 'query', 'store'];
const OBSERVABLES: any[] = [
	{ name: 'loading', default: false },
	{ name: 'loading_text', default: 'Loading' },
];


@Injectable()
export class ProductService1 {

	protected subjects: { [name: string]: BehaviorSubject<any> } = {};
	protected observers: { [name: string]: Observable<any> } = {};

	public parent: any = null;
	public setup = false;
	private store: Storage = localStorage;
	private model: any = {};
	public products: Product[];
	public results: any;
	public total: any;

	// NavbarCounts
	navbarCartCount = 0;
	itemsCount = 0;

	constructor(private http: HttpClient, private route: ActivatedRoute) {


	}

	my_data: any;

	public init() {
		this.http.get('assets/products.json').subscribe(data => {
			this.set('records', data);
		});

		this.listen('records', (data) => {
			this.model = data;

		})
	}

	/**
  * Get the current value of the given property
  * @param name Name of the property
  */
	public get(name: string) {
		return this.subjects[name] ? this.subjects[name].getValue() : null;
	}


	/**
	 * Set the value of the given property
	 * @param name Name of the property
	 * @param value New value to assign to the property
	 */
	protected set<U>(name: string, value: U) {
		if (this.subjects[name]) {
			this.subjects[name].next(value);
		} else {
			// Create new variable to store property's value
			this.subjects[name] = new BehaviorSubject<U>(value);
			this.observers[name] = this.subjects[name].asObservable();
			// Create raw getter and setter for property
			if (!(this[name] instanceof Function)) {
				Object.defineProperty(this, name, {
					get: (): U => this.get(name),
					set: (v: U) => this.set(name, v)
				});
			}
		}
	}

	/**
	   * Listen to changes of given property
	   * @param name Name of the property
	   * @param next Callback for changes to properties value
	   */
	public listen<U>(name: string, next: (data: U) => void) {
		if (this.subjects[name]) {
			return this.observers[name].subscribe(next);
		} else {
			// Create new variable to store property's value
			this.subjects[name] = new BehaviorSubject<U>(this[name] instanceof Function ? null : this[name]);
			this.observers[name] = this.subjects[name].asObservable();
			// Create raw getter and setter for property
			if (!(this[name] instanceof Function)) {
				Object.defineProperty(this, name, {
					get: (): U => this.get(name),
					set: (v: U) => this.set<U>(name, v)
				});
			}
			return this.observers[name].subscribe(next);
		}
	}
	// my_data=new BehaviorSubject<any>('');
	public getResponseData(): Promise<any> {
		if (typeof (this.my_data) === "undefined") {
			return this.http.get('assets/products.json')
				.toPromise().then(res => {

					//   this.my_data = res.json().response;
					//   this.my_data = JSON.parse(res);
					this.my_data = res;
					return this.my_data;
				}).catch(this.handleError);
		} else {
			return Promise.resolve(this.my_data);
		}


	}

	public handleError() {
		alert('product.json could not be loaded');
	}
	/**
	 * Get product() methods makes an api call in which the number of elements fetched is limited to 10 
	 * This is to ensure that the app doesnt crasha and the performance stays enhanced 
	 * Each time the next button is fetched, the app will fetch next 10 records 
	 */
	getProducts() {
		// this.products = this.db.list('shoes', ref => ref.limitToFirst(10 + this.itemsCount));
		// this.itemsCount += 10;
		// return this.products;
	}


	/**
 * 
 * @param key 
 */

	getProductByTitle(title: string) {
		return this.model.find(obj => obj.title === title);
	}


	public test() {
		return new Promise((resolve, reject) => {
			let a: Product[] = JSON.parse(localStorage.getItem('avct_item')) || [];
			if (a.length>0) {
				resolve(a);
			} else {
				reject('error');
			}
		});
	}



	/*
   ----------  Cart Product Function  ----------
  */

	// Adding new Product to cart in  localStorage

	addToCart(data: any): void {
		let a: Product[] = JSON.parse(localStorage.getItem('avct_item')) || [];

		// Check if an element exists by looking for the index value 
		const index = a.findIndex((element) => element.title === data.title);
		// if there already exists this product, just update the quantity 
		if (index >= 0) {

			// taking care of the scenario where already sent quantity is being sent from product details page
			if (data.quantity >= 1) {
				a[index].quantity = a[index].quantity + data.quantity;
			} else {
				a[index].quantity += 1;
			}

		} else {
			//  As we have a new item, update it with +1 count 
			// add the value of quantity field 
			if (index === -1 && !data.quantity) {
				data.quantity = 1;
			}


			// push the records so that it could be updated in the localstorage
			a.push(data);
		}

		setTimeout(() => {
			localStorage.setItem('avct_item', JSON.stringify(a));
			this.calculateLocalCartProdCounts();
		}, 500);
	}




	// Removing cart from local
	removeLocalCartProduct(product: Product) {
		const products: Product[] = JSON.parse(localStorage.getItem('avct_item'));

		for (let i = 0; i < products.length; i++) {
			if (products[i].title === product.title) {
				products.splice(i, 1);
				break;
			}
		}
		// ReAdding the products after remove
		localStorage.setItem('avct_item', JSON.stringify(products));
		this.calculateLocalCartProdCounts();
	}

	updateProductQuantity(data: any) {
		let a: Product[] = JSON.parse(localStorage.getItem('avct_item')) || [];


		// Check if an element exists by looking for the index value 
		const index = a.findIndex((element) => element.title === data.title);
		a[index].quantity = data.quantity;
		console.log("before value", a[index].quantity);
		// if there already exists this product, just update the quantity 
		// if (index >= 0) {

		// 	//  case of subtraction 
		// 	if (data.quantity === 1 && event==='subtract') {
		// 		this.removeLocalCartProduct(data);
		// 	} else {
		// 		if (data.quantity > 1 && event==='subtract') {
		// 			a[index].quantity -= 1;

		// 		}
		// 	}

		// 	if ( event==='add') {
		// 		a[index].quantity +=1;
		// 	} 
		// }

		console.log("after value", a[index].quantity);

		// this.updateProductTotalPrice(a[index]);

		setTimeout(() => {
			console.log("updating data");
			localStorage.setItem('avct_item', JSON.stringify(a));
			this.calculateLocalCartProdCounts();
		}, 500);

	}

	// Fetching Locat CartsProducts
	getLocalCartProducts(): Product[] {
		const products: Product[] = JSON.parse(localStorage.getItem('avct_item')) || [];
		this.products = products;
		return products;
	}

	// returning LocalCarts Product Count
	calculateLocalCartProdCounts() {
		this.navbarCartCount = 0;
		// this.navbarCartCount = this.getLocalCartProducts().length;
		this.getLocalCartProducts();
		for (let product of this.products) {
			this.navbarCartCount = this.navbarCartCount + product.quantity;
		}
		this.processData();
	}


	processData() {
		let a = JSON.parse(localStorage.getItem('avct_item')) || [];
		// let uniqueTitle = a.map(element => element.title);
		// let uniqueValues = uniqueTitle.filter((v, i, a) => a.indexOf(v) === i);
		// for (let title of uniqueValues) {
		// 	var count = a.filter((obj) => obj.title === title).length;
		// 	a.map(element => {
		// 		if (element.title === title) {
		// 			element.quantity = count;
		// 		}
		// 	})
		// }

		const result = Array.from(new Set(a.map(product => product.title))).map(
			title => {
				return {
					title: title,
					price: a.find(d => d.title === title).price,
					brand: a.find(d => d.title === title).brand,
					image: a.find(d => d.title === title).image,
					description: a.find(d => d.title === title).description,
					quantity: a.find(d => d.title === title).quantity,
					totalPrice: (a.find(d => d.title === title).price) * (a.find(d => d.title === title).quantity)
				}
			}
		)
		this.results = result;
		this.totalPrice();
	}

	totalPrice() {
		this.total = 0;
		for (let result of this.results) {
			this.total = this.total + result.totalPrice;
		}
	}

}

export class FavouriteProduct {
	product: Product;
	productId: string;
	userId: string;
}
