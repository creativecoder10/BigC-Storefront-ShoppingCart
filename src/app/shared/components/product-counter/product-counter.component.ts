import { Component, OnInit, VERSION, Input, OnChanges, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from '../../models/product';
import { ProductService } from "../../services/product.service";
import { NgOnChangesFeature } from "@angular/core/src/render3";

@Component({
  selector: "product-counter",
  templateUrl: "./product-counter.component.html",
  styleUrls: ["./product-counter.component.scss"]
})
export class ProductCounterComponent implements OnInit, OnChanges {
  @Input() showCart: boolean;
  @Input() showCounter: boolean;
  @Input() currentQuantity:any;
  @Output() public quantityChange = new EventEmitter();
  // public quantity: number = 1;
  @Input() quantity:number;

  constructor(
    public productService: ProductService
  ) { }

  ngOnChanges(changes: any) {
    const dataChanges: any = changes.showCart;
    

  }

  ngOnInit() {
    // this.quantity=1;
  }

  addQuantity() {
    this.quantity += 1;
    this.quantityChange.emit('add');
  }

  subtractQuantity() {
    if (this.quantity > 1) {
      this.quantity -= 1;
      this.quantityChange.emit('subtract');
    }
  }
}



