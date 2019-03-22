/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CheckoutNavbarComponent } from './checkout-navbar.component';

describe(' CheckoutNavbarComponent', () => {
  let component: CheckoutNavbarComponent;
  let fixture: ComponentFixture<CheckoutNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutNavbarComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(' The component should get created', () => {
    expect(component).toBeTruthy();
  });
});
