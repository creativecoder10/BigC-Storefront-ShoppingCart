import { Component, OnInit, VERSION,Input,OnChanges } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from '../../models/product';
import { ProductService } from "../../services/product.service";
import { NgOnChangesFeature } from "@angular/core/src/render3";

@Component({
  selector: "cart-checkout-small",
  templateUrl: "./cart-checkout-small.component.html",
  styleUrls: ["./cart-checkout-small.component.scss"]
})
export class CartCheckoutSmallComponent implements OnInit,OnChanges {
  @Input() showCart:boolean;
  @Input() showCounter:boolean;
  // To show full width few, full - true
  // To show pop up view, full- false
  @Input() full:boolean;

  constructor(
    public productService: ProductService
  ) {}

  ngOnChanges(changes: any) {
    const dataChanges: any = changes.showCart;
    	
	}

  ngOnInit() {
  }
}



