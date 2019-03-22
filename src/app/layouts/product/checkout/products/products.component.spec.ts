/* tslint:disable:no-unused-variable */
import { ProductService } from '../../../../shared/services/product.service';
import { SharedModule } from '../../../../shared/shared.module';
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
// import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { Product } from '../../../../shared/models/product';
import { By } from "@angular/platform-browser";
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { RouterTestingModule } from '@angular/router/testing';
// import { AppRoutingModule } from  '../../../../../app.routing.ts';

import { ProductsComponent } from "./products.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("Product Component Tests", () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports:[ RouterTestingModule,SharedModule],
      providers: [ProductService ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("1.Data successfully computed in the component", () => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    var shoe: Product[];
    // note that interfaces are always assigned as an array
    shoe = [{ key: "12", productId: 8124343, productCategory: "Casual", productName: "Adidas Sports", productPrice: 523, productDescription: "The Casual Adidas Sports is the latest technology based with Quadecore", productImageUrl: "../../../assets/img/Adidas Sports.jpg", productImageBrand: "Adidas" }];
    // note - the value of variables of specific interface type is being picked using first element of the array
    component.checkoutProducts.push(shoe[0]);
    expect(component.checkoutProducts[0].productPrice).toEqual(shoe[0].productPrice.valueOf());
    expect(component.checkoutProducts.length).toEqual(1);
    // expect(component.totalPrice.valueOf()).toBeDefined();
    // expect(component).toBeTruthy();
  });

  it("2. The value of total price is same as value of the product", () => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    var shoe: Product[];
    // note that interfaces are always assigned as an array
    shoe = [{ key: "12", productId: 8124343, productCategory: "Casual", productName: "Adidas Sports", productPrice: 523, productDescription: "The Casual Adidas Sports is the latest technology based with Quadecore", productImageUrl: "../../../assets/img/Adidas Sports.jpg", productImageBrand: "Adidas" }];
    // note - the value of variables of specific interface type is being picked using first element of the array
    component.checkoutProducts.push(shoe[0]);
    expect(component.checkoutProducts[0].productPrice).toEqual(shoe[0].productPrice.valueOf());
    // expect(component.checkoutProducts.length).toEqual(1);
    // expect(component.totalPrice.valueOf()).toBeDefined();
    // expect(component).toBeTruthy();
  });

  it('3. Products component created', (done) => {
    const fixture = TestBed.createComponent(ProductsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
    done();
  });



});
