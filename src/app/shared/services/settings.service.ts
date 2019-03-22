/**
 * @Author: Deepesh Dang
 * @Date:   14/03/2019
 * @Email:  
 * @Filename: settings.service.ts
 * @Last modified by:   Deepesh Dang
 * @Last modified time: 14/03/2019 9:30PM
 */

import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

// import { BehaviorSubject } from 'rxjs';
import { BehaviorSubject, Subject, Subscription, Observable } from 'rxjs';

import * as moment from 'moment';
import { resolve } from 'dns';



@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  // private model: any = {};
  // public parent: any = null;
  // public setup = false;
  public my_data: any;

  protected subjects: { [name: string]: BehaviorSubject<any> } = {};
  protected observers: { [name: string]: Observable<any> } = {};

  private store: Storage = localStorage;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.set('timeline', {});
  }

  ngOnInit() {
    this.getResponseData();
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



  public init() {
    this.http.get('assets/settings.json').subscribe(data => {
      this.set('timeline', data);
    })
  }
  

  /**
    * Get the current value of the given property
    * @param name Name of the property
    */
  public get(name: string) {
    return this.subjects[name] ? this.subjects[name].getValue() : null;
  }

// public getSettings() {

// }
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






  public getResponseData(): Promise<any> {
    if (typeof (this.my_data) === "undefined") {
      return this.http.get('assets/settings.json')
        .toPromise().then(res => {
          this.my_data = res;
          return this.my_data;
        }).catch(this.handleError);
    } else {
      return Promise.resolve(this.my_data);
    }


  }


  public handleError() {
    console.log("settings.json could not be loaded");
    //   alert('settings.json could not be loaded');
  }

}
