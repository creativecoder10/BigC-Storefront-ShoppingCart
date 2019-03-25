import { Component, OnInit, VERSION, Input, OnChanges } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from '../../../shared/models/product';
import { ProductService } from "../../../shared/services/product.service";
import { NgOnChangesFeature } from "@angular/core/src/render3";

@Component({
  selector: "cart-checkout",
  templateUrl: "./cart-checkout.component.html",
  styleUrls: ["./cart-checkout.component.scss"]
})
export class CartCheckoutComponent implements OnInit, OnChanges {
  @Input() showCart: boolean;
  @Input() showCounter: boolean;
  @Input() full: boolean;
  public product: any = [];
  public quantity: number = 1;
  public items=[];
  constructor(
    public productService: ProductService,
    
  ) { }

  ngOnChanges(changes: any) {
    const dataChanges: any = changes.showCart;

  }

  ngOnInit() {
    this.items=[];
    this.items = this.productService.results;
 
  }

/**
 * 
 * @param event event to capture the quantity changes in the product currently in context
 * @param product The quantity of the product picked 
 */

  quantityChange(event: any, product: any) {
   const x= this.productService.updateProductQuantity2(event, product);
   x.then(()=>{
     this.updatelist();
   })
  }

  
  /**
   * 
   * @param product provide the product for which you want to add the quantity
   */
  addQuantity(product: any) {
    product.quantity += 1;
    this.updateProduct(product);
  }

  /**
   * This is to subtract quantity of product in counter 
   */

  subtractQuantity() {
    if (this.quantity > 1) {
      this.quantity -= 1;
      this.updateQuantity();
    }
      }

  // first update the quantity of the product here before you push to product service 

  updateQuantity() {
    this.product.quantity = this.quantity;
    this.calculatePrice();

  }

  /**
   * Calculate the total price of a particular product being chosen 
   */
  calculatePrice() {
    this.product.totalPrice = this.product.price * this.product.quantity;
    this.updateProduct(this.product);

  }


  /**
   * 
   * @param product Update a particular product in the cartcheckout 
   */



  updateProduct(product: any) {
    this.productService.updateProductQuantity(product);
  }


  /**
   * 
   * @param product 
   * Remove a product from the list
   */

  removeProduct(product: any) {
    this.productService.removeLocalCartProduct(product);
    this.updatelist();
  }


/**
 * 
 * @param product 
 * add this product in the cart 
 */
  addToCart(product: any) {
    this.productService.addToCart(this.product);
  }

  /**
   * Update the overall list of products from product service
   */

  updatelist() {
   return new Promise ((resolve, reject)=> {
    this.items = this.productService.results;
   })
  }

}



