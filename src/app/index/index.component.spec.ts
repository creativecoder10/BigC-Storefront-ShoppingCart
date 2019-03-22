/* tslint:disable:no-unused-variable */
// import { ProductService } from '../../shared/services/product.service';
import {Location} from '@angular/common';

import { Router } from '@angular/router';
import { fakeAsync,async, ComponentFixture, TestBed,inject,tick } from "@angular/core/testing";

import { By } from "@angular/platform-browser";
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { RouterTestingModule } from '@angular/router/testing';
// import { AppRoutingModule } from  '../../../../../app.routing.ts';
import {IndexComponent} from './index.component';

import { ProductModule } from '../layouts/product/product.module';


import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ProductComponent } from 'src/app/layouts/product/product.component';

// var location, router;


describe("4. IndexComponent", () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndexComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports:[ ProductModule,RouterTestingModule,
        RouterTestingModule.withRoutes(
            [{path: '', component: IndexComponent}, {path: 'products/all-products', component: ProductComponent}]),],
      providers: [ ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Index component created without any errors', (done) => {
    const fixture = TestBed.createComponent(IndexComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
    done();
  });

});